const cat = document.querySelector(".cat");
const dog = document.querySelector(".angry-dog");
const scoreCard = document.querySelector(".score-card");

let timerDuration = 0;
let scoreArrayGame = [
 
];
scoreArrayGame = JSON.parse(localStorage.getItem('scoreArrayIndexKey'));
scoreArrayGame[3].name = localStorage.getItem('textinput')
//FUNÇÃO FAZ PULAR O PERSONAGEM CONFORME DESCRITO NO CSS, ACIONADA POR KEYDOWN
const jump = () => {
  cat.classList.add("jump-cat");

  setTimeout(() => {
    cat.classList.remove("jump-cat");
  }, 500);
};

const loopGame = setInterval(() => {
  const dogPosition = dog.offsetLeft;
  const catPosition = +window
    .getComputedStyle(cat)
    .bottom.replace("px", "");

    //POSIÇÃO DE CONTATO ENTRE CAT E DOG E PAUSE() TRAVA O TIMER
  if (dogPosition <= 100 && dogPosition > 0 && catPosition < 80) {
    dog.style.animation = "none";
    dog.style.left = `${dogPosition}px`;

    cat.style.animation = "none";
    cat.style.bottom = `${catPosition}px`;

    cat.src = "./Images/catX.png";
    cat.style.width = "110px";
    cat.style.marginLeft = "45px";
    
    //QUANDO DER GAMEOVER CARREGA O MELHOR TEMPO PARA A TELA


    scoreCard.style.display = "block";
    pause();
    //higherScore();
    

    clearInterval(loopGame);
  }
}, 10);

document.addEventListener("keydown", jump);


/*-----------------------high Score--------------------*/



"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;


function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
  }
                              //SALVA O TMEPO EM TELA E PEGA O RANKING DOS 3 PRIMEIROS COLOCADOS
  function pause() {
    timerDuration = document.getElementById('hour').innerText + ":" + document.getElementById('minute').innerText + ":" + document.getElementById('second').innerText;
    clearInterval(cron);
    receiveParametersFromGame();
    
  }
  
  //FUNÇÃO PARA ZERAR O TEMPO QUANDO O JOGO REINICIAR
  function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
  }
  //REGISTRO DE TEMPO PERCORRIDO
  function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
  }
  
  function returnData(input) {
    return input > 10 ? input : `0${input}`
  }
  //função executada ao abrir a pág
  document.addEventListener("DOMContentLoaded", function() {
    start();
    
    
  }); 


  
  function receiveParametersFromGame(){
      scoreArrayGame[3].duration = timerDuration;
      //ORDENA OS COLADOS PELO TEMPO MAIOR/MENOR
      
      scoreArrayGame.sort(function (a, b) {
    return b.duration.localeCompare(a.duration);
  });
  //LOCALECOMPARE COMPARA O TEMPO COMO SENDO UMA STRING
  
  
  localStorage.setItem("scoreArrayIndexKey", JSON.stringify(scoreArrayGame));

    //ADD NOME + TEMPO ORDENADOS
    document.getElementById('score-first').textContent = "1º " + scoreArrayGame[0].name + " --- " + scoreArrayGame[0].duration;
    document.getElementById('score-second').textContent = "2º " + scoreArrayGame[1].name + " --- " + scoreArrayGame[1].duration;
    document.getElementById('score-third').textContent = "3º " + scoreArrayGame[2].name + " --- " + scoreArrayGame[2].duration;
   
 
  };
 
