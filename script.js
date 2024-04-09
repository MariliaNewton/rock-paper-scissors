const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const btnChoice = document.querySelectorAll(".btn-choice");

const versus = document.querySelector(".versus");
const again = document.querySelector(".again");

const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

const modal = document.querySelector(".modal-content");
const btnModal = document.querySelector(".btn-play-again");
const winnerModal = document.querySelector(".winner-reveal");

let playerSelection, computerSelection;
let playerPoints = 0;
let computerPoints = 0;

const emojiChoices = ["🪨", "📄", "✂️"];
const rounds = 5;

function getComputerChoice() {
  return emojiChoices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `tie`;
  } else {
    if (playerSelection === "🪨") {
      if (computerSelection === "📄") {
        computerPoints++;
        return `computer`;
      }
      if (computerSelection === "✂️") {
        playerPoints++;
        return `player`;
      }
    }

    if (playerSelection === "📄") {
      if (computerSelection === "✂️") {
        computerPoints++;
        return `computer`;
      }
      if (computerSelection === "🪨") {
        playerPoints++;
        return `player`;
      }
    }

    if (playerSelection === "✂️") {
      if (computerSelection === "🪨") {
        computerPoints++;
        return `computer`;
      }
      if (computerSelection === "📄") {
        playerPoints++;
        return `player`;
      }
    }
  }
}

btnModal.addEventListener("click", function () {
  playerPoints = 0;
  computerPoints = 0;
  playerScore.textContent = playerPoints;
  computerScore.textContent = computerPoints;
  restart();
  toggleVersusAgain();
  toggleBtnChoice();
  modal.classList.remove("visible");
});

function playGame() {
  winner = playRound(playerSelection, computerSelection);

  if (winner === "player") {
    playerChoice.classList.add("winner");
    computerChoice.classList.add("loser");
  } else if (winner === "computer") {
    playerChoice.classList.add("loser");
    computerChoice.classList.add("winner");
  }

  toggleVersusAgain();

  setTimeout(() => {
    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
  }, 1000);

  setTimeout(() => {
    if (playerPoints >= rounds) {
      winnerModal.textContent = "You won the game!";
      modal.classList.add("visible");
      playerPoints = 0;
      computerPoints = 0;
    } else if (computerPoints >= rounds) {
      winnerModal.textContent = "You lost the game!";
      modal.classList.add("visible");
      playerPoints = 0;
      computerPoints = 0;
    }
  }, 5000);
}

btnRock.addEventListener("click", function () {
  playerSelection = btnRock.textContent;
  computerSelection = getComputerChoice();

  playerChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;

  playGame();
  toggleBtnChoice();
});
btnPaper.addEventListener("click", function () {
  playerSelection = btnPaper.textContent;
  computerSelection = getComputerChoice();

  playerChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;

  playGame();
  toggleBtnChoice();
});
btnScissors.addEventListener("click", function () {
  playerSelection = btnScissors.textContent;
  computerSelection = getComputerChoice();

  playerChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;

  playGame();
  toggleBtnChoice();
});

again.addEventListener("click", btnAgain);

function toggleBtnChoice() {
  btnChoice.forEach((btn) =>
    btn.disabled ? (btn.disabled = false) : (btn.disabled = true)
  );
}

function toggleVersusAgain() {
  again.classList.toggle("show");
  versus.classList.toggle("show");
}

function restart() {
  playerChoice.textContent = "";
  computerChoice.textContent = "";

  playerChoice.classList.remove("winner");
  playerChoice.classList.remove("loser");
  computerChoice.classList.remove("winner");
  computerChoice.classList.remove("loser");
}

function btnAgain() {
  toggleVersusAgain();
  toggleBtnChoice();
  restart();
}
