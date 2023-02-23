
  const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
  playRound('rock');
});

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 0;
  const maxRounds = 5;

  const rockButton = document.querySelector('#rock');
  const paperButton = document.querySelector('#paper');
  const scissorsButton = document.querySelector('#scissors');

  rockButton.addEventListener('click', () => {
    playRound('rock');
  });
  paperButton.addEventListener('click', () => {
    playRound('paper');
  });
  scissorsButton.addEventListener('click', () => {
    playRound('scissors');
  });

  function playRound(playerSelection) {
    const computerSelection = computerPlay();
    let result;

    if (playerSelection === computerSelection) {
      result = "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      result = `You win! ${playerSelection} beats ${computerSelection}`;
      playerScore++;
    } else {
      result = `You lose! ${computerSelection} beats ${playerSelection}`;
      computerScore++;
    }

    round++;

    const displayArea = document.querySelector('#display-area');
    displayArea.textContent = result;

    if (round === maxRounds) {
      if (playerScore > computerScore) {
        displayArea.textContent = "Congratulations, you win!";
      } else if (playerScore < computerScore) {
        displayArea.textContent = "Sorry, you lose!";
      } else {
        displayArea.textContent = "It's a tie!";
      }
    }
  }

  function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
}

game();
    

