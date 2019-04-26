
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
    question: "What types of stories do you like? (Select all that apply)",
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
    question: "Where would you like to see the musical?",
    answers: {
      a: "New York City, U.S.",
      b: "London, England",
      c: "Other cities in the U.S."
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

/* Fill the ticket link in the description area. */
function fillLink(title, index) {
    var url = "http://127.0.0.1:8080/link"+"/?name="+title;

    fetch(url, {cache: "no-cache"}).then(function(response){
        return response.json();
    })
    .then(function(response) {
        let link = JSON.stringify(response);
        link = link.substring(2, link.length-2);
        console.log("link: " + link);
        document.getElementById("link"+index).innerHTML = "Book your ticket here"
        document.getElementById("link"+index).href = link;
    });
}

/* Display the correct image given the musical's title. */
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

var cards;
var cardsImg;
var descriptionStyle;
function createStyle(){
        cards = document.createElement('style');
        cards.type = 'text/css';
        cards.innerHTML = '.cards { width: 70%; background-color: white; margin-left : 10%; margin-bottom: 30px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }';
        document.getElementsByTagName('head')[0].appendChild(cards);

        cardsImg = document.createElement('style');
        cardsImg.type = 'text/css';
        cardsImg.innerHTML = '.cards img { width: 35%;height: 90%;margin-left:10px;margin-top:10px;float:left; }';
        document.getElementsByTagName('head')[0].appendChild(cardsImg);

        descriptionStyle = document.createElement('style');
        descriptionStyle.type = 'text/css';
        descriptionStyle.innerHTML = '.description { width:58%;height: 60%;margin-left: 40%;padding-top: 20px; }';
        document.getElementsByTagName('head')[0].appendChild(descriptionStyle);
}


/* update the web-page cards based on the input list of musicals */
function updateList(names, flag) {
    var container = document.getElementById("container");
    var childToRemove = [];
    for (var i = 0; i < container.childNodes.length; i ++) {
        if (container.childNodes[i].className == "cards") {
           childToRemove.push(container.childNodes[i]);
        }
    }

    for (var i = 0; i < childToRemove.length; i ++) {
        container.removeChild(childToRemove[i]);
    }

    if(names[0] == "No musicals that match your result") {
        var errorMessage = document.createElement("p");
        errorMessage.innerHTML = names[0];
        container.appendChild(errorMessage);
    } else {
        var index = 0;
        for (var i = 0; i < names.length; i++){
           var name = names[i];
           //console.log(name);
           if((name != "") && (name != ",")) {
               index = index + 1;
               var card = document.createElement("div");
               card.className = "cards";
               card.style = "height:200px;";
               console.log(name);

               var image = document.createElement("img");
               image.className = "cards img";
               image.id="option"+index;
               card.appendChild(image);

               var description = document.createElement("div");
               description.className="description";

               var h1 = document.createElement("h2");
               h1.id="title"+index;
               h1.style="text-decoration:underline;font-family: 'Quicksand', sans-serif;font-weight:bold;margin-bottom:5px;";
               h1.addEventListener("mouseenter", function() {event.target.style="color:blue;font-size=200px; text-decoration:underline;font-family: 'Quicksand', sans-serif;font-weight:bold;margin-bottom:5px;"});
               h1.addEventListener("mouseleave", function() {event.target.style="font-size=200px; text-decoration:underline;font-family: 'Quicksand', sans-serif;font-weight:bold;margin-bottom:5px;"});

               h1.innerHTML = name;
               h1.addEventListener("click", function() {loadMusicalProfile(event.target.innerHTML);}, false);
               description.appendChild(h1);

               if (flag == "link") {
                   var link = document.createElement("a");
                   link.id = "link"+index;
                   fillLink(name, index);
                   description.appendChild(link);
               }

               var des = document.createElement("div");
               des.id="description"+index;
               des.style="height:90%;padding-top:5px; overflow:scroll;"


               description.appendChild(des);
               card.appendChild(description);

               displayImage(name, image);
               container.appendChild(card);
               fillDescription(name, index);
           }
        }
    }
}

/* Returns the parameter that matches the node js query parameter given a value. */
function findParam(value) {
    var param = "";
        if (value == "London") {
            param = "london";
        } else if (value == "New York City") {
            param = "nyc";
        } else if (value == "Off Broadway") {
            param = "other_cities";
        } else if (value == "Comedy") {
            param = "comedy";
        } else if (value == "Disney") {
            param = "disney";
        } else if (value == "History") {
            param = "history";
        } else if (value == "Horror") {
            param = "horror";
        } else if (value == "Magic") {
            param = "magic";
        } else if (value == "Romance") {
            param = "romance";
        } else if (value == "Crime") {
            param = "crime";
        } else if (value == "1 - 10") {
            param = "ten";
        } else if (value == "10 - 15") {
            param = "fifteen";
        } else if(value == "15 - 20") {
            param = "twenty";
        } else if (value == "20+") {
            param = "above_twenty";
        } else if (value == "under $50") {
            param = "fifty";
        } else if (value == "$50 - $100") {
            param = "hundred";
        } else if (value == "$100 - $150") {
            param = "onefifty";
        } else if (value == "$150 - $200") {
            param = "two_hundred";
        } else if (value == "$200+") {
            param = "above_two_hundred";
        }
    return param;
}

/* This function takes in an url and return the fetched data as a promise. */
function fetchData(url) {
    let result = []
    return new Promise((resolve, reject) => {
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
                    if(result.includes(name) == false) {
                        result.push(name);
                    }
                }
            }
            resolve(result);
        });
    });
}

