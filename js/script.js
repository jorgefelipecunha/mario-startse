const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game-animation");
const cloud = document.querySelector(".cloud-game");
const audioFase = document.querySelector(".audio-fase");
const audioPulo = document.querySelector(".audio-pulo");
const audioMoeda = document.querySelector(".audio-moeda");
const marioPlay = document.querySelector(".button-game-play");
const moeda = document.getElementById("moeda-img");
const restart = document.querySelector(".restart");


// Variável globais
let scoreInner = 0;
let gameFase = 10;
let contaInicioJogo = 0;


const audioFasesGame = {
    1: "./audio/1-super-mario-bros.mp3",
    2: "./audio/2-super-mario-bros.mp3",
    3: "./audio/3_mario_fase_caverna.mp3",
    100: "./audio/Efeito_Sonoro_Morte_Mario.mp3",
}


const imgFasesObjeto = {
    2: "url('./Images/fundo2.png')",
    3: "url('./Images/fundo3.png')",
}


const chaoFasesObjeto = {
    bottomFase2: "#FEAC4F",
    bottomFase3: "#182852"
}


const personagemFases = {
    1: "./Images/pipe-game.png",
    2: "./Images/deserto-bicho.png",
    3: "./Images/bicho3.png",
}


const mudaPersonagem = (value) => {
    const imgKey = Object.keys(personagemFases)[value-1];
    const imgValue = Object.values(personagemFases)[value-1];

    pipe.attributes.src.value = `${imgValue}`;
    document.querySelector(".pipe-game").attributes.src.value = `${imgValue}`

}


const getElementoDOM = (value) => {
    return document.querySelector(`${value}`);
    // return parseInt(getCreditosDOM.textContent) >= 0 ? parseInt(getCreditosDOM.textContent) : undefined;
}


const setElementoDOM = (elementDOM, value) => {
    elementDOM.textContent = `${value}`
}


const jump = () => {
    mario.classList.add("jump-mario");
    audioPulo.play();
    setTimeout(() => {
        moeda.style.display = 'block';
        mario.classList.remove("jump-mario");
  }, 500);

};


// Altera o estado dos elementos que contém a classe show para block
const mudaEstadoDisplay = (className, displayEstado) => {
    let showDisplay = document.querySelectorAll(`${className}`);

    // Adiciona o display block em todos os elementos que estão com display none
    for(let i = 0; i < showDisplay.length; i++) {
        showDisplay[i].style.display = `${displayEstado}`;
    }
}


const startGame = () => {
    
    const startG = () => {
        document.addEventListener("keydown", jump);
        mario.classList.remove("game-over-animation");

        mudaAudio(1);        
        setAnimations();

        const start = setInterval(()=> {
            if(loopGame() < 1) {
                clearInterval(start);
            }
        }, 50)

        mudaEstadoDisplay(".menu", "none")
        mario.src = './Images/super-mario.gif';
        document.querySelector(".game").style.height= '100vh';
        mudaEstadoDisplay(".show", "block");
        contaInicioJogo++;

    }

    marioPlay.removeEventListener("click", startG);
    marioPlay.addEventListener("click", startG);  
}


const checkFase = () => {
    const faseValueDOM = parseInt(getElementoDOM(".fase").textContent);
    const scoreValueDOM = parseInt(getElementoDOM(".score-valor").textContent);
    return [faseValueDOM, scoreValueDOM];
}


