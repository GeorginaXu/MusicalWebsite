/*var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function (req, res) {
    if(req.url === "/"){
             fs.readFile("./public/website.html", "UTF-8", function(err, html){
                 res.writeHead(200, {"Content-Type": "text/html"});
                 res.end(html);
             });
         }else if(req.url.match("\.jpg$")){
             var imagePath = path.join(__dirname, 'public', req.url);
             console.log(imagePath);
             var fileStream = fs.createReadStream(imagePath);
             res.writeHead(200, {"Content-Type": "image/jpg"});
             fileStream.pipe(res);
         }else{
             res.writeHead(404, {"Content-Type": "text/html"});
             res.end("No Page Found");
         }
  }).listen(8080);*/

var express = require ('express');
var app = express ();
var path = require('path');
var server = require ('http').createServer (app);
app.use(express.static(__dirname));
app.set('view engine', 'pug');

var fs = require('fs');

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('Musicals.db', sqlite3.OPEN_READWRITE, (err) => {
                                       if (err) {
                                         return console.error(err.message);
                                       }
                                       console.log('Connected to the in-memory SQlite database.');
                                     });

var r = "";
db.all("SELECT Title FROM OnBroadway", function(err, rows) {
        rows.forEach(function (row) {
            r = r + row.Title;
        })
	});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname+'/website.html'));
});

app.get('/quiz.html',function(req,res){
  res.sendFile(path.join(__dirname+'/quiz.html'));
});

app.get('/result',function(req,res){
  res.render('result', {
              Titles : r
          });
});

app.post('/phantom', function(req, res){
    var r = "";
    db.all("SELECT * FROM OnBroadway WHERE Title like '%Phantom%'", function(err, rows) {
            rows.forEach(function (row) {
                res.render('result', {
                Titles : row[0]})
            });
    	});
});


server.listen (8080);
