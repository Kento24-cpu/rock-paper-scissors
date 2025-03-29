let humanScore = 0;
let computerScore = 0;

// Computer choice.
function getComputerChoice(){
    const selection = ["Rock", "Paper", "Scissors"];
    return selection[Math.floor(Math.random() * selection.length)];
};

// Human choice.
function getHumanChoice(){
    const choice = prompt("Rock, Paper, Scissors\nWrite your answer:");
    return choice;
};

// Rounds
function playRound(humanSelection, computerSelection){
    if (humanSelection === "Rock" && computerSelection === "Scissors"
        || humanSelection === "Paper" && computerSelection === "Rock"
        || humanSelection === "Scissors" && computerSelection === "Scissors")
        {
            humanScore++;
            console.log(`You win!, ${humanSelection} beats ${computerSelection}`);
        } else if (humanSelection === computerSelection) {
            console.log("Tie!");
        } else {
            computerScore++;
            console.log(`You lose!, ${computerSelection} beats ${humanSelection}`);
        }
}

function playGame(){

    console.log("Welcome");

    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(humanSelection);
        console.log(computerSelection);

        playRound(humanSelection, computerSelection);
        }

    console.log("Game over");

    if (humanScore > computerScore) {
        console.log("Player was the winner!");
        console.log(`Player Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log("Computer was the winner!");
        console.log(`Player Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    } else {
        console.log("We have a tie!")
        console.log(`Player Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
}

playGame();