let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(number, target) {
  return Math.abs(number - target);
}

function checkHumanGuess(guess) {
  if (guess < 0 || guess > 9) {
    window.alert("Please make sure your guess is between 0 and 9")
  }
}

function compareGuesses(human, computer, target) {
  checkHumanGuess(human);
  if (getAbsoluteDistance(human, target) <= getAbsoluteDistance(computer, target)) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1
}
