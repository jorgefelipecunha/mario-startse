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
var runOnceSetInterval = 0
var itemsUnlocked = [true, true, false, false, false, false, false, false]
var pulo = false

let characters = document.querySelectorAll('.person__img')
const personMenu = document.querySelector('.main-menu__person')
const cardsPerson = document.querySelectorAll('.select-person__person')
console.log(cardsPerson)

// backgrounds
const bg1 = document.querySelector('.background__img--1')
const bg2 = document.querySelector('.background__img--2')
const bg3 = document.querySelector('.background__img--3')
const bgTerrain = document.querySelector('.background__terrain')

// sons
const soundMenu = new Audio()
const soundGame = new Audio()
const soundGameOver = new Audio()
const soundJump = new Audio()

soundMenu.src = './sound/marked.mp3'
soundGame.src = './sound/ambient_bongos.mp3'
soundGameOver.src = './sound/asking_questions.mp3'
soundJump.src = './sound/jump2.mp3'

// funções
const jump = () => {
  if (
    !gameover &&
    sceneGame.style.display == 'flex' &&
    sceneGameOver.style.display == 'none' &&
    pulo === false
  ) {
    pulo = true
    mario.classList.add('jump-mario')
    mario.src = `${playerJump}`
    changeSound(soundJump)

    setTimeout(() => {
      pulo = false
    }, 490)
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

    //fazendo o personagem parar ao morrer
    // mario.style.bottom = `${marioPosition}px`

    //mudando a animação do personagem ao morrer
    mario.style.width = '105px'
    mario.style.marginLeft = '20px'

    sceneGameOver.style.display = 'flex'

    if (runOnceSetInterval <= 1 && sceneGame.style.display == 'flex') {
      mario.src = `${playerDead}`
      pipe.src = './Images/enemy_idle.gif'
      changeSound(soundGameOver, soundGame, soundMenu)

      runOnceSetInterval++
    }

    clearInterval(loopGame)
  }
}

const loopGame = setInterval(loop, 10)

let intervalScore = null
var playerScore = 0

// Atribui à variável bestPoints o valor do recorde armazenado na localStorage ou 0 caso não exista
let bestPoints = parseInt(localStorage.getItem('recorde')) || 0

bestScore.innerHTML = `Best Score: ${bestPoints}`
bestScoreSelectPerson.innerHTML = `Best Score: ${bestPoints}`

let veloEnemy = 2
console.log(parseInt(localStorage.getItem('recorde')))

setLockedBtn(2, '10.000')
setLockedBtn(3, '10.000')
setLockedBtn(4, '15.000')
setLockedBtn(5, '25.000')
setLockedBtn(6, '50.000')
setLockedBtn(7, '100.000')
LockedBtn(bestPoints)

//função responsável por controlar a pontuação e o recorde
const scoreCounter = () => {
  if (!gameover) {
    playerScore = parseInt(playerScore + 20 / Math.pow(veloEnemy, -1))
    score.innerHTML = `Score: ${playerScore}`
    pipe.style.animation =
      'pipe-animation ' + `${veloEnemy}` + 's infinite linear'

    if (veloEnemy >= 1) {
      veloEnemy -= 0.0005
    }
    soundGameOver.pause()
    // Atualiza a melhor pontuação
    if (playerScore > bestPoints) {
      bestPoints = playerScore
      bestScore.innerHTML = `Best Score: ${bestPoints}`
      bestScoreSelectPerson.innerHTML = `Best Score: ${bestPoints}`
      //adiciona recorde no localStorage
      localStorage.setItem('recorde', bestPoints)
      LockedBtn(bestPoints)
      console.log(itemsUnlocked)
    }
  }
}

// função responsável por "restartar" o game
const restartGame = () => {
  runOnceSetInterval = 0
  gameover = false
  sceneGameOver.style.display = `none`
  playerScore = 0
  veloEnemy = 2

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
  changeSound(soundGame, soundGameOver, soundMenu)

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
}

// função responsável por trocar o personagem principal
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
  itemsUnlocked[i] = false
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

  itemsUnlocked[i] = true
}

// função para a adiministração da pontuação nescessaria para desbloquear personagens
function LockedBtn(points) {
  if (points >= 10000 && !itemsUnlocked[2] && !itemsUnlocked[3]) {
    unsetLockedBtn(2)
    unsetLockedBtn(3)
  }
  if (points >= 15000 && !itemsUnlocked[4]) {
    unsetLockedBtn(4)
  }
  if (points >= 25000 && !itemsUnlocked[5]) {
    unsetLockedBtn(5)
  }
  if (points >= 50000 && !itemsUnlocked[6]) {
    unsetLockedBtn(6)
  }
  if (points >= 100000 && !itemsUnlocked[7]) {
    unsetLockedBtn(7)
  }
}

intervalScore = setInterval(scoreCounter, 100)

document.addEventListener('keydown', jump)

//função responsável por fazer a troca de som
function changeSound(soundPlay, ...sounds) {
  soundPlay.play()
  soundPlay.currentTime = 0

  for (let sound of sounds) {
    sound.pause()
  }
}

// eventos de click dos botões
restart.addEventListener('click', restartGame)

btnMenu.addEventListener('click', () => {
  restartGame()
  changeScene(sceneMenu, sceneGame)
  changeSound(soundMenu, soundGameOver, soundGame)
})

btnStart.addEventListener('click', () => {
  restartGame()
  changeScene(sceneMenu, sceneGame)
  changeSound(soundGame, soundGameOver, soundMenu)
})

btnSelectPerson.addEventListener('click', () => {
  changeScene(sceneMenu, sceneSelectPerson)
  soundMenu.play()
})

for (let i = 1; i >= 0; i--) {
  btnBackMenu[i].addEventListener('click', () => {
    changeScene(sceneMenu, sceneSelectPerson)
    changeCharacters([i][0], characters[i])
  })
}
