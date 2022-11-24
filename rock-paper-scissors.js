let gameIsOn = false

document.getElementById("start-button").addEventListener("click", () => {
    getPlayerName();
    gameIsOn = true;
    /*playRound();*/
    /*startGame();*/
    /*gameOver()*/
})



/*----------change start button to restart---------*/
document.getElementById("start-button").addEventListener("click", changeBtn);
function changeBtn() {
    document.getElementById("start-button").innerHTML = "RESTART"
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
/*------------------------method 1---------------------------*/
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
/*------------------------method 2---------------------------*/
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

function playRound() {
    const setPlayerChoice = getPlayerChoice(
        
    )
    const setComputerChoice = getComputerChoice();
    const getWinner = checkWinner(setPlayerChoice, setComputerChoice);
    getWinner.push(winner);
}



const ROCK = document.getElementById("rock").addEventListener("click", chooseRock);
const PAPER = document.getElementById("paper").addEventListener("click", choosePaper);
const SCISSORS = document.getElementById("scissors").addEventListener("click", chooseScissors);

function chooseRock() {
    if (gameIsOn == true) {
        console.log("you choose rock")
    }
}

function choosePaper() {
    if (gameIsOn == true) {
        console.log("you choose paper")
    }
}

function chooseScissors() {
    if (gameIsOn == true) {
        console.log("you choose scissors")
    }
}


function checkWinner(setPlayerChoice, setComputerChoice) {
    if (setPlayerChoice == setComputerChoice) {
        console.log("Tie")
    } else if (setPlayerChoice == "rock" && setComputerChoice == "scissors") {
        console.log("You win")
    } else if (setPlayerChoice == "paper" && setComputerChoice == "rock") {
        console.log("You win")
    } else if (setPlayerChoice == " scissors" && setComputerChoice == "paper") {
        console.log("You win")
    } else {
        console.log("You lose")
    }
}

/*------------------start again-------------------*/
function startAgain() {
    let getNewPlayerName = getElementById("same-player-question");

    /*Ask if same player or new player*/
}

function GameOver() {
    /*pop up "Start Again?"*/

    /*if "Start Again" is True, make "Same Player" Box visible, and call it"

    /*change "Start" to "Start Again"*/
}
