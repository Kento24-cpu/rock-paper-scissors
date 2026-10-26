// Scores
let computerScore = 0;
let humanScore = 0;

// Random integer
function getRandomInteger(max)
{
    return Math.floor(Math.random() * max)
}

// Player Choice
function getHumanChoice()
{
    const humanChoice = prompt("Rock, Paper Scissors!\nChoice your option:").toLowerCase();
    return console.log(humanChoice);
}

// Computer Choice
function getComputerChoice()
{
    const randomInteger = getRandomInteger(3);

    if(randomInteger == 0)
    {
        return console.log("rock");
    }

    if(randomInteger == 1)
    {
        return console.log("paper");
    }

    if(randomInteger == 2)
    {
        return console.log("scissors");
    }
}

// Round logic
function playRound(computerAnswer, humanAnswer)
{
    if(humanAnswer === 'rock' && computerAnswer === 'rock' || humanAnswer === 'paper' && computerAnswer === 'paper' || humanAnswer === 'scissors' && computerAnswer === 'scissors')
    {
        console.log("Tie!");
    }
    else if(humanAnswer === 'rock' && computerAnswer === 'paper' || humanAnswer === 'paper' && computerAnswer === 'scissors' || humanAnswer === 'scissors' && computerAnswer === 'rock')
    {
        console.log("computer wins!");
        computerScore++;
    }
    else
    {
        console.log("human wins!");
        humanScore++;
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);
