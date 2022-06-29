// Array de componentes
let componentes = new Array("./Images/pipe-game.png",
"./Images/Aliensbig.gif",
"./Images/artneoseeker.png",
"./Images/banzai.png",
"./Images/bigboo_boom.gif",
"./Images/block.gif",
"./Images/BobombNSMBU.webp",
"./Images/Bomb.png",
"./Images/Bombred.png",
"./Images/Boo.png",
"./Images/booboo.png",
"./Images/boomanbluff.png",
"./Images/bowser.png",
"./Images/bowser.webp",
"./Images/bowser1.png",
"./Images/bowserking.png",
"./Images/bowserkoopa.gif",
"./Images/bowserpng.png",
"./Images/broozeromega.png",
"./Images/bully.png",
"./Images/Buzzybeetle.png",
"./Images/buzzycolors.gif",
"./Images/CatGoomba.png",
"./Images/chainchomp.png",
"./Images/cheepcheep.png",
"./Images/chomp.png",
"./Images/chuck.gif",
"./Images/Coccinelly.webp",
"./Images/DarkBowserDX.webp",
"./Images/deadturtle.gif",
"./Images/Dryfish.png",
"./Images/fire.gif",
"./Images/firebreathingflower.png",
"./Images/firebreathingflowerfireball.png",
"./Images/firebreathingflowerfireball2.png",
"./Images/Fireflower.png",
"./Images/Fireflower1.png",
"./Images/flowercolors.gif",
"./Images/Foo.webp",
"./Images/Fuzzy.webp",
"./Images/Galoomba.webp",
"./Images/Goomba.gif",
"./Images/goomba.png",
"./Images/goomba1.png",
"./Images/goombacolors.gif",
"./Images/goombahd.png",
"./Images/Goombaspino.png",
"./Images/goombawalk.gif",
"./Images/grandgoomba.webp",
"./Images/grittygoomba.png",
"./Images/grittygoombaclipart.png",
"./Images/huffnpuff.gif",
"./Images/HyperGoomba.png",
"./Images/iggykoopa.png",
"./Images/images.png",
"./Images/koczwaraenemies.png",
"./Images/koopa.gif",
"./Images/Koopatroopa.png",
"./Images/larrykoopa.png",
"./Images/Ludwigkoopa.png",
"./Images/MechaKoopa.png",
"./Images/Mkddbobomb.png",
"./Images/MLSSBMChuckGuyIdle.webp",
"./Images/MLSSBMEliteChuckGuyIdle.webp",
"./Images/newenemies.png",
"./Images/ninjiamtagif.webp",
"./Images/nsmbunovart.png",
"./Images/paperstar.png",
"./Images/Penguin.png",
"./Images/PiranhaPlant.png",
"./Images/piranhaplantmario.gif",
"./Images/Pyroguy.png",
"./Images/Rainbowspiny.webp",
"./Images/rhomproller.gif",
"./Images/RhompRoller.webp",
"./Images/roykoopa.png",
"./Images/ShyGuyArtwork.png",
"./Images/SledgebrosNSMBW.png",
"./Images/slugger.png",
"./Images/SpikeTopSMWU.webp",
"./Images/spiny.png",
"./Images/TailBoo.png",
"./Images/thwimp.png",
"./Images/transferir.gif",
"./Images/turtlecolors.gif",
"./Images/uminecraft.png",
"./Images/villainswikigoomba.png",
"./Images/wiienemies.png",
"./Images/wiiredfav.png",
"./Images/xBowsersI koopa.png",
"./Images/yispooky.png",
"./Images/cogumelo.png",
"./Images/luigi.gif",
"./Images/mushroomcolors.gif",
"./Images/mushroomred.gif",
"./Images/mushroomgreen.gif",
"./Images/yellowmushroom.png",
"./Images/yoshi.gif",
"./Images/Yoshi.webp",
"./Images/coin1.png",
"./Images/coin2.png",
"./Images/coincolors.png",
"./Images/coinmaster.webp",
"./Images/coracao3.gif")


let position = [];
let imgs = [];
let imgAtual = 0;
let imgAnterior1 = 0;
let imgAnterior2 = 0;
let imgAnterior3 = 0;
let imgAnterior4 = 0;
let imgAnterior5 = 0;
//let component = document.getElementById("componente");
let component = document.querySelector("#componente");
const musictrilha = new Audio("./Sound/theme-overworld.mp3");
let teste = true;

// pré carregamento dos componentes

