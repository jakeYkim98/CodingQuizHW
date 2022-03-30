var questions = [
    {
        title: "DOM stands for:",
        choices: ["Demonstrative Object Model", "Document Object Model", "Div Over Meta", "Ducks Of Monroe"],
        correctChoice: "Document Object Model"
    },
    {
        title: "The language that deals with the 'skeleton' of a webpage:",
        choices: ["HTML", "CSS", "JS", "Python"],
        correctChoice: "HTML"
    },
    {
        title: "# denotes id. What denotes class?",
        choices: [">", "*", "!", "."],
        correctChoice: "."
    },
    {
        title: "git add -A, :( , git push origin main. What should :( be?",
        choices: ["git pull", "git pull origin main", "git commit -m", "git clone" ],
        correctChoice: "git commit -m"
    },
    {
        title: "'57389' is what type of primitive data?",
        choices: ["Number", "Boolean", "Undefined", "String"],
        correctChoice: "String"
    }
];

var timerId;
var startBtn = document.querySelector("#startBtn");
var inputBtns = document.querySelectorAll("#input");
var home = document.querySelector("#home");
var questionSequence = document.getElementById("quizQuestions1");
var quizQuestion = document.querySelector("#quizQuestions-title1");
var quizChoice = document.getElementById("quizChoices1");
var feedbackText = document.getElementById("feedback");
var timerEl = document.querySelector("#seconds-left");
var time = questions.length * 24

function countdown() {
    time--;
    timerEl.textContent = time;
}

function beginQuiz() {
    home.style.display = "none";

    questionSequence.removeAttribute("class");

    timerId = setInterval(countdown, 1000);

    feedQuestion1();
}


function feedQuestion1() {
    
    
    var choice1 = document.querySelector(".choice1");
    var choice2 = document.querySelector(".choice2");
    var choice3 = document.querySelector(".choice3");
    var choice4 = document.querySelector(".choice4");
    quizQuestion.textContent = questions[0].title;
    choice1.textContent = questions[0].choices[String(0)];
    choice2.textContent = questions[0].choices[String(1)];
    choice3.textContent = questions[0].choices[String(2)];
    choice4.textContent = questions[0].choices[String(3)];

    
    //if (NodeList[1]===[]) {
       // console.log("hello")
    //}
    for(i=0; i<inputBtns.length; i++) {
        inputBtns[i].addEventListener("click", function() {
            
        })
    }
   //console.log(inputBtns[0].innerHTML)
   
}



function correctInput1() {
    if(inputBtns[i=1].innerHTML === questions[0].correctChoice) {
        
        console.log("correct")

        //questionSequence.setAttribute("class", "hide")
    }
}
function wrongInput1() {
    
    if(inputBtns[i=0, 2, 3].innerHTML !== questions[0].correctChoice) {
        console.log("wrong")
    }

}

function correctInput2() {
    if(inputBtns[i=0].innerHTML === questions[1].correctChoice) {
        
        console.log("correct")
    }
}
function wrongInput2() {
    
    if(inputBtns[i=1, 2, 3].innerHTML !== questions[1].correctChoice) {
        console.log("wrong")
    }

}

startBtn.addEventListener("click", function() {
    beginQuiz();
});