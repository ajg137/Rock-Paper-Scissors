const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
let rounds = 0;
let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let sum = Math.random();
    if (sum <=.3) {
    return "Rock";
    }
    else if (sum > .333 && sum <=.666)
        return "Paper";
    else return "Scissors";
}

function getHumanChoice(){
choice = prompt("Enter a number between 1 to 3 to selectRock(1), Paper(2) or Scissors(3)");
if (choice == 1){
    return "Rock";
}
if (choice == 2){
    return "Paper"

}
if (choice == 3 ){
    return "Scissors";
}
  return "Invalid Input";

}

function playRound(humanChoice, computerChoice) {
    console.log("Computer choice is: " +computerSelection);
    console.log("Human choice is: " +humanSelection);
    if (humanSelection === "Invalid Input") {
        console.log("Invalid input. Please select 1, 2, or 3.");
        return;
    }
    
    if (humanSelection === computerSelection) {
        console.log("Tie!");
    } else if (
        (humanSelection === "Rock" && computerSelection === "Scissors") ||
        (humanSelection === "Paper" && computerSelection === "Rock") ||
        (humanSelection === "Scissors" && computerSelection === "Paper")
    ) {
        console.log(`You win! ${humanSelection} beats ${computerSelection}.`);
        humanScore++;
        
    } else {
        console.log(`You lose! ${computerSelection} beats ${humanSelection}.`);
        computerScore++;
    }
        if (humanScore > computerScore){
            console.log("Congratulations! You win! You scored " + humanScore + " out of 5 rounds.");
        }
            else console.log("You Lost! Computer scored " + computerScore + " out of 5 rounds. ");  
    }


function playGame(){

    while (rounds < 5){
    
     playRound();
}

}
playRound(humanSelection,computerSelection);
