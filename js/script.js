let frames = 0

const lukeSprites = new Image()
lukeSprites.src = 'sprites/luke-sprites.png'

const sprites = new Image()
sprites.src = 'sprites/sprites.png'

const spritesBackground = new Image()
spritesBackground.src = 'sprites/background-sprite.png'

const canvas = document.querySelector('canvas')
const contexto = canvas.getContext('2d')

const hit = new Audio()
hit.src = 'effects/explosionCrunch_000.ogg'

const jumpEffect = new Audio()
jumpEffect.src = 'effects/jumpeffect3.wav'

const score = new Audio()
score.src = 'effects/forceField_000.ogg'

// [Floor]
function createFloor() {
  const floor = {
    spriteX: 339,
    spriteY: 525,
    width: 176,
    height: 31,
    x: 0,
    y: canvas.height - 31,
    update() {
      const floorMovement = 1
      const repeatIn = floor.width / 2 
      const movement = floor.x - floorMovement


      floor.x = movement % repeatIn
    },
    draw() {
      for (let i = 0; i < 20; i++) {
        contexto.drawImage(
          spritesBackground,
          floor.spriteX,
          floor.spriteY,
          floor.width,
          floor.height,
          floor.x + floor.width * i,
          floor.y,
          floor.width,
          floor.height
        )
      }

      for (let i = 0; i < 20; i++) {
        contexto.drawImage(
          spritesBackground,
          floor.spriteX,
          floor.spriteY,
          floor.width,
          floor.height,
          floor.x + floor.width * i,
          floor.y - floor.height + 1,
          floor.width,
          floor.height
        )
      }
    }
  }
  return floor
}

function fazColisao(luke, floor) {
  const lukeY = luke.y + luke.height
  const floorY = floor.y - floor.height + 1

  if (lukeY >= floorY) {
    return true
  }
  return false
}

// [Luke Skywalker]
function createluke() {
  const luke = {
    spriteX: 75,
    spriteY: 180,
    width: 65,
    height: 43,
    x: -1,
    y: 10,
    jumpSize: 4.6,
    jump() {
      luke.velocidade = -luke.jumpSize
    },
    gravidade: 0.25,
    velocidade: 0,
    update() {
      if (fazColisao(luke, globais.floor)) {
        
        hit.play()

       changeScreen(screens.gameOver)
        return
      }

      luke.y = luke.y + luke.velocidade
      luke.velocidade = luke.velocidade + luke.gravidade
    },
    frameAtual: 0,    
    draw() {
      contexto.drawImage(
        lukeSprites,
        luke.spriteX,
        luke.spriteY,
        luke.width,
        luke.height,
        luke.x,
        luke.y,
        luke.width,
        luke.height
      )
    }
  }
  return luke
}

// [Background]
const background = {
  spriteX: 1029,
  spriteY: 125,
  width: 255,
  height: 255,
  x: 0,
  y: 0,
  draw() {
    
    for (let i = 0; i < 2; i++) {
      contexto.drawImage(
        spritesBackground,
        background.spriteX,
        background.spriteY,
        background.width,
        background.height,
        background.x + background.width * i,
        background.y,
        background.width,
        background.height
      )
    }

    for (let i = 0; i < 2; i++) {
      contexto.drawImage(
        spritesBackground,
        background.spriteX,
        background.spriteY,
        background.width,
        background.height,
        background.x + background.width * i,
        background.y + background.height,
        background.width,
        background.height
      )
    }
  }
}

//[get Ready]
const getReady = {
  spriteX: 134,
  spriteY: 0,
  width: 174,
  height: 44,
  x: canvas.width / 2 - 174 / 2,
  y: canvas.height / 2 - (74 + 65) / 2,
  draw() {
    contexto.drawImage(
      sprites,
      getReady.spriteX,
      getReady.spriteY,
      getReady.width,
      getReady.height,
      getReady.x,
      getReady.y,
      getReady.width,
      getReady.height
    )
  }
}

const getReady2 = {
  spriteX: 162,
  spriteY: 116,
  width: 118,
  height: 35,
  x: canvas.width / 2 - 132 / 2,
  y: canvas.height / 2 - (14 + 5) / 2,
  draw() {
    contexto.drawImage(
      sprites,
      getReady2.spriteX,
      getReady2.spriteY,
      getReady2.width,
      getReady2.height,
      getReady2.x,
      getReady2.y,
      getReady2.width,
      getReady2.height
    )
  }
}

// [Game Over]
const gameOver = {
  spriteX: 134,
  spriteY: 153,
  width: 226,
  height: 200,
  x: canvas.width / 2 - 226 / 2,
  y: canvas.height / 2 - 200/2,
  draw() {
    contexto.drawImage(
      sprites,
      gameOver.spriteX,
      gameOver.spriteY,
      gameOver.width,
      gameOver.height,
      gameOver.x,
      gameOver.y,
      gameOver.width,
      gameOver.height
    )
  }
}

