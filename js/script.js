const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const bg = document.querySelector(".game");
const gameOver = document.querySelector(".gameOver");

bg.style.backgroundPositionX = 0;
const ground = document.querySelector(".ground");
ground.style.backgroundPositionX = 0;

var pipePosition = pipe.offsetLeft;
var marioPosition =+ window
.getComputedStyle(mario)
  .bottom.replace("px", "");



const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

document.addEventListener('keydown', jump);

const loopGame = setInterval(() => {

  MoveBG();
  MoveGround();
  CheckIfCollide();

}, 10);

function MoveBG() {
  let x = Number.parseInt(bg.style.backgroundPositionX);
  x -= 1;
  bg.style.backgroundPositionX = `${x}px`;
}
function MoveGround() {
  let x = Number.parseInt(ground.style.backgroundPositionX);
  x -= 10;
  ground.style.backgroundPositionX = `${x}px`;
}

function CheckIfCollide() {

  marioPosition =+ window
  .getComputedStyle(mario)
    .bottom.replace("px", "");
  
  pipePosition = pipe.offsetLeft;

  /*Pipe*/
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    GameStateLose();
  }
}

function GameStateLose() {
  pipe.style.animation = "none";
  pipe.style.left = `${pipePosition}px`;

  mario.style.animation = "none";
  mario.style.bottom = `${marioPosition}px`;

  mario.src = "./Images/mario-game-over.png";
  mario.style.width = "60px";
  mario.style.marginLeft = "45px";

  gameOver.style.display = "flex";

  clearInterval(loopGame);
}