'use strict';
// Array de componentes

let componentes = new Array("./Images/pipe-game.png",
  "https://pa1.narvii.com/6519/ac28a11ef719df068bd8b598d3fc069704406fa2_hq.gif",
  "https://thumbs.gfycat.com/TangibleDefiantGlassfrog-max-1mb.gif",
  "https://c.tenor.com/AQOzchC9P0AAAAAi/fawful-bug-fawful.gif",
  "https://static.wikia.nocookie.net/sm64community/images/7/74/Old_Dark_Star_X.gif",
  "https://static.wikia.nocookie.net/sm64community/images/6/67/Dark-Bowser-X-Animation.gif",
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
  "./Images/drturtle.webp",
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
  "./Images/mushroomgreen.gif",
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
  "./Images/drturtleinvisible.webp",
  "./Images/toad.png",
  "./Images/luigi.gif",
  "./Images/mushroomcolors.gif",
  "./Images/mushroomred.gif",
  "./Images/yellowmushroom.png",
  "./Images/yoshi.gif",
  "./Images/Yoshi.webp",
  "./Images/coin1.png",
  "./Images/coin2.png",
  "./Images/coincolors.png",
  "./Images/coinmaster.webp",
  "./Images/coin.gif",
  "./Images/coracao3.gif");


let imgs = [];
let component = document.querySelector("#componente");
const musictrilha = new Audio("./Sound/theme-overworld.mp3");

// pré carregamento dos componentes

function preCarregamento() {
  for (let i = 0; i < componentes.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = componentes[i];
  }
}

// Arquivo para auxílio depuração
// para a coleta dos dados devrão ser inseridos os pontos de coleta no código
/*
  function downloadFiles(data, file_name, file_type) {
/*    let vdata;
    for (let i = 0; i < data.length; i++) {
      vdata += data[i];
    } */
/*    var file = new Blob([data], {type: file_type});
    if (window.navigator.msSaveOrOpenBlob) 
        window.navigator.msSaveOrOpenBlob(file, file_name);
    else { 
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = file_name;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
*/