/* This function asks for filtered result given the options user chose. */
async function filterResult(options, flag) {
    var filteredMusicals = [];

    if (options[0] == "---" && options[1] == "---" && options[2] == "---" && options[3] == "---") {
        filteredMusicals = [];      //Clear filterMusicals
        let url="http://127.0.0.1:8080/all";
        filteredMusicals = await fetchData(url);
        setTimeout(function() {
            console.log(filteredMusicals);
            if(flag == "link") {
               updateList(filteredMusicals, "link");
            } else {
               updateList(filteredMusicals, "description");
            }
        }, 100);

    } else {
        let combinedResult = [];
        for (var i = 0; i < options.length; i ++) {
            if(options[i] != "---") {
                var param = findParam(options[i]);
                var result = []
                let url="http://127.0.0.1:8080/"+param;
                if(combinedResult.length == 0) {
                    combinedResult = await fetchData(url);
                    console.log("combined result: " + combinedResult);
                } else {
                    result = await fetchData(url);
                     //Find intersection of the fetched results.
                    combinedResult = combinedResult.filter(x => result.includes(x));
                }
            }
        }
        setTimeout(function() {
            filteredMusicals = combinedResult;
            console.log(filteredMusicals);
            updateList(filteredMusicals, "description");
        }, 100);
    }
}

var filterOptions = new Array(4);
filterOptions[0] = "---";
filterOptions[1] = "---";
filterOptions[2] = "---";
filterOptions[3] = "---";

/* This function changes the option list every time the user selects a different option. It also calls filterResult. */
function updateOption(selectedObject, index) {
    filterOptions[index] = selectedObject.value;
    console.log("in updateOption: options are" + filterOptions);
    filterResult(filterOptions);
}

/* Return title of all musicals for the ticket page. */
async function getAllMusicals() {
    let allMusicals = [];
    let url="http://127.0.0.1:8080/all";
    allMusicals = await fetchData(url);
    setTimeout(function() {
       console.log(allMusicals);
       var selectName = document.getElementById("select_name");
       for (var i = 0; i < allMusicals.length; i ++) {
            var name = allMusicals[i];
            var option = document.createElement("option");
            option.innerHTML = name;
            selectName.appendChild(option);
       }
    }, 100);
}

/* Get title and description of musical selected in the ticket page. */
function getMusical(selectedObject) {
    var title = selectedObject.value;
    while(title.indexOf("%20") != -1) {
        title = title.replace("%20", " ");
    }
    var url = "http://127.0.0.1:8080/name"+"/?name="+title;

        fetch(url, {cache: "no-cache"}).then(function(response){
            return response.json();
        })
        .then(function(response) {
            let title = JSON.stringify(response);
            title = title.substring(2, title.length-2);
            title = title.split('"');
            console.log("title: "+title);

            updateList(title, "link");
        });
}

/* Event listener for each musical card. */
function loadMusicalProfile(name) {
    window.location = "musical_profile.html?title=" + name;

}

function loadInfoInProfile(title) {
    fillLink(title, "");
    fillDescription(title, "");
}

/* Visual typing effect when displaying quiz result. */
var i = 0;
var speed = 150;
var text = "";
function setAttribute(title, div) {
    text = title;
}

function typingEffect() {
    if (i < text.length) {
        document.getElementById("title").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, speed);
    }
}
