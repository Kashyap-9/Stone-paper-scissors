let userScore =0;
let compScore =0;
console.log("test")
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw! Play again";
    msg.style.backgroundColor= "rgb(2, 39, 58)" ;
};
 
const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
};

const playGame =(userChoice) => {
    // console.log("user choice = ", userChoice);
    //Generate comp chioce -> modular prog (reusable component in future we've to any changes in diff choices )
     const compChoice = genCompChoice();
    //  console.log("comp choice = ", compChoice);

     if(userChoice === compChoice) {
        //Draw Game
        drawGame();
     }
     else {
        let userWin = true;
        if (userChoice === "rock"){
            // scissor, paper
            userWin = compChoice === "paper" ? false : true ;
     } else if (userChoice === "paper"){
           // rock , scissor
           userWin = compChoice === "scissor" ? false : true ;
     } else {
           // rock , paper
           userWin = compChoice === "rock" ? false : true;
     }
      showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
});