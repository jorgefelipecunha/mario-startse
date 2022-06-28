//let componentes = new Array("./Images/pipe-game.png", "./Images/bowser-png.png", "./Images/koopa.gif", "./Images/banzai.jpg", "./Images/boomanbluff.png", "./Images/bowser.webp", "./Images/bowser-koopa.gif", "./Images/goombawalk.webp", "./Images/grand_goomba.webp", "./Images/gritty_goomba.png", "./Images/slugger.png", "./Images/thwimp.jpg", "./Images/yispooky.png", "./Images/cogumelo.png", "./Images/luigi.gif", "./Images/yoshi.gif", "./Images/coin1.png", "./Images/coin2.jpg", "./Images/coin_master.webp");
let componentes = new Array("./Images/pipe-game.png", "./Images/art-neoseeker.png", "./Images/big boos boom.gif", "./Images/BobombNSMBU.webp", "./Images/Bomb.jpg", "./Images/Bombred.jpg", "./Images/Boo.png", "./Images/bowser.jpg", "./Images/bowser.png", "./Images/bowserking.png", "./Images/broozeromega.png", "./Images/bully.jpg", "./Images/Buzzy beetle.jpg", "./Images/Cat_Goomba.png", "./Images/chain chomp.jpg", "./Images/cheep cheep.jpg", "./Images/chomp.jpg", "./Images/Coccinelly.webp", "./Images/Dry fish.jpg", "./Images/fire-breathing-flower.png", "./Images/fire-breathing-flower-fireball.png", "./Images/fire-breathing-flower-fireball2.png", "./Images/Fireflower.png", "./Images/Fireflower.jpg", "./Images/Fuzzy.webp", "./Images/Galoomba.webp", "./Images/goomba.webp", "./Images/Goombaspino.webp", "./Images/HyperGoomba.jpg", "./Images/iggy koopa.jpg", "./Images/images.jpg", "./Images/koczwara-enemies.png", "./Images/Koopatroopa.jpg", "./Images/larrykoopa.jpg", "./Images/Ludwig_koopa.png", "./Images/Mecha Koopa.jpg", "./Images/Mkdd_bob-omb.webp", "./Images/new-enemies.png", "./Images/nsmbunovart.png", "./Images/paper-star.jpg", "./Images/Penguin.jpg", "./Images/Piranha_Plant.png", "./Images/Pyro guy.jpg", "./Images/roy koopa.jpg", "./Images/Shy_Guy_Artwork.webp", "./Images/SledgebrosNSMBW.png", "./Images/spiny.jpg", "./Images/Tail_Boo.png", "./Images/u-minecraft.png", "./Images/wii-enemies.png", "./Images/wii-red-fav.jpg", "./Images/x-BowsersI koopa.png", "./Images/bowser-png.png", "./Images/koopa.gif", "./Images/banzai.jpg", "./Images/boomanbluff.png", "./Images/bowser.webp", "./Images/bowser-koopa.gif", "./Images/goombawalk.webp", "./Images/grand_goomba.webp", "./Images/gritty_goomba.png", "./Images/slugger.png", "./Images/thwimp.jpg", "./Images/yispooky.png", "./Images/cogumelo.png", "./Images/yellow-mushroom.png", "./Images/Yoshi.webp", "./Images/luigi.gif", "./Images/yoshi.gif", "./Images/coin1.png", "./Images/coin2.jpg", "./Images/coin_master.webp");
let position = [];
let imgs = [];
let slider;
let imgAtual=0;
let imgAnterior;
let maxImg;
let tmp;
let tempoTroca;
let vtempo;
let vbarra;
//let component = document.getElementById("componente");
let component = document.querySelector("#componente");
const musictrilha = new Audio("./Sound/theme-overworld.mp3");
let teste = true;
let sortear = false;

function preCarregamento() {
  for (let i = 0; i < componentes.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = componentes[i];
//    console.log(i);
//    console.log(imgs[i].src);
//    console.log(imgs[i]);
  }
}

function iniciar() {
  musictrilha.play();
  musictrilha.loop = true;
//  trilha.playbackRate = 2;

  const nav = document.querySelector(".menu");
  const tfacil = document.querySelector('#facil').checked;
  const tnormal = document.querySelector('#normal').checked;
  const tdificil = document.querySelector('#dificil').checked;
  const recomeca = document.querySelector("#recomeca");
  const mario = document.querySelector(".super-mario");
  const componente = document.querySelector(".componente-game");
  const musiccoin = new Audio("./Sound/smb_coin.mp3");
  const musicgameover = new Audio("./Sound/smb_mariodie.mp3");
  const musicfriend = new Audio("./Sound/smb_powerup.mp3");
  const musicmega = new Audio("./Sound/smb_vine.mp3");

  let componentePosition = componente.offsetLeft;

  let score = 0
  let atualizaScore = true;
  let aumentaDificuldade = true;
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
  } else {
    window.location.reload();
  }
  componente.classList.add(classComponente);
  console.log("VELOCIDADE " + velocidade);
  const ativaTimer = setInterval(funcTimer, 1000);

  function funcTimer() {
    timer++;
    console.log("TIMER " + timer);
    document.querySelector("#time").innerHTML = (timer + " sec");
  }

