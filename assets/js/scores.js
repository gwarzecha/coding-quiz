

var loadScore = function () {
  var savedScore = localStorage.getItem("score-initials");
  savedScore = JSON.parse(savedScore);
  console.log(savedScore);
  savedScore.forEach(element => {
    let liEl = document.createElement("li");
    liEl.textContent = element.initials + "-" + element.score; 
    document.getElementById("player-scores").append(liEl);
    
  });
};

loadScore();