const BEATS = {
    "ROCK" : "SCISSORS",
    "PAPER": "ROCK",
    "SCISSORS": "PAPER"
};

const SELECTIONS = ["ROCK", "PAPER", "SCISSORS"];

const TIE = 0;
const P1WIN = 1;
const P2WIN = 2;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay() {
    return SELECTIONS[getRandomInt(3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return TIE;
    }
    else if (BEATS[playerSelection] == computerSelection) {
        return P1WIN;
    }
    else if (BEATS[computerSelection] == playerSelection) {
        return P2WIN;
    }
}

function game() {
    const totalRounds = 5;
    let p1Score = 0;
    let p2Score = 0;
    
    for(let i = 0; i < totalRounds; i++) {
        playerSelection = prompt("ROCK, PAPER, or SCISSORS: ").toUpperCase();
        computerSelection = computerPlay();
        console.log(playerSelection);
        result = playRound(playerSelection, computerSelection);
        
        if (result == TIE) {
            console.log("It's a tie.");
        }
        else if (result == P1WIN) {
            p1Score++;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
        }
        else if (result == P2WIN) {
            p2Score++;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
        }

        if (p1Score > totalRounds / 2 || p2Score > totalRounds / 2) {
            break;
        }
    }

    if (p1Score == p2Score) {
        console.log(`Game Over. It's a draw ${p1Score}-${p2Score}`);
    }
    else if (p1Score > p2Score) {
        console.log(`Game Over. You won ${p1Score}-${p2Score}.`);
    }
    else if (p1Score < p2Score) {
        console.log(`Game Over. You lost ${p1Score}-${p2Score}.`);
    } 
}

