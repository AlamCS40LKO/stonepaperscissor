let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#computer-score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]

}

const drawGame = () => {
}

const showWinner=(userWin,userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win!! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="Green";
    }else{
        computerScore++;
        compScorePara.innerText=computerScore;
        msg.innerText=`Computer Win!! ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor="Red";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice()


    //match the condition user and computer
    if (compChoice === userChoice) {
        // Draw game
        drawGame();
        msg.innerText="Opps!! Match draw Play again"
        msg.style.backgroundColor="salmon";

    } else {
        userWin = true;
        if (userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let choiceId = choice.getAttribute("id")
        const userChoice = choiceId
        playGame(userChoice)
    })
})