var questions = [
    {
        title: "1. DOM stands for:",
        choices: ["a. Dry Object Model", "b. Document Object Model", "c. Div Over Meta", "d. Ducks Of Monroe"],
        correctChoice: "b. Document Object Model"
    },
    {
        title: "2. Deals with the 'skeleton' of a webpage:",
        choices: ["a. HTML", "b. CSS", "c. JS", "d. Python"],
        correctChoice: "a. HTML"
    },
    {
        title: "3. '#' denotes id. What does '.' denote?",
        choices: ["a. div", "b. br", "c. hide", "d. class"],
        correctChoice: "d. class"
    },
    {
        title: "4. What allows you to tag a git commit with a message?",
        choices: ["a. git pull", "b. git pull origin main", "c. git commit -m", "d. git clone" ],
        correctChoice: "c. git commit -m"
    },
    {
        title: "5. '57389' is what type of primitive data?",
        choices: ["a. Number", "b. Boolean", "c. Undefined", "d. String"],
        correctChoice: "d. String"
    }
];

var timerId;
var timerEl = document.querySelector("#seconds-left");
var time = questions.length * 18;
var userScore=0;
var score = document.getElementById("score");
var startBtn = document.querySelector("#startBtn");
var submitBtn = document.querySelector("#submit");
var inputBtns1 = document.querySelectorAll("#input1");
var inputBtns2 = document.querySelectorAll("#input2");
var inputBtns3 = document.querySelectorAll("#input3");
var inputBtns4 = document.querySelectorAll("#input4");
var inputBtns5 = document.querySelectorAll("#input5");
var home = document.querySelector("#home");
var question1 = document.getElementById("quizQuestions1");
var question2 = document.getElementById("quizQuestions2");
var question3 = document.getElementById("quizQuestions3");
var question4 = document.getElementById("quizQuestions4");
var question5 = document.getElementById("quizQuestions5");
var quizQuestion1 = document.querySelector("#quizQuestions-title1");
var quizQuestion2 = document.querySelector("#quizQuestions-title2");
var quizQuestion3 = document.querySelector("#quizQuestions-title3");
var quizQuestion4 = document.querySelector("#quizQuestions-title4");
var quizQuestion5 = document.querySelector("#quizQuestions-title5");
var feedbackText = document.getElementById("feedback");
var quizComplete = document.getElementById("quizComplete");
var signature = document.getElementById("signature");

function countdown() {
    time--;
    timerEl.textContent = time;
    if(time<=0) {
        time=0;
        quizEnd();
    }
};

function beginQuiz() {
    home.style.display = "none";
    question1.removeAttribute("class");
    timerId = setInterval(countdown, 1000);
    feedQuestion1();
};

function quizEnd() {
    clearInterval(timerId)
    score.textContent = userScore;
    quizComplete.removeAttribute("class");
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    question4.style.display = "none";
    question5.style.display = "none";
};

function saveScore() {
    userName = signature.value;
    if(userName!=="") {
        var grades = JSON.parse(window.localStorage.getItem("grades")) || [];
        var stats = {
            grade: userScore,
            user: userName,
        };
        grades.push(stats);
        window.localStorage.setItem("grades", JSON.stringify(grades));
        window.location.href = "grades.html";
    }
};

function feedQuestion1() {
    var choice01 = document.querySelector(".choice01");
    var choice02 = document.querySelector(".choice02");
    var choice03 = document.querySelector(".choice03");
    var choice04 = document.querySelector(".choice04");
    quizQuestion1.textContent = questions[0].title;
    choice01.textContent = questions[0].choices[String(0)];
    choice02.textContent = questions[0].choices[String(1)];
    choice03.textContent = questions[0].choices[String(2)];
    choice04.textContent = questions[0].choices[String(3)];
    //if (NodeList[1]===[]) {
       // console.log("hello")
    //}
    for(i=0; i<inputBtns1.length; i++) {
        inputBtns1[i].addEventListener("click", function() {        
        })
    }
   //console.log(inputBtns[0].innerHTML)
};
function correctInput1() {
    if(inputBtns1[i=1].innerHTML === questions[0].correctChoice) {
        console.log("correct")
        feedbackText.textContent = "Correct!";
        setTimeout(function(){
            feedbackText.textContent = "";
        }, 1000);
        question1.style.display = "none";
        question2.removeAttribute("class");
        userScore+=20;
        feedQuestion2();
    }
};
function wrongInput1() {
    if(inputBtns1[i=0, 2, 3].innerHTML !== questions[0].correctChoice) {
        console.log("wrong")
        feedbackText.textContent = "Wrong!";
        setTimeout(function(){
            feedbackText.textContent = "";
        }, 1000);
        time-=15;
        question1.style.display = "none";
        question2.removeAttribute("class");
        feedQuestion2();
    }
};

