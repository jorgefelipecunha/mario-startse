const harry = document.querySelector(".harry-potter");
const voldemort = document.querySelector(".voldemort");
const dementor = document.querySelector(".dementor");
const pontuacao = document.querySelector("#label-pontos");
let pontos = 0;

// SONS
const somTema = new Audio ();
somTema.src = './sound/Theme.mp3';
const somGameOver = new Audio ();
somGameOver.src = './sound/GameOver.mp3';

// PULO
const jump = () => {
  harry.classList.add("jump-harry");
  setTimeout(() => {
    harry.classList.remove("jump-harry");
  }, 1000);
};

// PRINCIPAL - JOGO

function loadTela() {

  somTema.play();

  document.querySelector(".voldemort").removeAttribute('hidden');
  voldemort.style.animation = 'voldemort-running 3s infinite linear';

  const loopGame = setInterval(() => {
    const voldemortPosition = voldemort.offsetLeft;
    const harryPosition = +window.getComputedStyle(harry).bottom.replace("px", "");

    pontuacao.textContent = pontos;

    console.log(voldemortPosition);
    console.log(harryPosition);

    if (voldemortPosition <= 240 && voldemortPosition > 0 && harryPosition < 80) {
      voldemort.style.animation = "none";
      voldemort.style.left = `${voldemortPosition}px`;

      harry.style.animation = "none";
      harry.style.bottom = `${harryPosition}px`;

      voldemort.style.filter = "drop-shadow(0px 0px 15px red)";
      harry.src = "./img/harry-potter-game-over.png";
      harry.style.width = "150px";
      harry.style.marginLeft = "65px";
      harry.style.marginBottom = "75px";
      harry.style.animation = "harry-game-over 3s infinite";

      somTema.pause();
      somGameOver.play();

      clearInterval(loopGame);
      clearInterval(score);

      document.querySelector('.gameover').style.display = 'flex';
    }
  }, 10);
}

// BOTÃO START
function telaInicial () {
  document.querySelector(".startbuttom").style.display = 'none';
  document.querySelector(".score").removeAttribute('hidden');
  pontos = 0;
  loadTela();
}

// CONTAGEM DE PONTUAÇÃO
const score = setInterval(() => {
  pontos += 7;
}, 400);

document.addEventListener("keydown", jump);