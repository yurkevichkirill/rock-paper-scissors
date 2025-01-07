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

function getHumanChoice(){
    while(1){
        let humanChoice = prompt('Pick rock, paper or scissors');
        humanChoice = humanChoice.toLowerCase();
        if(humanChoice != 'rock' && humanChoice != 'paper' && humanChoice != 'scissors'){
            console.log('You input is incorrect, repeat')
        }
        else return humanChoice;
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === 'rock'){
        if(computerChoice === 'rock'){
            console.log('Computer pick rock');
            console.log('Draw');
        }
        else if(computerChoice === 'paper'){
            console.log('Computer pick paper');
            console.log('You lose. Paper beats rock');
            computerScore++;
        }
        else if(computerChoice === 'scissors'){
            console.log('Computer pick scissors');
            console.log('You win. Rock beats scissors');
            humanScore++;
        }
    }
    else if(humanChoice === 'scissors'){
        if(computerChoice === 'scissors'){
            console.log('Computer pick scissors');
            console.log('Draw');
        }
        else if(computerChoice === 'rock'){
            console.log('Computer pick rock');
            console.log('You lose. Rock beats scissors');
            computerScore++;
        }
        else if(computerChoice === 'paper'){
            console.log('Computer pick paper');
            console.log('You win. Scissors beats paper');
            humanScore++;
        }
    }
    else if(humanChoice === 'paper'){
        if(computerChoice === 'paper'){
            console.log('Computer pick paper');
            console.log('Draw');
        }
        else if(computerChoice === 'rock'){
            console.log('Computer pick rock');
            console.log('You win. Paper beats rock');
            humanScore++;
        }
        else if(computerChoice === 'scissors'){
            console.log('Computer pick scissors');
            console.log('You lose. Scissors beat paper');
            computerScore++;
        }
    }
    console.log(`Score: You ${humanScore} vs Computer ${computerScore}`);
}

function playGame(){
    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Total score: You ${humanScore} vs Computer ${computerScore}`);
}

playGame();