const restartGame = () => {
    let count = 0;
        
    const addEvent = () => {
        count++;
        document.addEventListener("keydown", jump);
        restart.removeEventListener("click", addEvent);

        if(checkCredito() > 0 && count <= 1) {
            document.addEventListener("keydown", jump); 

            const check = checkFase()[0];
            check < 2 ?  mudaAudio(1) : mudaAudio(check)
            
            count++;
            
            mario.classList.remove("morte-mario")
            setAnimations();
            mario.src = "./Images/super-mario.gif";

            mario.style.width = "150px";
            mario.style.marginLeft = "-45px";

            mudaEstadoDisplay(".super-mario", "block")
            document.querySelector(".game").style.height= '100vh';
        
            document.querySelector(".menu").style.display = 'none';
            mudaEstadoDisplay(".hide", "none");
            mudaEstadoDisplay(".show", "block")

            const starte = setInterval(()=> {
                if(loopGame() < 1) {
                    clearInterval(starte);
                }
            }, 50)
        }
        else {
            mudaEstadoDisplay(".start-game", "none")
         }

    }
    restart.addEventListener('click', addEvent);
}


const loopGame = () => {
    let pipePosition = checkPositionLeft(".pipe-game-animation");
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    const moedaPosition = checkPositionLeft("#moeda-img");

    if(pipePosition > 0 && pipePosition < 40 && marioPosition > 80) {
        scoreInner++
        alterScore(".score-valor", scoreInner);
        mudaFase();
    }

    if(moedaPosition <= 120 && moedaPosition > 30 && marioPosition > 60) {
        scoreMoeda();
        moeda.style.display = 'none'
    }
    

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        removeAnimation()
        stopLoopGame()

        mario.style.marginLeft = `${marioPosition}px`;
        
        return 0
    }
    
    return 1
}


const stopLoopGame = () => {
    mudaEstadoDisplay(".show", "block") 
    
    mario.src = "./Images/mario-game-over.png";
    mario.style.width = "75px";

    mario.classList.add("morte-mario");

    document.removeEventListener("keydown", jump);

    mudaEstadoDisplay(".menu", "flex")
    mudaEstadoDisplay(".hide", "block");
    
    marioPlay.style.display = 'none'; /* Ocultando o botão jogar  */
    
    mudaAudio(100); // Audio da morte morte do Mário
    removeCreditos();
    restartGame();

    if(checkCredito() < 1) {
        mudaEstadoDisplay(".start-game", "none");
        gameOver();
    }

}


const gameOver = () => {

    const gameOverOption = getElementoDOM(".restart-game-over")
    document.removeEventListener("click", restart)

    mudaAudio(100); /* Colocando o som de morte do Mário */
    mudaAudio.loop = false;

    mudaEstadoDisplay(".game-over", "block");
    mudaEstadoDisplay(".menu", "flex")
    
    document.querySelector(".restart").style.display = "none";    
    document.querySelector(".menu-title-h1").textContent = "GAME OVER";

    document.removeEventListener("click", gameOverOption)

    gameOverOption.addEventListener("click", () => {
        window.location.reload();
    })
}


const endGame = () => {
    
    const end = getElementoDOM(".finalizar");
    const yes = getElementoDOM(".option-yes");
    const no = getElementoDOM(".option-no");

    end.addEventListener("click", () => {    
        mudaEstadoDisplay(".option", "block");
        mudaEstadoDisplay(".finalizar-hide", "none")
        mudaEstadoDisplay(".menu-title", "block");
        
        if (contaInicioJogo < 1) {
            document.querySelector(".restart").classList.remove("start-game");

        }
        else {
            document.querySelector(".restart").style.display = "none"
        }
        
        yes.addEventListener("click", () => {
            document.querySelector(".audio-fim").play();
            mudaEstadoDisplay(".container-end", "flex");
            mudaEstadoDisplay(".end-game", "none");
            mudaEstadoDisplay(".mudar-cor", "none");
        })

        no.addEventListener("click", () => {
            mudaEstadoDisplay(".option", "none");
            mudaEstadoDisplay(".start-game", "block");
            mudaEstadoDisplay(".finalizar", "block");

            contaInicioJogo < 1 ? document.querySelector(".button-game-play").style.display = "block" :
                checkCredito() >= 1 ? document.querySelector(".restart").style.display = "block" : 
                    document.querySelector(".restart").style.display = "none";

            checkCredito() < 1 ? document.querySelector(".restart-game-over").style.display = "block" :
            document.querySelector(".restart-game-over").style.display = "none";
        })
    })
}


