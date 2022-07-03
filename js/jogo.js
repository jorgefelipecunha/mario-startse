console.log('[startSe] Mario tap')

let frames = 0;

const sonHit = new Audio();
sonHit.src = '../efeitos/hit.wav';

const stagetheme = new Audio();
stagetheme.src = '../efeitos/stage_theme.wav';

const sonPoints = new Audio();
sonPoints.src = '../efeitos/som_score.mp3';

const sprite = new Image();
sprite.src = "../image/sprites.png";

const pipe = new Image();
pipe.src = "../image/pipes.png";

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');


// [chao]
function criaChao() {
    const chao = {

        spriteX: 384,
        spriteY: 74,
        largura: 884,
        altura: 54,
        x: 0,
        y: canvas.height - 54,

        atualiza() {
            const repeteEm = chao.largura / 2;

            if (chao.x <= - repeteEm) {
                return chao.x = 0
            }

            chao.x = chao.x - 1;
        },

        desenha() {
            contexto.drawImage(
                sprite, //arquivo de imagem
                chao.spriteX, chao.spriteY,  //SpriteX e SpriteY
                chao.largura, chao.altura,  //tamanho do recorte da imagem
                chao.x, chao.y,  // localização canvas
                chao.largura, chao.altura,  // tamanho no canvas
            );


        },
    };

    return chao;
}

// [background]
const planoDeFundo = {

    spriteX: 397,
    spriteY: 144,
    largura: 932,
    altura: 435,
    x: 0,
    y: canvas.height - 485,

    atualiza() {
        const repeteEm = planoDeFundo.largura / 1.7;

        if (planoDeFundo.x <= - repeteEm) {
            return planoDeFundo.x = 0
        }

        planoDeFundo.x = planoDeFundo.x - 1;
    },

    desenha() {
        contexto.drawImage(
            sprite, //arquivo de imagem
            planoDeFundo.spriteX, planoDeFundo.spriteY,  //SpriteX e SpriteY
            planoDeFundo.largura, planoDeFundo.altura,  //tamanho do recorte da imagem
            planoDeFundo.x, planoDeFundo.y,  // localização canvas
            planoDeFundo.largura, planoDeFundo.altura,  // tamanho no canvas
        );


    },
};

function fazColisao(mario, chao) {
    const marioY = mario.y + mario.altura;
    const chaoY = chao.y

    if (marioY >= chaoY) {
        return true;
    }
    return false;

}

function criaMario() {
    const mario = {
        spriteX: 5,
        spriteY: 282,
        largura: 47,
        altura: 53,
        x: 10,
        y: 50,
        pulo: 4.6,

        pula() {
            mario.velocidade = - mario.pulo;
        },

        gravidade: 0.25,
        velocidade: 0,

        atualiza() {
            if (fazColisao(mario, globais.chao)) {
                console.log("faz colisao");
                sonHit.play();


                mudaParaTela(telas.GAME_OVER);

                return;
            }
            mario.velocidade = mario.velocidade + mario.gravidade;
            mario.y += mario.velocidade;
        },

        movimentos: [
            { spriteX: 5, spriteY: 282, }, // asa pra cima
            { spriteX: 59, spriteY: 283, }, // asa no meio 
            { spriteX: 118, spriteY: 283, }, // asa pra baixo

        ],

        frameAtual: 0,
        atualizaOFrameAtual() {
            const intervaloDeFrames = 10;
            const passouOIntervalo = frames % intervaloDeFrames === 0;

            if (passouOIntervalo) {
                const baseDoIncremento = 1;
                const incremento = baseDoIncremento + mario.frameAtual;
                const baseRepeticao = mario.movimentos.length;
                mario.frameAtual = incremento % baseRepeticao
            }
        },

        desenha() {
            mario.atualizaOFrameAtual();
            const { spriteX, spriteY } = mario.movimentos[mario.frameAtual];

            contexto.drawImage(
                sprite, //arquivo de imagem
                spriteX, spriteY,  //SpriteX e SpriteY
                mario.largura, mario.altura,  //tamanho do recorte da imagem
                mario.x, mario.y,  // localização canvas
                mario.largura, mario.altura,  // tamanho no canvas
            );
        }
    }

    return mario;
}
// personagem

// mensagem get ready
const mensagemGetReady = {
    spriteX: 29,
    spriteY: 480,
    largura: 175,
    altura: 177,
    x: (canvas.width / 2) - 174 / 2,
    y: 50,

    desenha() {
        contexto.drawImage(
            sprite, //arquivo de imagem
            mensagemGetReady.spriteX, mensagemGetReady.spriteY,  //SpriteX e SpriteY
            mensagemGetReady.largura, mensagemGetReady.altura,  //tamanho do recorte da imagem
            mensagemGetReady.x, mensagemGetReady.y,  // localização canvas
            mensagemGetReady.largura, mensagemGetReady.altura,  // tamanho no canvas
        );


    },
};

