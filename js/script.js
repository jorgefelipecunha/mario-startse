const pikachu = document.querySelector('.pikachu')
const poke = document.querySelector('.pokebola-game')
const containerGameover = document.querySelector('.container-gameover')
const button = document.querySelector('.button-reset')
const time = document.querySelector('#display-tempo')
const soundJump = document.querySelector('#sound-jump')
const soundGameOver = document.querySelector('#sound-gameover')
const soundGame = document.querySelector('#sound-game')

soundGame.play()

// Está parado (=1) ou não (=0)
let parado = 0

let pokePosRefMax = 80
let pikachuPosRefMax = 40

// Condição para deixar o jogo responsivo
if (window.innerWidth > 768) {
  pokePosRefMax = 120
  pikachuPosRefMax = 80
}

// Função para fazer o pikachu pular
const jump = () => {
  pikachu.classList.add('jump-pikachu')
  soundJump.play()

  setTimeout(() => {
    pikachu.classList.remove('jump-pikachu')
  }, 500)
}

const loopGame = setInterval(() => {
  const pokePosition = poke.offsetLeft
  const pikachuPosition = +window
    .getComputedStyle(pikachu)
    .bottom.replace('px', '')

  if (
    pokePosition <= pokePosRefMax &&
    pokePosition > 0 &&
    pikachuPosition < pikachuPosRefMax
  ) {
    poke.style.animation = 'none'
    poke.style.left = `${pokePosition}px`

    pikachu.style.animation = 'none'
    pikachu.style.bottom = `${pikachuPosition}px`

    soundGame.pause()
    soundGameOver.play()

    pikachu.src = './Images/pikachu-game-over.png'
    pikachu.style.width = '100px'
    pikachu.style.marginLeft = '45px'

    containerGameover.classList.remove('hidden')

    parado = 1
    button.addEventListener('click', function () {
      location.reload()
    })

    clearInterval(loopGame)
  }
}, 10)

let interval
let pokeBall = 0
let score = 0

const pokeBallMoviment = () => {
  if (parado) return
  pokeBall++

  // aumenta o grau de dificuldade do jogo
  poke.style.animation =
    'poke-animation ' +
    `${1.5 - Math.floor(pokeBall / 25) / 150}` +
    '2s infinite linear'

  return
}
interval = setInterval(pokeBallMoviment, 200)

time.innerHTML = `Score ${score}`

const scoreCounter = () => {
  if (parado) return
  score++
  time.innerHTML = `Score ${score}`

  return
}
interval = setInterval(scoreCounter, 1000)

document.addEventListener('keydown', jump)
document.addEventListener('click', jump)
