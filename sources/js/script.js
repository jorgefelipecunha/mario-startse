const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe-game");
const bigPipe = document.querySelector(".pipe-game-2");
const bullet = document.querySelector(".bullet");
const bulletTwo = document.querySelector(".bullet-2");
const bird = document.querySelector(".bird");
const clouds = document.querySelector(".cloud-game");
const enemy = document.querySelector(".enemy");
const firstGrass = document.querySelector(".grass-2");
const secondGrass = document.querySelector(".grass-3");
const smallJump = document.getElementById("mario-jump-small");
const marioTheme = document.getElementById("mario-theme");


//game-over element
const gameOver = document.querySelector(".game-over");
const restart = document.querySelector(".restart");

//score element
const scoreElement = document.querySelector(".score-number");
let score = 0;

//configuração do contador
let cont = 0;
let fixedCont = 0;
const contador = setInterval(() => {
    cont += 0.05;
    Math.round(cont);
    fixedCont = cont.toFixed(2);
    console.log(fixedCont);
}, 50);

//jump function
const jump = () => {
    mario.classList.add("jump-mario");
    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500)
    smallJump.play();
};

//configuração do game level
const gameLevel = setInterval(() => {
    console.log(score);
    const pipePosition = pipe.offsetLeft;
    if (fixedCont == 19.35) {

        pipe.style.animation = "pipe-animation-score 1.2s infinite linear";
        //pipe.style.left = `${pipePosition}px` ;
    }

    if (fixedCont == 19.95) {

        bigPipe.style.animation = "pipe-animation-2-score 6s infinite linear";
    }
    if (fixedCont == 22.35) {
        enemy.style.animation = "enemy-animation-score 6s infinite linear"
    }

}, 10);

//configurações gerais do jogo
const loopGame = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const bigPipePosition = bigPipe.offsetLeft;
    const bulletPosition = bullet.offsetLeft;
    const bulletTwoPosition = bulletTwo.offsetLeft;
    const birdPosition = bird.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const enemyPosition = enemy.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    //condicional para parar as animações - game over

    //bloco game over small pipe
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        //parando animações
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        bigPipe.style.animation = "none";
        bigPipe.style.left = `${bigPipePosition}px`;

        bullet.style.animation = "none";
        bullet.style.left = `${bulletPosition}px`;

        bulletTwo.style.animation = "none";
        bulletTwo.style.left = `${bulletTwoPosition}px`;

        bird.style.animation = "none";
        bird.style.left = `${birdPosition}px`;

        clouds.style.animation = "none";
        clouds.style.left = `${cloudsPosition}px`;

        enemy.style.animation = "none";
        enemy.style.left = `${enemyPosition}px`;

        firstGrass.style.animation = "none";
        secondGrass.style.animation = "none";
        //substituição do mario
        mario.src = "sources/img/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "45px"
        marioTheme.src = "sources/audio/smb_gameover.mp3";

        //display elements
        gameOver.style.display = "block";
        restart.style.display = "block";


        clearInterval(loopGame)
    }

    //bloco game over big pipe
    else if (bigPipePosition <= 120 && bigPipePosition > 0 && marioPosition < 80) {

        //parando animações
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        bigPipe.style.animation = "none";
        bigPipe.style.left = `${bigPipePosition}px`;

        bullet.style.animation = "none";
        bullet.style.left = `${bulletPosition}px`;

        bulletTwo.style.animation = "none";
        bulletTwo.style.left = `${bulletTwoPosition}px`;

        bird.style.animation = "none";
        bird.style.left = `${birdPosition}px`;

        clouds.style.animation = "none";
        clouds.style.left = `${cloudsPosition}px`;

        enemy.style.animation = "none";
        enemy.style.left = `${enemyPosition}px`;

        firstGrass.style.animation = "none";
        secondGrass.style.animation = "none";

        //substituição do mario
        mario.src = "sources/img/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "45px"
        marioTheme.src = "sources/audio/smb_gameover.mp3";

        //display elements
        gameOver.style.display = "block";
        restart.style.display = "block";

        score += 10;
        scoreElement.innerHTML = score;

        clearInterval(loopGame)
    }

    //bloco game-over inimigo
    else if (enemyPosition <= 120 && enemyPosition > 0 && marioPosition < 80) {

        //parando animações
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        bigPipe.style.animation = "none";
        bigPipe.style.left = `${bigPipePosition}px`;

        bullet.style.animation = "none";
        bullet.style.left = `${bulletPosition}px`;

        bulletTwo.style.animation = "none";
        bulletTwo.style.left = `${bulletTwoPosition}px`;

        bird.style.animation = "none";
        bird.style.left = `${birdPosition}px`;

        clouds.style.animation = "none";
        clouds.style.left = `${cloudsPosition}px`;

        enemy.style.animation = "none";
        enemy.style.left = `${enemyPosition}px`;

        firstGrass.style.animation = "none";
        secondGrass.style.animation = "none";
        
        //substituição do mario
        mario.src = "sources/img/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "45px"
        marioTheme.src = "sources/audio/smb_gameover.mp3";

        //display elements
        gameOver.style.display = "block";
        restart.style.display = "block";

        score += 1;
        scoreElement.innerHTML = score;

        clearInterval(loopGame)
    }
}, 10);

//chamando função jump para desktop e celular
document.addEventListener("keydown", jump);
window.addEventListener("touchstart", jump);

//função score
const marioScore = () => {

    const pipePosition = pipe.offsetLeft;
    const bigPipePosition = bigPipe.offsetLeft;
    const enemyPosition = enemy.offsetLeft;

    //console.log(bigPipePosition);

    if (pipePosition > 159 && pipePosition < 300) {
        score += 5;
        scoreElement.innerHTML = score;
    }
    else if (bigPipePosition > 159 && bigPipePosition < 300) {
        score += 10;
        scoreElement.innerHTML = score;
    }
    else if (enemyPosition > 130 && enemyPosition < 300) {
        score += 1;
        scoreElement.innerHTML = score;
    }
    else {
        score += 0;
    }
}
document.addEventListener("keydown", marioScore);