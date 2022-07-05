const lula = document.querySelector(".lula");
const tebett = document.querySelector(".tebett");
const ciro = document.querySelector(".ciro");
const bolsonaro = document.querySelector(".bolsonaro");
const nuvens = document.querySelector(".cloud-game");
const game = document.querySelector(".game");
const gameOver = document.querySelector(".game-over");
const playAgain = document.querySelector(".play-again");
const botaoClicado = document.getElementById("try-again");
const planalto = document.querySelector(".planalto");
const jumpLula = document.querySelector('.jump-lula');


const jump = () => {
  lula.classList.add("jump-lula");

  setTimeout(() => {
    lula.classList.remove("jump-lula");
  }, 600);
};



const loopGame = setInterval(() => {
  const tebettPosition = tebett.offsetLeft;
  const ciroPosition = ciro.offsetLeft;
  const bolsonaroPosition = bolsonaro.offsetLeft;
  const planaltoPosition = planalto.offsetRight;
  const lulaPosition = lula.offsetLeft;
  const lulaBottomPosition = +window
    .getComputedStyle(lula)
    .bottom.replace("px", "");

  if ((tebettPosition <= 100 && tebettPosition > 0 && lulaBottomPosition < 80) || (ciroPosition <= 120 && ciroPosition > 0 && lulaBottomPosition < 80)) {
    tebett.style.animation = "none";
    tebett.style.left = `${tebettPosition}px`;

    ciro.style.animation = "none";
    ciro.style.left = `${ciroPosition}px`;

    bolsonaro.style.animation = "none";
    bolsonaro.style.left = `${bolsonaroPosition}px`;

    planalto.style.animation = "none";

    lula.style.animation = "none";
    lula.style.bottom = `${lulaBottomPosition}px`;

    lula.src = "./Images/the-end.gif";
    lula.style.width = "300px";
    lula.style.bottom = "0";

    setInterval(() => {
      playAgain.style.display = "flex";
      lula.src = "";
      tebett.src = "";
      ciro.src = "";
      bolsonaro.src = "";
    },1500);

    clearInterval(loopGame);

    } else if (bolsonaroPosition <= 120 && bolsonaroPosition > 0 && lulaBottomPosition < 80) {
      nuvens.src ="";
      gameOver.style.display = "flex";

      lula.src = "./Images/the-end.gif";
      lula.style.width = "300px";
      lula.style.bottom = "0";
      lula.style.right = '100px';

      setInterval(() => {
        playAgain.style.display = "flex";
        lula.src = "";
      },3000);

      clearInterval(loopGame);

    } else if(bolsonaroPosition <= 10 && tebettPosition > 0) {
      
      lula.classList.add("win");
      jumpLula.style.animation = 'none';

      setInterval(() => {
        playAgain.style.display = "flex";
        nuvens.src = "./Images/fireworks.gif";
        lula.style.animation = 'none';
        lula.style.left = `${lulaPosition}px`;
        lula.style.width = '300px';
        lula.style.bottom = '200px';

        planalto.style.animation = 'none';
        
      },2000);

      setInterval(() => {
        playAgain.style.display = "flex";
        lula.src = "";
        tebett.src = "";
        ciro.src = "";
        bolsonaro.src = "";
      },1500);


    

      clearInterval(loopGame);
      } 



}, 10);

document.addEventListener("keydown", jump);