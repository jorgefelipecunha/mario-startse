//function iniciar() {
let mario = document.querySelector(".super-mario");
let pipe = document.querySelector(".pipe-game");
let score = 0
let atualizaScore = true;
let timer = 0;
let pipePosition = 0;

let velocidade = 500;
let optclass = 2

let tfacil = document.querySelector('#facil').checked;
let tnormal = document.querySelector('#normal').checked;
let tdificil = document.querySelector('#dificil').checked;

if (tfacil === true) {
  Velocidade = 800;
  optclass = 1;
  pipe.classList.add(".pipe-game-slow");

} else if (tnormal === true){
  Velocidade = 500;
  optclass = 2;
  pipe.classList.add(".pipe-game");

} else if (tdificil === true){
  Velocidade = 300;
  optclass = 3;
  pipe.classList.add(".pipe-game-fast");
}

document.querySelector("#teste").innerHTML = (optclass);

let activeTimer = setInterval(funcTimer, 1000);

function funcTimer() {
  timer++;
  document.querySelector("#time").innerHTML = (timer + " sec");
}

const jump = () => {
  switch (optclass) {
    case 1:
      mario.classList.add("jump-mario-slow");
      break;
    case 2:
      mario.classList.add("jump-mario");
      break;
    case 3:
      mario.classList.add("jump-mario-fast");
      break;
    }

  setTimeout(() => {
    switch (optclass) {
      case 1:
        mario.classList.remove("jump-mario-slow");
        break;
      case 2:
        mario.classList.remove("jump-mario");
        break;
        case 3:
          mario.classList.remove("jump-mario-fast");
          break;
    }
    if (atualizaScore === true && (pipePosition <= 0 || pipePosition >= 900)) {
      score += 100;
      document.querySelector("#score").innerHTML = score;
    }
  }, velocidade);
};

const loopGame = setInterval(() => {
  pipePosition = pipe.offsetLeft;
  marioPosition = +window
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
    switch (optclass) {
      case 1:
        pipe.classList.remove(".pipe-game-slow");
        pipe.classList.add(".pipe-game");
        break;
      case 2:
        break;
      case 3:
        pipe.classList.remove(".pipe-game-fast");
        pipe.classList.add(".pipe-game");
        break;
    }

  }
}, 10);

document.addEventListener("keydown", jump);
//}