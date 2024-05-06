const Answers = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    var random = Math.floor((Math.random()*Answers.length));
    var randomAnswer = Answers[random];
    return randomAnswer;
}

function getHumanChoice() {
    let human = prompt("What is your choice, rock, paper or scissors?")
    switch(human){
        case "rock":
            console.log("You have selected rock!")
            break;
        case "paper":
            console.log("You have selected paper!")
            break;
        case "scissors":
            console.log("You have selected scissors!")
            break;
    }
    return human;
}

function playRound(computerChoice, humanChoice){
    switch(computerChoice+ "|" +humanChoice){
        case "rock|scissors":
            console.log("You loose, rock beats scissors!");
            computerScore++;
            break;
        case "rock|paper":
            console.log("You won, paper beats rock!");
            humanScore++;
            break;
        case "scissors|paper":
            console.log("You loose, scissors beats paper");
            computerScore++;
            break;
        case "scissors|rock":
            console.log("You won, rock beats scissors!")
            humanScore++;
            break;
        case "paper|scissors":
            console.log("You won, scissors beats paper")
            humanScore++;
            break;
        case "paper|rock":
            console.log("You loose, paper beats rock!");
            computerScore++;
            break;
        case "rock|rock":
        case "paper|paper":
        case "scissors|scissors":
            console.log("It is a tie, play again!")
            break;

    }
    return computerScore, humanScore;
}

function playGame(){
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
    console.log(humanScore);
    console.log(computerScore);
}

for (let i=0; i<5; i++){
    playGame();
}




