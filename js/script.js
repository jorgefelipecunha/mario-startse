const witch = document.querySelector('.witch');
const pumpkin = document.querySelector('.pumpkin');
const thorn = document.querySelector('.thorn');
const start = document.querySelector('.menu-start');
const gameOver = document.querySelector('.game-over');
const score = document.querySelector('.score');
const scoreArea = document.querySelector('#score');

let pontos = 0;   

const layer0 = document.querySelector("#layer0");
const layer1 = document.querySelector("#layer1");
const layer2 = document.querySelector("#layer2");
const layer3 = document.querySelector("#layer3");
const layer4 = document.querySelector("#layer4");
const layer5 = document.querySelector("#layer5");
const layer6 = document.querySelector("#layer6");

const audioGameOver = new Audio('../assets/Sound/mixkit-fairytale-game-over-1945.wav');
const audioScream = new Audio('../assets/Sound/scream.mp3');
const audioJump = new Audio('../assets/Sound/mixkit-quick-jump-arcade-game-239.wav') 
const audioBack = document.querySelector('.music');


const pulo = () => {
  witch.classList.add("pulo");

  setTimeout(() => {
   witch.classList.remove("pulo");
  }, 700)

  audioJump.play();
}

document.addEventListener("keydown", pulo)
document.addEventListener("touchstart", pulo)

function startGame() {
  audioBack.play();
  
  layer0.style.animation = "layer0 2s infinite linear";
  layer1.style.animation = "layer1 5s infinite linear";
  layer2.style.animation = "layer2 15s infinite linear";
  layer3.style.animation = "layer3 15s infinite linear";
  layer4.style.animation = "layer4 30s infinite linear";
  layer5.style.animation = "layer5 50s infinite linear";
  layer6.style.animation = "layer6 80s infinite linear";  

  witch.style.display = "block";
  pumpkin.style.display = "block";
  thorn.style.display = "block";
  scoreArea.style.display = "block";
  start.style.display = "none";

const loopGame = setInterval(() => {

  const pumpkinPosition = pumpkin.offsetLeft;
  const thornPosition = thorn.offsetLeft;
  const witchPosition = +window.getComputedStyle(witch).bottom.replace("px", "");
    
  if ((pumpkinPosition <= 120 && pumpkinPosition > 0 && witchPosition < 80) || (thornPosition <= 180 && thornPosition > 0 && witchPosition < 80)) {
    pumpkin.style.animation = "none";
    pumpkin.style.left = `${pumpkinPosition}px`;

    thorn.style.animation = "none";
    thorn.style.left = `${thornPosition}px`;

    witch.style.animation = "none";
    witch.style.bottom = `${witchPosition}px`;
        
    witch.src = "../assets/img/Witch/witchdead.gif";
    witch.style.width = "250px";
    witch.style.height = "343px";
    witch.style.marginLeft = "45px";

    layer0.style.animation = "none";
    layer1.style.animation = "none";
    layer2.style.animation = "none";
    layer3.style.animation = "none";
    layer4.style.animation = "none";
    layer5.style.animation = "none";
    layer6.style.animation = "none";

    gameOver.style.display = "block";

    audioScream.play();
    audioGameOver.play();

    clearInterval(loopGame);

  } else {
    pontos += 0.04  ;
    score.innerHTML = `${pontos.toFixed(0)}`
  }
},10)}