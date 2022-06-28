const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const music = document.querySelector(".background-music");

const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

function startGame() {
  window.location.reload();
}

let currentPlayer = 0;

function selectPlayer1() {
  alert("Jogador escolhido: Michael Jackson");
  var img = document.querySelector(".super-mario");
  img.setAttribute('src', './Images/player1.gif');
  pipe.style.marginLeft = "0px";
  var msc = document.querySelector(".background-music");
  msc.setAttribute('src',"./music/michaeltheme.mp3");
  function playAudio() { 
    msc.play(); 
  } 

  currentPlayer = 1;
  return currentPlayer;
}


function selectPlayer2() {
  alert("Jogador escolhido: Homer Simpson");
  var img = document.querySelector(".super-mario");
  img.setAttribute('src', './Images/player2.gif');
  pipe.style.marginLeft = "0px";
  var msc = document.querySelector(".background-music");
  msc.setAttribute('src',"./music/simpsonstheme.mp3");
  function playAudio() { 
    msc.play(); 
  } 
  currentPlayer = 2;
  return currentPlayer;
}

function selectPlayer3() {
  alert("Jogador escolhido: Super Mário");
  var img = document.querySelector(".super-mario");
  img.setAttribute('src', './Images/super-mario.gif');
  pipe.style.marginLeft = "0px";
  var msc = document.querySelector(".background-music");
  msc.setAttribute('src',"./music/mariotheme.mp3");
  function playAudio() { 
    msc.play(); 
  } 
  currentPlayer = 3;
  return currentPlayer;
}


const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

 
    switch (currentPlayer) {
      case 1:
        mario.src = "./Images/michael-game-over.png";
        var GOsound = document.querySelector(".GO-sound");
        GOsound.setAttribute('src',"./music/michaelgameover.mp3");
        function playAudioGO() { 
          GOsound.play(); 
        } 
        break;
      case 2:
        mario.src = "./Images/homer-game-over.png";
        var GOsound = document.querySelector(".GO-sound");
        GOsound.setAttribute('src',"./music/homergameover.mp3");
        function playAudioGO() { 
          GOsound.play(); 
        } 
        break;
      default:
        mario.src = "./Images/mario-game-over.png";
        var GOsound = document.querySelector(".GO-sound");
        GOsound.setAttribute('src',"./music/mariogameover.mp3");
        function playAudioGO() { 
          GOsound.play(); 
        } 
    }
    
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    clearInterval(loopGame);
    
  }
}, 10);


document.addEventListener("keydown", jump);

