/*--------disable buttons before start---------*/
let gameIsOn = false
document.getElementById("rock").disabled = true;
document.getElementById("paper").disabled = true;
document.getElementById("scissors").disabled = true;

/*-----Things to happen when click START button-----*/
document.getElementById("start-button").addEventListener("click", () => {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    if (document.getElementById("start-button").innerHTML == "START") {
        getPlayerName();
        document.getElementById("title").innerHTML = "LET'S PLAY!";
        playerScore = 0;
        computerScore = 0;
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;
    } else if (document.getElementById("start-button").innerHTML == "RESTART") {
        document.getElementById("title").innerHTML = "LET'S TRY AGAIN";
        playerScore = 0;
        computerScore = 0;
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;
    }
    gameIsOn = true;
    document.getElementById("play-message").innerText = "YOUR MOVE"

    /*startGame();*/
    /*gameOver()*/
})

function clearBoard() {
    document.getElementById("title").innerHTML = "TRY AGAIN";

}

/*----------change start button to restart---------*/
document.getElementById("start-button").addEventListener("click", changeBtn);
function changeBtn() {
    document.getElementById("start-button").innerHTML = "RESTART"
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

/*-----------------get player name-----------------*/
function getPlayerName() {
    let playerName = prompt("What's your name?", "LOSER");
    if (playerName != null) {
        document.getElementById("player-name-prompt").innerHTML = playerName.toUpperCase();
        alert(`Hey ${playerName.charAt(0).toUpperCase() + playerName.slice(1)}, lets's play!`);
    }
}

/*-------------------keep scores------------------*/
let playerScore = 0;
let computerScore = 0;

/*-----------------get all players choices-----------------*/
const playRound = document.querySelectorAll(".options");
playRound.forEach((option) => {
    option.addEventListener("click", function() {
        const getPlayerChoice = this.textContent;

        const computerOptions = ["ROCK", "PAPER", "SCISSORS"];
        const getComputerChoice = computerOptions[Math.floor(Math.random() * 3)];
        console.log(getComputerChoice);

        checkWinner(getPlayerChoice, getComputerChoice);
        getScore()
    })
})

/*-------------------check who is winning-------------------*/
function checkWinner(getPlayerChoice, getComputerChoice) {
    if (getPlayerChoice == getComputerChoice) {
        console.log("Tie")
        document.getElementById("play-message").innerText = "TIE GAME!"
    } else if (getPlayerChoice == "ROCK" && getComputerChoice == "SCISSORS") {
        playerScore++;
        console.log("You win")
        document.getElementById("play-message").innerText = "YOU WIN THIS ROUND!"
    } else if (getPlayerChoice == "PAPER" && getComputerChoice == "ROCK") {
        playerScore++;
        console.log("You win")
        document.getElementById("play-message").innerText = "YOU WIN THIS ROUND!"
    } else if (getPlayerChoice == "SCISSORS" && getComputerChoice == "PAPER") {
        playerScore++;
        console.log("You win")
        document.getElementById("play-message").innerText = "YOU WIN THIS ROUND!"
    } else {
        computerScore++;
        console.log("You lose")
        document.getElementById("play-message").innerText = "COMPUTER WINS THIS ROUND!"
    }
}

/*---------------get live score-------------------*/
function getScore() {
    /*const showWinnerBox = document.querySelector("winner-box");*/

    if (playerScore < 5 && computerScore < 5) {
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;
    } else if (playerScore === 5) {
        document.getElementById("title").innerText = "YOU WIN!"
        document.getElementById("play-message").innerText = "GAME OVER"
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        gameIsOn = false
    } else if (computerScore === 5) {
        document.getElementById("title").innerText = "YOU LOSE"
        document.getElementById("play-message").innerText = "GAME OVER"
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        gameIsOn = false
    }
}