function feedQuestion2() {
    var choice11 = document.querySelector(".choice11");
    var choice12 = document.querySelector(".choice12");
    var choice13 = document.querySelector(".choice13");
    var choice14 = document.querySelector(".choice14");
    quizQuestion2.textContent = questions[1].title;
    choice11.textContent = questions[1].choices[String(0)];
    choice12.textContent = questions[1].choices[String(1)];
    choice13.textContent = questions[1].choices[String(2)];
    choice14.textContent = questions[1].choices[String(3)];
    for(i=0; i<inputBtns2.length; i++) {
        inputBtns2[i].addEventListener("click", function() {      
        })
    }   
};
function correctInput2() {
    if(inputBtns2[i=0].innerHTML === questions[1].correctChoice) {
        console.log("correct")
        feedbackText.textContent = "Correct!";
        setTimeout(function(){
            feedbackText.textContent = "";
        }, 1000);
        question2.style.display = "none";
        question3.removeAttribute("class");
        userScore+=20;
        feedQuestion3();
    }
};
function wrongInput2() {
    if(inputBtns2[i=1, 2, 3].innerHTML !== questions[1].correctChoice) {
        console.log("wrong")
        feedbackText.textContent = "Wrong!";
        setTimeout(function(){
            feedbackText.textContent = "";
        }, 1000);
        time-=15;
        question2.style.display = "none";
        question3.removeAttribute("class");
        feedQuestion3();
    }
};

function feedQuestion3() {
    var choice21 = document.querySelector(".choice21");
    var choice22 = document.querySelector(".choice22");
    var choice23 = document.querySelector(".choice23");
    var choice24 = document.querySelector(".choice24");
    quizQuestion3.textContent = questions[2].title;
    choice21.textContent = questions[2].choices[String(0)];
    choice22.textContent = questions[2].choices[String(1)];
    choice23.textContent = questions[2].choices[String(2)];
    choice24.textContent = questions[2].choices[String(3)];
    for(i=0; i<inputBtns3.length; i++) {
        inputBtns3[i].addEventListener("click", function() {    
        })
    }   
};
function correctInput3() {
    if(inputBtns3[i=3].innerHTML === questions[2].correctChoice) {
        console.log("correct")
        feedbackText.textContent = "Correct!";
        setTimeout(function(){
            feedbackText.textContent = "";
        }, 1000);
        question3.style.display = "none";
        question4.removeAttribute("class");
        userScore+=20;
        feedQuestion4();
    }
};
function wrongInput3() {
    if(inputBtns3[i=0, 1, 2].innerHTML !== questions[2].correctChoice) {
        console.log("wrong")
        feedbackText.textContent = "Wrong!";
        setTimeout(function(){
            feedbackText.textContent = "";
        }, 1000);
        time-=15;
        question3.style.display = "none";
        question4.removeAttribute("class");
        feedQuestion4();
    }
};

function feedQuestion4() {
    var choice31 = document.querySelector(".choice31");
    var choice32 = document.querySelector(".choice32");
    var choice33 = document.querySelector(".choice33");
    var choice34 = document.querySelector(".choice34");
    quizQuestion4.textContent = questions[3].title;
    choice31.textContent = questions[3].choices[String(0)];
    choice32.textContent = questions[3].choices[String(1)];
    choice33.textContent = questions[3].choices[String(2)];
    choice34.textContent = questions[3].choices[String(3)];
    for(i=0; i<inputBtns4.length; i++) {
        inputBtns4[i].addEventListener("click", function() {     
        })
    }   
};
function correctInput4() {
    if(inputBtns4[i=2].innerHTML === questions[3].correctChoice) {
        console.log("correct")
        feedbackText.textContent = "Correct!";
        setTimeout(function(){
            feedbackText.textContent = "";
        }, 1000);
        question4.style.display = "none";
        question5.removeAttribute("class");
        userScore+=20;
        feedQuestion5();
    }
};
function wrongInput4() {
    if(inputBtns4[i=0, 1, 3].innerHTML !== questions[3].correctChoice) {
        console.log("wrong")
        feedbackText.textContent = "Wrong!";
        setTimeout(function(){
            feedbackText.textContent = "";
        }, 1000);
        time-=15;
        question4.style.display = "none";
        question5.removeAttribute("class");
        feedQuestion5();
    }
};

function feedQuestion5() {
    var choice41 = document.querySelector(".choice41");
    var choice42 = document.querySelector(".choice42");
    var choice43 = document.querySelector(".choice43");
    var choice44 = document.querySelector(".choice44");
    quizQuestion5.textContent = questions[4].title;
    choice41.textContent = questions[4].choices[String(0)];
    choice42.textContent = questions[4].choices[String(1)];
    choice43.textContent = questions[4].choices[String(2)];
    choice44.textContent = questions[4].choices[String(3)];
    for(i=0; i<inputBtns5.length; i++) {
        inputBtns5[i].addEventListener("click", function() {   
        })
    }   
};
function correctInput5() {
    if(inputBtns5[i=3].innerHTML === questions[4].correctChoice) {
        console.log("correct")
        feedbackText.textContent = "Correct!";
        setTimeout(function(){
            feedbackText.textContent = "";
        }, 1000);
        question5.style.display = "none";
        userScore+=20;
        quizEnd();
    }
};
function wrongInput5() {
    if(inputBtns5[i=0, 1, 2].innerHTML !== questions[4].correctChoice) {
        console.log("wrong")
        feedbackText.textContent = "Wrong!";
        setTimeout(function(){
            feedbackText.textContent = "";
        }, 1000);
        time-=15;
        question5.style.display = "none";
        quizEnd();
    }
};

submitBtn.addEventListener("click", function() {
    saveScore();
});

startBtn.addEventListener("click", function() {
    beginQuiz();
});