function createPipes() {
  const pipes = {
    width: 52,
    height: 400,
    floor: {
      spriteX: 0,
      spriteY: 169,
    },
    sky: {
      spriteX: 52,
      spriteY: 169,
    },
    space: 80,
    draw() {
      pipes.pairs.forEach(function(pair) {
        const yRandom = pair.y;
        const pipesGap = 110;
  
        const pipeskyX = pair.x;
        const pipeskyY = yRandom; 

        // [pipe do Céu]
        contexto.drawImage(
          sprites, 
          pipes.sky.spriteX, pipes.sky.spriteY,
          pipes.width, pipes.height,
          pipeskyX, pipeskyY,
          pipes.width, pipes.height,
        )
        
        // [pipe do Chão]
        const pipefloorX = pair.x;
        const pipefloorY = pipes.height + pipesGap + yRandom; 
        contexto.drawImage(
          sprites, 
          pipes.floor.spriteX, pipes.floor.spriteY,
          pipes.width, pipes.height,
          pipefloorX, pipefloorY,
          pipes.width, pipes.height,
        )

        pair.pipesky = {
          x: pipeskyX,
          y: pipes.height + pipeskyY
        }
        pair.pipefloor = {
          x: pipefloorX,
          y: pipefloorY
        }
      })
    },
    collisionWithLuke(pair) {
      const lukeHead = globais.luke.y;
      const lukeFoot = globais.luke.y + globais.luke.height;
      
      if((globais.luke.x + globais.luke.width) >= pair.x) {
        if(lukeHead <= pair.pipesky.y) {
          return true;
        }

        if(lukeFoot >= pair.pipefloor.y) {
          return true;
        }
      }
      return false;
    }, 

    Lukepassou(pair) {
      const lukeHead = globais.luke.y;
      const lukeFoot = globais.luke.y + globais.luke.height;
      
      if((globais.luke.x + globais.luke.width) === pair.x) {
        if(lukeHead <= pair.pipesky.y) {
          return true;
        }

        if(lukeFoot >= pair.pipefloor.y) {
          return true;
        }
      }
      return false;
    }, 

    pairs: [],
    update() {
      const passed100Frames = frames % 100 === 0;
      if(passed100Frames) {        
        pipes.pairs.push({
          x: canvas.width,
          y: -150 * (Math.random() + 1),
        });
      }

      pipes.pairs.forEach(function(pair) {
        pair.x = pair.x - 2;

        if(pipes.collisionWithLuke(pair)) {          
          hit.play();
          changeScreen(screens.gameOver);          
        } 

        if(pair.x + pipes.width <= 0) {
          pipes.pairs.shift();
        } 

        if ((globais.luke.x + globais.luke.width) === pair.x) {
          score.play()
        }
      });
    }
  }

  return pipes;
}

//
// [Screens]
//
const globais = {}
let activeScreen = {}

function changeScreen(newScreen) {
  activeScreen = newScreen

  if (activeScreen.inicializa) {
    activeScreen.inicializa()
  }
}

function createScore() { 
  const score = {
    gameScore: 0,
    draw() {
      contexto.font = '16px "Press Start 2P"'
      contexto.textAlign = 'right'
      contexto.fillText(`${score.gameScore}`, canvas.width - 10, 35)
      contexto.fillStyle = 'white'
      score.gameScore
    },
    update() {
      const framesRange = 30
      const passouOIntervalo = frames % framesRange === 0

      if(passouOIntervalo) {
        score.gameScore += 1
      }
    }
  }
  return score
}


const screens = {
  home: {
    inicializa() {
      globais.luke = createluke()
      globais.floor = createFloor()
      globais.pipes = createPipes()
    },
    draw() {
      background.draw()
      getReady.draw()
      getReady2.draw()
      globais.luke.draw()
      globais.floor.draw()


    },
    click() {
      changeScreen(screens.game)
    },
    update() {
      globais.floor.update()
    }
  }
}

screens.game = {
  inicializa() {
    globais.score = createScore()
  },
  draw() {
    background.draw()
    globais.pipes.draw()
    globais.floor.draw()
    globais.luke.draw()
    globais.score.draw()
  },
  click() {
    globais.luke.jump()

    jumpEffect.play()
  },
  update() {
    globais.pipes.update()
    globais.luke.update()
    globais.floor.update()    
    globais.score.update()
  }
}

screens.gameOver = {
  draw() {
    gameOver.draw()    
  },

  click() {
    changeScreen(screens.home)
  },
  
  update() {
   
  }
}

function loop() {
  activeScreen.draw()
  activeScreen.update()

  frames = frames + 1
  requestAnimationFrame(loop)
}

window.addEventListener('click', function () {
  if (activeScreen.click) {
    activeScreen.click()
  }
})

window.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowUp' || e.key === ' ') {
    activeScreen.click()
  }
})

changeScreen(screens.home)
loop()
