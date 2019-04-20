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

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



var fs = require('fs');

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('Musicals.db', sqlite3.OPEN_READWRITE, (err) => {
                                       if (err) {
                                         return console.error(err.message);
                                       }
                                       console.log('Connected to the in-memory SQlite database.');
                                     });

/*db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});*/

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname+'/website.html'));
});

app.get('/quiz.html',function(req,res){
  res.sendFile(path.join(__dirname+'/quiz.html'));
});


// Query and filter quiz result

app.get('/result',function(req,res){
  res.render('result', {
              Titles : quiz_result[0]
          });
});


app.get('/all', function(req, res){
    let result = [];
    db.all("SELECT Title FROM Musicals", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                if(result.indexOf(row.Title) == -1) {
                    result.push(row.Title);
                }
            });
            res.send(result);
        } else {
            console.log(err);
        }
     });
});

app.get('/disney', function(req, res){
    let result = [];
    db.all("SELECT Title FROM Musicals WHERE `Type of Musical` LIKE '%Disney%'", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                if(result.indexOf(row.Title) == -1) {
                    result.push(row.Title);
                }
            });
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.get('/no_disney', function(req, res){
    let result = [];
    db.all("SELECT Title FROM Musicals WHERE `Type of Musical` NOT LIKE '%Disney%';", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Title) == -1) {
                     result.push(row.Title);
                 }
            });
            res.send(result);
        } else {
            console.log(err);
        }
        });
});

app.get('/romance', function(req, res){
    let result = [];
    db.all("SELECT Title FROM Musicals WHERE `Type of Musical` LIKE '%Romance%';", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Title) == -1) {
                    result.push(row.Title);
                 }
            });
            res.send(result);
        } else {
            console.log(err);
        }
        });
});

app.get('/comedy', function(req, res){
    let result = [];
    db.all("SELECT Title FROM Musicals WHERE `Type of Musical` LIKE '%Comedy%';", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Title) == -1) {
                     result.push(row.Title);
                 }
            });
            res.send(result);
        } else {
            console.log(err);
        }
        });
});

app.get('/crime', function(req, res){
    let result = [];
    db.all("SELECT Title FROM Musicals WHERE `Type of Musical` LIKE '%Crime%';", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Title) == -1) {
                     result.push(row.Title);
                 }
            });
            res.send(result);
        } else {
            console.log(err);
        }
        });
});

app.get('/history', function(req, res){
    let result = [];
    db.all("SELECT Title FROM Musicals WHERE `Type of Musical` LIKE '%History%';", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Title) == -1) {
                    result.push(row.Title);
                 }
            });
            res.send(result);
        } else {
            console.log(err);
        }
        });
});

app.get('/horror', function(req, res){
    let result = [];
    db.all("SELECT Title FROM Musicals WHERE `Type of Musical` LIKE '%Horror%';", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Title) == -1) {
                    result.push(row.Title);
                 }
            });
            res.send(result);
        } else {
            console.log(err);
        }
        });
});

app.get('/magic', function(req, res){
    let result = [];
    db.all("SELECT Title FROM Musicals WHERE `Type of Musical` LIKE '%Magic%';", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Title) == -1) {
                     result.push(row.Title);
                 }
            });
            res.send(result);
        } else {
            console.log(err);
        }
        });
});

app.get('/nyc', function(req, res){
    let result = [];
    db.all("SELECT Title FROM Musicals WHERE `City` LIKE 'New York City';", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Title) == -1) {
                    result.push(row.Title);
                 }
            });
            res.send(result);
        } else {
            console.log(err);
        }
        });
});

app.get('/other_cities', function(req, res){
    let result = [];
    db.all("SELECT Title FROM Musicals WHERE `City` LIKE 'OffBroadway';", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Title) == -1) {
                    result.push(row.Title);
                 }
            });
            res.send(result);
        } else {
            console.log(err);
        }
        });
});

app.get('/london', function(req, res){
    let result = [];
    db.all("SELECT Title FROM Musicals WHERE `City` LIKE 'London';", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Title) == -1) {
                    result.push(row.Title);
                 }
            });
            res.send(result);
        } else {
            console.log(err);
        }
        });
});

app.get('/ten', function(req, res){
    let result = [];
    db.all("SELECT Title FROM Musicals WHERE (minAge < 10);", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Title) == -1) {
                    result.push(row.Title);
                 }
            });
            res.send(result);
        } else {
            console.log(err);
        }
        });
});

app.get('/fifteen', function(req, res){
    let result = [];
    db.all("SELECT Title FROM Musicals WHERE (minAge < 15);", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Title) == -1) {
                    result.push(row.Title);
                 }
            });
            res.send(result);
        } else {
            console.log(err);
        }
        });
});


app.get('/twenty', function(req, res){
    let result = [];
    db.all("SELECT Title FROM Musicals WHERE (minAge < 20);", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Title) == -1) {
                    result.push(row.Title);
                 }
            });
            res.send(result);
        } else {
            console.log(err);
        }
        });
});

app.get('/above_twenty', function(req, res){
    let result = [];
    db.all("SELECT Title FROM Musicals;", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Title) == -1) {
                    result.push(row.Title);
                 }
            });
            res.send(result);
        } else {
            console.log(err);
        }
        });
});

app.get('/fifty', function(req, res){
    let result = [];
    db.all("SELECT Name FROM Price WHERE (LowestPrice < 50);", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Name) == -1) {
                    result.push(row.Name);
                 }
            });
            console.log(result);
            res.send(result);
        } else {
            console.log(err);
        }
        });
});

app.get('/hundred', function(req, res){
    let result = [];
    db.all("SELECT Name FROM Price WHERE (LowestPrice < 100);", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Name) == -1) {
                    result.push(row.Name);
                 }
            });
            console.log(result);
            res.send(result);
        } else {
            console.log(err);
        }
        });
});

app.get('/onefifty', function(req, res){
    let result = [];
    db.all("SELECT Name FROM Price WHERE (HighestPrice < 150);", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Name) == -1) {
                    result.push(row.Name);
                 }
            });
            console.log(result);
            res.send(result);
        } else {
            console.log(err);
        }
        });
});


app.get('/two_hundred', function(req, res){
    let result = [];
    db.all("SELECT Name FROM Price WHERE (HighestPrice < 200);", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Title) == -1) {
                    result.push(row.Name);
                 }
            });
            console.log(result);
            res.send(result);
        } else {
            console.log(err);
        }
        });
});

app.get('/above_two_hundred', function(req, res){
    let result = [];
    db.all("SELECT Name FROM Price WHERE (HighestPrice >= 200);", function(err, rows) {
        if(!err) {
            rows.forEach(function (row) {
                 if(result.indexOf(row.Title) == -1) {
                    result.push(row.Name);
                 }
            });
            console.log(result);
            res.send(result);
        } else {
            console.log(err);
        }
        });
});

server.listen (8080);
