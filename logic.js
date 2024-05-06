const Answers = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let human = ""; // definiramo globalnu varijablu, mora biti definirana izvan funkcije

//definiramo tipke
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

//definiramo područje za prikaz rezultata
const container = document.querySelector("#container");
const score1 = document.createElement("div");
score1.classList.add("content");
const score2 = document.createElement("div");
score2.classList.add("content");
const winner = document.createElement("h2");
winner.classList.add("content");

rock.addEventListener('click', (event) => {
    human = "rock"; // radimo samo update definirane varijable
    playGame(); // pozivamo funkciju
} );

paper.addEventListener('click', (event) => {
    human = "paper"; // radimo samo update definirane varijable
    playGame(); // pozivamo funkciju
});

scissors.addEventListener('click', (event) => {
    human = "scissors"; // radimo samo update definirane varijable
    playGame(); // pozivamo funkciju
});

function getComputerChoice() {
    var random = Math.floor((Math.random()*Answers.length));
    var randomAnswer = Answers[random];
    return randomAnswer;
}

function playRound(computerChoice, humanChoice){
    switch(computerChoice+ "|" +humanChoice){
        case "rock|scissors":
            console.log("You lose, rock beats scissors!");
            computerScore++;
            break;
        case "rock|paper":
            console.log("You won, paper beats rock!");
            humanScore++;
            break;
        case "scissors|paper":
            console.log("You lose, scissors beats paper");
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
            console.log("You lose, paper beats rock!");
            computerScore++;
            break;
        case "rock|rock":
        case "paper|paper":
        case "scissors|scissors":
            console.log("It is a tie, play again!")
            break;
    }
    return { computerScore, humanScore }; // vracamo rezultat
}

// trebamo logiku za rezultat postavit unutar ove funkcije jer su nam tu 
//pozvane vec varijable humanScore i computerScore

function playGame(){
    const computerSelection = getComputerChoice();
    playRound(computerSelection, human);
    score1.textContent = "Human score: " + humanScore;
    score2.textContent= "Computer Score: " + computerScore;
    if (humanScore === 5 && computerScore < 5){
        winner.textContent = "You won!";
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5 && humanScore < 5) {
        winner.textContent = "Computer wins!";
        humanScore = 0;
        computerScore = 0;
    }
    else {
        winner.textContent = "Play!"
    }

}





container.appendChild(score1);
container.appendChild(score2);
container.appendChild(winner);
