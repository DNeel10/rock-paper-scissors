//Initialize variables
let playerScore = 0;
let computerScore = 0;
let tie = 0; 

const rock = document.getElementById('rock').addEventListener('click', playRound);
const paper = document.getElementById('paper').addEventListener('click', playRound);
const scissors = document.getElementById('scissors').addEventListener('click', playRound);

let playerChoice = '';
let computerChoice = '';

let playerChoiceText = document.querySelector('#playerChoiceOption');
let computerChoiceText = document.querySelector('#computerChoiceOption');

let playerScoreDisplay = document.querySelector('#playerScoreDisplay');
let computerScoreDisplay = document.querySelector('#computerScoreDisplay');

let resultMessage = document.querySelector('.resultMessage');

const selection = document.querySelector('.selections');
const battle = document.querySelector('.battle');
const results = document.querySelector('h2');
const resetButton = document.querySelector('.reset');

// get a random choice from the computer
function getComputerChoice() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    computerChoice = computerOptions[Math.floor(Math.random(computerOptions) * computerOptions.length)];
    return computerChoice;
}

// play a single round based on the click event
function playRound(e){
    getComputerChoice();
    console.log(`The Player selected ${e.target.id}`);
    playerChoice = e.target.id;
    playerChoiceText.textContent=`${e.target.id}`;
    computerChoiceText.innerText=`${computerChoice}`;
    checkRoundWinner(playerChoiceText.textContent, computerChoiceText.textContent);
    checkFullGameWinner(playerScoreDisplay, computerScoreDisplay);
}

// Check the winner of the round of RPS

function checkRoundWinner(player, computer){
    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') || 
        (player === 'scissors' && computer === 'paper')) {
            playerScore++
            resultMessage.textContent = (`You win! ${player} beats ${computer}`);
            console.log("You won this round. " + player + " beats " + computer);
            updateScore(playerScore, computerScore);
    } else if
        (player === computer) {
            resultMessage.textContent = (`Tie. You both selected ${player}`);
            console.log("Tie. You both selected " + player);
            updateScore(playerScore, computerScore);
    } else {
        computerScore++;
        updateScore(playerScore, computerScore)
    
        resultMessage.textContent = (`You lose!  ${computer} beats ${player}`);
        console.log("You lost this round. " + computer + " beats " + player);
    }
}
// update the score text on screen
function updateScore(playerScore, computerScore){
    playerScoreDisplay.textContent=playerScore;
    computerScoreDisplay.textContent=computerScore;
}
function checkFullGameWinner(playerScore, computerScore){
    if(playerScore.textContent === '5'){
        console.log('PLAYER WINS');
        selection.style.display="none";
        battle.style.display="none";
        resultMessage.textContent = `You won the game!!!`
        results.textContent = `Final Score:`;
        resetButton.style.display="flex";
        resetButton.addEventListener('click', resetGame);
    } else if (computerScore.textContent === '5'){
        console.log('COMPUTER WINS');
        selection.style.display="none";
        battle.style.display="none";
        resultMessage.textContent = `You lost the game!!!`;
        results.textContent = `Final Score:`
        resetButton.style.display="flex";
        resetButton.addEventListener('click', resetGame);
    } else {
        console.log('NEXT ROUND');
    }
}

// reset the game back to its original state so it can be played again
function resetGame(){
    computerScore = 0;
    playerScore = 0;
    computerScoreDisplay.textContent = computerScore;
    playerScoreDisplay.textContent = playerScore;
    playerChoice = '';
    computerChoice = '';
    resetButton.style.display="none";
    selection.style.display="";
    battle.style.display="";
    resultMessage.textContent = ``;
    playerChoiceText.textContent=``;
    computerChoiceText.innerText=``;
    results.textContent = `Current Score:`
}



