const rock = document.createElement("button");
const paper =document.createElement("button");
const scissors = document.createElement("button");

const body = document.querySelector("body");
body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

rock.addEventListener("click",()=>{
    playRound("rock",getComputerChoice());
});
paper.addEventListener("click",()=>{
    playRound("paper",getComputerChoice())
});
scissors.addEventListener("click",()=>{
    playRound("scissors",getComputerChoice());
});

const div = document.createElement("div");
body.appendChild(div);

const result = document.createElement("div");
body.appendChild(result);

const winner_or_loser = document.createElement("div");
body.appendChild(winner_or_loser);

const reloading = document.createElement("div");
body.appendChild(reloading);
let human_score = 0;
let computer_score = 0;
let message = "";

 
    function getComputerChoice(){

        let  computer_choice= Math.floor(Math.random()*3);
        if(computer_choice===0){
            return "scissors";
        }else if (computer_choice===1){
            return "paper";
        }else if (computer_choice===2){
            return "rock";
        }
    
        }
        
    function playRound(human_choice,computer_choice){
        

         if (human_choice===computer_choice){
                message = "Draw";
                
        }else if  (human_choice==="scissors" && computer_choice=== "rock"){
            message = "You lose rock beats scissors";
            computer_score+=1;
        
        }else if (computer_choice==="scissors"&& human_choice==="rock"){
            message = "You win rock beats scissors";
            human_score +=1;
        }else if (computer_choice=== "paper" && human_choice==="rock"){
            message = "You lose paper beats rock";
            computer_score+=1;
        }else if(computer_choice==="rock"&& human_choice==="paper"){
            message= "You win paper beats rock"; 
            human_score +=1;           
        }else if(human_choice==="scissors"&& computer_choice==="paper"){
         
            message = "You win scissors beat paper ";
            human_score+=1;
        } else if(computer_choice==="scissors"&& human_choice==="paper"){
            message = "You lose scissors beats paper";
            computer_score+=1;
        }

        if (computer_score === 5){
            winner_or_loser.textContent = "Computer Win";
        }else if(human_score === 5){
            winner_or_loser.textContent = "Human Win";
        }
         if(computer_score === 5 || human_score === 5){
            reloading.textContent = "Reloading....";
            setTimeout(() => {
            window.location.reload();
            }, 3000);
         }
        
        let result_message = "Computer score: "+computer_score+" Human score: "+human_score;
        div.textContent = message;
        result.textContent= result_message;
    
    }

        

    
        




