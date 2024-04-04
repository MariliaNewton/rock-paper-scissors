let playerPoints = 0;
let computerPoints = 0;
const choices = ["ROCK", "PAPER", "SCISSORS"];
const rounds = 5;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie!`;
  } else {
    if (playerSelection === "ROCK") {
      if (computerSelection === "PAPER") {
        computerPoints++;
        return `You lost :( ${computerSelection} beats ${playerSelection}`;
      }
      if (computerSelection === "SCISSORS") {
        playerPoints++;
        return `You won :) ${playerSelection} beats ${computerSelection}`;
      }
    }

    if (playerSelection === "PAPER") {
      if (computerSelection === "SCISSORS") {
        computerPoints++;
        return `You lost :( ${computerSelection} beats ${playerSelection}`;
      }
      if (computerSelection === "ROCK") {
        playerPoints++;
        return `You won :) ${playerSelection} beats ${computerSelection}`;
      }
    }

    if (playerSelection === "SCISSORS") {
      if (computerSelection === "ROCK") {
        computerPoints++;
        return `You lost :( ${computerSelection} beats ${playerSelection}`;
      }
      if (computerSelection === "PAPER") {
        playerPoints++;
        return `You won :) ${playerSelection} beats ${computerSelection}`;
      }
    }
  }
}

function playGame() {
  for (let round = 1; round <= rounds; round++) {
    playerSelection = prompt(
      `Round ${round}! Choose between Rock, Paper or Scissors
      Your score: ${playerPoints}
      Computer score: ${computerPoints}`
    ).toUpperCase();

    if (choices.includes(playerSelection)) {
      alert(playRound(playerSelection, getComputerChoice()));
    } else {
      alert(`You need to choose a valid input!`);
      round--;
    }
  }

  if (playerPoints > computerPoints)
    alert(`Congrats! You won the game!
  Your score: ${playerPoints}
  Computer score: ${computerPoints}`);
  else if (computerPoints > playerPoints)
    alert(`You lost the game :(
  Your score: ${playerPoints}
  Computer score: ${computerPoints}`);
  else if (computerPoints === playerPoints)
    alert(`It's a tie, no one wins!
  Your score: ${playerPoints}
  Computer score: ${computerPoints}`);
}

// playGame();
