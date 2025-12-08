function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()

*3)+1;
if (computerChoice === 1){
    return "Rock";
}
else if (computerChoice === 2) {
    return "Paper";
}
else{
    return "Scissors";
}

}
function getHumanChoice(){
    let humanChoice = prompt("Enter Your Choice: Rock, Paper or Scissors");
    return humanChoice;
}  
let humanScore=0;
let computerScore=0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return Draw;
         else if(
            (humanScore === "Rock" && computerScore === "Scissors")
            (humanScore === "Paper" && computerScore === "Rock")
            (humanScore === "Scissors" && computerScore === "Paper")
        )
        return "You Win This Round";
        else{
            return "You Lose This Round";
        }
    }
}

    