function preCarregamento() {
  for (let i = 0; i < componentes.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = componentes[i];
    console.log(i);
    console.log(imgs[i].src);
    console.log(imgs[i]);
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
  
  // áudios do jogo
  const musiccoin = new Audio("./Sound/smb_coin.mp3");
  const musicgameover = new Audio("./Sound/smb_mariodie.mp3");
  const musicfriend = new Audio("./Sound/smb_powerup.mp3");
  const musicmega = new Audio("./Sound/smb_vine.mp3");

  let componentePosition = componente.offsetLeft;
  let classMario;
  let classComponente;

  let score = 0
  let atualizaScore = true;
  let aumentaDificuldade = true;
  let timer = 0;
  let sortear = false;
  let pontuar = false;
  let velocidade = 0;
  
  nav.classList.remove("menu");
  nav.classList.add("menuNone");

  //seleção de nível de jogo

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
//  console.log("VELOCIDADE " + velocidade);

  //Contador de tempo de jogo

  const ativaTimer = setInterval(funcTimer, 1000);

  function funcTimer() {
    timer++;
    console.log("TIMER " + timer);
    document.querySelector("#time").innerHTML = (timer + " sec");
  }

  const ativaDificuldadeTimer = setInterval(() => {
    aumentaDificuldade = true;
  }, 15000);

// Contador de pontos 

  function aumentaScore(p) {
//    console.log("SCORE ");
    if (imgAtual < 92) {
      score += 50;
//      console.log("AUMENTOU SCORE 50 " + imgAtual);
    } else if (imgAtual < 100 && pontuar== true) {
      musicfriend.play();
      score += 70;
      pontuar= false;
//      console.log("AUMENTOU SCORE 70 " + imgAtual);
    } else if (imgAtual < 102 && pontuar== true) {
      musiccoin.play();
      score += 100;
      pontuar= false;
//      console.log("AUMENTOU SCORE 100 " + imgAtual);
    } else if (imgAtual == 102 || imgAtual == 103 && pontuar== true) {
      musicmega.play();
      score += 200;
      pontuar= false;
//      console.log("AUMENTOU SCORE 200 " + imgAtual);
    }
//    console.log("AUMENTOU SCORE " + imgAtual);
    document.querySelector("#score").innerHTML = score;
    return;
  }

  //Função para pular

  const jump = () => {
//    console.log("PULAR ");
    mario.classList.add(classMario);

    setTimeout(() => {
      mario.classList.remove(classMario);
    }, velocidade);
    if (atualizaScore === true && componentePosition >= 150 && componentePosition <= 300) {
//      console.log("PULOU ");
      aumentaScore(false);
    }
  };

  // Módulo para sortear os componentes

  function sortearComponente() {
//    console.log("SORTEAR " + imgAtual);
    imgAnterior5 = imgAnterior4;
    imgAnterior4 = imgAnterior3;
    imgAnterior3 = imgAnterior2;
    imgAnterior2 = imgAnterior1;
    imgAnterior1 = imgAtual;
    do {
      imgAtual = Math.round(Math.random() * (componentes.length - 1));
    } while (imgAnterior1 == imgAtual || imgAnterior2 == imgAtual || imgAnterior3 == imgAtual || imgAnterior4 == imgAtual || imgAnterior5 == imgAtual);
//    console.log("SORTEOU " + imgAtual);
    trocacomponente(imgAtual);
  }

  // módulo para troca de componenete
  function trocacomponente(img) {
//    console.log("TROCA " + img);
    //    console.log("CONSOLE-LOG " + "('" + imgs[img].src + "')");
    componente.src = imgs[img].src;
  }

  // Módulo de controle / fim de jogo

  const loopGame = setInterval(() => {
//    console.log("IN LOOPGAME / imgAtual " + imgAtual);
//    console.log("aumentaDificuldade " + aumentaDificuldade);
    if (aumentaDificuldade == true) {
      velocidade -= 25;
      console.log("VELOCIDADE " + velocidade);
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
//      console.log("AUMENTOU DIFICULDADE - VELOCIDADE " + velocidade);
      aumentaDificuldade = false;
    }

//    console.log("sortear " + sortear);
//    console.log("componentePosition A" + componentePosition);

    componente.style.display = "block";

    if (componentePosition <= -50 || sortear == true) {
      console.log("LOOP ==> SORTEAR ");
//      position.push(componentePosition);
      sortear = false;
      sortearComponente()
    }
//    console.log("componentePosition D" + componentePosition);

    componentePosition = componente.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");
    if (imgAtual < 92 && componentePosition <= 120 && componentePosition > 0 && marioPosition < 80) {
//        console.log("LOOP if FIM entrou ");
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
    } else if (imgAtual > 91 && componentePosition <= 120 && componentePosition > 0 && marioPosition < 80) {
//      console.log("LOOP else if FIM entrou ");
      componente.style.display = "none";
      const ativaComponente = setInterval(() => {
        componente.style.display = "block";
        clearInterval(ativaComponente);
      }, 120);
//      console.log("LOOP ==> AUMENTA SCORE ");
      pontuar = true;
      sortear = true;
      aumentaScore(true);
    }
/*
    console.log("imgAtual "+imgAtual);
    console.log("imgAnterior1 "+imgAnterior1);
    console.log("imgAnterior2 "+imgAnterior2);
    console.log("imgAnterior3 "+imgAnterior3);
    console.log("imgAnterior4 "+imgAnterior4);
    console.log("imgAnterior5 "+imgAnterior5);
    console.log("component "+component);
    console.log("teste "+teste);
    console.log("sortear "+sortear);
    console.log("componentePosition "+componentePosition);
    console.log("atualizaScore "+atualizaScore);
    console.log("aumentaDificuldade "+aumentaDificuldade);
    console.log("timer "+timer);
    console.log("velocidade "+velocidade);
    console.log("classMario "+classMario);
    console.log("classComponente "+classComponente);
*/    
  }, 49);

  document.addEventListener("keydown", jump);
}