const mudaFase = () => {
    let fase = 0;
    let durationFase = 0;

    fase +=  checkFase()[0];

    if(checkFase()[1] == fase * gameFase) {
        fase++;
        fase < 3 ? mudaAudio(fase) : mudaAudio(3)
        setElementoDOM(getElementoDOM(".fase"), fase)
    }

    if(fase === 2) {
        mudaCenarioFase(fase);
        mudaPersonagem(fase)
        // mudaAudio(fase)
        cloud.style.opacity = '0.2';
    }
    else if (fase === 3 ) {
        mudaCenarioFase(fase);
        mudaPersonagem(fase)
        // mudaAudio(fase)

        cloud.style.display = "none";
        cloud.style.opacity = '0';
        pipe.style.transform = "rotateY(-180deg)";

        getElementoDOM(".pipe-game").style.transform = "rotateY(-180deg)";
        getElementoDOM(".container-menu").style.color = "white";
        getElementoDOM(".container-end").style.color = "white";
        mudaCorTextoButton();
    }
}



const mudaAudio = (value) => {
    audioFase.attributes.src.value = `${audioFasesGame[value]}`

    const playAudio = audioFase.play();
    
    if(playAudio !== undefined) {
        playAudio.then(_ => {
            playAudio.pause();
            console.log("OK - ", a)
        }).catch(error => {
            // console.log("Interrompendo áudio")
        })
    }


    value === parseInt(Object.keys(audioFasesGame)[Object.keys(audioFasesGame).length-1]) ? 
        audioFase.loop = false : audioFase.loop = true
}


const mudaCenarioFase = (value) => {
    const imgValue = Object.values(imgFasesObjeto)[value-2];
    const bottonValue = Object.values(chaoFasesObjeto)[value-2];

    document.querySelector(".container-main").style.backgroundImage = `${imgValue}`;
    document.querySelector(".game").style.borderBottomColor = `${bottonValue}`;
    
}


const mudaCorTextoButton = () => {
    const  btn = document.querySelectorAll(".mudar-cor");
    btn.forEach(element => {
        element.style.color = "white";
    });
} 


const alterScore = (elementDOM, scoreValor) => {
    setElementoDOM(getElementoDOM(elementDOM), scoreValor) 
}


const scoreMoeda = () => {
    let moedaScore = parseInt(document.querySelector(".moeda-score").textContent);

    audioMoeda.play();
    
    moedaScore++;

    alterScore(".moeda-score", moedaScore);
}


const checkPositionLeft = (elementDOM) => {
    return getElementoDOM(elementDOM).offsetLeft;
}


const insertCreditos = () => {
    setElementoDOM(getElementoDOM(".creditos"), 1)
}

const checkCredito = () => {
    return parseInt(getElementoDOM(".creditos").textContent)
}


const removeCreditos = () => {
    let removeCreditos = -1;
    removeCreditos += parseInt(getElementoDOM(".creditos").textContent)
    setElementoDOM(getElementoDOM(".creditos"), removeCreditos);
}


const insereCreditos = () => {
    let addCreditos = 1;
    addCreditos += parseInt(getElementoDOM(".creditos").textContent)
    setElementoDOM(getElementoDOM(".creditos"), addCreditos);
}


const setAnimations = () => {
    pipe.style.animation = "pipe-animation 1.5s infinite linear";
    cloud.style.animation = "clouds-animation 20s infinite linear";
    moeda.style.animation = "moeda-animation 2.5s infinite linear";
}


const removeAnimation = () => {
    pipe.style.animation = "none";
    cloud.style.animation = 'none';
    moeda.style.animation = 'none';
}


startGame();
// restartGame();
endGame();