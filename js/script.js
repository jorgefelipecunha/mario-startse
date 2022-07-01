const boneco = document.querySelector(".boneco");
const garrafa = document.querySelector(".garrafaStartse");

const jump = () => {
  boneco.classList.add("jump-boneco");

  setTimeout(() => {
    boneco.classList.remove("jump-boneco");
  }, 500);
};

var quadroDePontos = document.querySelector(".pontos");
var mensagens = document.querySelector(".mensagem");
var pontos = 0;

const loopGame = setInterval(() => {
  
  const garrafaPosition = garrafa.offsetLeft;
  const bonecoPosition = +window
    .getComputedStyle(boneco)
    .bottom.replace("px", "");

  if (garrafaPosition <= 30 && garrafaPosition > 0 && bonecoPosition < 80) {
    garrafa.style.animation = "none";
    garrafa.style.left = `${garrafaPosition}px`;

    boneco.style.animation = "none";
    boneco.style.bottom = `${bonecoPosition}px`;

    boneco.src = "./Images/boneco-game-over.png";
    boneco.style.width = "100px";
    boneco.style.marginLeft = bonecoPosition; //"45px"

    mensagens.innerHTML = "Beba água, tente outra vez.";

    clearInterval(loopGame);
  }

  if(garrafaPosition > 80 && garrafaPosition > 0 && bonecoPosition < 80){
    pontos = pontos + 1;
    quadroDePontos.innerHTML = pontos;
  }
}, 10);

document.addEventListener("keydown", jump);
