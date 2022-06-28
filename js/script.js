const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game-animation");
const cloud = document.querySelector(".cloud-game");
const audioFase = document.querySelector(".audio-fase");
const audioPulo = document.querySelector(".audio-pulo");
const audioMoeda = document.querySelector(".audio-moeda");
const marioPlay = document.querySelector(".button-game-play");
const moeda = document.getElementById("moeda-img");
const restart = document.querySelector(".restart");

// Variável score
let scoreInner = 0;
let contIncremento = 10;

const audioFasesGame = {
    1: "./audio/1-super-mario-bros.mp3",
    2: "./audio/2-super-mario-bros.mp3",
    3: "./audio/3_mario_fase_caverna.mp3"
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
    3: "./Images/bicho3.png"
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
    audioPulo.play()

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
        // mudaFase();    
        document.addEventListener("keydown", jump);
        audioFase.play();
        audioFase.volume = 0.6;
        audioFase.loop = true;
        
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
    }
    marioPlay.removeEventListener("click", startG);
    marioPlay.addEventListener("click", startG);   

}


const restartGame = () => {
    
    let count = 0;

    const addEvent = () => {

        const checkFase = mudaFase();
        checkFase < 2 ? mudaAudio(checkFase) : mudaFase();
        
        count++;

        restart.removeEventListener("click", addEvent);

        if(checkCredito() > 0 && count <= 1) {
            // if(e.key === 'Enter') 
            // window.location.reload();
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

    }
    restart.addEventListener('click', addEvent);
}


const loopGame = () => {
    let pipePosition = checkPositionLeft(".pipe-game-animation");
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    const moedaPosition = checkPositionLeft("#moeda-img");

    if(pipePosition < -40) {
        scoreInner++
        alterScore(".score-valor", scoreInner);
        mudaFase();
    }

    if(moedaPosition <= 80 && moedaPosition > 30 && marioPosition > 80) {
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
    
    audioFase.attributes.src.value = "./audio/Efeito_Sonoro_Morte_Mario.mp3";
    audioFase.play();
    audioFase.loop = false;

    mudaEstadoDisplay(".menu", "flex")
    mudaEstadoDisplay(".hide", "block");
    
    marioPlay.style.display = 'none' /* Ocultando o botão jogar  */
    
    removeCreditos();
    restartGame();
    // endGame();

}


const endGame = () => {
    const end = getElementoDOM(".finalizar");
    end.addEventListener("click", () => {
        // mudaEstadoDisplay(".end-game", "none");
        if(confirm("Deseja realmente encerrar?")) {
            mudaEstadoDisplay(".end-game", "none");
            getElementoDOM(".container-end").style.display = 'flex';
            getElementoDOM(".audio-fim").play();
            getElementoDOM(".audio-fim").volume = 0.4;
        }
        // end.removeEventListener("click")
    })
}


const mudaFase = () => {
    const faseValueDOM = parseInt(getElementoDOM(".fase").textContent);
    const scoreValueDOM = parseInt(getElementoDOM(".score-valor").textContent);
    let fase = 0;

    fase += faseValueDOM;

    console.log("FASE ", fase)

    if(scoreValueDOM == fase * contIncremento) {
        fase++;
        console.log("Vlaor fase", scoreValueDOM)
        setElementoDOM(getElementoDOM(".fase"), fase)
    }


    if(fase == 2) {
        mudaCenarioFase(fase);
        mudaPersonagem(fase)
        mudaAudio(fase)
        cloud.style.opacity = '0.2';
    }
    else if (fase == 3 ) {
        mudaCenarioFase(fase);
        mudaPersonagem(fase)
        mudaAudio(fase)

        cloud.style.display = "none";
        cloud.style.opacity = '0';
        pipe.style.transform = "rotateY(-180deg)";

        getElementoDOM(".pipe-game").style.transform = "rotateY(-180deg)";
        getElementoDOM(".container-menu").style.color = "white";
        getElementoDOM(".container-end").style.color = "white";
        mudaCorTextoButton();
    }
    return fase;
}


const mudaAudio = (value) => {
    const audioValue = Object.values(audioFasesGame)[value-1];
    const faseValueDOM = parseInt(getElementoDOM(".fase").textContent);
    const getKeyAudio = parseInt(Object.keys(audioFasesGame)[value-1]);
    
    console.log("Chave audio ",getKeyAudio)
    console.log("Audio Conteudo ", audioValue)
    console.log("Valor do DOM ", faseValueDOM)

    faseValueDOM == getKeyAudio ? document.querySelector(".audio-fase").src = `${audioValue}` : 
        audioFase.attributes.src.value = `${Object.values(audioFasesGame)[0]}`;
    
    audioFase.play();
    audioFase.loop = true;

}


const mudaCenarioFase = (value) => {
    const imgValue = Object.values(imgFasesObjeto)[value-2];
    const bottonValue = Object.values(chaoFasesObjeto)[value-2];

    document.querySelector(".container-main").style.backgroundImage = `${imgValue}`;
    document.querySelector(".game").style.borderBottomColor = `${bottonValue}`;
    
}


const mudaCorTextoButton = () => {
    const  btn = document.querySelectorAll(".cor");
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
    const creditos = getElementoDOM(".creditos").textContent;
    let removeCreditos = -1;
    removeCreditos += parseInt(creditos)
    setElementoDOM(getElementoDOM(".creditos"), removeCreditos);
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
endGame();