const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const clouds = document.querySelector(".cloud-game");
const ground = document.querySelector(".ground-game");
const trees = document.querySelector(".trees");
const mountain = document.querySelector(".mountain-game");
const bgmountain = document.querySelector(".bg-mountain");
const bgclouds = document.querySelector(".bg-clouds");
const titlescreen = document.querySelector(".title-screen");
const button = document.querySelector(".restart-buttom");
const score = document.querySelector(".score");
const pontuation = document.querySelector(".pontuation");
let alive = false;



//Title-Screen

const titleopacity = () => {
  titlescreen.classList.add("element-hidden");
  pipe.classList.remove("animation-stop");
  score.classList.remove("element-hidden");
  alive = true;
  return alive
}

document.addEventListener("keydown", titleopacity); 



// Jump-Action

const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

document.addEventListener("keydown", jump);


// Death-Action

const loopGame = setInterval(() => {
  
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./Images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    score.classList.add("element-hidden");

    clouds.classList.add("animation-stop");

    ground.classList.add("animation-stop");

    trees.classList.add("animation-stop");

    mountain.classList.add("animation-stop");

    bgmountain.classList.add("animation-stop");

    bgclouds.classList.add("animation-stop");

    alive = false;
  
  
    clearInterval(loopGame);
  }

}, 10);


// Points


let points = 0;

const counter = setInterval (() =>{

  const pipeleftposition = + window.getComputedStyle(pipe).left.replace("px", "");
  if (pipeleftposition <= 0){
    points = points + 10;
  }
  
  pontuation.textContent = points;
}, 100);


const interval = setInterval(function() { 
    if (alive == true) { 
       points++;
    }
    else {
      return;
    }
  }, 500); 