function iniciar() {
  musictrilha.play();
  musictrilha.loop = true;

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
  //  let atualizaScore = true;
  let pontuar = false;
  let aumentaDificuldade = false;
  let timer = 0;
  let sortear = false;
  let velocidade = 0;
  let imgSorteada = 0;
  let imgAtual = 0;
  let imgAnterior1 = 0;
  let imgAnterior2 = 0;
  let imgAnterior3 = 0;
  let imgAnterior4 = 0;
  let imgAnterior5 = 0;
  let imgAnterior6 = 0;
  let imgAnterior7 = 0;
  let imgAnterior8 = 0;
  let imgAnterior9 = 0;
  let imgAnterior0 = 0;


  nav.classList.remove("menu");
  nav.classList.add("menuNone");

// Seleção de nível de jogo

  if (tfacil === true) {
    velocidade = 1000;
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

// Contador de tempo de jogo

  const ativaTimer = setInterval(funcTimer, 1000);

  function funcTimer() {
    timer++;
    document.querySelector("#time").innerHTML = (timer + " sec");
  }

  const ativaDificuldadeTimer = setInterval(() => {
    aumentaDificuldade = true;
  }, 15000);

// Contador de pontos 

  function aumentaScore() {
    if (imgAtual < 99) {
      score += 50;
      pontuar = false;
    } else if (imgAtual < 106) {
      musicfriend.play();
      score += 70;
      pontuar = false;
    } else if (imgAtual < 110) {
      musiccoin.play();
      score += 100;
      pontuar = false;
    } else if (imgAtual == 110 || imgAtual == 111) {
      musicmega.play();
      score += 200;
      pontuar = false;
    }
    document.querySelector("#scores").innerHTML = score;
    return;
  }

// Função para pular

  const jump = () => {
    mario.classList.add(classMario);
    setTimeout(() => {
      mario.classList.remove(classMario);
    }, velocidade);
    if (imgAtual > 98 && componentePosition <= 250) {
      sortear = true;
      pontuar = false;
    }
    if (imgAtual < 99 && componentePosition <= 350) {
      sortear = true;
      pontuar = true;
    }
  };

// Módulo para sortear os componentes

  function sortearComponente() {
    imgAnterior0 = imgAnterior9;
    imgAnterior9 = imgAnterior8;
    imgAnterior8 = imgAnterior7;
    imgAnterior7 = imgAnterior6;
    imgAnterior6 = imgAnterior5;
    imgAnterior5 = imgAnterior4;
    imgAnterior4 = imgAnterior3;
    imgAnterior3 = imgAnterior2;
    imgAnterior2 = imgAnterior1;
    imgAnterior1 = imgAtual;
    if (tfacil === true) {
      do {
        imgSorteada = Math.round(Math.random() * (componentes.length - 1));
      } while (imgSorteada == 98 || imgAnterior1 == imgSorteada || imgAnterior2 == imgSorteada || imgAnterior3 == imgSorteada || imgAnterior4 == imgSorteada || imgAnterior5 == imgSorteada || imgAnterior6 == imgSorteada || imgAnterior7 == imgSorteada || imgAnterior8 == imgSorteada || imgAnterior9 == imgSorteada || imgAnterior0 == imgSorteada);
    } else {
      do {
        imgSorteada = Math.round(Math.random() * (componentes.length - 1));
      } while (imgAnterior1 == imgSorteada || imgAnterior2 == imgSorteada || imgAnterior3 == imgSorteada || imgAnterior4 == imgSorteada || imgAnterior5 == imgSorteada || imgAnterior6 == imgSorteada || imgAnterior7 == imgSorteada || imgAnterior8 == imgSorteada || imgAnterior9 == imgSorteada || imgAnterior0 == imgSorteada);
    }
  }

// Módulo de comando para atualizar Score, dificuldade e imagens

  function atualizaGeral() {
    if (pontuar == true) {
      aumentaScore();
    }
    imgAtual = imgSorteada;
    trocacomponente(imgAtual);
    if (aumentaDificuldade == true) {
      velocidade -= 25;
      if (velocidade == 500) {
        classComponente = "componente-game-normal";
        classMario = "jump-mario";
        componente.classList.add(classComponente);
      } else if (velocidade == 300) {
        classComponente = "componente-game-fast";
        classMario = "jump-mario-fast";
        componente.classList.add(classComponente);
      }
      aumentaDificuldade = false;
    }
  }

// função para troca de imagens

  function trocacomponente(img) {
    componente.src = imgs[img].src;
  }

// Módulo de controle / fim de jogo

  const loopGame = setInterval(() => {
    componentePosition = componente.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");

    if (componentePosition < -50 && tfacil == true) {
      atualizaGeral();
    } else if (componentePosition < -20 && tnormal == true) {
      atualizaGeral();
    } else if (componentePosition < 0 && tdificil == true) {
      atualizaGeral();
    }

    if (componentePosition > 300) {
      componente.style.visibility = "visible";
    }

    if (sortear == true) {
      sortear = false;
      sortearComponente()
    }

    if (imgAtual < 99 && componentePosition <= 120 && componentePosition > 0 && marioPosition < 80) {
      // SE ERROU EXECUTA PARA FIM DE JOGO
      musictrilha.pause();
      musicgameover.play();

      const ativaMusicTrilha = setInterval(() => {
        musictrilha.play();
        musictrilha.loop = true;
        clearInterval(ativaMusicTrilha);
      }, 3020);

      componente.style.animation = "none";
      componente.style.left = `${componentePosition}px`;

      mario.style.animation = "none";
//      mario.style.bottom = `${marioPosition}px`;
      mario.style.bottom = "30px";

      mario.src = "./Images/mariogameover.gif";
      mario.style.width = "75px";
      mario.style.marginLeft = "45px";

      //        atualizaScore = false;
      clearInterval(loopGame);
      clearInterval(ativaTimer);
      clearInterval(ativaDificuldadeTimer);
      recomeca.classList.remove("botaoOff");
      recomeca.classList.add("botaoOn");

// Comandos para função gerar o arquivo de auxílio de depuração
//      position += position3;
//      downloadFiles(position, "position", "text/plain");

    } else if (imgAtual > 98 && componentePosition <= 120 && componentePosition > 0 && marioPosition < 80) {
      if (componente.style.visibility == "visible") {
        pontuar = true;
      }
      componente.style.visibility = "hidden";
      sortear = true;
    }
  }, 49);
  document.addEventListener("keydown", jump);
}
