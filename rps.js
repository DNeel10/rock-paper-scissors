//Initialize variables
let playerScore = 0;
let computerScore = 0;
let tie = 0; 


// get a random choice from the computer

function getComputerChoice() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let computerChoice = computerOptions[Math.floor(Math.random(computerOptions) * computerOptions.length)];
    return computerChoice;
}

// prompt the user for a choice and convert it all to lower case
function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    let playerChoiceLower = playerChoice.toLowerCase();
    return playerChoiceLower;
}

// play a round of rock paper scissors and determine a winner of the round

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            playerScore++;
            console.log("You won this round. " + playerSelection + " beats " + computerSelection);

    } else if
        (playerSelection === computerSelection) {
            console.log("Tie. You both selected " + playerSelection);
    } else {
        computerScore++;
        console.log("You lost this round. " + computerSelection + " beats " + playerSelection);
    }
}
// check winner of the game

function checkWinner(playerScore, computerScore){
    if (playerScore > computerScore) {
        console.log("You won the Game!");
    }
    else if (playerScore < computerScore) {
        console.log("You lost the Game!");
    }
    else {
        console.log("tie game. Try again!");
    }
}
// play a game of 5 rounds of rock paper scissors
function game() { 
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log("Player Score: " + playerScore + "  ||  Computer Score: " + computerScore);
    }
    checkWinner(playerScore, computerScore);
}

game();