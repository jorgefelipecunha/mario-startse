const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const clouds = document.querySelector(".cloud-game");
const ground = document.querySelector(".ground-game");
const trees = document.querySelector(".trees");
const mountain = document.querySelector(".mountain-game");
const bgclouds= document.querySelector(".bg-clouds");
const titlescreen = document.querySelector(".title-screen");

//TITLE-SCREEN

//.title-screen-hidden  classe para esconder  a title screen

const titleopacity = () => {
  titlescreen.classList.add("title-screen-hidden");
  pipe.classList.remove("animation-stop");
}



const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

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

    clouds.classList.add("animation-stop");

    ground.classList.add("animation-stop");

    trees.classList.add("animation-stop");

    mountain.classList.add("animation-stop");

    bgclouds.classList.add("animation-stop");
    
    clearInterval(loopGame);
  }
}, 10);

document.addEventListener("keydown", titleopacity); 
document.addEventListener("keydown", jump);
