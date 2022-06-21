let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

unction generateTarget() {
    return Math.floor(Math.random() * 10)
  };
  
  function compareGuesses(userGuess, computerGuess, secretTarget) {
    if (Math.abs(userGuess - secretTarget) < Math.abs(computerGuess - secretTarget)) {
      return true;
    } else if (userGuess === computerGuess) {
      return true;
    } else {
      return false;
    }
  }
  
  function updateScore (winner) {
    if (winner === 'human') {
      humanScore ++;
    } else {
      computerScore ++;
    }
  };
  
  function advanceRound() {
    currentRoundNumber ++;
  };
  