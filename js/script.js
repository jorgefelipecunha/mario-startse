const data = [
  {
    paralax: [
      './Images/scenes/florest/layer_1.png',
      './Images/scenes/florest/layer_2.png',
      './Images/scenes/florest/layer_3.png',
      './Images/scenes/florest/Layer_0004_Lights.png',
      './Images/scenes/florest/layer_4.png',
      './Images/scenes/florest/layer_5.png',
      '',
      './Images/scenes/florest/layer_6.png',
      './Images/scenes/florest/layer_7.png',
      './Images/scenes/florest/layer_8.png',
      './Images/scenes/florest/layer_9.png'
    ],
    musics: [
      './sound/marked.mp3',
      './sound/ambient_bongos.mp3',
      './sound/asking_questions.mp3'
    ],
    colors: [
      '#70a679',
      '#65ff83',
      'linear-gradient(90deg, #072b0e 0%, #287a36 90%)',
      'linear-gradient(90deg, #051f0a 0%, #113617 90%)',
      '#70a679',
      '#65ff83'
    ],
    font: [
      "'Rubik Bubbles', cursive, sans-serif",
      "'Emilys Candy', cursive, sans-serif"
    ],
    background: `url("../../Images/background/bg_florest.png")`,
    animationParalaxName: 'bg-animation',
    paralaxVelocity: 1
  },
  {
    paralax: [
      '',
      '',
      '',
      '',
      '',
      './Images/scenes/cyberpunk/layer_1.png',
      '',
      './Images/scenes/cyberpunk/layer_2.png',
      '',
      '',
      './Images/scenes/cyberpunk/layer_3.png'
    ],
    musics: [
      './sound/cyberpunk/cyberpunk-street.mp3',
      './sound/cyberpunk/Goodnightmare.mp3',
      './sound/cyberpunk/hear_hat_they_say.mp3'
    ],
    colors: [
      '#B6B6B6',
      '#B6B6B6',
      'linear-gradient(90.44deg, #151515 3.56%, #747171 99.69%)',
      'linear-gradient(90.44deg, #181818 3.56%, #3F3F3F 99.69%)',
      '#B6B6B6',
      '#E4E4E4'
    ],
    font: ["'Rubik Glitch', cursive", "'Uncial Antiqua', cursive, sans-serif"],
    background: "url('../../Images/background/bg_cyberpunk.png')",
    animationParalaxName: 'bg-cyberpunk-animation',
    paralaxVelocity: 1.4
  },
  {
    paralax: [
      '',
      '',
      '',
      '',
      '',
      './Images/scenes/farm/layer_1.png',
      '',
      './Images/scenes/farm/layer_2.png',
      '',
      '',
      './Images/scenes/farm/layer_3.png'
    ],
    musics: [
      './sound/cyberpunk/cyberpunk-street.mp3',
      './sound/cyberpunk/Goodnightmare.mp3',
      './sound/cyberpunk/hear_hat_they_say.mp3'
    ],
    colors: [
      '#344733',
      '#344733',
      'linear-gradient(90.44deg, #048648 3.56%, #B4FFA5 99.69%)',
      'linear-gradient(90.44deg, #056537 3.56%, #8CC77F 99.69%)',
      '#A2DCA1',
      '#93FF92'
    ],
    font: ["'Faster One', cursive", "'Reggae One', cursive"],
    background: "url('../../Images/background/bg_farm.png')",
    animationParalaxName: 'bg-farm-animation',
    paralaxVelocity: 1.5
  },
  {
    paralax: [
      '',
      './Images/scenes/desert/layer_1.png',
      './Images/scenes/desert/layer_2.png',
      '',
      './Images/scenes/desert/layer_3.png',
      './Images/scenes/desert/layer_4.png',
      '',
      './Images/scenes/desert/layer_5.png',
      './Images/scenes/desert/layer_6.png',
      '',
      ''
    ],
    musics: [
      './sound/cyberpunk/cyberpunk-street.mp3',
      './sound/cyberpunk/Goodnightmare.mp3',
      './sound/cyberpunk/hear_hat_they_say.mp3'
    ],
    colors: [
      '#BB9200',
      '#BB0000',
      'linear-gradient(90.44deg, #A6A901 3.56%, #FFF500 99.69%)',
      'linear-gradient(90.44deg, #8D8F00 3.56%, #B7AF00 99.69%)',
      '#D8D100',
      '#EBFF00'
    ],
    font: ["'Macondo Swash Caps', cursive", "'Shojumaru', cursive"],
    background: "url('../../Images/background/bg_desert.png')",
    animationParalaxName: 'bg-desert-animation',
    paralaxVelocity: 0.7
  },
  {
    paralax: [
      '',
      './Images/scenes/industry/layer_1.png',
      './Images/scenes/industry/layer_3.png',
      '',
      './Images/scenes/industry/layer_2.png',
      './Images/scenes/industry/layer_4.png',
      '',
      './Images/scenes/industry/layer_5.png',
      '',
      '',
      ''
    ],
    musics: [
      './sound/cyberpunk/cyberpunk-street.mp3',
      './sound/cyberpunk/Goodnightmare.mp3',
      './sound/cyberpunk/hear_hat_they_say.mp3'
    ],
    colors: [
      '#3DE404',
      '#04D300',
      'linear-gradient(90.44deg, #123900 3.56%, #11D300 99.69%)',
      'linear-gradient(90.44deg, #123900 3.56%, #097100 99.69%)',
      '#3DE404',
      '#05FF00'
    ],
    font: ["'Rubik Wet Paint', cursive", "'Rubik Moonrocks', cursive"],
    background: "url('../../Images/background/bg_industry.png')",
    animationParalaxName: 'bg-industry-animation',
    paralaxVelocity: 0.7
  }
]

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
const sceneOpen = document.querySelector('.main-menu__open-scene')
const sceneGame = document.querySelector('.game')
const sceneSelectPerson = document.querySelector('.select-person')
const sceneSelectScene = document.querySelector('.select-scene')
const sceneCredits = document.querySelector('.credits')

