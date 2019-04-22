
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

/* Fill the description area for a specific musical. */
function fillDescription(title, index) {
    var url = "http://127.0.0.1:8080/description"+"/?name="+title;

    fetch(url, {cache: "no-cache"}).then(function(response){
        return response.json();
    })
    .then(function(response) {
        let description = JSON.stringify(response);
        description = description.substring(2, description.length-2);
        document.getElementById("description"+index).innerHTML = description;
    });
}

function displayImage(title, image) {
        if(title.includes("Phantom")) {
            image.src="./images/phantom.JPG";
        } else if (title.includes("Harry")) {
            image.src="./images/harrypotter.JPG";
        } else if (title.includes("Aladdin")) {
            image.src="./images/Aladdin.jpg";
        } else if (title.includes("Mormon")) {
            image.src="./images/book-of-mormon.jpg";
        }else if (title.includes("Cats")) {
            image.src="./images/Cats.jpg";
        }else if (title.includes("Charlie")) {
            image.src="./images/Charlie.jpg";
        }else if (title.includes("Chicago")) {
            image.src="./images/Chicago.jpeg";
        }else if (title.includes("Come")) {
            image.src="./images/come-from-away.jpg";
        }else if (title.includes("Frozen")) {
            image.src="./images/Frozen.JPG";
        }else if (title.includes("Hamilton")) {
            image.src="./images/Hamilton.JPG";
        }else if (title.includes("Dolly")) {
            image.src="./images/hello-dolly.jpg";
        }else if (title.includes("Kinky")) {
            image.src="./images/kinky-boots.jpg";
        }else if (title.includes("Les")) {
            image.src="./images/les-mis.jpg";
        }else if (title.includes("Lion")) {
            image.src="./images/lionking.JPG";
        }else if (title.includes("Matilda")) {
            image.src="./images/Matilda.jpg";
        }else if (title.includes("Mean")) {
            image.src="./images/mean-girl.png";
        }else if (title.includes("Saigon")) {
            image.src="./images/miss-saigon.jpg";
        }else if (title.includes("Oklahoma")) {
            image.src="./images/Oklahoma.jpg";
        }else if (title.includes("Pretty")) {
            image.src="./images/pretty-woman.jpg";
        }else if (title.includes("Rock")) {
            image.src="./images/school-of-rock.jpg";
        }else if (title.includes("Wicked")) {
            image.src="./images/wicked.jpg";
        } else if (title.includes("Fair")) {
            image.src="./images/my-fair-lady.jpg";
        }
}

function browse() {

    var cards = document.createElement('style');
    cards.type = 'text/css';
    cards.innerHTML = '.cards { width: 80%; background-color: white; margin-left : 5%; margin-bottom: 30px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }';
    document.getElementsByTagName('head')[0].appendChild(cards);

    var cardsImg = document.createElement('style');
    cardsImg.type = 'text/css';
    cardsImg.innerHTML = '.cards img { width: 35%;height: 90%;margin-left:10px;margin-top:10px;float:left; }';
    document.getElementsByTagName('head')[0].appendChild(cardsImg);

    var descriptionStyle = document.createElement('style');
    descriptionStyle.type = 'text/css';
    descriptionStyle.innerHTML = '.description { width:58%;height: 60%;margin-left: 40%;padding-top: 20px; }';
    document.getElementsByTagName('head')[0].appendChild(descriptionStyle);

    let names = [];
    let url="http://127.0.0.1:8080/all";
    fetch(url, {cache: "no-cache"}).then(function(response){
        return response.json();
    })
    .then(function(response) {
        names = JSON.stringify(response);

        names = names.substring(2, names.length-1);
        names = names.split('"');
        var container = document.getElementById("container");

        for (var i = 0; i < names.length; i++){
           var name = names[i];
           console.log(name);
           if((name != "") && (name != ",")) {
               var card = document.createElement("div");
               card.className = "cards";
               card.style = "height:200px;";

               var image = document.createElement("img");
               image.className = "cards img";
               image.id="option"+i;
               card.appendChild(image);

               var description = document.createElement("div");
               description.className="description";

               var h1 = document.createElement("h1");
               h1.id="title"+i;
               h1.innerHTML = name;

               var des = document.createElement("div");
               des.id="description"+i;
               des.style="height:100%;padding-top:5px; overflow:scroll;"

               description.appendChild(h1);
               description.appendChild(des);
               card.appendChild(description);

               displayImage(name, image);
               container.appendChild(card);
               fillDescription(name, i);
           }
        }
    });
}