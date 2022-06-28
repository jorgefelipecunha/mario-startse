const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const over1 = document.querySelector('.game-over-1'); //Desafio
const over2 = document.querySelector('.game-over-2'); //Desafio

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

    over1.style.display = "block";  //Desafio
    over2.style.display = "block";  //Desafio

    clearInterval(loopGame);
  }
}, 10);

document.addEventListener("keydown", jump);

const score = document.querySelector('#score');
score.textContent = 0;
let placar = parseInt(score.textContent);
const teste = over2.style.display;

console.log(teste); 

const loopOver = setInterval( () => {         
    if(over2.style.display == "none"){
        placar = placar + 1;
        console.log(placar);
        score.textContent = placar;
    } else{ 
        placar = placar + 0;          
    }          
}, 1500);      
