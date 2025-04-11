let humanSelection;
let computerSelection;
let rounds = 1;
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
else {
    invalid = true;
    console.log("invalid is true => while loop");
    while(invalid){
    choice = prompt("Invalid input. Please select 1, 2, or 3.");
    if (choice == '1' || choice == '2' || choice == '3'){
        invalid = false;

        console.log("Invalid false, testing switch, choice is currently " +choice);
    switch (!invalid){
        case (choice =='1'):
            console.log("case 1 selected");
           return choice = 'Rock';
            case (choice == '2'):
                console.log("case 2 selected");
               return choice = 'Paper';
                case (choice == '3'):
                    console.log("case 3 selected");
                  return  choice = 'Scissors';
                    default: console.log("No case matched");
                    
    }
    console.log("break done, choice is " +choice);
}
}
console.log("returning choice");
return choice;

    }
}
 // return "Invalid Input";



function playRound() {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log("Computer choice is: " +computerSelection);
    console.log("Human choice is: " +humanSelection);
    if (humanSelection === "Invalid Input") {
        console.log("Invalid input. Please select 1, 2, or 3.");
        return;
    }
    if (humanSelection === computerSelection) {
        console.log("Tie!");
        return;
    } else if (
        (humanSelection === "Rock" && computerSelection === "Scissors") ||
        (humanSelection === "Paper" && computerSelection === "Rock") ||
        (humanSelection === "Scissors" && computerSelection === "Paper")
    ) {
        console.log(`You win! ${humanSelection} beats ${computerSelection}.`);
        humanScore++;
        return;
    } else {
        console.log(`You lose! ${computerSelection} beats ${humanSelection}.`);
        computerScore++;
        return;
    } 
    }
function playGame(){

    while (rounds <= 5){

     playRound();
   
     console.log("Round " +rounds+ " has looped.")
     rounds++;

     
}
  if (humanScore > computerScore){
        console.log("Congratulations! You win! You scored " + humanScore + " out of 5 rounds.");
    }
        else console.log("You Lost! Computer scored " + computerScore + " out of 5 rounds. ");  
//playRound(humanSelection,computerSelection);
}

playGame();
