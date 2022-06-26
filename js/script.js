function iniciar() {
const nav = document.querySelector(".menu");
const tfacil = document.querySelector('#facil').checked;
const tnormal = document.querySelector('#normal').checked;
const tdificil = document.querySelector('#dificil').checked;
const recomeca = document.querySelector("#recomeca");
const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
let pipePosition = pipe.offsetLeft;

let score = 0
let atualizaScore = true;
let timer = 0;

let velocidade;
let classMario;
let classPipe;

nav.classList.remove("menu");
nav.classList.add("menuNone");

  //pipe.style.left = `${pipePosition}px`;

console.log("VARIAVEIS")

if (tfacil === true) {
  velocidade = 800;
  classPipe = "pipe-game-slow";
  classMario = "jump-mario-slow";
} else if (tnormal === true){
  velocidade = 500;
  classPipe = "pipe-game-normal";
  classMario = "jump-mario";
} else if (tdificil === true){
  velocidade = 300;
  classPipe = "pipe-game-fast";
  classMario = "jump-mario-fast";
}
pipe.classList.add(classPipe);

let activeTimer = setInterval(funcTimer, 1000);

function funcTimer() {
  timer++;
  document.querySelector("#time").innerHTML = (timer + " sec");
}

  const jump = () => {
    mario.classList.add(classMario);
  
    setTimeout(() => {
      mario.classList.remove(classMario);
    }, velocidade);
	console.log("JUMP pipePosition "+pipePosition);
	if (atualizaScore === true && pipePosition >= 150 && pipePosition <= 300) {
		score += 100;
		document.querySelector("#score").innerHTML = score;
	}
  };


const loopGame = setInterval(() => {
  pipePosition = pipe.offsetLeft;
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

    atualizaScore = false;
    clearInterval(loopGame);
    clearInterval(activeTimer);
	recomeca.classList.remove("botaoOff");
    recomeca.classList.add("botaoOn");

  }
}, 10);

document.addEventListener("keydown", jump);
}
