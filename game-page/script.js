const cuphead = document.querySelector(".cuphead");
const enemy = document.querySelector(".enemy");
const theme = document.querySelector("#theme-audio");
const restart = document.querySelector(".restart");
const scoreGame = document.querySelector("#score-game");

function jump() {
  cuphead.classList.add("jump-cuphead");
  cuphead.src = "../images/cuphead-jump.webp";

  setTimeout(() => {
    cuphead.classList.remove("jump-cuphead");
    cuphead.src = "../images/cuphead-run.gif";
  }, 600);
}

document.addEventListener("keydown", jump);
document.addEventListener("click", jump);

const loopGame = setInterval(() => {
  const enemyPosition = enemy.offsetLeft;
  const cupheadPosition = +window
    .getComputedStyle(cuphead)
    .bottom.replace("px", "");

  if (enemyPosition <= 120 && enemyPosition > 0 && cupheadPosition < 80) {
    enemy.style.animation = "none";
    enemy.style.left = `${enemyPosition}px`;

    cuphead.style.animation = "none";
    cuphead.style.bottom = `${cupheadPosition}px`;

    cuphead.src = "../images/cuphead-dead.webp";
    cuphead.classList.add("death-cuphead");
    cuphead.style.width = "100px";
    cuphead.style.marginLeft = "45px";

    restart.style.display = "block";
    scoreGame.style.display = "none";
    document.addEventListener("keydown");
    document.addEventListener("click");

    document.querySelector(".total").textContent = points;

    clearInterval(loopGame);
  }
}, 5);

let points = 0;

const counter = setInterval(() => {
  const enemyPositionLeft = +window
    .getComputedStyle(enemy)
    .left.replace("px", "");

  if (enemyPositionLeft <= 0) {
    points = points + 5;
  }

  document.querySelector(".result").textContent = points;
}, 50);
