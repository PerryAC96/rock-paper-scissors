<div class="container">
  <nav class="navbar">
    <div class="header-img">
      <img src="#" alt="platypus logo">
    </div>
    <div class="container1">
      <h1 class="bordered-text">ROCK PAPER SCISSORS</h1>
      <div class="container-btn">
        <h2 class="bordered-text2">LETS BATTLE</h2>
        <!-- time for some buttons -->
        <button class="button" id="paper">PAPER</button>
        <button class="button" id="rock">ROCK</button>
        <button class="button" id="scissors">SCISSORS</button>
        <div id="scoreboard">
          <p>Player: <span id="player-score">0</span></p>
          <p>Computer: <span id="computer-score">0</span></p>
          <p id="round-counter"></p>
        </div>
        <div id="display-area"></div>
      </div>
    </div>
  </nav>
</div>

<script>
  let playerScore = 0;
  let computerScore = 0;
  let roundCounter = 0;

  const rockButton = document.querySelector('#rock');
  const paperButton = document.querySelector('#paper');
  const scissorsButton = document.querySelector('#scissors');
  const playerScoreDisplay = document.querySelector('#player-score');
  const computerScoreDisplay = document.querySelecter('#computer-score');
  const roundCounterDisplay = document.querySelector('round-counter');

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

    const displayArea = document.querySelector('#display-area');
    displayArea.textContent = result;
  }

  function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  function displayResult(result){
    const displayArea = document.querySelector('#display-are');
    displayArea.textContent = result;
  }
  function updateScoreboard(){
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    roundCounterDisplay.textContent = 'Round ${roundCounter}';
  }
  function endGame(){
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    let resultMessage;
    if (playerScore > computerScore){
      resultMessage = 'You Win!';
    } else if ()
  }

  game(); 