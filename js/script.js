'use strict';

const startButton = document.querySelector('.start-button-container');
const gameOverScreen = document.querySelector('#game-over');
const mario = document.querySelector(".mario");
const mushroom = document.querySelector('.mushroom');
const pipe = document.querySelector(".pipe");
const shell = document.querySelector('.shell');
const lakitu = document.querySelectorAll('.lakitu');
const spiny = document.querySelector('.spiny');
const spinyContainer = document.querySelector('.spinyContainer');
const ground = document.querySelector('.ground');
const game = document.querySelector(".game");
const gameOverText = document.querySelectorAll('.gameOverText');
const inGameAnimation = document.querySelectorAll('.inGameAnimation');
const instructionsButtonContainer = document.querySelector('.instructionsButtonContainer');

gameOverScreen.hidden = true;
mario.hidden = true;
inGameAnimation.forEach(inGameAnimation => {
  inGameAnimation.hidden = true;
});
ground.hidden = false;

const closeInstructionsButton = document.querySelector('#closeInstructionsButton');
const instructions = document.querySelector('#instructions');
function closeInstructions() {
    instructions.hidden = true;
}

const openInstructionsButton = document.querySelector('#openInstructionsButton');
function openInstructions (){
    instructions.hidden = false;
}


//criação de sons que serão usados no jogo
const song = new Audio('./sounds/Overworld (Hurry).mp3');
const deathSound = new Audio('./sounds/Player Down.mp3');
const gameOverSong = new Audio('./sounds/Game Over.mp3');
const mushroomPointSound = new Audio ('./sounds/1-up.wav');
const mushroomPowerUpSound = new Audio ('./sounds/power-up.wav');
const damageSound = new Audio ('./sounds/power-down.wav');
const jumpSound = new Audio ('./sounds/jump.wav');


let scoreValue = 0;
let scoreTimer;

const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

freezeGame();

let loopGame;


document.addEventListener("click", jump);

mario.style.left = '0';
const movimento = 1;
document.addEventListener('keydown', (event) => {
  if ((!(game.classList.contains('paused'))) && (!(game.classList.contains('stopped')))) {
  switch (event.key) {
    case 'ArrowRight': mario.style.left = `${parseInt(mario.style.left) + movimento}vw`; break;
    case 'ArrowLeft': mario.style.left = `${parseInt(mario.style.left) - movimento}vw`; break;
    case 'ArrowUp': mario.classList.add("jump-mario");
    function playJumpSound () {
      jumpSound.loop = false;
      jumpSound.play();
    }
    playJumpSound();

    setTimeout(() => {
      mario.classList.remove("jump-mario");
    }, 500);
  };

  if (parseInt(mario.style.left) < 0 ){
    mario.style.left = 0;
  };
  if (parseInt(mario.style.left) >= 90 ){
    mario.style.left = '90vw';
  };
};
});


function marioBig(){
  mario.src = './Images/super-mario.gif';
  mario.classList.remove('marioSmall');
  mario.classList.add('marioBig');
}

function marioSmall(){
  mario.src = './Images/small-mario.gif';
  mario.classList.remove('marioBig');
  mario.classList.add('marioSmall');
}

//pausa as animações e o timer de score
function freezeGame(){
  clearInterval(scoreTimer);
  inGameAnimation.forEach(inGameAnimation => {
    inGameAnimation.classList.add('paused');
  });
    game.classList.add('paused');
}


function unfreezeGame(){
  clearInterval(scoreTimer); //limpa score de timer para evitar bugs onde, às vezes, vários timer de score se acumulavam
  
  //reativa animações
  inGameAnimation.forEach(inGameAnimation => {
    inGameAnimation.classList.remove('paused' , 'stopped');
  });
    game.classList.remove('paused' , 'stopped');

  //reativa timer de score
  scoreTimer = setInterval(() => {
    scoreValue++;
    document.querySelector('#score-value').textContent = scoreValue;
    if (game.classList.contains('paused')) {
      clearInterval(scoreTimer);
    }
  }, 1500);
}


function gameOver(){
  freezeGame();
  song.pause();
  song.currentTime = 0;
  function playDeathSound () {
    deathSound.loop = false;
    deathSound.play();
  }
  playDeathSound();
  mario.src = "./Images/mario-game-over.png";
  mario.classList.add('mario-dead');

  let revealGameOver = setInterval (() =>{
      game.classList.add('game-over-screen');

    gameOverText.forEach(gameOverText => {
      gameOverText.classList.add('gameOverTextAnimation');
    });
    gameOverScreen.hidden = false;
    startButton.hidden = false;
    document.querySelector('.start-button').textContent = "Restart Game";
    function playGameOverSong () {
      gameOverSong.loop = false;
      gameOverSong.play();
    }
    playGameOverSong();
    clearInterval(revealGameOver);
    clearInterval(scoreTimer);
  }, 3000);
}

