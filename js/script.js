//Elementos DOM
const yoda = document.querySelector('.yoda');
const enemy = document.querySelector('.enemy');
const jumpSound = document.querySelector('.jumpSound');
const gameOversound = document.querySelector('#gameOverSound');
const trilhaSonora = document.querySelector('#trilhaSonora');
const recarga = document.querySelector('#restart');
const endMenu = document.querySelector('.endMenu');
const darkSide = document.querySelector('.darksideselected');

//Configuracao do Contador
const countScore = document.querySelector('#pointScore')
let score = 0;

const contador = setInterval(() => {
  score ++;
  countScore.innerHTML = `Score ${score}`
}, 500);


//Acrescentando a mecanica de Pulo
const jump = () => {
  yoda.classList.add('jump-yoda');
  jumpSound.play()
  jumpSound.volume = 0.7;

  setTimeout(() => {
  yoda.classList.remove('jump-yoda');
}, 500);
};

//Core do game
const loopegame = setInterval (() => {
  const enemyPosition = enemy.offsetLeft;
  const yodaPosition = +window
  .getComputedStyle(yoda)
  .bottom.replace("px", "");
  trilhaSonora.play();
  trilhaSonora.volume = 0.4;

if (enemyPosition <= 120 && enemyPosition > 0 && yodaPosition < 80) {
  enemy.style.animation = "none";
  enemy.style.left = `${yodaPosition}px`;
    
  yoda.style.animation = "none";
  yoda.style.bottom = `${yodaPosition}px`;
  
  endMenu.style.display = 'flex';

  clearInterval(contador);
  jumpSound.volume = 0.0;
  trilhaSonora.volume = 0.0;
  gameOversound.play();
  gameOversound.volume = 0.5;
  
  yoda.src ="../resources/dead.gif";
  yoda.style.width ="120px";

  enemy.src="../resources/stormtrooperStatic.gif"
  enemy.style.width ="68px"

  clearInterval(loopegame);
}
}, 10);


//Escutador de eventos
recarga.addEventListener("click", function() {
  location.reload();
});
document.addEventListener("keydown", jump);
document.addEventListener("click", jump);
