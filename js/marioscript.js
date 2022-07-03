const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');
const restart = document.querySelector('.restart');
const start = document.querySelector('.start');

let scoreValue = 0;

let width = screen.width;


// MONTA O SCORE A PARTIR DO TEMPO

score.textContent = scoreValue;

    function setTime(){
        ++scoreValue;
        score.textContent = scoreValue;
    }   



if(width > 768){

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 800);
};




// setup start screen
pipe.style.animation = 'none';
pipe.style.display = 'none';

document.querySelector('.start').addEventListener('click', startGame);


    

function startGame(){

    pipe.style.display = 'block';
    pipe.style.animation = 'pipe-animation 2000ms infinite linear';
    start.style.display = 'none';

    setTimeout(() =>{
        document.addEventListener('keydown', jump);
        document.addEventListener('touchstart', jump);
        document.addEventListener('click', jump);
        }, 200);

const loopGame = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    setTimeout(setTime(),1000);
    // console.log(`Pipe Position: ${pipePosition} - Mario Position: ${marioPosition}`);

    
    if(pipePosition <= 160 && pipePosition > 40 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/mario-game-over.png';
        mario.style.width = '75px';
        mario.style.bottom = '120px';
        mario.style.left = '120px';

        restartBtn();

        clearInterval(loopGame);

    }

},1);

}

// APARECE BOTÃO RESTART

function restartBtn(){
    restart.style.display = 'block';

    document.removeEventListener('click', jump);
    restart.addEventListener('click',restartGame);
}

const restartGame = () => {

        pipe.style.animation = 'pipe-animation 2000ms infinite linear';
        pipe.style.right = `0px`;
        pipe.style.removeProperty('left');

        mario.src = './images/super-mario.gif';
        mario.style.width = '150px';
        mario.style.bottom = '0px';
        mario.style.left = '40px';
        mario.style.removeProperty('animation');

        restart.style.display = 'none';
        scoreValue = 0;

        setTimeout(() =>{document.addEventListener('click', jump);}, 200);

        startGame();

}

}else{

    const jump = () => {
        mario.classList.add('jump');
    
        setTimeout(() =>{
            mario.classList.remove('jump');
        }, 1000);
    };
    
    document.addEventListener('keydown', jump);
    document.addEventListener('touchstart', jump);

    function startGame(){


    const loopGame = setInterval(() => {
    
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        
        setTimeout(setTime(),1000);
    
        if(pipePosition <= 110 && pipePosition > 40 && marioPosition < 60){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;           
    
            mario.src = './images/mario-game-over.png';
            mario.style.width = '50px';
            mario.style.bottom = '80px';
            mario.style.left = '26px';

            
    
            clearInterval(loopGame);
            restartBtn();
            
            
        }
    
    },1);

}

// APARECE BOTÃO RESTART

function restartBtn(){
    restart.style.display = 'block';
    document.removeEventListener('click', jump);
    document.removeEventListener('touchstart', jump);
    restart.addEventListener('click',restartGame);

}

const restartGame = () => {

        pipe.style.animation = 'pipe-animation 2000ms infinite linear';
        pipe.style.right = `0px`;
        pipe.style.removeProperty('left');

        mario.src = './images/super-mario.gif';
        mario.style.width = '100px';
        mario.style.bottom = '0px';
        mario.style.left = '40px';
        mario.style.removeProperty('animation');

        restart.style.display = 'none';
        scoreValue = 0;

        setTimeout(() =>{

            document.addEventListener('click', jump);
            document.addEventListener('touchstart', jump);
        
        }, 200);

        startGame();

}

}