//mapeia posição e largura de mario e objeto, mapeando-os como uma caixa
//calcula se há colisão entre mario e objeto e retorna true ou false
function marioColidesOn(object){
  var marioColisionBox = mario.getBoundingClientRect();
  var objectColisionBox = object.getBoundingClientRect();
  return marioColisionBox.left + marioColisionBox.width >= objectColisionBox.left && 
  objectColisionBox.left + objectColisionBox.width >= marioColisionBox.left && 
  marioColisionBox.top + marioColisionBox.height >= objectColisionBox.top && 
  objectColisionBox.top + objectColisionBox.height >= marioColisionBox.top
}


function startGame(){

  //classe 'stopped' adicionada para que animação seja removida dos elementos.
  //animação será reinserida posteriormente e assim as posições dos elementos voltarão aos estados iniciais.
  inGameAnimation.forEach(inGameAnimation =>{
    inGameAnimation.classList.add('stopped');
  });
    game.classList.add('stopped');

  const logo = document.querySelector('.logo');
  logo.hidden = true;
  startButton.hidden = true;
  gameOverScreen.hidden = true;
  instructionsButtonContainer.hidden = true;
  game.classList.remove('game-over-screen');

  gameOverText.forEach(gameOverText => {
    gameOverText.classList.remove('gameOverTextAnimation');
  });

  //reinicia score
  scoreValue = 0;
  document.querySelector('#score-value').textContent = scoreValue;

  const initialScreen = document.querySelectorAll('.game');
  initialScreen.forEach(initialScreen => {
    initialScreen.classList.remove('initial-screen');
  });
  mario.classList.remove('mario-dead');
  marioBig();
  mario.style.left = '0';
  mario.hidden = false;

  inGameAnimation.forEach(inGameAnimation => {
    inGameAnimation.hidden = false;
  });


  setTimeout(() => {
    unfreezeGame();
  }, 10);
  
  gameOverSong.pause();
  gameOverSong.currentTime = 0;
  function playSong () {
    song.loop = true;
    song.play();
  }
  playSong();


  loopGame = setInterval(() => {

    //monitora se o mario pega o cogumelo
    //se mario estiver pequeno, ele volta a ficar grande
    //se mario estiver grande, ganha 10 pontos
    if ((marioColidesOn(mushroom)) &&
      mario.classList.contains('marioSmall')) {
      mushroom.classList.add('stopped');
      mario.classList.add('invincible');

      function playMushroomPowerUpSound () {
        mushroomPowerUpSound.loop = false;
        mushroomPowerUpSound.play();
      };
      playMushroomPowerUpSound ();

      setTimeout(() => {

      freezeGame();

      for (let i=0 ; i < 20 ;){
        setTimeout(() => {
          marioBig();
        }, (i++)*75);
        setTimeout(() => {
          marioSmall();
        }, (i++)*75);
      }

      setTimeout(() => {
        marioBig();
      }, 1575);

      setTimeout(() => {
        unfreezeGame();
      }, 1575);

      setTimeout(() => {
        mario.classList.remove('invincible');
      },2000);

    },5);
  } else if ((marioColidesOn(mushroom)) &&
  mario.classList.contains('marioBig')) {
    function PlayMushroomPointSound () {
      mushroomPointSound.loop = false;
      mushroomPointSound.play();
    };
    PlayMushroomPointSound();
    mushroom.classList.add('stopped');
    setTimeout(() => {
      mushroom.classList.remove('stopped');
    }, 10);
    scoreValue = scoreValue +10;
    document.querySelector('#score-value').textContent = scoreValue;
  }
  
      //monitora se o mario acerta algum inimigo/obstáculo
      //se mario estiver grande, ele fica pequeno
      //se mario estiver pequeno, Game Over
    if (( (marioColidesOn(pipe)) ||
        (marioColidesOn(spiny)) ) ||
        (marioColidesOn(shell))) {
      if (mario.classList.contains('marioBig') && !(mario.classList.contains('invincible'))){
        function playDamageSound () {
          damageSound.loop = false;
          damageSound.play();
        };
        playDamageSound();
        mario.classList.add('invincible');
        freezeGame();
        
        for (let i=0 ; i < 20 ;){
          setTimeout(() => {
            marioSmall();
          }, (i++)*75);
          setTimeout(() => {
            marioBig();
          }, (i++)*75);
        }
  
        setTimeout(() => {
          marioSmall();
        }, 1575);
  
        setTimeout(() => {
          unfreezeGame();
        }, 1575);
  
        setTimeout(() => {
          mario.classList.remove("invincible");
        }, 2000);
      };
  
      if ((mario.classList.contains('marioSmall')) && (!(mario.classList.contains('invincible')))) {
        clearInterval(loopGame);
        gameOver();
      }
    }
    
  }, 10);
}