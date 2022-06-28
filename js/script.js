const gameEnd = document.querySelector(".restart");
const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const marioJump = new Audio('./sounds/jump-small.mp3');
const gameOver = new Audio('./sounds/gameover.mp3');
const marioGame = new Audio('./sounds/mario-game.mp3');
const levelUp = new Audio('./sounds/level-up.mp3');

// Pipe Animation / Levels - START

const FRAME_DURATION = 1000 / 60; // 60fps frame duration
const getTime = typeof performance === 'function' ? performance.now : Date.now;
const MAX_POSITION = -window.innerWidth - 80;
var speed = 9; //inital pipe speed
let count = 0; //couter for pipe animation
let pipeX = 0; //pipe position
let level = 1; //level pontuation
let score = 0; //score pontuation

var pipeAnim = '';

function movePipe() {
  pipeX -= speed;

  // Reset position
  if (pipeX < MAX_POSITION) {

    pipeX = 80;
    ++count; // adds 1 for each animation end

    if (Number.isInteger(speed/5) && speed <= 46) {
      console.log(speed);
      ++level; // increase 1 level 
      document.getElementById('levelScore').innerHTML = level; //shows current level
      levelUp.play(); //play level up
      document.querySelector('.points').style.animation = "blink 0.5s 2"; // blinks score when increase level
      setTimeout(() => {
        document.querySelector('.points').style.animation = "none"; //clear blinks style
      }, 1100);
    }
    if (speed <= 46) {
      ++speed;
    } else {
      document.getElementById('levelScore').innerHTML = 'OMG';
    }
  }
  // Update position
  pipe.style.transform = `translateX(${pipeX}px)`;
  pipeAnim = requestAnimationFrame(movePipe);
}

pipeAnim = requestAnimationFrame(movePipe); //calls movePipe animation

// Pipe Animation / Levels - END

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

const loopGame = setInterval(() => {
  const pipePosition = window.scrollX + pipe.getBoundingClientRect().left // gets pipe position
  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
  ++score;
  document.getElementById('totalScore').innerHTML = ('00000' + (score / 10).toFixed(0)).slice(-5);

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    gameOver.play(); // play game over
    marioGame.pause(); // stops mario game sound

    gameEnd.style.display = ""; // show restart menu

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./Images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    clearInterval(loopGame);
    cancelAnimationFrame(pipeAnim); // stops movePipe animation

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
function restart() {
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