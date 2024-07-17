const rock = document.getElementById("rock");
const buttons = document.querySelectorAll("button");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissor");

const resultText = document.getElementById("resultText");
const userScore = document.getElementById("userScore");
const computerScoreEl = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultText.textContent = result;
  });
});

const resetScore = () => {
  playerScore = 0;
  computerScore = 0;
  resultText.innerText = "";
  userScore.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
};

const computerPlay = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomChoices = Math.floor(Math.random() * choices.length);
  return choices[randomChoices];
};

const playRound = (playerSelection, computerSelectoin) => {
  if (playerSelection === computerSelectoin) {
    return "it's a tie";
  } else if (
    (playerSelection === "rock" && computerSelectoin === "scissors") ||
    (playerSelection === "paper" && computerSelectoin === "rocks") ||
    (playerSelection === "scissors" && computerSelectoin === "paper")
  ) {
    playerScore++;
    userScore.textContent = playerScore;
    if (playerScore === 5) {

      setTimeout(() => {
        alert("You won the game by " + `${playerScore} : ${computerScore}`);
        resetScore();
      }, 200);
    }
    return "You win! " + playerSelection + " beats " + computerSelectoin;
  } else {
    computerScore++;

    computerScoreEl.textContent = computerScore;
    if (computerScore === 5) {
      setTimeout(() => {
        alert("You lost the game by " + `${playerScore} : ${computerScore}`);
        resetScore();
      }, 200);
    }
    return "You lose! " + computerSelectoin + " beats " + playerSelection;
  }
};
