const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const score = document.querySelector("#score");
const gameOver = document.querySelector("#gameOver");
const jumpSound = document.querySelector("#jump");
const deathSound = document.querySelector("#death");
const restart = document.querySelector("#restart");

const myAudio = new Audio('../assets/theme-sound.mp3');
if (typeof myAudio.loop == 'boolean') {
  myAudio.loop = true;
} else {
  myAudio.addEventListener('ended', () =>{
  this.currentTime = 0
  this.play;
  }, false);
}
myAudio.play();

const jump = () => {
  mario.classList.add("jump-mario");
  jumpSound.play();

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = parseInt(window
    .getComputedStyle(mario)
    .bottom.replace("px", ""));

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./Images/mario-game-over.png";
    deathSound.play();
    myAudio.pause();
    gameOver.style.display = "block";
    restart.style.display = "block";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    clearInterval(loopGame);
  }
}, 10);

let interval = null;
let playerScore = 0;
const scoreCounter = () => {
  playerScore++;
  score.innerHTML = `Score <b>${playerScore}</b>`;

}
interval = setInterval(scoreCounter, 200);


document.addEventListener("keydown", jump);