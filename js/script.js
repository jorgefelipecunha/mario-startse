const startButton = document.querySelector('.start-button-container');
const gameOverScreen = document.querySelector('#game-over');
const mario = document.querySelector(".super-mario");
const mushroom = document.querySelector('.mushroom-game');
let mushroomPosition = mushroom.offsetLeft;
const pipe = document.querySelector(".pipe-game");
let pipePosition = pipe.offsetLeft;
const shell = document.querySelector('.shell-game');
let shellPosition = shell.offsetLeft;
const spiny = document.querySelector('.spiny');
let spinyPosition = spiny.offsetLeft;
const ground = document.querySelector("#ground");
const cloud = document.querySelector('.cloud-game');
let cloudPosition = cloud.offsetLeft;
let marioColisionBox = 100;
let marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

const song = new Audio('./sounds/Overworld (Hurry).mp3');
const deathSound = new Audio('./sounds/Player Down.mp3');
const gameOverSong = new Audio('./sounds/Game Over.mp3');

let scoreValue = 0;
let scoreTimer = setInterval(() => {
  scoreValue++;
  document.querySelector('#score-value').textContent = scoreValue;
}, 1500);

const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

freezeGame();
gameOverScreen.hidden = true;
mario.hidden = true;
pipe.hidden = true;
mushroom.hidden = true;

const getAnimationPosition = setInterval(() => {
  pipePosition = pipe.offsetLeft;
  shellPosition = shell.offsetLeft;
  spinyPosition = spiny.offsetLeft;
  cloudPosition = cloud.offsetLeft;
  mushroomPosition = mushroom.offsetLeft;
  marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
}, 10);

let loopGame;

const getMushroom = setInterval(() => {
  if ((mushroomPosition <= marioColisionBox && mushroomPosition > 0 && marioPosition < 80) &&
    mario.classList.contains('small')) {
      freezeGame();
        mushroom.style.left = '100%';

      for (let i=0 ; i < 24 ;){
        setTimeout(() => {
          marioBig();
        }, (i++)*75);
        setTimeout(() => {
          marioSmall();
        }, (i++)*75);
      }

      setTimeout(() => {
        marioBig();
        marioColisionBox = 100;
      }, 2100);

      setTimeout(() => {
        unfreezeGame();
      }, 2100);
  } else if ((mushroomPosition <= marioColisionBox && mushroomPosition > 0 && marioPosition < 80) &&
  mario.classList.contains('big')) {
    mushroom.style.left = '100%';
    mushroom.style.animation = 'none';
    setTimeout(() => {
      mushroom.style.left = 'auto';
      mushroom.style.animation='mushroom-animation 10s infinite linear';
    }, 1000);
    scoreValue = scoreValue +10;
    document.querySelector('#score-value').textContent = scoreValue;
  }
  
}, 10);

document.addEventListener("keydown", jump);
document.addEventListener("click", jump);

function marioBig(){
  mario.src = './Images/super-mario.gif';
  mario.classList.remove('small');
  mario.classList.add('big');
}

function marioSmall(){
  mario.src = './Images/small-mario.gif';
  mario.classList.remove('big');
  mario.classList.add('small');
}

function freezeGame(){
  clearInterval(scoreTimer);
  pipe.style.animation = "none";
  pipe.style.left = `${pipePosition}px`;
  ground.style.animation = "none";
  cloud.style.animation='none';
  cloud.style.left = `${cloudPosition}px`;
  shell.style.animation = 'none';
  shell.style.left = `${shellPosition}px`;
  mushroom.style.animation = 'none';
  mushroom.style.left = `${mushroomPosition}px`;
  spiny.style.animation = 'none';
  spiny.style.left = `${spinyPosition}px`;
}

function gameOver(){
  freezeGame();
  song.pause();
  function playDeathSound () {
    deathSound.loop = false;
    deathSound.play();
  }
  playDeathSound();
  mario.src = "./Images/mario-game-over.png";
  mario.classList.add('mario-dead');

  let revealGameOver = setInterval (() =>{
    gameOverScreen.hidden = false;
    startButton.hidden = false;
    function playGameOverSong () {
      gameOverSong.loop = false;
      gameOverSong.play();
    }
    playGameOverSong();
    clearInterval(revealGameOver);
  }, 3000);
}

function unfreezeGame(){
  pipe.style.animation = "pipe-animation 1.5s infinite linear";
  pipe.style.left = 'auto';
  shell.style.animation = 'shell-animation 6.5s infinite linear';
  shell.style.left = 'auto';
  spiny.style.animation = 'spiny-animation 2.5s infinite linear';
  spiny.style.left = 'auto';
  ground.style.animation = "ground-animation 2.4s infinite linear";
  cloud.style.animation='clouds-animation 20s infinite linear';
  cloud.style.left = 'auto';
  mushroom.style.animation='mushroom-animation 10s infinite linear';
  mushroom.style.left = 'auto';
  scoreTimer = 1500;
  scoreTimer = setInterval(() => {
    scoreValue++;
    document.querySelector('#score-value').textContent = scoreValue;
  }, 1500)
}

function startGame(){
  const logo = document.querySelector('.logo');
  logo.hidden = true;
  startButton.hidden = true;
  gameOverScreen.hidden = true;
  scoreValue = 0;
  document.querySelector('#score-value').textContent = scoreValue;
  const initialScreen = document.querySelectorAll('.game');
  initialScreen.forEach(initialScreen => {
    initialScreen.classList.remove('initial-screen');
  });
  mario.classList.remove('mario-dead');
  marioBig();
  marioColisionBox = 100;
  mario.hidden = false;
  pipe.hidden = false;
  mushroom.hidden = false;
  unfreezeGame();

  gameOverSong.pause();
  function playSong () {
    song.loop = true;
    song.play();
  }
  playSong();

  loopGame = setInterval(() => {

    if (( (pipePosition <= marioColisionBox && pipePosition > 0 && marioPosition < 80) ||
        (shellPosition <= marioColisionBox && shellPosition > 0 && marioPosition < 80) ) ||
        (spinyPosition <= marioColisionBox && spinyPosition > 0 && marioPosition < 80)) {
      if (mario.classList.contains('big') && !(mario.classList.contains('invincible'))){
        mario.classList.add('invincible');
        freezeGame();
        
        for (let i=0 ; i < 24 ;){
          setTimeout(() => {
            marioSmall();
          }, (i++)*75);
          setTimeout(() => {
            marioBig();
          }, (i++)*75);
        }
  
        setTimeout(() => {
          marioSmall();
        }, 2100);
  
        setTimeout(() => {
          unfreezeGame();
        }, 2100);
  
        setTimeout(() => {
          mario.classList.remove("invincible");
        }, 3000);
        marioColisionBox = 80;
      }
  
      if (!(mario.classList.contains('invincible'))) {
        freezeGame();
        gameOver();
  
        clearInterval(loopGame);
      }
    }
    
  }, 10);
}
