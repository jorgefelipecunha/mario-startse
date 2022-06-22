//player e inimigos
const mario = document.querySelector('.super-mario')
const pipe = document.querySelector('.pipe-game')

var playerIdle = './Images/characters/ninja_man/ninja_man_idle_70.gif'
var playerRun = './Images/characters/ninja_man/ninja_man_run.gif'
var playerJump = './Images/characters/ninja_man/ninja_man_jump.gif'
var playerDead = './Images/characters/ninja_man/ninja_man_dead.gif'

// pontuação
const score = document.querySelector('.score')
const bestScore = document.querySelector('.best__score')
const bestScoreSelectPerson = document.querySelector(
  '.select-person_best__score'
)

// cenas
const sceneGameOver = document.querySelector('.game-over')
const sceneMenu = document.querySelector('.main-menu')
const sceneGame = document.querySelector('.game')
const sceneSelectPerson = document.querySelector('.select-person')

// botões
const restart = document.querySelector('.game-over__restart')
const btnMenu = document.querySelector('.game-over__menu')
const btnStart = document.querySelector('.main-menu__start')
const btnSelectPerson = document.querySelector('.main-menu__select-person')
const btnBackMenu = document.querySelectorAll('.select-person__back-menu')

var gameover = false

let characters = document.querySelectorAll('.person__img')
const personMenu = document.querySelector('.main-menu__person')
const cardsPerson = document.querySelectorAll('.select-person__person')
console.log(cardsPerson)

// backgrounds
const bg1 = document.querySelector('.background__img--1')
const bg2 = document.querySelector('.background__img--2')
const bg3 = document.querySelector('.background__img--3')
const bgTerrain = document.querySelector('.background__terrain')

const jump = () => {
  if (!gameover) {
    mario.classList.add('jump-mario')
    mario.src = `${playerJump}`
  }
  setTimeout(() => {
    mario.classList.remove('jump-mario')

    if (!gameover) {
      mario.src = `${playerRun}`
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
    // mario.style.bottom = `${marioPosition}px`

    //mudando a animação do personagem ao morrer

    sceneGameOver.style.display = 'flex'
    mario.src = `${playerDead}`
    mario.style.width = '105px'
    mario.style.marginLeft = '20px'

    clearInterval(loopGame)
  }
}

const loopGame = setInterval(loop, 10)

let intervalScore = null
var playerScore = 0

let bestPoints = parseInt(localStorage.getItem('recorde')) || 0
LockedBtn(bestPoints)
bestScore.innerHTML = `Best Score: ${bestPoints}`
bestScoreSelectPerson.innerHTML = `Best Score: ${bestPoints}`

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
      bestScoreSelectPerson.innerHTML = `Best Score: ${bestPoints}`
      //adiciona recorde no localStorage
      localStorage.setItem('recorde', bestPoints)
      LockedBtn(bestPoints)
    }
  }
}

//restart
const restartGame = () => {
  gameover = false
  sceneGameOver.style.display = `none`
  playerScore = 0
  velocityEnemy = 2

  mario.src = `${playerRun}`
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
  setInterval(loop, 10)
}

//função para troca de cena
let changeScene = (scene1, scene2) => {
  // muda a cena
  scene1.style.display === 'none'
    ? (scene1.style.display = 'flex')
    : (scene1.style.display = 'none')
  scene2.style.display === 'none'
    ? (scene2.style.display = 'flex')
    : (scene2.style.display = 'none')

  //restarta o game
  restartGame()
}

// eventos de click dos botões
restart.addEventListener('click', restartGame)

btnMenu.addEventListener('click', () => {
  changeScene(sceneMenu, sceneGame)
})

btnStart.addEventListener('click', () => {
  changeScene(sceneMenu, sceneGame)
})

btnSelectPerson.addEventListener('click', () => {
  changeScene(sceneMenu, sceneSelectPerson)
})

for (let i = 1; i >= 0; i--) {
  btnBackMenu[i].addEventListener('click', () => {
    changeScene(sceneMenu, sceneSelectPerson)
    changeCharacters([i][0], characters[i])
  })
}

