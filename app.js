let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const genCompchoice = () => {
  const options = ["Rock", "Paper", "Scissor"];
  const randomIdx = Math.floor(Math.random() * 3); // use to gen random number b/w 1 to 3
  return options[randomIdx];
};

const drawGame = () => {
  msg.innerText = "Game Was Draw. Play Again ...";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    userscorePara.innerText = userscore;
    msg.innerText = `You Win ! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorePara.innerText = compscore;
    msg.innerText = `You Lose.   ${compchoice} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  console.log("userchoice =", userchoice);
  const compchoice = genCompchoice();
  console.log("compchoice =", compchoice);

  if (userchoice === compchoice) {
    drawGame();
  } else {
    let userwin = true;
    if (userchoice === "Rock") {
      //comp have two choice only (paper or scissor)
      userwin = compchoice === "Paper" ? false : true;
    } else if (userchoice === "Paper") {
      //comp have two choice only (rock or scissor)
      userwin = compchoice === "Scissor" ? false : true;
    } else if (userchoice === "Scissor") {
      //comp have two choice only (Rock or Paper)
      userwin = compchoice === "Rock" ? false : true;
    }
    showWinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});

