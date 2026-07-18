function playGame(n){
    function getHumanChoice(){

        let human_choice = prompt("Enter your choice: ");

        return human_choice;
        }
        let human_score=0;
        let computer_score=0;
 
    function getComputerChoice(){

        let  computer_choice= Math.floor(Math.random()*3);
        if(computer_choice===0){
            return "Scissors";
        }else if (computer_choice===1){
            return "Paper";
        }else if (computer_choice===2){
            return "Rock";
        }
    
        }
        let round_count=0;
        
        function playRound(human_choice,computer_choice){
             
         human_choice = human_choice.toLowerCase();

        computer_choice= computer_choice.toLowerCase();

         if (human_choice===computer_choice){
                console.log("Draw");
        }
        else if  (human_choice==="scissors" && computer_choice=== "rock"){
            computer_score +=1;
            console.log("You lose rock beats scissors");
        }else if (human_choice==="rock"&& computer_choice==="scissors"){
            human_score +=1;
            console.log("You win rock beats scissors");
        }
        else if  (human_choice === "paper"&& computer_choice==="rock"){
            human_score+=1;
            console.log("You win paper beats rock ");
        }else if (computer_choice=== "paper" && human_choice==="rock"){
            computer_score+=1;
            console.log("You lose paper beats rock");
        }
        else if (human_choice==="scissors"&& computer_choice==="paper"){
            human_score+=1;
            console.log("You win scissors beat paper ");
        } else if(computer_choice==="scissors"&& human_choice==="paper"){
            computer_score+=1;
            console.log("You lose scissors beats paper");
        }
        let total_count="Your score: "+" "+human_score+" "+"computer score: "+computer_score;
            console.log(total_count); 
}
        while (round_count<n){
           let human_choice = getHumanChoice();
           let computer_choice = getComputerChoice();
           playRound(human_choice, computer_choice);
            round_count+=1;
}
        if (computer_score>human_score){
            console.log("computer win");
        }else if(human_score>computer_score) {
            console.log("You win");
        }else{
            console.log("draw");
        }
}
playGame(5);