// botões
const restart = document.querySelector('.game-over__restart')
const btnMenu = document.querySelector('.game-over__menu')
const btnStart = document.querySelector('.main-menu__start')
const btnSelectPerson = document.querySelector('.main-menu__select-person')
const btnSelectScene = document.querySelector('.main-menu__select-scene')
const btnCredits = document.querySelector('.main-menu__credits')
const btnBackMenu = document.querySelectorAll('.select-person__back-menu')
const btnCreditsBackMenu = document.querySelector('.credits__back-menu')
const btnScene = document.querySelectorAll('.select-scene__back-menu')
const sceneUnlocked = [true, true, true, true, true, false]
const pauseRestart = document.querySelector('.pause__restart')

var gameover = false
var pause = false
var runOnceSetInterval = 0
var itemsUnlocked = [true, true, false, false, false, false, false, false]
var pulo = false
const messageUnlocked = document.querySelector('.game_message-unlocked')

let characters = document.querySelectorAll('.person__img')
const personMenu = document.querySelector('.main-menu__person')
const cardsPerson = document.querySelectorAll('.select-person__person')

// backgrounds
const bg1 = document.querySelector('.background__img--1')
const bg2 = document.querySelector('.background__img--2')
const bg3 = document.querySelector('.background__img--3')
const bg4 = document.querySelector('.background__img--4')
const bg5 = document.querySelector('.background__img--5')
const bg6 = document.querySelector('.background__img--6')
const bg7 = document.querySelector('.background__img--7')
const bg8 = document.querySelector('.background__img--8')
const bg9 = document.querySelector('.background__img--9')
const bg10 = document.querySelector('.background__img--10')
const bgTerrain = document.querySelector('.background__terrain')
const bgCredits = document.querySelector('.credits__background')

