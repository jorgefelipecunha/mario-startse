const lula = document.querySelector(".lula");
const tebett = document.querySelector(".tebett");
const ciro = document.querySelector(".ciro");
const bolsonaro = document.querySelector(".bolsonaro");
const nuvens = document.querySelector(".cloud-game");
const game = document.querySelector(".game");
const gameOver = document.querySelector(".game-over")

const jump = () => {
  lula.classList.add("jump-lula");

  setTimeout(() => {
    lula.classList.remove("jump-lula");
  }, 800);
};

const loopGame = setInterval(() => {
  const tebettPosition = tebett.offsetLeft;
  const ciroPosition = ciro.offsetLeft;
  const bolsonaroPosition = bolsonaro.offsetLeft;
  const lulaPosition = +window
    .getComputedStyle(lula)
    .bottom.replace("px", "");

  if ((tebettPosition <= 120 && tebettPosition > 0 && lulaPosition < 80) || (ciroPosition <= 120 && ciroPosition > 0 && lulaPosition < 80)) {
    tebett.style.animation = "none";
    tebett.style.left = `${tebettPosition}px`;

    ciro.style.animation = "none";
    ciro.style.left = `${ciroPosition}px`;

    lula.style.animation = "none";
    lula.style.bottom = `${lulaPosition}px`;

    lula.src = "./Images/the-end.gif";
    // lula.style.width = "75px";
    lula.style.marginLeft = "45px";
    lula.style.bottom = "0";

    clearInterval(loopGame);
    } else if (bolsonaroPosition <= 120 && bolsonaroPosition > 0 && lulaPosition < 80) {
      tebett.src ="";
      ciro.src ="";
      bolsonaro.src ="";
      nuvens.src ="";
      game.style.borderBottom = "none";
      game.style.background = "linear-gradient(#b41d1d, #f08c8c)";

      gameOver.style.display = "flex";

      lula.style.animation = "none";
      lula.style.bottom = `${lulaPosition}px`;

      lula.src = "./Images/the-end.gif";
      lula.style.width = "200px";
      lula.style.marginLeft = "45px";

      clearInterval(loopGame);
    }
}, 10);

document.addEventListener("keydown", jump);
