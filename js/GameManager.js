import { AudioPlay } from "./AudioManager.js";
import { MoveScenario } from "./ScenarioManager.js";
import { Mario, mario } from "./Mario.js";


const score = document.querySelector(".meters");
const pipe = document.querySelector(".pipe-game");
const mushroom = document.querySelector(".mushroom-game");
const gameOver = document.querySelector(".gameOver");

var pipePosition = pipe.offsetLeft;
var mushroomPosition = mushroom.offsetLeft;
var marioPosition = + window.getComputedStyle(mario).bottom.replace("px", "");


/* Classe principal. Inicializa o looping, verifica colisões e tem uma referência para o mario  */
export class GameManager {

    /* Define o estado do jogo evitando evitando que inputs depois da derrota sejam ignorados */
    #GameLost;

    #update;

    /* Referência á classe Mario que representa o Mario em si  */
    #player;

    #score;
    constructor() {
        this.#GameLost = false;
        this.#player = new Mario();
        this.#score = 0;

        /* Escuta o evento "onPlayerHurt (quando player é machucado)" e muda o gif */
        document.addEventListener('onPlayerHurt' ,(e) => {
            this.#player.ChangeMarioImage(e.detail)
        })

        /* Escuta o evento "onPlayerDead (quando player é morto)" e aciona GameLost */
        document.addEventListener('onPlayerDead', () => {
            this.GameLose();
        })

        this.#update = setInterval(() => {
            MoveScenario();
            this.CheckForCollisions();

            this.UpdateScore();

        }, 10);

    }

    /* Verifica todas a possíveis colisões */
    CheckForCollisions() {

        marioPosition =+ window
        .getComputedStyle(mario)
            .bottom.replace("px", "");
        
        pipePosition = pipe.offsetLeft;
        mushroomPosition = mushroom.offsetLeft;
        
        /* Pipe */
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) { 
            this.DamagePlayer();
        } 
        /* Mushroom */
        if (mushroomPosition <= 120 && mushroomPosition > 0 && marioPosition < 80) {
            this.HealPlayer(); 
            mushroom.style.animation = "none";
            mushroom.style.display = "none";
            setTimeout(() => {
                mushroom.style.animation = "mushroom-animation  infinite linear";
                mushroom.style.animationDuration = "10s"
                mushroom.style.display = "block";
            }, Math.random() * 1000)
        }
    }

    DamagePlayer() {
        this.#player.Damage();
    }
    HealPlayer() {
        this.#player.Heal();
    }

    /* Configura o Game Over */
    GameLose() {
        
        AudioPlay("death");
        this.#GameLost = true;

        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = "./Images/mario-game-over.png";
        mario.style.width = "60px";
        mario.style.marginLeft = "45px";
        
        gameOver.style.display = "flex";
        score.style.display = "none";
        let GameOverScore = document.querySelector(".gameOverScore");
        GameOverScore.innerHTML = `Sua pontuação: ${this.#score}m`;
        
        clearInterval(this.#update);
    }
    UpdateScore() {
        this.#score += 1;
        score.innerHTML = `Metros percorridos: ${this.#score/10}m`
    }

    /* Inicializa o jogo, definindo pulo e o update */
    InitGame() {
        const jump = () => {
            mario.classList.add("jump-mario");
            AudioPlay("jump");
          
            setTimeout(() => {
              mario.classList.remove("jump-mario");
            }, 500);
          };
          
        document.addEventListener('keydown', (ev) => {
            /* Ignora o input quando o jogo é perdido */
            if (this.#GameLost === true)
              return;
          
            if (ev.key === 'w' || ev.key === 'ArrowUp' || ev.key === ' ') {
              jump();
            }
        });
    }
}