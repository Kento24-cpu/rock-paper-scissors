 // Scores
let computerScore = 0;
let humanScore = 0;

// Random integer
function getRandomInteger(max)
{
    return Math.floor(Math.random() * max)
}

// Computer Choice
function getComputerChoice()
{
    const randomInteger = getRandomInteger(3);

    if(randomInteger == 0)
    {
        return "rock";
    }

    if(randomInteger == 1)
    {
        return "paper";
    }

    if(randomInteger == 2)
    {
        return "scissors";
    }
}

// Player Choice
function getHumanChoice()
{
    const humanChoice = prompt("Rock, Paper Scissors!\nChoice your option:").toLowerCase();
    return humanChoice;
}

function getGameWinner()
{
    if(humanScore == computerScore)
    {
        console.log("Tie Game!, no one win!");
    }
    else if(humanScore > computerScore)
    {
        console.log("Human wins the game!");
    }
    else
    {
        console.log("Computer wins the game!");
    }
}

function playGame()
{
    // Round logic
    function playRound(computerAnswer, humanAnswer)
    {
        if(humanSelection == computerSelection)
        {
            console.log("Tie!");
        } 
        else if(
            (humanAnswer == 'rock' && computerAnswer == 'scissors') || 
            (humanAnswer == 'paper' && computerAnswer == 'rock') || 
            (humanAnswer == 'scissors' && computerAnswer == 'paper')
        )
        {
            humanScore = humanScore + 1; 
            console.log(`Human score: ${humanScore}`)
        } 
        else 
        {
            computerScore = computerScore + 1;  
            console.log(`Computer score: ${computerScore}`)
        }
    }

    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    console.log(`computer: ${computerSelection}`);
    console.log(`human: ${humanSelection}`);

    playRound(computerSelection, humanSelection);

}

playGame();
playGame();
playGame();
playGame();
playGame();
getGameWinner();
