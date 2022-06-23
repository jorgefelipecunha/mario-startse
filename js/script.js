// var & const

const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-form");
const theme = document.querySelector(".theme-song");
const restart = document.querySelector(".restart");
const jumpSong = document.querySelector(".jump-song");
const ingameScore = document.querySelector(".ingame");
const levelDisplay = document.querySelector(".level");

// Jump-action

function jump() {

    mario.classList.add("jump-mario");
  
    setTimeout(() => {
      mario.classList.remove("jump-mario");
    }, 1500);
  
    if (points >= 50) {
  
      mario.classList.remove("jump-mario");
      mario.classList.add("jump-mario-1");
  
      setTimeout(() => {
        mario.classList.remove("jump-mario-1");
      }, 1250);
    }
  
    if (points >= 100) {
  
      mario.classList.remove("jump-mario-1");
      mario.classList.add("jump-mario-2");
  
      setTimeout(() => {
        mario.classList.remove("jump-mario-2");
      }, 1000);
    }
  
    if (points >= 150) {
  
      mario.classList.remove("jump-mario-2");
      mario.classList.add("jump-mario-3");
  
      setTimeout(() => {
        mario.classList.remove("jump-mario-3");
      }, 750);
    }
  
    if (points >= 200) {
  
      mario.classList.remove("jump-mario-3");
      mario.classList.add("jump-mario-4");
  
      setTimeout(() => {
        mario.classList.remove("jump-mario-4");
      }, 500);
    }
  
    if (points >= 250) {
  
      mario.classList.remove("jump-mario-4");
      mario.classList.add("jump-mario-5");
  
      setTimeout(() => {
        mario.classList.remove("jump-mario-5");
      }, 250);
    }
  
    jumpSong.play();
  
  };
  
  document.addEventListener("keydown", jump);
  document.addEventListener("click", jump);
  document.addEventListener("touchstart", jump);
  
// Death-action

const loopGame = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = + window.getComputedStyle(mario).bottom.replace("px", "");
  
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
  
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;
  
      mario.src = "../images/mario-game-over.png";
      mario.classList.add("die-mario");
      mario.style.width = "75px";
      mario.style.marginLeft = "45px";
  
      ingameScore.style.display = "none";
  
      document.querySelector(".write-lvl").textContent = ``;
  
      restart.style.display = "block";
  
      document.querySelector(".total").textContent = points;
  
      jumpSong.src = "none";
  
      theme.src = "../audios/game-over.mp3";
  
      clearInterval(loopGame)
  
    }
  
  }, 0);

// Points-counter

let points = 0;

const counter = setInterval(() => {

  const pipePositionLeft = + window.getComputedStyle(pipe).left.replace("px", "");

  if (pipePositionLeft <= 0) {

    points++;

  }

  document.querySelector(".result").textContent = points;

}, 50);