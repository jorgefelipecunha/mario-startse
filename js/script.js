const yoda1 = document.querySelector(".yoda");
const stormtrooper1 = document.querySelector(".stormtrooper");
const gameOver = document.querySelector(".game-over"); 
const buttonRestart = document.querySelector(".bt-restart");
const backgroundGame = document.querySelector(".game");
const audioJump = new Audio("./audio/audio-lightsab.wav");
const audioGameOver = new Audio("./audio/audio-game-over.mp3");
const audioStart = new Audio("./audio/star-wars-theme.mp3");
const scoreGame = document.querySelector(".score");


audioStart.play();


// ==== Yoda Pular ====

const jump = () => {
  yoda1.classList.add("jump-yoda");

  setTimeout(() => {
    yoda1.classList.remove("jump-yoda");
  }, 1000);

  audioJump.play();
};

document.addEventListener("keydown", jump);
document.addEventListener("click", jump)
document.addEventListener("touchstart", jump);


// ==== Pontuação ====

let score1 = 0;
let cross = true;

setInterval(() => {
  const stormtrooperPosition1 = stormtrooper1.offsetLeft;
  const yodaPosition1 = +window
    .getComputedStyle(yoda1)
    .bottom.replace("px", "");

  if (stormtrooperPosition1 <= 120 && stormtrooperPosition1 > 0 && yodaPosition1 < 115){
    if (score1 != 0)
        scoreGame.innerHTML = "Score " + score1;
} else if (yodaPosition1 > 115 && cross) {
    score1 += 10;
    updateScore(score1);
    cross = false;
    setTimeout(() => {
        cross = true;
    }, 1000);
  }
}, 10);

function updateScore(score1) {
  scoreGame.innerHTML = "Score " + score1;
}


// ==== Colisão + Game Over ====

  const loopGame = setInterval(() => {
  const stormtrooperPosition = stormtrooper1.offsetLeft;
  const backgroundGamePosition = backgroundGame.offsetLeft;
  const yodaPosition = +window
    .getComputedStyle(yoda1)
    .bottom.replace("px", "");

  if (stormtrooperPosition <= 120 && stormtrooperPosition > 0 && yodaPosition < 115) {

    stormtrooper1.style.animation = "none";
    stormtrooper1.style.left = `${stormtrooperPosition}px`;

    yoda1.style.animation = "none";
    yoda1.style.bottom = `${yodaPosition}px`;

    backgroundGame.style.animation = "none";
    backgroundGame.style.bottom = `${backgroundGamePosition}px`;

    yoda1.src = "./Images/yoda-game-over.png";
    yoda1.style.width = "150px";
    yoda1.style.marginLeft = "45px";

    audioStart.pause();
    audioGameOver.play();

    gameOver.style.visibility = "visible";

    clearInterval(loopGame);
  }
}, 10);