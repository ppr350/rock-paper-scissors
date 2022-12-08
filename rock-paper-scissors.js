/*--------disable buttons before start---------*/
let gameIsOn = false

/*-------------------keep scores------------------*/
let playerScore = 0;
let computerScore = 0;

keyDisabled();

/*-----Things to happen when click START button-----*/
document.getElementById("start-button").addEventListener("click", () => {
    keyEnable();
    if (document.getElementById("start-button").innerHTML == "START") {
        document.getElementById("play-message").innerText = "TELL ME YOUR NAME PLEASE"
        document.getElementById("nF").style.visibility = "visible";
        document.forms['nameForm'].addEventListener('submit', function (event) {
            this.style['display'] = 'none';
            event.preventDefault();
            let playerName = document.getElementById("userform").value
            document.getElementById("player-name-prompt").innerHTML = playerName.toUpperCase();
            document.getElementById("play-message").innerText = "YOUR MOVE"
        })
        document.getElementById("title").innerHTML = "LET'S PLAY!";
        changeBtn();
        clearBoard();
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;
    } else if (document.getElementById("start-button").innerHTML == "RESTART") {
        document.getElementById("title").innerHTML = "LET'S TRY AGAIN";
        document.getElementById("play-message").innerText = "GOOD LUCK!"
        clearBoard();
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;
    }
    gameIsOn = true;
})

/*----------------reset score board----------------*/
function clearBoard() {
    playerScore = 0;
    computerScore = 0;
}

/*----------change start button to restart---------*/
function changeBtn() {
    document.getElementById("start-button").innerHTML = "RESTART"
}

/*-----------------get all players choices-----------------*/
const playRound = document.querySelectorAll(".options");
playRound.forEach((option) => {
    option.addEventListener("click", function() {
        const getPlayerChoice = this.textContent;
        const computerOptions = ["ROCK", "PAPER", "SCISSORS"];
        const getComputerChoice = computerOptions[Math.floor(Math.random() * 3)];
        checkWinner(getPlayerChoice, getComputerChoice);
        getScore();
    })
})

/*-------------------check who is winning-------------------*/
function checkWinner(getPlayerChoice, getComputerChoice) {
    if (getPlayerChoice == getComputerChoice) {
        document.getElementById("play-message").innerText = "TIE GAME!"
    } else if (getPlayerChoice == "ROCK" && getComputerChoice == "SCISSORS") {
        playerScore++;
        document.getElementById("play-message").innerText = "YOU WIN THIS ROUND!"
    } else if (getPlayerChoice == "PAPER" && getComputerChoice == "ROCK") {
        playerScore++;
        document.getElementById("play-message").innerText = "YOU WIN THIS ROUND!"
    } else if (getPlayerChoice == "SCISSORS" && getComputerChoice == "PAPER") {
        playerScore++;
        document.getElementById("play-message").innerText = "YOU WIN THIS ROUND!"
    } else {
        computerScore++;
        document.getElementById("play-message").innerText = "COMPUTER WINS THIS ROUND!"
    }
}

/*--------------disable rps buttons----------------*/
function keyDisabled() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

/*----------------enable rps buttons---------------*/
function keyEnable() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

/*---------------get live score-------------------*/
function getScore() {
    if (playerScore < 5 && computerScore < 5) {
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;
    } else if (playerScore === 5) {
        document.getElementById("title").innerText = "YOU WIN!"
        document.getElementById("play-message").innerText = "GAME OVER"
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;
        keyDisabled();
        gameIsOn = false
    } else if (computerScore === 5) {
        document.getElementById("title").innerText = "YOU LOSE"
        document.getElementById("play-message").innerText = "GAME OVER"
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;
        keyDisabled();
        gameIsOn = false
    }
}

document.getElementById("nF").style.visibility = "hidden";