//  const ativaDificuldadeTimer = setInterval(aumentaDificuldade = true, 15000);
  const ativaDificuldadeTimer = setInterval(() => {
    aumentaDificuldade = true;
  }, 15000);

  function aumentaScore(p){
    console.log("SCORE ");
    if (imgAtual < 64) {
      score += 50;
      console.log("AUMENTOU SCORE 50 " + imgAtual);
    } else if (imgAtual < 69 && p == true) {
      musicfriend.play();
      score += 70;
      console.log("AUMENTOU SCORE 70 " + imgAtual);
    } else if (imgAtual < 71 && p == true) {
      musiccoin.play();
      score += 100;
      console.log("AUMENTOU SCORE 100 " + imgAtual);
    } else if (imgAtual = 71 && p == true) {
      musicmega.play();
      score += 200;
      console.log("AUMENTOU SCORE 200 " + imgAtual);
    }
    console.log("AUMENTOU SCORE " + imgAtual);
    document.querySelector("#score").innerHTML = score;
    return;
  }

const jump = () => {
    console.log("PULAR ");
    mario.classList.add(classMario);

    setTimeout(() => {
      mario.classList.remove(classMario);
    }, velocidade);
    if (atualizaScore === true && componentePosition >= 150 && componentePosition <= 300) {
      console.log("PULOU ");
      aumentaScore(false);
    }
  };

  function sortearComponente() {
    console.log("SORTEAR " + imgAtual);
    imgAnterior = imgAtual;
    do {
      imgAtual = Math.round(Math.random() * (componentes.length - 1));
    } while (imgAnterior == imgAtual);
    console.log("SORTEOU " + imgAtual);
    trocacomponente(imgAtual);
  }

  function trocacomponente(img) {
    console.log("TROCA " + img);
//    console.log("CONSOLE-LOG " + "('" + imgs[img].src + "')");
    componente.src = imgs[img].src;
  }

  const loopGame = setInterval(() => {
    console.log("IN LOOPGAME / imgAtual " + imgAtual);
    console.log("aumentaDificuldade "+aumentaDificuldade);
    if (aumentaDificuldade == true) {
      velocidade -= 25;
      console.log("VELOCIDADE "+velocidade);
      if (velocidade == 500) {
        console.log("AUMENTOU DIFICULDADE NORMAL ");
        classComponente = "componente-game-normal";
        classMario = "jump-mario";
        componente.classList.add(classComponente);
      } else if (velocidade == 300) {
        console.log("AUMENTOU DIFICULDADE DIFICIL ");
        classComponente = "componente-game-fast";
        classMario = "jump-mario-fast";
        componente.classList.add(classComponente);
      }
      console.log("AUMENTOU DIFICULDADE - VELOCIDADE "+velocidade);
      aumentaDificuldade = false;
    }

    console.log("sortear " + sortear);
    console.log("componentePosition A"+componentePosition);

    if (componentePosition <= -50 || sortear == true) {
      console.log("LOOP ==> SORTEAR ");
      position.push(componentePosition);
      sortear = false;
      sortearComponente()
    }
    console.log("componentePosition D"+componentePosition);

    componentePosition = componente.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");
      if (imgAtual < 64 && componentePosition <= 120 && componentePosition > 0 && marioPosition < 80) {
        musictrilha.pause();
        musicgameover.play();

        const ativaMusicTrilha = setInterval(() => {
          musictrilha.play();
          musictrilha.loop = true;
          clearInterval(ativaMusicTrilha);
        }, 3020);
        
        componente.style.animation = "none";
        componente.style.left = `${componentePosition}px`;
        componente.style.display = "none";

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./Images/mariogameover.gif";
        mario.style.width = "75px";
        mario.style.marginLeft = "45px";

        atualizaScore = false;
        clearInterval(loopGame);
        clearInterval(ativaTimer);
        clearInterval(ativaDificuldadeTimer);
        recomeca.classList.remove("botaoOff");
        recomeca.classList.add("botaoOn");
    } else if (imgAtual > 63 && componentePosition <= 120 && componentePosition > 0 && marioPosition < 80) {
        componente.style.display = "none";
        const ativaComponente = setInterval(() => {
          componente.style.display = "block";
          clearInterval(ativaComponente);
        }, 120);
        console.log("LOOP ==> AUMENTA SCORE ");
        sortear = true;
        aumentaScore(true);
    }
  }, 49);

  document.addEventListener("keydown", jump);
}
