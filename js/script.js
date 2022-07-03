
let musica=document.getElementById("musica");
let pulo=document.getElementById("pulo");
let morte=document.getElementById("morte");
let fim=document.getElementById("somGameover");

const gameOver = document.querySelector('.over, .hidden')
const btn = document.querySelector('#button')

const score = document.querySelector('.score');
var count = 0;
const time = setInterval(() => {
  count++;

  document.getElementById('count').innerHTML = count;
}, 1);


const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");

musica.play();

const jump = () => {
  mario.classList.add("jump-mario");
  pulo.play(); 

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./Images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";
    morte.play();
    musica.pause();
    
  
    
    const loop2 = setInterval(() => {
      document.getElementById('countEnd').innerHTML = count;
  })

    clearInterval(time);

    clearInterval(loopGame);

    gameOver.classList.add('over')
    gameOver.classList.remove('hidden')

    btn.classList.add('over')
    btn.classList.remove('hidden')

    
    btn.addEventListener('click', function() {

      location.reload()
    })
  }
  
}, 10);


document.addEventListener("keydown", jump);
document.addEventListener('click', jump);


