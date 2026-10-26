function getRandomInteger(max)
{
    return Math.floor(Math.random() * max)
}

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

function getHumanChoice()
{
    const humanChoice = prompt("Rock, Paper Scissors!\nChoice your option:").toLowerCase();
    return humanChoice;
}

console.log(getHumanChoice());
console.log(getComputerChoice());