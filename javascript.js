function getComputerChoice (){
    let choice = Math.floor(Math.random() * 3);
    if (choice==1){
        return "rock";
    } else if (choice==2){
        return "paper";
    } else {
        return "scissors";
    }
}
function getHumanChoice(){
    let hChoice = prompt("plase choose one of the following options","Rock,Paper or scissors");
    return hChoice;
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame(round){
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice==computerChoice){
            console.log("duce");
        } else if (humanChoice=="paper" && computerChoice=="rock"){
            console.log("you win!, paper beats rock");
            humanScore++;
        } else if (humanChoice=="paper" && computerChoice=="scissors"){
            console.log("you lose! scissors beats paper");
            computerScore++; 
        } else if (humanChoice=="scissors" && computerChoice=="rock"){
            console.log("you lose! rock beats scissors");
            computerScore++;
        } else if (humanChoice=="scissors" && computerChoice=="paper"){
            console.log("you win!, scissors beats paper");
            humanScore++;
        } else if (humanChoice=="rock" && computerChoice=="paper"){
            console.log("you lose! paper beats rock");
            computerScore++; 
        } else {
            console.log("you win!, rock beats scissors");
            humanScore++;   
        }
    }
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < round; i++){
        playRound(humanSelection, computerSelection);
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
    }
    if (humanScore>computerScore){
        console.log("you win!");
    } else if(computerScore>humanScore){
        console.log("you lose!");
    } else {
        console.log("duce");
    }
}
playGame(5);