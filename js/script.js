const sonic = document.querySelector(".sonic");
const sonic2 = document.querySelector('.sonic-2')
const pipe = document.querySelector(".pipe-game");
const eggman = document.querySelector('.eggman');
const tails = document.querySelector('.tails');
const imgBackOne = document.querySelector('#img1');
const imgBackTwo = document.querySelector('#img2')
const ValorContador = document.querySelector('#valor')
const jumps = document.querySelector('#jumps');
const anel = document.querySelector('#anel');
const aneisValor = document.querySelector('#aneis');
const placa = document.querySelector('#contador')
const mensagem = document.querySelector('#mensagem')
const placaAnel = document.querySelector('.placa')
const menu = document.querySelector('#start')
const iniciar = document.querySelector('#play')
let contadorDistancia = 0;
let pulos = 0; 
let aneis = 0;
let sonicImune = 0;
let start = 0;

iniciar.addEventListener('click',  ()=> {
  start = 1;
  sonicImune = 1;
  startar();
  setTimeout(() => {
    sonicImune = 0;

  },500)
 
  
});

const startar = ()=> {
  menu.style.visibility = 'hidden'



const jump = () => {
  
  pulos++;
  sonic.classList.add("jump-sonic");
  setTimeout(() => {
    sonic.classList.remove("jump-sonic");
  }, 500);
};

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const sonicPosition = +window
    .getComputedStyle(sonic)
    .bottom.replace("px", "");

  const anelPosition = anel.offsetLeft;

  if (pipePosition <= 120 && pipePosition > 0 && sonicPosition < 80 && sonicImune == 0) {
    imgBackOne.style.animation = "none";

    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    sonic.style.animation = "none";
    sonic.style.bottom = `${sonicPosition}px`;

    sonic.src = "./Images/sonic/sonic/sonic-over.gif";
    sonic.style.width = "75px";
    sonic.style.marginLeft = "45px";
    sonic.style.zIndex = "9999";

    eggman.className = 'eggmanHehe'
    eggman.src = './Images/sonic/eggman/eggman-hehe.gif';
    tails.src= './Images/sonic/tails/tails-over.gif';
    tails.style.marginLeft = '-15px'
    tails.style.bottom = '0';
    tails.style.zIndex = '99'

    anel.style.visibility = 'hidden';
    
    const mensagemGameOver = document.createElement("p");
    mensagemGameOver.innerText = 'Game Over';
    //placar.appendChild(mensagemGameOver);
    mensagem.textContent = "Game Over"
    placa.style.marginRight = '35%';
    placa.style.marginTop = '50vh';
    placa.style.opacity = '1'
    placa.style.zIndex = '9999'
    clearInterval(loopGame);
  }
  else{ 
    contadorDistancia++;
    ValorContador.textContent = `Distância: ${contadorDistancia} Km`}

  if (anelPosition <= 60 && anelPosition > 0 && sonicPosition < 80) {
   
    transformation();
    setTimeout(() =>{
      normal();
      
    }, 6000) 
   
  } 
}, 10);

const transformation = () => {
  sonic.classList.add("sonic-transformation");
  sonic.src = './Images/sonic/sonic/sonic-transformation.gif'
  setTimeout(() => {
    sonic.src = './Images/sonic/sonic/sonic-speed.gif'
    eggman.style.marginRight = `600px`
    sonic.style.marginLeft = "400px"
    pipe.src = './Images/sonic/obstaculos/porco-espinho.gif'
    pipe.style.animation = 'pipe-animation 0.8s infinite linear'
    anel.style.visibility = 'hidden'

    tails.src = './Images/sonic/tails/tails-fasted.gif'
    tails.style.marginLeft = '50px';
    imgBackOne.style.animation = 'clouds-animation 1s infinite linear';
    imgBackTwo.style.animation = 'clouds-animation-2 1s infinite linear';
    imgBackTwo.style.animationDelay = '0.5s'
   
    contadorDistancia = contadorDistancia * 2;
  },1000 ); 
  
};
const normal = () => {
    
    sonic.src = './Images/sonic/sonic/sonic-transformation.gif'
    sonic.style.height = '100px'
    sonic.className = 'sonic-2'
    sonic.style.marginLeft = "60px"
    eggman.style.marginRight = `500px`
    tails.style.marginLeft = '20px';
    pipe.style.animation = 'none'
    sonicImune =1;
    anel.style.animation = 'none';
    pipe.style.visibility = 'hidden'
  setTimeout(() => {
    pipe.style.visibility = 'visible'
    sonic.className = 'sonic'
     sonic.classList.remove("sonic-transformation");
     pipe.style.animation = 'pipe-animation 1.5s infinite linear'
      sonic.src = './Images/sonic/sonic/sonic-running1.gif'
      sonicImune = 0;
    
    }, 800);
} 
document.addEventListener("keydown", jump);


}