let componentes = new Array("./Images/pipe-game.png", "./Images/bowser-png.png", "./Images/koopa.gif", "./Images/banzai.jpg", "./Images/boomanbluff.png", "./Images/bowser.webp", "./Images/bowser-koopa.gif", "./Images/goombawalk.webp", "./Images/grand_goomba.webp", "./Images/gritty_goomba.png", "./Images/slugger.png", "./Images/thwimp.jpg", "./Images/yispooky.png", "./Images/cogumelo.png", "./Images/luigi.gif", "./Images/yoshi.gif", "./Images/coin1.png", "./Images/coin2.jpg", "./Images/coin_master.webp");
let position = [];
let imgs = [];
let slider;
let imgAtual;
let imgAnterior;
let maxImg;
let tmp;
let tempoTroca;
let vtempo;
let vbarra;
//let component = document.getElementById("componente");
let component = document.querySelector("#componente");
const trilha = new Audio("./Sound/theme-overworld.mp3");


function preCarregamento() {
  //  let s = 1;
  for (let i = 0; i < componentes.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = componentes[i];
    console.log(i);
    console.log(imgs[i].src);
    console.log(imgs[i]);
    //    s++;
  }
}

function iniciar() {
  trilha.play();
  trilha.loop = true;
//  trilha.playbackRate = 2;

  const nav = document.querySelector(".menu");
  const tfacil = document.querySelector('#facil').checked;
  const tnormal = document.querySelector('#normal').checked;
  const tdificil = document.querySelector('#dificil').checked;
  const recomeca = document.querySelector("#recomeca");
  const mario = document.querySelector(".super-mario");
  const componente = document.querySelector(".componente-game");
  const music = new Audio("./Sound/coin-sound.mp3");
  const musicgameover = new Audio("./Sound/game-over.mp3");
  const musicfriend = new Audio("./Sound/thetunnel.mp3");
  
  let componentePosition = componente.offsetLeft;

  let score = 0
  let atualizaScore = true;
  let timer = 0;

  let velocidade;
  let classMario;
  let classComponente;

  nav.classList.remove("menu");
  nav.classList.add("menuNone");

  if (tfacil === true) {
    velocidade = 800;
    classComponente = "componente-game-slow";
    classMario = "jump-mario-slow";
  } else if (tnormal === true) {
    velocidade = 500;
    classComponente = "componente-game-normal";
    classMario = "jump-mario";
  } else if (tdificil === true) {
    velocidade = 300;
    classComponente = "componente-game-fast";
    classMario = "jump-mario-fast";
  }
  componente.classList.add(classComponente);

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
    if (atualizaScore === true && componentePosition >= 150 && componentePosition <= 300) {
      if (imgAtual < 13) {
        score += 50;
      }
      document.querySelector("#score").innerHTML = score;
    }
  };

  function sortearComponente() {
    do {
      imgAtual = Math.round(Math.random() * (componentes.length - 1));
    } while (imgAnterior == imgAtual);
    trocacomponente(imgAtual);
  }

  function trocacomponente(img) {
    console.log("CONSOLE_LOG " + img);
    console.log("CONSOLE-LOG " + "('" + imgs[img].src + "')");
    componente.src = imgs[img].src;
  }
/*
  function displayComponente() {
    componente.style.display = "block";
    clearInterval(displayComponente);
  }
*/
  function aumentaScore(pontos){
    score +=pontos;
    document.querySelector("#score").innerHTML = score;
    sortearComponente()
  }

  const loopGame = setInterval(() => {

    if (componentePosition <= -58) {
      position.push(componentePosition);
      imgAnterior = imgAtual;
      sortearComponente()
    }
    componentePosition = componente.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");
      if (imgAtual < 13 && componentePosition <= 120 && componentePosition > 0 && marioPosition < 80) {
        music.pause();
        musicgameover.play();
        componente.style.animation = "none";
        componente.style.left = `${componentePosition}px`;

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
        music.pause();
    } else if (imgAtual > 12 && componentePosition <= 120 && componentePosition > 0 && marioPosition < 80) {
        componente.style.display = "none";
        const ativaComponente = setInterval(() => {
          componente.style.display = "block";
          clearInterval(ativaComponente);
        }, 120);
          if (imgAtual < 16) {
            musicfriend.play();
            aumentaScore(70)
          } else if (imgAtual < 18) {
            music.play();
            aumentaScore(100)
          } else if (imgAtual = 18) {
            music.play();
            aumentaScore(200)
          }
    }

  }, 10);

  document.addEventListener("keydown", jump);
}