// sons
const soundMenu = new Audio()
const soundGame = new Audio()
const soundGameOver = new Audio()
const soundJump = new Audio()

soundMenu.src = './sound/marked.mp3'
soundGame.src = './sound/ambient_bongos.mp3'
soundGameOver.src = './sound/asking_questions.mp3'
soundJump.src = './sound/jump2.mp3'

soundMenu.loop = true
soundGame.loop = true
soundGameOver.loop = true

// Desativa a cena de abertura depois de 6s que o site foi aberto
setTimeout(() => {
  sceneOpen.style.display = 'none'
}, 6500)

// funções
const jump = () => {
  if (
    !gameover &&
    sceneGame.style.display == 'flex' &&
    sceneGameOver.style.display == 'none' &&
    pulo === false &&
    !pause
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
    if (!gameover && !pause) {
      mario.src = `${playerRun}`
    }
  }, 500)
}

const loop = () => {
  const bg1Position = bg1.offsetLeft
  const bg2Position = bg2.offsetLeft
  const bg3Position = bg3.offsetLeft
  const bg4Position = bg4.offsetLeft
  const bg5Position = bg5.offsetLeft
  const bg6Position = bg6.offsetLeft
  const bg7Position = bg7.offsetLeft
  const bg8Position = bg8.offsetLeft
  const bg9Position = bg9.offsetLeft
  const bg10Position = bg10.offsetLeft
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
    bg4.style.animation = 'none'
    bg4.style.left = `${bg4Position}px`
    bg5.style.animation = 'none'
    bg5.style.left = `${bg5Position}px`
    bg6.style.animation = 'none'
    bg6.style.left = `${bg6Position}px`
    bg7.style.animation = 'none'
    bg7.style.left = `${bg7Position}px`
    bg8.style.animation = 'none'
    bg8.style.left = `${bg8Position}px`
    bg9.style.animation = 'none'
    bg9.style.left = `${bg9Position}px`
    bg10.style.animation = 'none'
    bg10.style.left = `${bg9Position}px`
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

  if (pause) {
    //fazendo Paralax parar ao morrer
    bg1.style.animation = 'none'
    bg1.style.left = `${bg1Position}px`
    bg2.style.animation = 'none'
    bg2.style.left = `${bg2Position}px`
    bg3.style.animation = 'none'
    bg3.style.left = `${bg3Position}px`
    bg4.style.animation = 'none'
    bg4.style.left = `${bg4Position}px`
    bg5.style.animation = 'none'
    bg5.style.left = `${bg5Position}px`
    bg6.style.animation = 'none'
    bg6.style.left = `${bg6Position}px`
    bg7.style.animation = 'none'
    bg7.style.left = `${bg7Position}px`
    bg8.style.animation = 'none'
    bg8.style.left = `${bg8Position}px`
    bg9.style.animation = 'none'
    bg9.style.left = `${bg9Position}px`
    bg10.style.animation = 'none'
    bg10.style.left = `${bg9Position}px`
    bgTerrain.style.animation = 'none'
    bgTerrain.style.left = `${bgTerrainPosition}px`

    //fazendo o inimigo parar ao morrer
    if (runOnceSetInterval <= 1) {
      pipe.style.animation = 'none'
      pipe.style.right = null
      runOnceSetInterval++
      pipe.style.left = `${pipePosition - 100}px`
    }
  }
}

const loopGame = setInterval(loop, 10)

let intervalScore = null
var playerScore = 0

// Atribui à variável bestPoints o valor do recorde armazenado na localStorage ou 0 caso não exista
let bestPoints = parseInt(localStorage.getItem('recorde')) || 0
changeThemeGame(parseInt(localStorage.getItem('theme')) || 2)
changeCharacters(parseInt(localStorage.getItem('person')) || 0)

bestScore.innerHTML = `Recorde:  ${bestPoints}`
bestScoreSelectPerson.innerHTML = `Recorde:  ${bestPoints}`

let veloEnemy = 2

