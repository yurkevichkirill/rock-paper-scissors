let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNum = Math.random();
    if(randomNum < 1/3){
        return 'rock';
    }
    else if (randomNum < 2/3){
        return 'paper';
    }
    else return 'scissors';
}

const results = document.querySelector("#result");
const score = document.querySelector("#score");

function playRound(humanChoice, computerChoice){
    if(humanChoice === 'rock'){
        if(computerChoice === 'rock'){
            results.textContent = 'Computer pick rock. Draw';
        }
        else if(computerChoice === 'paper'){
            results.textContent = 'Computer pick paper. You lose. Paper beats rock';
            computerScore++;
        }
        else if(computerChoice === 'scissors'){
            results.textContent = 'Computer pick scissors. You win. Rock beats scissors';
            humanScore++;
        }
    }
    else if(humanChoice === 'scissors'){
        if(computerChoice === 'scissors'){
            results.textContent = 'Computer pick scissors. Draw';
        }
        else if(computerChoice === 'rock'){
            results.textContent = 'Computer pick rock. You lose. Rock beats scissors.';
            computerScore++;
        }
        else if(computerChoice === 'paper'){
            results.textContent = 'Computer pick paper. You win. Scissors beats paper.';
            humanScore++;
        }
    }
    else if(humanChoice === 'paper'){
        if(computerChoice === 'paper'){
            results.textContent = 'Computer pick paper. Draw';
        }
        else if(computerChoice === 'rock'){
            results.textContent = 'Computer pick rock. You win. Paper beats rock.';
            humanScore++;
        }
        else if(computerChoice === 'scissors'){
            results.textContent = 'Computer pick scissors. You lose. Scissors beat paper.';
            computerScore++;
        }
    }
    score.textContent = `Score: You ${humanScore} vs Computer ${computerScore}`;
}

let humanChoice = "";
let menu = document.querySelector("#menu");
menu.addEventListener("click", (event) => {
    let target = event.target;
    humanChoice =  target.id;
    playRound(humanChoice, getComputerChoice());
    if(computerScore === 5){
        results.textContent = "Computer wins!";
        computerScore = humanScore = 0;
    }
    else if (humanScore === 5){
        results.textContent = "You win! Congratulations!!!"
        computerScore = humanScore = 0;
    }
});


// function playGame(){
//     for(let i = 0; i < 5; i++){
//         playRound(getHumanChoice(), getComputerChoice());
//     }
//     console.log(`Total score: You ${humanScore} vs Computer ${computerScore}`);
// }


//playGame();
