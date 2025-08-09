let myScoreElement = document.querySelector("#myScore");
let compScoreElement = document.querySelector("#compScore");
let myScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let icons = document.querySelectorAll(".icn");
let resetBtn = document.querySelector("#resetBtn");
let moves = [...icons].map((icon) => icon.alt);
let gameOver = false;

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (gameOver) {
        msg.innerText= "Start New Game!!!"
              msg.style.backgroundColor = "blue";
        return;
    }
    let playerMove = icon.alt;
    let compMove = moves[Math.floor(Math.random() * moves.length)];

    // console.log(`You: ${playerMove}, Computer: ${compMove}`);

    if (playerMove === compMove) {
    } else if (
      (playerMove === "Rock" && compMove === "Scissors") ||
      (playerMove === "Scissors" && compMove === "Paper") ||
      (playerMove === "Paper" && compMove === "Rock")
    ) {
      myScoreElement.innerText = ++myScore;
      winCheck(myScore, "me");
    } else {
      compScoreElement.innerText = ++compScore;
      winCheck(compScore, "comp");
    }
  });
});

const winCheck = (score, player) => {
  if (score === 3) {
    if (player === "me") {
      msg.innerText = "Congratulations!You Win";
      msg.style.backgroundColor = "green";
    } else {
      msg.innerText = "You Lose :(";
      msg.style.backgroundColor = "red";
    }
    icons.forEach((icon) => {
      icon.disabled = true;
    });
    gameOver = true;
    resetBtn.innerText = "New Game";
  }
};

const resetGame = () => {
  myScoreElement.innerText = "0";
  myScore = 0;
  compScoreElement.innerText = "0";
  compScore = 0;
  icons.forEach((icon) => {
    icon.disabled = false;
  });
  msg.innerText = "Pick Your Move";
  msg.style.backgroundColor = "black";
  resetBtn.innerText = "Reset Game";
  gameOver = false;
};

resetBtn.addEventListener("click", resetGame);
