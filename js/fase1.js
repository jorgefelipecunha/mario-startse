const witch = document.querySelector('.witch');
const pumpkin = document.querySelector('.pumpkin');
const thorn = document.querySelector('.thorn');
const gameOver = document.querySelector('.game-over');
const score = document.querySelector('.score');

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

const pulo = () => {
    witch.classList.add("pulo");

    setTimeout(() => {
        witch.classList.remove("pulo");
    }, 700)

    audioJump.play();
 }

document.addEventListener("keydown", pulo)
document.addEventListener("click", pulo)

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
    witch.style.width = "358px";
    witch.style.height = "490px";
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
},10)