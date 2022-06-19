const mario = document.querySelector('.super-mario')
const pipe = document.querySelector('.pipe-game')

const bg1 = document.querySelector('.background__img--1')
const bg2 = document.querySelector('.background__img--2')
const bg3 = document.querySelector('.background__img--3')
const bgTerrain = document.querySelector('.background__terrain')

var gameover = false

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

const loopGame = setInterval(() => {
  const bg1Position = bg1.offsetLeft
  const bg2Position = bg2.offsetLeft
  const bg3Position = bg3.offsetLeft
  const bgTerrainPosition = bgTerrain.offsetLeft

  const pipePosition = pipe.offsetLeft + 100
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
    console.log(marioPosition)

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
    pipe.style.left = `${pipePosition}px + 100`

    //fazendo o personagem parar ao morrer
    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`

    //mudando a animação do personagem ao morrer
    gameover = true
    mario.src = './Images/ninja_man_dead.gif'
    mario.style.width = '105px'
    mario.style.marginLeft = '20px'

    clearInterval(loopGame)
    gameover = true
  }
}, 10)

document.addEventListener('keydown', jump)