// mensagem game over
const mensagemGameOver = {
    sX: 51,
    sY: 51,
    w: 206,
    h: 91,
    x: (canvas.width / 2) - 200 / 2,
    y: 150,


    desenha() {
        contexto.drawImage(
            sprite,
            mensagemGameOver.sX, mensagemGameOver.sY,
            mensagemGameOver.w, mensagemGameOver.h,
            mensagemGameOver.x, mensagemGameOver.y,
            mensagemGameOver.w, mensagemGameOver.h
        );
    }
}



function criaCanos() {
    const canos = {
        largura: 52,
        altura: 400,
        chao: {
            spriteX: 9,
            spriteY: 8,
        },
        ceu: {
            spriteX: 465,
            spriteY: 10,
        },
        espaco: 80,
        desenha() {

            canos.pares.forEach(function (par) {
                const yRandom = par.y;
                const espacamentoEntreCanos = 110;

                const canoCeuX = par.x;
                const canoCeuY = yRandom;

                // [Cano do Céu]
                contexto.drawImage(
                    pipe,
                    canos.ceu.spriteX, canos.ceu.spriteY,
                    canos.largura, canos.altura,
                    canoCeuX, canoCeuY,
                    canos.largura, canos.altura,
                )

                // [Cano do Chão]
                const canoChaoX = par.x;
                const canoChaoY = canos.altura + espacamentoEntreCanos + yRandom;
                contexto.drawImage(
                    pipe,
                    canos.chao.spriteX, canos.chao.spriteY,
                    canos.largura, canos.altura,
                    canoChaoX, canoChaoY,
                    canos.largura, canos.altura,
                )

                par.canoCeu = {
                    x: canoCeuX,
                    y: canos.altura + canoCeuY
                }
                par.canoChao = {
                    x: canoChaoX,
                    y: canoChaoY
                }
            })
        },

        temColisaoComOMario(par) {
            const cabecaDoMario = globais.mario.y;
            const peDoMario = globais.mario.y + globais.mario.altura;

            if (globais.mario.x + globais.mario.largura >= par.x) {
                if (cabecaDoMario <= (par.canoCeu.y - 20)) {
                    return true
                }
                if (peDoMario >= (par.canoChao.y + 20)) {
                    return true
                }
                sonPoints.play();

            }
            return false;

        },

        pares: [],
        atualiza() {
            const passou100Frames = frames % 100 === 0;
            if (passou100Frames) {
                console.log('Passou 100 frames');
                canos.pares.push({
                    x: canvas.width,
                    y: -150 * (Math.random() + 1),
                });
            }

            canos.pares.forEach(function (par) {
                par.x = par.x - 2;

                if (canos.temColisaoComOMario(par)) {
                    mudaParaTela(telas.GAME_OVER);
                    sonHit.play();

                }

                if (par.x + canos.largura <= 0) {
                    canos.pares.shift();
                }
            });

        }

    }
    return canos;
}

function criaPlacar() {
    const placar = {
        pontuacao: 0,
        desenha() {
            contexto.font = '20px "gameFont"';
            contexto.textAlign = 'right';
            contexto.fillStyle = 'white';
            contexto.fillText(`${placar.pontuacao}`, canvas.width - 10, 35);
        },
        atualiza() {
            const intervaloDeFrames = 20;
            const passouOIntervalo = frames % intervaloDeFrames === 0;

            if (passouOIntervalo) {
                placar.pontuacao = placar.pontuacao + 1;
            }
        }
    }
    return placar;
}

//
// telas
//
const globais = {};
let telaAtiva = {};
function mudaParaTela(novaTela) {
    telaAtiva = novaTela;

    if (telaAtiva.inicializa) {
        telaAtiva.inicializa();
    }


}


const telas = {
    INICIO: {
        inicializa() {
            globais.mario = criaMario();
            globais.chao = criaChao();
            globais.cano = criaCanos();
        },
        desenha() {
            planoDeFundo.desenha();
            globais.mario.desenha();
            globais.chao.desenha();
            mensagemGetReady.desenha();
        },
        click() {
            mudaParaTela(telas.JOGO);
        },
        atualiza() {
            globais.chao.atualiza();
        }
    }
};

telas.JOGO = {
    inicializa() {
        globais.placar = criaPlacar();
    },
    desenha() {
        planoDeFundo.desenha();
        globais.cano.desenha();
        globais.chao.desenha();
        globais.mario.desenha();
        globais.placar.desenha();
    },
    click() {
        globais.mario.pula();
    },
    atualiza() {
        globais.cano.atualiza();
        globais.mario.atualiza();
        globais.chao.atualiza();
        planoDeFundo.atualiza();
        globais.placar.atualiza();
    }


};

telas.GAME_OVER = {
    desenha() {
        mensagemGameOver.desenha();
    },
    atualiza() {

    },
    click() {
        mudaParaTela(telas.INICIO);
    }
}

function loop() {

    telaAtiva.desenha();
    telaAtiva.atualiza()

    frames = frames + 1;
    requestAnimationFrame(loop);
}

window.addEventListener("click", function () {
    if (telaAtiva.click) {
        telaAtiva.click();
    }

});

window.addEventListener('keydown', function (e) {
    if (telaAtiva.click && !e.repeat && e.code === 'Space') {
        telaAtiva.click();
    }
});

mudaParaTela(telas.INICIO);
loop();