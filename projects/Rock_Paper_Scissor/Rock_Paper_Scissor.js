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

function getHumanChoice(){
    const value = prompt("Enter your move: ");
    return value;
}

function playGame(){
    let cScore = 0;
    let hScore = 0;

    function playRound(){
        const hValue = getHumanChoice();
        const cChoice = getComputerChoice();
        const hChoice = hValue.toLowerCase();

        if(cChoice == hChoice){
            return "This round was a tie.";
        }

        if( cChoice == "paper" && hChoice == "rock" ||
            cChoice == "rock" && hChoice == "scissors" ||
            cChoice == "scissors" && hChoice == "paper" )
        {
            cScore++;
            return `The computer chose ${cChoice} and won this round.`;
        }
        else
        {
            hScore++;
            return `The computer chose ${cChoice} and you won this round.`;
        }
    }

    for(let i = 0; i < 5; i++){
        const result = playRound();
        console.log(result);
    }

    if(cScore == hScore){
        console.log("Draw");
    }
    else if(cScore > hScore){
        console.log("The computer won.");
    }
    else{
        console.log("The human won.");
    }
}

playGame();


