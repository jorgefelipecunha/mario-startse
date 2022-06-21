const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
let score = 0
let atualizaScore = true;
console.log(mario);
console.log(pipe);
let marioacum='';
let timer=0;

let activeTimer	= setInterval(funcTimer,1000);

function funcTimer() {
  timer++;
//  document.getElementById("time").value=timer;
  document.querySelector("#time").innerHTML = (timer + " sec");
}

const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
    score += 100;
  }, 800);
  
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

    clearInterval(loopGame);
    clearInterval(activeTimer);
  } else {
      document.querySelector("#score").innerHTML = score;

  }

}, 10);

document.addEventListener("keydown", jump);
