const vigarista = document.querySelector(".gif-vigarista");
const caipira = document.querySelector(".gif-caipira");
const lenhador = document.querySelector(".gif-lenhador");
const penelope = document.querySelector(".gif-penelope");
const faixa = document.querySelector(".faixa");
const vigaristamove = vigarista.offsetBottom
const gameover = document.querySelector(".over");
const playAgain = document.querySelector(".play-again");


const musicEntrada = new Audio("./audios/corrida-maluca-entrada.ogg");
window.onload = musicEntrada.play();

const musicMutley = new Audio("./audios/risada-muttley.mp3");

const topDow = () => {
  const vigaristaPosition = +window
    .getComputedStyle(vigarista)
    .bottom.replace("px", "");
    
  if (vigaristaPosition == 270) {
    vigarista.style.bottom = "170px";
  } else {
    vigarista.style.bottom = "270px";
  }
};

const loopGame = setInterval(() => {
  const caipiraPosition = caipira.offsetLeft;
  const lenhadorPosition = lenhador.offsetLeft;
  const penelopePosition = penelope.offsetLeft;
  const faixaPosition = faixa.offsetLeft;
  const vigaristaPosition = +window
    .getComputedStyle(vigarista)
    .bottom.replace("px", "");

  if (caipiraPosition <= 350 && caipiraPosition > 0 && vigaristaPosition == 270) {
    caipira.style.animation = "none";
    caipira.style.left = `${caipiraPosition}px`;

    lenhador.style.animation = "none";
    lenhador.style.left = `${lenhadorPosition}px`;

    penelope.style.animation = "none";
    penelope.style.left = `${penelopePosition}px`;

    faixa.style.animation = "none";
    faixa.style.left = `${faixaPosition}px`;

    vigarista.style.animation = "none";
    vigarista.style.bottom = `${vigaristaPosition}px`;

    vigarista.src = "./images/muttleySmile.gif";
    vigarista.style.width = "150px";
    vigarista.style.marginLeft = "45px";
    musicMutley.play();
    musicEntrada.pause();
    gameover.style.top = "0px"
    playAgain.style.top = "300px"
    clearInterval(loopGame);

  }  else if (lenhadorPosition <= 350 && lenhadorPosition > 0 && vigaristaPosition == 170) {
    caipira.style.animation = "none";
    caipira.style.left = `${caipiraPosition}px`;

    lenhador.style.animation = "none";
    lenhador.style.left = `${lenhadorPosition}px`;

    penelope.style.animation = "none";
    penelope.style.left = `${penelopePosition}px`;

    faixa.style.animation = "none";
    faixa.style.left = `${faixaPosition}px`;

    vigarista.style.animation = "none";
    vigarista.style.bottom = `${vigaristaPosition}px`;

    vigarista.src = "./images/muttleySmile.gif";
    vigarista.style.width = "150px";
    vigarista.style.marginLeft = "45px";
    musicMutley.play();
    musicEntrada.pause();
    gameover.style.top = "0px"
    playAgain.style.top = "300px"
    clearInterval(loopGame);

  } else if (penelopePosition <= 350 && penelopePosition > 0 && vigaristaPosition == 270) {
    caipira.style.animation = "none";
    caipira.style.left = `${caipiraPosition}px`;

    lenhador.style.animation = "none";
    lenhador.style.left = `${lenhadorPosition}px`;

    penelope.style.animation = "none";
    penelope.style.left = `${penelopePosition}px`;

    faixa.style.animation = "none";
    faixa.style.left = `${faixaPosition}px`;

    vigarista.style.animation = "none";
    vigarista.style.bottom = `${vigaristaPosition}px`;

    vigarista.src = "./images/muttleySmile.gif";
    vigarista.style.width = "150px";
    vigarista.style.marginLeft = "45px";
    musicMutley.play();
    musicEntrada.pause();
    gameover.style.top = "0px"
    playAgain.style.top = "300px"
    clearInterval(loopGame);
  }

  }, 100);


document.addEventListener("keydown", topDow);