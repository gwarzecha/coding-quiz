
// create a timer that begins once the start button is clicked (addEventListener)
// present a question with multiple clickable choices
// present another question if the question is answered correctly and increase score
// if a question is answered incorrectly, take time from the clock
// timer reaches and stays at 0 when all questions are answered
// when game is over, score is presented, offer option to save initials and score (localStorage)

var startButton = document.querySelector("#begin");
var startScreenEl = document.getElementById("start-screen");
var questionAnswerEl = document.getElementById("display-Q-A");
var answer1Btn = document.getElementById("a1");
var answer2Btn = document.getElementById("a2");
var answer3Btn = document.getElementById("a3");
var answer4Btn = document.getElementById("a4");
var scoreEl = document.getElementById("score");
var remainingTime = 60;
var score = 0;
var currentQIndex = 0;

var quizList = [
  {
    question: "Which is the OR operator?",
    answers: ["&&", "=!", "||", "==="],
    correct: "||"
  },

  {
    question: "Which is the and operator?",
    answers: ["&&", "=!", "||", "==="],
    correct: "&&"
  }
];


// timer that begins once the start button is clicked and the first questions is proposed
var timer = function () {
  

  var countdown = setInterval(function () {

  }, 1000);
};

function startGame() {
  console.log("hello");
  // hide elements 
  startScreenEl.setAttribute("class", "hide");
  // scoreEl.setAttribute("class","hide");
  //show element
  questionAnswerEl.removeAttribute("class");

  timer();
  displayQuestion();
}

function displayQuestion() {
  var currentQuestion = quizList[currentQIndex]; 
  console.log(currentQuestion);
  var questionText = document.getElementById("questionText"); 
  questionText.textContent = currentQuestion.question
  answer1Btn.textContent = currentQuestion.answers[0];
  answer2Btn.textContent = currentQuestion.answers[1];
  answer3Btn.textContent = currentQuestion.answers[2];
  answer4Btn.textContent = currentQuestion.answers[3];

}
  

function checkAnswer() {

  console.log(this);
  console.log(quizList[currentQIndex].correct)
  currentQIndex ++; 
  if (currentQIndex <= quizList.length - 1) {
    displayQuestion()
  } else {
    scoreCard();
  }

}

function scoreCard() {
  console.log("game over");
}

startButton.addEventListener("click", startGame);
answer1Btn.addEventListener("click", checkAnswer);
answer2Btn.addEventListener("click", checkAnswer);
answer3Btn.addEventListener("click", checkAnswer);
answer4Btn.addEventListener("click", checkAnswer);