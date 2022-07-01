const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const ground = document.querySelector(".ground-game");
const trees = document.querySelector(".trees");
const trees2 = document.querySelector(".trees2");
const trees3 = document.querySelector(".trees3");
const mariogameover= document.querySelector(".mario-game-over");
const bgmountain = document.querySelector(".bg-mountain");
const bgclouds = document.querySelector(".bg-clouds");
const titlescreen = document.querySelector(".title-screen");
const button = document.querySelector(".restart-buttom");
const score = document.querySelector(".score");
const pontuation = document.querySelector(".pontuation");
const restart = document.querySelector(".restart");
const total = document.querySelector(".total");
const jumpSong = document.querySelector(".jump-song");
const maintheme = document.querySelector(".main-theme");
const gameover = document.querySelector(".game-over");
let alive = false;

//Title-Screen

const titleopacity = () => {
  titlescreen.classList.add("element-hidden");
  pipe.classList.remove("animation-stop");
  score.classList.remove("element-hidden");
  alive = true;
  document.removeEventListener("keydown", titleopacity);
  document.removeEventListener("click", titleopacity);
  maintheme.play();
}

document.addEventListener("click", titleopacity); 
document.addEventListener("keydown", titleopacity); 


// Jump-Action

const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500); 

  jumpSong.play();
};

document.addEventListener("keydown", jump);
document.addEventListener("click", jump);

// Death-Action

const loopGame = setInterval(() => {
  
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./Images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    mario.classList.add("mario-game-over");
    score.classList.add("element-hidden");
    ground.classList.add("animation-stop");
    trees.classList.add("animation-stop");
    trees2.classList.add("animation-stop");
    trees3.classList.add("animation-stop");
    bgmountain.classList.add("animation-stop");
    bgclouds.classList.add("animation-stop");
    restart.classList.remove("element-hidden");

    alive = false;

    total.textContent = points;

    jumpSong.src = "#";
    maintheme.src="#";

    gameover.play();

    clearInterval(loopGame);
  }

}, 10);


// Points

let points = 0;

const counter = setInterval (() =>{
  const pipeleftposition = + window.getComputedStyle(pipe).left.replace("px", "");
  if (pipeleftposition <= 10){  
    points = points + 10;
  }
  pontuation.textContent = points;
}, 100);


const interval = setInterval(function() { 
    if (alive == true) { 
       points++;
    }
  }, 500); 