const mario = document.querySelector('.super-mario')
const pipe = document.querySelector('.pipe-game')

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
  const pipePosition = pipe.offsetLeft
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
    console.log(marioPosition)
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`

    gameover = true
    mario.src = './Images/ninja_man_dead.gif'
    mario.style.width = '115px'
    mario.style.marginLeft = '20px'

    clearInterval(loopGame)
    gameover = true
  }
}, 10)

document.addEventListener('keydown', jump)
