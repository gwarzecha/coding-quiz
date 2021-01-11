
// GLOBAL VARIABLES
var startButton = document.getElementById("begin");
var startScreenEl = document.getElementById("start-screen");
var questionAnswerEl = document.getElementById("display-Q-A");
var answer1Btn = document.getElementById("a1");
var answer2Btn = document.getElementById("a2");
var answer3Btn = document.getElementById("a3");
var answer4Btn = document.getElementById("a4");
var scoreBtn = document.getElementById("submit");
var playAgainBtn = document.getElementById("play-again");
var remainingTime = 60;
var timerEl = document.getElementById("countdown");
var scoreEl = document.getElementById("score");
var score = 0;
var currentQIndex = 0;
var feedback = document.getElementById("right-wrong");
var highScoreEl = document.getElementById("highscore");
var initials = document.getElementById("initials");
var scoreboard = document.getElementById("scoreboard");
var leaderboard = document.getElementById("leaderboard");

var hsInitials = [];

// questions and answers for the quiz, stored in an array 
var quizList = [
  {
    question: "Which is the OR operator?",
    answers: ["&&", "!=", "||", "==="],
    correct: "||"
  },

  {
    question: "Which of the following is an example of an EventTarget method?",
    answers: ["getElementById", "clearInterval", "addEventListener", "textContent"],
    correct: "addEventListener"
  },
  {
    question: "What is the proper syntax to access an item within an array?",
    answers: ["array{0}", "array[0]", "array(0)", "array|0|"],
    correct: "array[0]"
  },
  {
    question: "Which is NOT an acceptable binding?",
    answers: ["be", "const", "let", "var"],
    correct: "be"
  },
  {
    question: "Complete the following: git push ____ main",
    answers: ["commit", "origin", "add", "."],
    correct: "origin"
  },
  {
    question: "The console method ____ displays a list of all the properties of a specific JS object. ",
    answers: ["log()", "assert()", "group()", "dir()"],
    correct: "dir()"
  },
  {
    question: "Which function returns the largest integer less than or equal to a particular number?",
    answers: ["Math.random()", "Math.sqrt()", "Math.floor()", "Math.round()"],
    correct: "Math.floor()"
  },
  {
    question: "localStorage uses ____-value pair to store object data.",
    answers: ["article", "object", "variable", "key"],
    correct: "key"
  },
  {
    question: "A ____ is a function that is passed as an argument to another function.",
    answers: ["callback", "retrieval", "recall", "method"],
    correct: "callback"
  },
  {
    question: "Which is an example of a Boolean value?",
    answers: ["yes", "null", "true", "NaN"],
    correct: "true"
  },
];

// FUNCTIONS

// timer that begins once the start button is clicked and the first questions is proposed
var timer = function () {
  var ticker = setInterval(function () {

    if (remainingTime > 0 && currentQIndex <= quizList.length - 1) {
      timerEl.textContent = "Time: " + remainingTime;
      remainingTime--
    } else {
      timerEl.textContent = "";
      clearInterval(ticker);
      scoreCard();
    }
  }, 1000);
};


function startGame() {
  // hide elements 
  startScreenEl.setAttribute("class", "hide");
  scoreEl.setAttribute("class", "hide");
  //show element
  questionAnswerEl.removeAttribute("class");
  timer();
  displayQuestion();
}

function displayQuestion() {
  var currentQuestion = quizList[currentQIndex];
  var questionText = document.getElementById("questionText");
  questionText.textContent = currentQuestion.question
  answer1Btn.textContent = currentQuestion.answers[0];
  answer2Btn.textContent = currentQuestion.answers[1];
  answer3Btn.textContent = currentQuestion.answers[2];
  answer4Btn.textContent = currentQuestion.answers[3];
};

function scoreCard() {
  questionAnswerEl.setAttribute("class", "hide");
  scoreEl.removeAttribute("class");
  scoreEl.textContent = "You finished the quiz with a score of " + score;
  highScoreEl.removeAttribute("class");


};

function advanceQuestion() {
  currentQIndex++;
  if (currentQIndex <= quizList.length - 1) {
    displayQuestion()
  } else {
    scoreCard();
  }
};

function assessAnswer(event) {
  // target.innerText compares what the user chooses upon click to the correlating correct object within the array
  if (event.target.innerText === quizList[currentQIndex].correct) {
    feedback.textContent = "Correct!";
    score = (score + 10);
  } else {
    feedback.textContent = "That is incorrect!"
    remainingTime = (remainingTime - 10);
  }
  advanceQuestion();
};

var saveScore = function (event) {
  hsInitials.push(score);
  hsInitials.push(initials.value);
  localStorage.setItem("score-initials", JSON.stringify(hsInitials));
  scoreboard.removeAttribute("class");
  highScoreEl.setAttribute("class", "hide");
  scoreEl.setAttribute("class", "hide");
  event.preventDefault();

};

var loadScore = function () {
  var savedScore = localStorage.getItem("score-initials");
  savedScore = JSON.parse(savedScore);
  leaderboard.textContent = "Score, Initials: " + savedScore;
};

loadScore();



// EVENT LISTENER BUTTONS
startButton.addEventListener("click", startGame);
answer1Btn.addEventListener("click", assessAnswer);
answer2Btn.addEventListener("click", assessAnswer);
answer3Btn.addEventListener("click", assessAnswer);
answer4Btn.addEventListener("click", assessAnswer);
scoreBtn.addEventListener("click", saveScore);



