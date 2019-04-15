
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