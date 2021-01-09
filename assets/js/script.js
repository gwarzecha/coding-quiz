
// create a timer that begins once the start button is clicked (addEventListener)
// present a question with multiple clickable choices
// present another question if the question is answered correctly and increase score
// if a question is answered incorrectly, take time from the clock
// timer reaches and stays at 0 when all questions are answered
// when game is over, score is presented, offer option to save initials and score (localStorage)

var startButton = document.getElementById("begin");
var startScreenEl = document.getElementById("start-screen");
var questionAnswerEl = document.getElementById("display-Q-A");
var answer1Btn = document.getElementById("a1");
var answer2Btn = document.getElementById("a2");
var answer3Btn = document.getElementById("a3");
var answer4Btn = document.getElementById("a4");
var remainingTime = 30;
var timerEl = document.getElementById("countdown");
var scoreEl = document.getElementById("score");
var score = 0;
var currentQIndex = 0;
var feedback = document.getElementById("right-wrong");

// questions and answers for the quiz, stored in an array 
var quizList = [
  {
    question: "Which is the OR operator?",
    answers: ["&&", "!=", "||", "==="],
    correct: "||"
  },

  {
    question: "Which is the and operator?",
    answers: ["&&", "!=", "||", "==="],
    correct: "&&"
  },
  {
    question: "Which symbol represents an array?",
    answers: ["{}", "(())", "[]", "//"],
    correct: "[]"
  },
  {
    question: "Which is the OR operator?",
    answers: ["&&", "!=", "||", "==="],
    correct: "||"
  },
];


// timer that begins once the start button is clicked and the first questions is proposed
var timer = function () {
  var ticker = setInterval(function() {
    
    if (remainingTime > 0) {
      timerEl.textContent = remainingTime + " seconds remaning";
      remainingTime--
      console.log(remainingTime);
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
  scoreEl.setAttribute("class","hide");
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
  scoreEl.textContent= "You finished the quiz with a score of " + score;
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
  console.log(event);
  if (event.target.innerText === quizList[currentQIndex].correct) {
    feedback.textContent = "Correct!"; 
    score = (score + 10);
    console.log("current score is " + score);
  } else {
    feedback.textContent = "That is incorrect!"
    remainingTime = (remainingTime - 10);
  }
  advanceQuestion();
};

// funtionality to determine whether the user's reponse is correct or incorrect
// reward player with points for a correct answer
// subtract time from the timer if the player answers incorrectly




startButton.addEventListener("click", startGame);
answer1Btn.addEventListener("click", assessAnswer);
answer2Btn.addEventListener("click", assessAnswer);
answer3Btn.addEventListener("click", assessAnswer);
answer4Btn.addEventListener("click", assessAnswer);