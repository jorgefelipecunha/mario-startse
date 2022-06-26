const gameEnd = document.querySelector(".restart");
const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const marioJump = new Audio('./sounds/jump-small.mp3');
const gameOver = new Audio('./sounds/gameover.mp3');
const marioGame = new Audio('./sounds/mario-game.mp3');
const levelUp = new Audio('./sounds/level-up.mp3');


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

// Level UP 
let velocity = 2.2; //initial animation duration for pipe
const loopLevel = setInterval(function () {

  ++level; // increase 1 level each loop
  document.getElementById('levelScore').innerHTML = level; //shows current level
  levelUp.play(); //play level up
  pipe.style.animation = "pipe-animation " + `${velocity}` + "s infinite linear" //sets new velocity for pipe animation
  document.querySelector('.points').style.animation = "blink 0.5s 4"; // blinks score when increase level
  setTimeout(() => {
    document.querySelector('.points').style.animation = "none"; //clear blinks style
  }, 2100);

  if (velocity >= 0.8) { //level up to 10 then stops increase
    velocity = velocity - 0.2;
  } else {
    clearInterval(loopLevel);
    document.getElementById('levelScore').innerHTML = "OMG";
  }
},10000); //Increase level each 10seconds

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

  ++score;
  document.getElementById('totalScore').innerHTML = ('00000' + (score / 10).toFixed(0)).slice(-5);

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    gameOver.play(); // play game over
    marioGame.pause(); // stops mario game sound

    gameEnd.style.display = ""; // show restart menu

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

    // Restart on Gameover with spacebar
    document.addEventListener('keydown', event => {
      if (event.code === 'Space') {
        restart();
      }
    })
  }
}, 10);

// Reload the page and restart game
function restart(){
  document.location.reload();
}

// Mario jump's on spacebar or arrowup
document.addEventListener('keydown', event => {
  if (event.code === 'Space' || event.code === 'ArrowUp') {
    jump();
  }
})
// Mario jump's on touch screen
document.addEventListener("touchstart", jump);