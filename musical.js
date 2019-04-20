
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

var quiz_result = {};

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
                quiz_result[name] = 0;
            }
        }
        console.log('quiz result:', quiz_result);
    });

}

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

function ten() {
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