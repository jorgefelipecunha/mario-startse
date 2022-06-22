const gameEnd = document.querySelector(".restart");
const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const marioJump = new Audio('../assets/jump-small.mp3');
const gameOver = new Audio('../assets/gameover.mp3');
const marioGame = new Audio('../assets/mario-game.mp3');
const levelUp = new Audio('../assets/level-up.mp3');


let level = 1; //level pontuation
let score = 0; //score pontuation

// Play marioGame sounds in loop until gameover
if (typeof marioGame.loop == 'boolean') {
  marioGame.loop = true;
}
else {
  marioGame.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
  }, false);
}
marioGame.play(); // start mario game sound
marioGame.loop = true;

// Mario Jump action
const jump = () => {
  mario.classList.add("jump-mario"); // add jump-mario style
  marioJump.play();

  setTimeout(() => {
    mario.classList.remove("jump-mario"); // remove jump-mario style
  }, 600);
};

let velocity = 2.3; //initial animation duration for pipe

// Increase level each 20seconds
const loopLevel = setInterval(function () {
  ++level;
  document.getElementById('levelScore').innerHTML = level; //shows current level
  if (velocity > 0) {
    velocity = velocity - 0.2;
    pipe.style.animation = "pipe-animation "+`${velocity}`+"s infinite linear" //sets new velocity for pipe animation
    // pipe.style.animation - duration = `${velocity}` + "s" //sets new velocity for pipe animation
    console.log(velocity);
    levelUp.play();
    document.querySelector('.points').style.animation = "blink 1s 3";   
  }
}, 5000);

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

  ++score;
  document.getElementById('totalScore').innerHTML = ('00000' + (score / 10).toFixed(0)).slice(-5);
  
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    gameOver.play(); // play game over
    marioGame.pause(); // stops mario game sound

    gameEnd.style.display = "";

    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./Images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    clearInterval(loopGame);
    clearInterval(loopLevel);
    document.querySelector('.points').style.animation = "blink 1.5s infinite";   

  }
}, 10);

// Reload the page and restart game
function restart(){
  document.location.reload();
}

// Mario jump's on spacebar ou arrow up key press
document.addEventListener('keydown', event => {
  if (event.code === 'Space' || event.code === 'ArrowUp') {
    jump();
  }
})
// Mario jump's on touch screen
document.addEventListener("touchstart", jump);