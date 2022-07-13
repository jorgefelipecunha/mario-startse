const lula = document.querySelector(".lula");
const tebett = document.querySelector(".tebett");
const ciro = document.querySelector(".ciro");
const bolsonaro = document.querySelector(".bolsonaro");
const nuvens = document.querySelector(".cloud-game");
const gameOver = document.querySelector(".game-over");
const playAgain = document.querySelector(".play-again");
const planalto = document.querySelector(".planalto");
const jumpLula = document.querySelector('.jump-lula');
const win = document.querySelector('.win');
const granFinale = document.querySelector('.gran-finale');
const bandeira = document.querySelector('.bandeira');
const startContainer = document.querySelector('.start');
const fimContainer = document.querySelector(".fim");

const jump = () => {
  lula.classList.add("jump-lula");

  setTimeout(() => {
    lula.classList.remove("jump-lula");
  }, 600);
};

const start = () => {
  lula.src = "./Images/lula.gif";
  tebett.style.animation = "fig-animation 6s linear";
  ciro.style.animation = "fig-animation 6s linear 2s";
  bolsonaro.style.animation = "fig-animation 6s linear 4s";
  startContainer.style.display = "none";
  playAgain.style.display = "none";
  gameOver.style.display = "none";
  
  const loopGame = setInterval(() => {

    const tebettPosition = tebett.offsetLeft;
    const ciroPosition = ciro.offsetLeft;
    const bolsonaroPosition = bolsonaro.offsetLeft;
    const lulaBottomPosition = +window
    .getComputedStyle(lula)
    .bottom.replace("px", "");
  
    if ((tebettPosition <= 100 && tebettPosition > 0 && lulaBottomPosition < 80) || (ciroPosition <= 120 && ciroPosition > 0 && lulaBottomPosition < 80)) {
      
      tebett.style.animation = "none";  
      ciro.style.animation = "none";
      bolsonaro.style.animation = "none";
      lula.src = "./Images/the-end.gif";
  
      setTimeout(() => {
        playAgain.style.display = "flex";
      },1500);
  
    clearInterval(loopGame);
  
  
    } else if (bolsonaroPosition <= 120 && bolsonaroPosition > 0 && lulaBottomPosition < 80) {
      
      tebett.style.animation = "none";  
      ciro.style.animation = "none";
      bolsonaro.style.animation = "none";
      lula.src = "./Images/the-end.gif";

      gameOver.style.display = "flex";
  
      setTimeout(() => {
        playAgain.style.display = "flex";
      },3000);
  
      clearInterval(loopGame);
  
      } else if (ciroPosition < 0 && bolsonaroPosition < 0){
        
        lula.classList.add("win");
        planalto.style.animation = "planalto-animation 4s linear";
  
  
        setTimeout(() => {
          lula.classList.replace("win","gran-finale");
          lula.style.left = '40%';
          lula.style.width ='350px';
          planalto.style.right = '30%';
          nuvens.style.animation = 'none';
          nuvens.style.left = '40%'
          nuvens.src = './Images/fireworks.gif';
          nuvens.style.width = '500px'
          bandeira.style.animation = 'bandeira 6s';
          bandeira.style.width = '450px';
        },4000);
  
        setTimeout(() => {
          fimContainer.style.display = "flex";
        },5000);
        
        setTimeout(() => {
          location.reload();
        },11000)
        
        clearInterval(loopGame);
      };
  
  }, 10);

  document.addEventListener("keydown", jump);
};



