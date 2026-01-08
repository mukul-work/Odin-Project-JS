function getComputerChoice(){
    const value = Math.random();
    if(value < 1/3){
        return "rock";
    }else if (value < 2/3){
        return "paper";
    }else{
        return "scissors";
    }
}

let cScore = 0;
let hScore = 0;

function playRound(hChoice){
    if(hScore === 5 || cScore === 5){
        return;
    }
    const cChoice = getComputerChoice();
    let msg = "";

    if(cChoice === hChoice){
        return "This round was a tie.";
    }

    if( cChoice == "paper" && hChoice == "rock" ||
        cChoice == "rock" && hChoice == "scissors" ||
        cChoice == "scissors" && hChoice == "paper" )
    {
        cScore++;
        msg = `The computer chose ${cChoice} and won this round.`;
    }
    else
    {
        hScore++;
        msg = `The computer chose ${cChoice} and you won this round.`;
    }

    updateDisplay(msg);
    checkWinner();  
}

function updateDisplay(msg){
    resultDiv.textContent = msg;
    scoreDiv.textContent = `Player: ${hScore} | Computer: ${cScore}`;
}

function checkWinner(){
    if(hScore === 5){
        resultDiv.textContent = "You won the game.";
    }
    else if(cScore === 5){
        resultDiv.textContent = "Computer won the game.";
    }
}

const resultDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));




