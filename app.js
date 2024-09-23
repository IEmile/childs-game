function getComputerChoice(){
    let random= Math.random();
    if(random<.3){
        return "rock";
    }
    else if(random>=.3 && random<.6){
        return "paper";
    }
    else return "scissors";
}

function getHumanChoice(){
    let choice=prompt("choose Rock, Paper or scissors.")
    if(choice=="rock" || choice=="paper" || choice=="scissors"){
    let name=choice.toLocaleLowerCase();
    return name;
    }
    else return "Too late";
}
function playGame(){
    let humanScore=0;
    let computerScore=0; 
    function playRound(computer, human){
        console.log("compter : "+computer)
        console.log("human : "+human)
        
        if(computer == "rock" && human == "scissors") {
            console.log("Computer Wins... rock beats scissors");
            computerScore += 1;
        }
        else if(computer == "paper" && human == "rock") {
            console.log("Computer Wins... paper beats rock");
            computerScore += 1;
        }
        else if(computer == "scissors" && human == "paper") {
            console.log("Computer Wins... scissors beats paper");
            computerScore += 1;
        }
        else if(human == "rock" && computer == "scissors") {
            console.log("Human Wins... rock beats scissors");
            humanScore += 1;
        }
        else if(human == "paper" && computer == "rock") {
            console.log("Human Wins... paper beats rock");
            humanScore += 1;
        }
        else if(human == "scissors" && computer == "paper") {
            console.log("Human Wins... scissors beats paper");
            humanScore += 1;
        }
        else if(human=="Too late"){
            console.log("Computer Wins... scissors beats paper");
            computerScore += 1;
        }
        else {
            console.log("Same, go again");
        }
    }


    for(let i=1 ; i<=5 ; i++){
                console.log("............ "+i+"..........")
                let human=getHumanChoice();
                let computer=getComputerChoice();
                playRound(computer,human)

    }
    console.log("Human scores:"+humanScore);
    console.log("Computer scores:"+computerScore);
}

playGame()