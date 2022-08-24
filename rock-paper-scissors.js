//Get winner of each round and store in its list:
const winners = [];

//A function called "game", it calls "playRound" inside of it to play 5 round:
function game() {
    //A for loop to loop "playRound" function until it reaches 5 rounds (or more if tie game)
    for(let i = 5; i > 0 ; i--){
        //console.log(`Remaining round: ${gameRound}`);
        console.log(`Round ${i}`)
        playRound();
    }
    //Announce winner
    logWins();
    if(computerScore == playerScore) {
        alert("Tie Game! No winner!")
    } else if (playerScore > computerScore) {
        alert("You win!") 
    } else {
        alert("You lose!")
    }
}


//////A function called "playRound" that take 2 parameters, which are "playerSelection" and "computerSelection":
function playRound() {
    //Codes to compare 2 items:
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    //Find out who is the winner of each round from "checkWinner" function:
    const winner = checkWinner(playerSelection, computerSelection);
    //Transfer the winner of each round to the "winners" list:
    winners.push(winner);
}


function checkWinner(playerSelection, computerSelection) {
    //If the outcome is draw:
    if (playerSelection == computerSelection) {
        console.log("It\'s a tie, let\'s try again!!")
        //gameRound += 1;
        return "Tie";
        //"if statements" when player wins:
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win!")
        //Add 1 point to "playerScore":
        playerScore += 1;
        //gameRound -= 1;
        return "Player"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win!")
        //Add 1 point to "playerScore":
        playerScore += 1;
        //gameRound -= 1;
        return "Player";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        //console.log("You win!")
        //Add 1 point to "playerScore":
        playerScore += 1;
        //gameRound -= 1;
        return "Player";
    } else {
        console.log("You lose!!")
        //Add 1 point to "computerScore":
        computerScore += 1;
        //gameRound -= 1;
        return "Computer";
    }
    //return the result of the choice;
}


function getPlayerChoice() {
    //Create a variable to store a list of choice
    const userInputAnswer = prompt("rock, paper or scissors?");
    //In case player hits "Escape", the game won't break:
    while (userInputAnswer == null) {
        //Run "getPlayerChoice" instead of the method below to avoid crash:
        getPlayerChoice();
        //The method below will crash if player press "Escape" again:
        //userInputAnswer = prompt("try again, rock, paper or scissors?");
    }
    //Make an variable to lowercase user choice:
    makeUserInputLowerCase = userInputAnswer.toLowerCase();
    //Temporary console.log out the user result:
    console.log(`Player chose: ${makeUserInputLowerCase}`);
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


//////A function called "getComputerChoice":
function getComputerChoice() {
    //Declare an array stored in a variable:
    const gestures = ["rock", "paper", "scissors"];
    //Declare a variable, and it random select one of the items in the array above:
    const randomChoiceComputer = gestures[Math.floor(Math.random() * gestures.length)];
    //Temporary console.log out the computer result:
    console.log(`Computer chose: ${randomChoiceComputer}`);
    //return randomChoiceComputer to the function;
    return randomChoiceComputer;
}

//Create a variable to store player score:
let playerScore = 0;
//Create a variable to store computer score:
let computerScore = 0;

function logWins() {
    //Create a variable to store player score:
    console.log(winners);
    console.log(`Computer\'s score is ${computerScore}`);
    console.log(`Your score is ${playerScore}`);
}

//Call the game to start:
game();

/*
Bugs report:
- Somtimes the game runs 6 times without tie game
- Sometimes the game runs 6 times without 3 tie games

Not bugs, but need to fix (fixed):
- Game round doesn't count down
*/