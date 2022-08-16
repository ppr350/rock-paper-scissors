//////A function called "getComputerChoice":
function getComputerChoice() {
    //Declare an array stored in a variable:
    const gestures = ["rock", "paper", "scissors"];
    //Declare a variable, and it random select one of the items in the array above:
    const randomChoiceComputer = gestures[Math.floor(Math.random() * gestures.length)];
    //Temporary console.log out the computer result:
    console.log(randomChoiceComputer);
    //return randomChoiceComputer to the function;
    return randomChoiceComputer;

}
//////A variable called computerSelection to get result from "getComputerCboice":
const computerSelection = getComputerChoice();
//Below is a trial to see if "draw" works:
//const computerSelection = "rock";


//////A variable called "playerSelection", prompt player to type case-insensitive "Rock", "Paper" or "Scissors";
function getPlayerChoice() {
    /////Create a variable to store a list of choice
    const userInputAnswer = prompt("rock, paper or scissors?");
    //Make an variable to lowercase user choice:
    makeUserInputLowerCase = userInputAnswer.toLowerCase();
    //Temporary console.log out the user result:
    console.log(makeUserInputLowerCase);
    /////Create a variable to store rock, paper, scissors (The game choice)
    const gestures = ["rock", "paper", "scissors"];
    //Make "if and else" statement to check if user answer is valid:
    if (gestures.indexOf(makeUserInputLowerCase) >= 0 )
    {
        //show message of the user choice:
        alert(`Your choice is ${makeUserInputLowerCase}.`)
        //return gestures;
        return makeUserInputLowerCase;
    } else {
        //show error message when user input wrong answer:
        alert("Please try again.");
        //ask player to try again:
        getPlayerChoice();
    }
}
//////A varaible called playerSelection:
const playerSelection = getPlayerChoice();
//Below is a trial to see if "draw" works:
//const playerSelection = "rock";



//////A function called "playRound" that take 2 parameters, which are "playerSelection" and "computerSelection":
function playRound(playerSelection, computerSelection) {
    //Codes to compare 2 items:
    //If the outcome is draw:
    if (playerSelection == computerSelection) {
        console.log("It\'s a draw!!")
        return;
        //"if statements" when player wins:
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win!")
        return;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win!")
        return;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win!")
        return;
    } else {
        console.log("You lose!!")
        return;
    }
    //return the result of the choice;
}

playRound(playerSelection, computerSelection);


//////A function called "game", it calls "playRound" inside of it to play 5 round:
function game(){
    //////Make both "computerSelection" and "playerSelection" lowercase to compare them;
    playerSelection.toLowerCase() ==computerSelection.toLowerCase()

    //////It keeps score

    //////Use loops make it play 5 rounds of game:

    //////Reports a winner or a loser at the end:

}