function changeCharacters(i, character) {
  switch (i) {
    case 0:
      playerIdle = './Images/characters/ninja_man/ninja_man_idle_70.gif'
      playerRun = './Images/characters/ninja_man/ninja_man_run.gif'
      playerJump = './Images/characters/ninja_man/ninja_man_jump.gif'
      playerDead = './Images/characters/ninja_man/ninja_man_dead.gif'
      break

    case 1:
      playerIdle = './Images/characters/ninja_girl/ninja_girl_idle_70.gif'
      playerRun = './Images/characters/ninja_girl/ninja_girl_run.gif'
      playerJump = './Images/characters/ninja_girl/ninja_girl_jump.gif'
      playerDead = './Images/characters/ninja_girl/ninja_girl_dead.gif'
      break

    case 2:
      playerIdle = './Images/characters/cowboy_man/cowboy_man_idle_70.gif'
      playerRun = './Images/characters/cowboy_man/cowboy_man_run.gif'
      playerJump = './Images/characters/cowboy_man/cowboy_man_jump.gif'
      playerDead = './Images/characters/cowboy_man/cowboy_man_dead.gif'
      break

    case 3:
      playerIdle = './Images/characters/cowboy_girl/cowboy_girl_idle_70.gif'
      playerRun = './Images/characters/cowboy_girl/cowboy_girl_run.gif'
      playerJump = './Images/characters/cowboy_girl/cowboy_girl_jump.gif'
      playerDead = './Images/characters/cowboy_girl/cowboy_girl_dead.gif'
      break

    case 4:
      playerIdle = './Images/characters/dino/dino_idle_70.gif'
      playerRun = './Images/characters/dino/dino_run.gif'
      playerJump = './Images/characters/dino/dino_jump.gif'
      playerDead = './Images/characters/dino/dino_dead.gif'
      break

    case 5:
      playerIdle = './Images/characters/robot/robot_idle_70.gif'
      playerRun = './Images/characters/robot/robot_run.gif'
      playerJump = './Images/characters/robot/robot_jump.gif'
      playerDead = './Images/characters/robot/robot_dead.gif'
      break

    case 6:
      playerIdle = './Images/characters/halloween/halloween_idle_70.gif'
      playerRun = './Images/characters/halloween/halloween_run.gif'
      playerJump = './Images/characters/halloween/halloween_jump.gif'
      playerDead = './Images/characters/halloween/halloween_dead.gif'
      break

    case 7:
      playerIdle = './Images/characters/christmas/christmas_idle_70.gif'
      playerRun = './Images/characters/christmas/christmas_run.gif'
      playerJump = './Images/characters/christmas/christmas_jump.gif'
      playerDead = './Images/characters/christmas/christmas_dead.gif'
      break
  }
  personMenu.src = playerIdle
}

// função responsável por bloquear personagens
function setLockedBtn(i, points) {
  btnBackMenu[i].innerHTML = points
  btnBackMenu[i].classList.add('select-person__back-menu--locked')
  btnBackMenu[i].classList.add('select-person__person--locked')
}

// função responsável por desbloquear personagens
function unsetLockedBtn(i) {
  btnBackMenu[i].innerHTML = 'Selecionar'
  btnBackMenu[i].classList.remove('select-person__back-menu--locked')
  btnBackMenu[i].classList.remove('select-person__person--locked')

  btnBackMenu[i].addEventListener('click', () => {
    changeScene(sceneMenu, sceneSelectPerson)
    changeCharacters([i][0], characters[i])
  })
}

// função para a adiministração da pontuação nescessaria para desbloquear personagens
function LockedBtn(points) {
  console.log(points)
  console.log(btnBackMenu[1].innerHTML)

  if (points >= 10000) {
    unsetLockedBtn(2)
    unsetLockedBtn(3)
  } else {
    setLockedBtn(2, 10000)
    setLockedBtn(3, 10000)
  }

  if (points >= 15000) {
    unsetLockedBtn(4)
  } else {
    setLockedBtn(4, 15000)
  }

  if (points >= 25000) {
    unsetLockedBtn(5)
  } else {
    setLockedBtn(5, 25000)
  }

  if (points >= 50000) {
    unsetLockedBtn(6)
  } else {
    setLockedBtn(6, 50000)
  }

  if (points >= 100000) {
    unsetLockedBtn(7)
  } else {
    setLockedBtn(7, 100000)
  }
}

intervalScore = setInterval(scoreCounter, 100)

document.addEventListener('keydown', jump)