setLockedBtn(2, '10.000')
setLockedBtn(3, '10.000')
setLockedBtn(4, '15.000')
setLockedBtn(5, '25.000')
setLockedBtn(6, '50.000')
setLockedBtn(7, '100.000')
LockedBtn(bestPoints)

//função responsável por controlar a pontuação e o recorde
const scoreCounter = () => {
  if (!gameover && !pause) {
    playerScore = parseInt(playerScore + 20 / Math.pow(veloEnemy, -1))
    score.innerHTML = `Pontos:  ${playerScore}`
    pipe.style.animation =
      'pipe-animation ' + `${veloEnemy}` + 's infinite linear'

    if (veloEnemy >= 1) {
      veloEnemy -= 0.0005
    }
    soundGameOver.pause()
    // Atualiza a melhor pontuação
    if (playerScore > bestPoints) {
      printMensagemitemUnlocked(itemsUnlocked, playerScore, messageUnlocked)
      bestPoints = playerScore
      bestScore.innerHTML = `Recorde:  ${bestPoints}`
      bestScoreSelectPerson.innerHTML = `Recorde:  ${bestPoints}`
      //adiciona recorde no localStorage
      localStorage.setItem('recorde', bestPoints)
      LockedBtn(bestPoints)
    }
  }
}

// função responsável pela exibição da mensagem de skin liberada
function printMensagemitemUnlocked(
  itemsUnlockedMessage,
  bestPointsMessage,
  messageUnlockedDiv
) {
  if (bestPointsMessage >= 10000 && itemsUnlockedMessage[3] === false) {
    messageUnlockedDiv.innerHTML = `nova skin desbloqueada! <br />
    10000 pontos`

    messageUnlockedDiv.style.animation = `message-unlocked 4s ease-out forwards`

    setTimeout(() => {
      messageUnlockedDiv.style.animation = `none`
    }, 4000)
  }

  if (bestPointsMessage >= 15000 && itemsUnlockedMessage[4] === false) {
    messageUnlockedDiv.innerHTML = `nova skin desbloqueada! <br />
    15000 pontos`

    messageUnlockedDiv.style.animation = `message-unlocked 4s ease-out forwards`
    setTimeout(() => {
      messageUnlockedDiv.style.animation = `none`
    }, 4000)
  }

  if (bestPointsMessage >= 25000 && itemsUnlockedMessage[5] === false) {
    messageUnlockedDiv.innerHTML = `nova skin desbloqueada! <br />
    25000 pontos`

    messageUnlockedDiv.style.animation = `message-unlocked 4s ease-out forwards`
    setTimeout(() => {
      messageUnlockedDiv.style.animation = `none`
    }, 4000)
  }

  if (bestPointsMessage >= 50000 && itemsUnlockedMessage[6] === false) {
    messageUnlockedDiv.innerHTML = `nova skin desbloqueada! <br />
    50000 pontos`

    messageUnlockedDiv.style.animation = `message-unlocked 4s ease-out forwards`
    setTimeout(() => {
      messageUnlockedDiv.style.animation = `none`
    }, 4000)
  }

  if (bestPointsMessage >= 100000 && itemsUnlockedMessage[7] === false) {
    messageUnlockedDiv.innerHTML = `nova skin desbloqueada! <br />
    100000 pontos`

    messageUnlockedDiv.style.animation = `message-unlocked 4s ease-out forwards`
    setTimeout(() => {
      messageUnlockedDiv.style.animation = `none`
    }, 4000)
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

  //fazendo voltar ao reiniciar
  bg1.style.animation = `${
    data[parseInt(localStorage.getItem('theme')) || 0].animationParalaxName
  } ${
    data[parseInt(localStorage.getItem('theme')) || 0].paralaxVelocity * 0
  }s infinite linear`
  bg1.style.left = `-6px`

  bg2.style.animation = `${
    data[parseInt(localStorage.getItem('theme')) || 0].animationParalaxName
  } ${
    data[parseInt(localStorage.getItem('theme')) || 0].paralaxVelocity * 6
  }s infinite linear`
  bg2.style.left = `-6px`

  bg3.style.animation = `${
    data[parseInt(localStorage.getItem('theme')) || 0].animationParalaxName
  } ${
    data[parseInt(localStorage.getItem('theme')) || 0].paralaxVelocity * 5
  }s infinite linear`
  bg3.style.left = `-6px`

  bg4.style.animation = `light-animation 9s infinite linear`
  bg4.style.left = `500px`

  bg5.style.animation = `${
    data[parseInt(localStorage.getItem('theme')) || 0].animationParalaxName
  } ${
    data[parseInt(localStorage.getItem('theme')) || 0].paralaxVelocity * 4
  }s infinite linear`
  bg5.style.left = `-6px`

  bg6.style.animation = `${
    data[parseInt(localStorage.getItem('theme')) || 0].animationParalaxName
  } ${
    data[parseInt(localStorage.getItem('theme')) || 0].paralaxVelocity * 3
  }s infinite linear`
  bg6.style.left = `-6px`

  bg7.style.animation = `light-animation 0s infinite linear`
  bg7.style.left = `500px`

  bg8.style.animation = `${
    data[parseInt(localStorage.getItem('theme')) || 0].animationParalaxName
  } ${
    data[parseInt(localStorage.getItem('theme')) || 0].paralaxVelocity * 1.8
  }s infinite linear`
  bg8.style.left = `-6px`

  bg9.style.animation = `${
    data[parseInt(localStorage.getItem('theme')) || 0].animationParalaxName
  } ${
    data[parseInt(localStorage.getItem('theme')) || 0].paralaxVelocity * 1.6
  }s infinite linear`
  bg9.style.left = `-6px`

  bg10.style.animation = `${
    data[parseInt(localStorage.getItem('theme')) || 0].animationParalaxName
  } ${
    data[parseInt(localStorage.getItem('theme')) || 0].paralaxVelocity * 1.1
  }s infinite linear`
  bg10.style.left = `-6px`

  bgTerrain.style.animation = `${
    data[parseInt(localStorage.getItem('theme')) || 0].animationParalaxName
  } ${
    data[parseInt(localStorage.getItem('theme')) || 0].paralaxVelocity * 1.4
  }s infinite linear`
  bgTerrain.style.left = `-6px`

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
  localStorage.setItem('person', i)
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

function changeThemeGame(index) {
  localStorage.setItem('theme', index)
  sceneMenu.style.background =
    sceneSelectPerson.style.background =
    bgCredits.style.background =
      data[index].background

  bg1.src = data[index].paralax[0]
  bg2.src = data[index].paralax[1]
  bg3.src = data[index].paralax[2]
  bg4.src = data[index].paralax[3]
  bg5.src = data[index].paralax[4]
  bg6.src = data[index].paralax[5]
  bg7.src = data[index].paralax[6]
  bg8.src = data[index].paralax[7]
  bg9.src = data[index].paralax[8]
  bgTerrain.src = data[index].paralax[9]
  bg10.src = data[index].paralax[10]

  soundMenu.src = data[index].musics[0]
  soundGame.src = data[index].musics[1]
  soundGameOver.src = data[index].musics[2]
  soundMenu.play()

  document.documentElement.style.setProperty(
    '--color-text-ui',
    data[index].colors[0]
  )
  document.documentElement.style.setProperty(
    '--color-btn',
    data[index].colors[1]
  )
  document.documentElement.style.setProperty(
    '--linear-btn',
    data[index].colors[2]
  )

  document.documentElement.style.setProperty(
    '--btn-hover',
    data[index].colors[3]
  )
  document.documentElement.style.setProperty(
    '--color-credits',
    data[index].colors[4]
  )
  document.documentElement.style.setProperty(
    '--color-credits-hover',
    data[index].colors[5]
  )

  document.documentElement.style.setProperty(
    '--font-primary',
    data[index].font[0]
  )
  document.documentElement.style.setProperty('--font-ui', data[index].font[1])

  bg1.style.animation = `${data[index].animationParalaxName} ${
    data[parseInt(localStorage.getItem('theme'))].paralaxVelocity * 0
  }s infinite linear`
  bg1.style.left = `-6px`
  bg2.style.animation = `${data[index].animationParalaxName} ${
    data[parseInt(localStorage.getItem('theme'))].paralaxVelocity * 6
  }s infinite linear`
  bg2.style.left = `-6px`

  bg3.style.animation = `${data[index].animationParalaxName} ${
    data[parseInt(localStorage.getItem('theme'))].paralaxVelocity * 5
  }s infinite linear`
  bg3.style.left = `-6px`

  bg4.style.animation = `light-animation 9s infinite linear`
  bg4.style.left = `500px`
  bg5.style.animation = `${data[index].animationParalaxName} ${
    data[parseInt(localStorage.getItem('theme'))].paralaxVelocity * 4
  }s infinite linear`
  bg5.style.left = `-6px`
  bg6.style.animation = `${data[index].animationParalaxName} ${
    data[parseInt(localStorage.getItem('theme'))].paralaxVelocity * 3
  }s infinite linear`
  bg6.style.left = `-6px`
  bg7.style.animation = `light-animation 0s infinite linear`
  bg7.style.left = `500px`
  bg8.style.animation = `${data[index].animationParalaxName} ${
    data[parseInt(localStorage.getItem('theme'))].paralaxVelocity * 1.8
  }s infinite linear`
  bg8.style.left = `-6px`
  bg9.style.animation = `${data[index].animationParalaxName} ${
    data[parseInt(localStorage.getItem('theme'))].paralaxVelocity * 1.6
  }s infinite linear`
  bg9.style.left = `-6px`
  bg10.style.animation = `${data[index].animationParalaxName} ${
    data[parseInt(localStorage.getItem('theme'))].paralaxVelocity * 1.1
  }s infinite linear`
  bg10.style.left = `-6px`
  bgTerrain.style.animation = `${data[index].animationParalaxName} ${
    data[parseInt(localStorage.getItem('theme'))].paralaxVelocity * 1.4
  }s infinite linear`
  bgTerrain.style.left = `-6px`
}

// eventos de click dos botões
for (let index = 0; index < btnScene.length; index++) {
  if (sceneUnlocked[index]) {
    btnScene[index].addEventListener('click', () => {
      changeThemeGame(index)
      changeScene(sceneMenu, sceneSelectScene)
    })
  }
}

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

btnSelectScene.addEventListener('click', () => {
  changeScene(sceneMenu, sceneSelectScene)
  soundMenu.play()
})

btnCredits.addEventListener('click', () => {
  changeScene(sceneMenu, sceneCredits)
  soundMenu.play()
})

btnCreditsBackMenu.addEventListener('click', () => {
  changeScene(sceneMenu, sceneCredits)
})

for (let i = 1; i >= 0; i--) {
  btnBackMenu[i].addEventListener('click', () => {
    changeScene(sceneMenu, sceneSelectPerson)
    changeCharacters([i][0], characters[i])
  })
}

//Evento e logica dos hovers do card da seção de seleção de cenas
for (let i = 0; i < btnScene.length; i++) {
  btnScene[i].addEventListener('mouseenter', () => {
    for (let j = 0; j < btnScene.length; j++) {
      //animation: title-open-scene 4s ease-in-out forwards 1s;
      if (j != i) {
        btnScene[j].style.animation = 'card-hover 0.8s ease-in-out forwards'
      }
    }
  })
  btnScene[i].addEventListener('mouseleave', () => {
    for (let j = 0; j < btnScene.length; j++) {
      if (j != i) {
        btnScene[j].style.animation = 'card-hover-out 0.4s ease-in-out forwards'
      }
    }
  })
}
