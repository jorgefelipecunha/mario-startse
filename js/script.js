const mario = document.querySelector('.super-mario')
const pipe = document.querySelector('.pipe-game')
const score = document.querySelector('.score')
const bestScore = document.querySelector('.best__score')

const sceneGameOver = document.querySelector('.game-over')
const restart = document.querySelector('.game-over__restart')

var gameover = false

const bg1 = document.querySelector('.background__img--1')
const bg2 = document.querySelector('.background__img--2')
const bg3 = document.querySelector('.background__img--3')
const bgTerrain = document.querySelector('.background__terrain')

const jump = () => {
  if (!gameover) {
    mario.classList.add('jump-mario')
    mario.src = './Images/ninja_man_jump.gif'
  }
  setTimeout(() => {
    mario.classList.remove('jump-mario')

    if (!gameover) {
      mario.src = './Images/ninja_man_run.gif'
    }
  }, 500)
}

const loop = () => {
  const bg1Position = bg1.offsetLeft
  const bg2Position = bg2.offsetLeft
  const bg3Position = bg3.offsetLeft
  const bgTerrainPosition = bgTerrain.offsetLeft

  const pipePosition = pipe.offsetLeft + 100
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
    gameover = true

    //fazendo Paralax parar ao morrer
    bg1.style.animation = 'none'
    bg1.style.left = `${bg1Position}px`
    bg2.style.animation = 'none'
    bg2.style.left = `${bg2Position}px`
    bg3.style.animation = 'none'
    bg3.style.left = `${bg3Position}px`
    bgTerrain.style.animation = 'none'
    bgTerrain.style.left = `${bgTerrainPosition}px`

    //fazendo o inimigo parar ao morrer
    pipe.style.animation = 'none'
    pipe.style.right = null
    pipe.style.left = `${pipePosition}px + 100`
    pipe.src = './Images/enemy_idle.gif'

    //fazendo o personagem parar ao morrer
    mario.style.bottom = `${marioPosition}px`

    //mudando a animação do personagem ao morrer

    sceneGameOver.style.display = 'flex'
    mario.src = './Images/ninja_man_dead.gif'
    mario.style.width = '105px'
    mario.style.marginLeft = '20px'

    clearInterval(loopGame)
  }
}
const loopGame = setInterval(loop, 10)

let intervalScore = null
var playerScore = 0

//adicionando Record na localStorage
let bestPoints = parseInt(localStorage.getItem('recorde')) || 0
bestScore.innerHTML = `Best Score: ${bestPoints}`
let velocityEnemy = 2
console.log(parseInt(localStorage.getItem('recorde')))
const scoreCounter = () => {
  if (!gameover) {
    playerScore = parseInt(playerScore + 20 / Math.pow(velocityEnemy, -1))
    score.innerHTML = `Score: ${playerScore}`
    pipe.style.animation =
      'pipe-animation ' + `${velocityEnemy}` + 's infinite linear'

    if (velocityEnemy >= 1) {
      velocityEnemy -= 0.0005
    }

    // Atualiza a melhor pontuação
    if (playerScore > bestPoints) {
      bestPoints = playerScore
      bestScore.innerHTML = `Best Score: ${bestPoints}`
      //adicionar no localStorage
      localStorage.setItem('recorde', bestPoints)
    }
  }
}

//restart
const restartGame = () => {
  gameover = false
  sceneGameOver.style.display = `none`
  playerScore = 0
  velocityEnemy = 2

  mario.src = './Images/ninja_man_run.gif'
  mario.style.width = '70px'
  mario.style.marginLeft = null

  //fazendo Paralax parar ao morrer
  bg1.style.animation = `bg-animation 3s infinite linear`
  bg1.style.left = `0`
  bg2.style.animation = `bg-animation 5s infinite linear`
  bg2.style.left = `0`
  bg3.style.animation = `bg-animation 7s infinite linear`
  bg3.style.left = `0`
  bgTerrain.style.animation = `terrain-animation 4s infinite linear`
  bgTerrain.style.left = `0`

  pipe.style.right = `-80px`
  pipe.src = './Images/enemy_1.gif'

  console.log(gameover)
  loopGame = setInterval(loop, 10)
}

restart.addEventListener('click', restartGame)

intervalScore = setInterval(scoreCounter, 100)

document.addEventListener('keydown', jump)
