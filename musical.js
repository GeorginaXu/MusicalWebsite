
var quizContainer = document.getElementById('container');
var submitButton = document.getElementById('submit');
var quiz_result = {};

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
        b: "10 - 15",
        c: "15 - 20",
        d: "20+",
      }
   },
   {
       question: "What is the maximum amount of money you are willing to pay for a ticket?",
         answers: {
           a: "$50",
           b: "$100",
           c: "$150",
           d: "$200",
           e: "$200+",
         }
    }
];


function buildQuiz() {
    var q1 = document.getElementById("q1");
    var q2 = document.getElementById("q2");
    var q3 = document.getElementById("q3");
    var q4 = document.getElementById("q4");
    var q5 = document.getElementById("q5");

    var num_of_answers = 1;
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          var number = questionNumber + 1;
          var question = document.getElementById("q"+number);

          var q = document.getElementById("question"+number);
          q.innerHTML = number + ". " + currentQuestion.question;
          q.style.fontSize = "30px";


          for(a in currentQuestion.answers){
                  var label = document.getElementById("a"+num_of_answers);
                  label.setAttribute('class', 'label')
                  label.innerHTML = currentQuestion.answers[a];

                  var answer = document.createElement("input");
                  answer.setAttribute('type',"checkbox");

                  var checkmark = document.createElement("span");
                  checkmark.setAttribute('class', 'checkmark')

                  label.appendChild(answer);
                  label.appendChild(checkmark);
                  num_of_answers += 1;
          }
    });
}

/* Build a dictionary that contains the score for each musical. */
function scoreBoard() {
    let names = [];
    let url="http://127.0.0.1:8080/all";
    fetch(url, {cache: "no-cache"}).then(function(response){
        return response.json();
    })
    .then(function(response) {
        console.log('Success:', JSON.stringify(response));
        names = JSON.stringify(response);
        names = names.substring(2, names.length-1);
        names = names.split('"');

        for (var i = 0; i < names.length; i++){
            var name = names[i];
            if(!(name in quiz_result) && (name != "") && (name != ",")) {
                this.quiz_result[name] = 0;
            }
        }
        console.log('quiz result:', this.quiz_result);
    });

}

/* Add scores for musicals that have type Disney. */
function disney() {
    let names = [];
    let url="http://127.0.0.1:8080/disney";
    fetch(url, {cache: "no-cache"}).then(function(response){
        return response.json();
    })
    .then(function(response) {
        console.log('Success:', JSON.stringify(response));
        names = JSON.stringify(response);

        names = names.substring(2, names.length-1);
        names = names.split('"');

        for (var i = 0; i < names.length; i++){
            var name = names[i];
            if((name != "") && (name != ",")) {
                var score = quiz_result[name];
                quiz_result[name] = score + 1;
            }
        }
        console.log('quiz result:', quiz_result);
    });
}

/* Add scores for musicals that don't have type Disney. */
function no_disney() {
        let names = [];
        let url="http://127.0.0.1:8080/no_disney";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', quiz_result);
        });
}

/* Add scores for musicals that have type Romance. */
function romance() {
        let names = [];
        let url="http://127.0.0.1:8080/romance";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', quiz_result);
        });

}

/* Add scores for musicals that have type Comedy. */
function comedy() {
        let names = [];
        let url="http://127.0.0.1:8080/comedy";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', quiz_result);
        });

}

/* Add scores for musicals that have type Crime. */
function crime() {
        let names = [];
        let url="http://127.0.0.1:8080/crime";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', quiz_result);
        });

}

/* Add scores for musicals that have type History. */
function history() {
        let names = [];
        let url="http://127.0.0.1:8080/history";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', quiz_result);
        });

}

/* Add scores for musicals that have type Horror. */
function horror() {
        let names = [];
        let url="http://127.0.0.1:8080/horror";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', quiz_result);
        });

}

/* Add scores for musicals that have type Magic. */
function magic() {
        let names = [];
        let url="http://127.0.0.1:8080/magic";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', quiz_result);
        });

}

/* Add scores for musicals that are in NYC. */
function nyc() {
        let names = [];
        let url="http://127.0.0.1:8080/nyc";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', quiz_result);
        });
}

/* Add scores for musicals that are in other cities in US. */
function other_cities() {
        let names = [];
        let url="http://127.0.0.1:8080/other_cities";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', quiz_result);
        });
}

/* Add scores for musicals that are in London. */
function london() {
        let names = [];
        let url="http://127.0.0.1:8080/london";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', quiz_result);
        });
}

/* Add scores for musicals that are for age under 10. */
function ten() {
        let names = [];
        let url="http://127.0.0.1:8080/ten";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', quiz_result);
        });
}

/* Add scores for musicals that are for age under 15. */
function fifteen() {
        let names = [];
        let url="http://127.0.0.1:8080/fifteen";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', quiz_result);
        });
}

/* Add scores for musicals that are for age under 20. */
function twenty() {
        let names = [];
        let url="http://127.0.0.1:8080/twenty";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', quiz_result);
        });
}

/* Add scores for musicals that are for age above 20. */
function above_twenty() {
        let names = [];
        let url="http://127.0.0.1:8080/above_twenty";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', quiz_result);
        });
}

/* Add scores for musicals that have minimum price below $50. */
function fifty() {
        let names = [];
        let url="http://127.0.0.1:8080/fifty";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', quiz_result);
        });
}

/* Add scores for musicals that have minimum price below $100. */
function hundred() {
        let names = [];
        let url="http://127.0.0.1:8080/hundred";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', quiz_result);
        });
}


/* Add scores for musicals that have maximum price below $150. */
function onefifty() {
        let names = [];
        let url="http://127.0.0.1:8080/onefifty";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    this.quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', this.quiz_result);
        });
}

/* Add scores for musicals that have maximum price below $200. */
function two_hundred() {
        let names = [];
        let url="http://127.0.0.1:8080/two_hundred";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    this.quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', this.quiz_result);
        });
}

/* Add scores for musicals that have maximum price above $200. */
function above_two_hundred() {
        let names = [];
        let url="http://127.0.0.1:8080/above_two_hundred";
        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log('Success:', JSON.stringify(response));
            names = JSON.stringify(response);

            names = names.substring(2, names.length-1);
            names = names.split('"');

            for (var i = 0; i < names.length; i++){
                var name = names[i];
                if((name != "") && (name != ",")) {
                    var score = quiz_result[name];
                    this.quiz_result[name] = score + 1;
                }
            }
            console.log('quiz result:', this.quiz_result);
        });
}

/* Sort all musicals based on their scores. */
function sortQuizResult() {
    var top1musical = "";

    var items = Object.keys(quiz_result).map(function(key) {
      return [key, quiz_result[key]];
    });

    // Sort the array based on the second element
    items.sort(function(first, second) {
      return second[1] - first[1];
    });

    // Create a new array with only the first 5 items
    for (var i = 0; i < 6; i ++) {
        top1musical += "=" + items[i][0];
    }
    return top1musical;
}

/* Get the top 6 musicals and feed into the new html page. */
function getResult() {
    top1musical = sortQuizResult();
    window.location = "quiz_result.html?title" + top1musical;
    console.log(top1musical);
}