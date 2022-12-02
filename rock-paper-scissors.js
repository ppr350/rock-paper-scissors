/*--------disable buttons before start---------*/
let gameIsOn = false
document.getElementById("rock").disabled = true;
document.getElementById("paper").disabled = true;
document.getElementById("scissors").disabled = true;

/*-----Things to happen when click START button-----*/
document.getElementById("start-button").addEventListener("click", () => {
    getPlayerName();
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    if (document.getElementById("start-button").innerHTML == "START") {
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

/*-----------------prompt user to enter name-----------------*/
/*------------------alternative method 1---------------------*/
/*---------------------form validation-----------------------*/
function pName() {
    const playerName = document.getElementById("player-name")
    const form = document.getElementById("form")
    const errorElement = document.getElementById("error")

    form.addEventListener('submit', (e) => {
        let messages = []
        if (playerName.value === '' || playerName.value == null) {
            messages.push("Name is required")
        }
        /*if (playerName.value.length >= 15) {
            messages.push("The name is too long :(")
        }*/
        if (messages.length > 0) {
            e.preventDefault()
            errorElement.innerText = messages.join(', ')
        }
    })
}

/*-----------------prompt user to enter name-----------------*/
/*------------------alternative method 2---------------------*/
/*-----------display:none/display:inline-block---------------*/
function getName() {
    const username = document.getElementById("player-name-prompt");
    const stats = document.getElementById("name-box").style.display;
    const form = document.getElementById("form")
    if (stats =="none") {
        document.getElementById("name-box").style.display = "inline-block";
        if (username.value == "") {
            messages.push("Name is required")
        }
    }
    document.getElementById("player-name-prompt").innerHTML = username;
    console.log(username);
    
}

/*-------------------keep scores------------------*/
let playerScore = 0;
let computerScore = 0;

/*-----------------get all players choices-----------------*/
const playRound = document.querySelectorAll(".options");
playRound.forEach((option) => {
    option.addEventListener("click", function() {
        const getPlayerChoice = this.textContent;
        console.log(getPlayerChoice);

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
    } else if (getPlayerChoice == "ROCK" && getComputerChoice == "SCISSORS") {
        playerScore++;
        console.log("You win")
    } else if (getPlayerChoice == "PAPER" && getComputerChoice == "ROCK") {
        playerScore++;
        console.log("You win")
    } else if (getPlayerChoice == "SCISSORS" && getComputerChoice == "PAPER") {
        playerScore++;
        console.log("You win")
    } else {
        computerScore++;
        console.log("You lose")
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
        /*document.querySelector("title").textContent == "YOU WIN!"*/
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        gameIsOn = false
    } else if (computerScore === 5) {
        document.getElementById("title").innerText = "YOU LOSE"
        /*document.querySelector("title").textContent == "YOU LOSE!"*/
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        gameIsOn = false
    }
}



/*------------------start again-------------------*/
/*function startAgain() {
    let getNewPlayerName = getElementById("same-player-question");

    Ask if same player or new player
}*/

/*function GameOver() {
    pop up "Start Again?"

    /*if "Start Again" is True, make "Same Player" Box visible, and call it"

    change "Start" to "Start Again"
}*/
