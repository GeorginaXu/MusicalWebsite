
/*
var fs = require('fs');

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('Musicals.db', sqlite3.OPEN_READWRITE, (err) => {
                                       if (err) {
                                         return console.error(err.message);
                                       }
                                       console.log('Connected to the in-memory SQlite database.');
                                     });

db.all("SELECT Title FROM OnBroadway", function(err, rows) {
        rows.forEach(function (row) {
            console.log(row.Title);
        })
	});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});


var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, '127.0.0.1');*/



var quizContainer = document.getElementById('container');
var submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "Are you a Disney fan?",
    answers: {
      a: "Yes",
      b: "Not so much",
    }
  },
  {
    question: "What types of stories do you likes? (Select all that applied)",
    answers: {
      a: "Romance",
      b: "Comedy",
      c: "Crime",
      d: "History",
      e: "Horror",
      f: "Magic",
    }
  },
  {
    question: "What locations do you prefer for watching musicals?",
    answers: {
      a: "New York City",
      b: "Other cities in the U.S.",
      c: "London",
    }
  },
  {
    question: "What age range are you in?",
      answers: {
        a: "1 - 10",
        b: "10 - 20",
        c: "20+",
      }
   },
   {
       question: "How much budget would you allocate for the ticket?",
         answers: {
           a: "under $50",
           b: "$50 - $100",
           c: "$100 - $200",
           d: "$200+",
         }
    }
];


function buildQuiz() {
    var q1 = document.getElementById("q1");
    var q2 = document.getElementById("q2");
    var q3 = document.getElementById("q3");
    var q4 = document.getElementById("q4");
    var q5 = document.getElementById("q5");

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          var number = questionNumber + 1;
          var question = document.getElementById("q"+number);

          var q = document.createElement("div");
          q.innerHTML = number + ". " + currentQuestion.question;
          q.style.fontSize = "30px";
          question.appendChild(q);


          for(a in currentQuestion.answers){
                  var label = document.createElement('label');
                  label.setAttribute('class', 'label')
                  label.innerHTML = currentQuestion.answers[a];

                  var answer = document.createElement("input");
                  answer.setAttribute('type',"checkbox");

                  var checkmark = document.createElement("span");
                  checkmark.setAttribute('class', 'checkmark')

                  label.appendChild(answer);
                  label.appendChild(checkmark);
                  question.appendChild(label);
          }
    });
}

/*
var database = null;
function openSqliteDb(db) {
    console.log(db);
    var database = openDatabase(db, '1.0', "try open db", 2 * 1024 * 1024);
    showSchema();
}

function showSchema() {
    database.transaction(function(tx) {
        tx.executeSql("SELECT * FROM Price", [], function(tx, result){
            var schemanode = document.getElementById("container");
            schemanode.innerHTML = "";

            for(var i = 0; i < result.rows.length; ++i) {
                var row = result.rows.item(i);
                var nodediv = document.createElement("div");
                nodediv.innerHTML = 'name:' + row['name'] + ', lowest price:' + row['LowestPrice'];
                schemanode.appendChild(nodediv);
            }
        }, function(tx, error){
            console.log("Failed to receive notes from database." + error.message);
            return;
        });
    });
}*/

/*
// Start the worker in which sql.js will run
var worker = new Worker("worker.sql.js");
var outputElm;

// Open a database
worker.postMessage({action:'open'});
window.onload=function(){
  var button = document.getElementById('submit');
  button.addEventListener("click", execEditorContents, true);
  outputElm = document.getElementById('dbdisplay');
}

// Run a command in the database
function execute(commands) {
	worker.onmessage = function(event) {
		var results = event.data.results;
		console.log("Executing SQL");

		outputElm.innerHTML = "";
		for (var i=0; i<results.length; i++) {
			outputElm.appendChild(tableCreate(results[i].columns, results[i].values));
		}
		console.log("Displaying results");
	}
	worker.postMessage({action:'exec', sql:commands});
}

// Create an HTML table
var tableCreate = function () {
  function valconcat(vals, tagName) {
    if (vals.length === 0) return '';
    var open = '<'+tagName+'>', close='</'+tagName+'>';
    return open + vals.join(close + open) + close;
  }
  return function (columns, values){
    var tbl  = document.createElement('table');
    var html = '<thead>' + valconcat(columns, 'th') + '</thead>';
    var rows = values.map(function(v){ return valconcat(v, 'td'); });
    html += '<tbody>' + valconcat(rows, 'tr') + '</tbody>';
	tbl.innerHTML = html;
    return tbl;
  }
}();

var command = 'SELECT * FROM Price;';
// Execute the commands when the button is clicked
function execEditorContents () {
    loadDatabase('./Musicals.db');
	execute(command);
}

function loadDatabase(file) {
    var f = new File([""], file);
    var r = new FileReader();
    r.onload = function() {
    	worker.onmessage = function () {
    	    console.log("Loading database from file");

    	    // Show the schema of the loaded database
    	    command = "SELECT `name`, `sql`\n  FROM `sqlite_master`\n  WHERE type='table';";
        };

        try {
    	    worker.postMessage({action:'open',buffer:r.result}, [r.result]);
        }
        catch(exception) {
    	    worker.postMessage({action:'open',buffer:r.result});
        }
    }
    r.readAsArrayBuffer(f);
    console.log(r);
}
*/



