const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const cloud = document.querySelector(".cloud-game");
const bullet = document.querySelector(".bullet-game");
const fungus = document.querySelector(".fungus-game");
const game = document.querySelector(".game");
const coinCountText = document.querySelector(".coin-count-text");
const coinCounterEl = document.querySelector(".coin-counter");
const startButton = document.querySelector(".start-game-button");
const startGameModal = document.querySelector(".start-game-modal");

let marioIsSmall = true;
let blockInterval = false;
let coinCounter = 0;
let marioWalking = true;
let gameOver = true;

const music = playSound("./sounds/smb_medley.mp3", true, 0.5);

// Helper logic
function playSound(url, repeat, volume) {
  const sound = new Audio(url);

  if (repeat) sound.loop = true;

  if (volume) sound.volume = volume;

  const play = () => sound.play();

  const stop = () => {
    sound.currentTime = 0;
    sound.pause();
  };

  return { play, stop };
}

const checkIntersection = (obj1, obj2) => {
  const obj1Loc = obj1.getBoundingClientRect();
  const obj2Loc = obj2.getBoundingClientRect();

  const onTargetX =
    obj1Loc.right > obj2Loc.left + 5 && obj2Loc.right - 10 > obj1Loc.left;

  const onTargetY =
    obj1Loc.bottom > obj2Loc.top && obj2Loc.bottom > obj1Loc.top;

  const hasIntersection = onTargetX && onTargetY;

  return hasIntersection;
};

// Mario Logic
const jump = () => {
  if (gameOver) return;

  if (!marioWalking) return;

  if (marioWalking) {
    mario.classList.add("jump-mario");
    marioWalking = false;

    if (marioIsSmall) playSound("./sounds/smb_jump-small.wav").play();

    if (!marioIsSmall) playSound("./sounds/smb_jump-super.wav").play();

    setTimeout(() => {
      mario.classList.remove("jump-mario");
      marioWalking = true;
    }, 500);
  }
};

// Coin logic
const createCoin = (positionX) => {
  const el = document.createElement("img");
  el.src = "./Images/coin-game.gif";
  el.className = "coin-game coin-animation";
  el.style.right = `-${positionX}px`;
  el.style.bottom = `${Math.random() * 20 + 20}%`;
  el.style.animationDelay = `${Math.random() * 2}s`;

  return el;
};

const generateCoin = () => {
  let coinPosition = 80;
  game.appendChild(createCoin(coinPosition));
};

const stopCoinsAnimation = () => {
  setTimeout(() => {
    const coins = document.querySelectorAll(".coin-game");

    coins.forEach((coin) => {
      coin.style.left = coin.offsetLeft + "px";
      coin.style.animation = "";
    });
  }, 10);
};

const startCoinGeneration = () => {
  let interval;

  interval = setInterval(() => {
    const coins = document.querySelectorAll(".coin-game");

    if (gameOver) {
      stopCoinsAnimation();
      clearInterval(interval);
    }

    if (coins.length < 10) {
      generateCoin();
    }
  }, 500);
};

const removeAllCoins = () => {
  const coins = document.querySelectorAll(".coin-game");
  coins.forEach((coin) => coin.remove());
};

const coinTouch = () => {
  const coins = document.querySelectorAll(".coin-game");

  coins.forEach((coin) => {
    const onTouch = checkIntersection(mario, coin);

    if (onTouch) {
      coin.remove();
      coinCounter++;
      coinCountText.textContent = coinCounter;

      playSound("./sounds/smb_coin.wav").play();
    }
  });
};

// Bullet logic
const spawnBullet = () => {
  bullet.classList.add("bullet-animation");
};

const bulletGenerator = () => {
  setInterval(() => {
    if (!gameOver) spawnBullet();
  }, 6000);
};

// Power logic
const spawnPower = () => {
  fungus.classList.add("fungus-animation");
};

const startPowerGeneration = () => {
  setInterval(() => {
    spawnPower();
  }, 10000);
};

// Game controllers
const startAnimations = () => {
  cloud.classList.add("cloud-animation");
  pipe.classList.add("pipe-animation");
  bullet.classList.add("bullet-animation");

  startPowerGeneration();

  startCoinGeneration();

  bulletGenerator();
};

const getRecord = () => {
  const record = localStorage.getItem("mario_record") || 0;
  return parseInt(record);
};

const setRecord = (coins) => {
  const lastRecord = getRecord();

  if (lastRecord < coins) localStorage.setItem("mario_record", coins);
};

const updateModal = () => {
  const record = document.querySelector(".start-game-record");
  record.textContent = getRecord();
};

const startGame = () => {
  playSound("./sounds/smb_medley.mp3", true, 0.2);
  gameOver = false;

  const loopGame = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const cloudPosition = cloud.offsetLeft;
    const bulletPosition = bullet.offsetLeft;
    const fungusPosition = fungus.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");

    const hitEnemy =
      checkIntersection(mario, bullet) || checkIntersection(mario, pipe);

    if (!blockInterval && hitEnemy && marioIsSmall) {
      pipe.classList.remove("pipe-animation");
      pipe.style.left = `${pipePosition}px`;

      cloud.classList.remove("cloud-animation");
      cloud.style.left = `${cloudPosition}px`;

      mario.classList.add("block-mario");
      mario.style.bottom = `${marioPosition}px`;

      bullet.classList.remove("bullet-animation");
      bullet.style.left = `${bulletPosition}px`;

      fungus.classList.remove("fungus-animation");
      fungus.style.left = `${fungusPosition}px`;

      mario.src = "./Images/mario-game-over.png";
      mario.style.width = "50px";

      playSound("./sounds/smb_mariodie.wav").play();
      music.stop();

      stopCoinsAnimation();

      setRecord(coinCounter);

      setTimeout(() => {
        startGameModal.classList.remove("hidden");
        updateModal();
      }, 2500);

      gameOver = true;

      clearInterval(loopGame);
    } else if (hitEnemy && !marioIsSmall) {
      marioIsSmall = true;
      blockInterval = true;

      mario.src = "./Images/super-mario-small2.gif";
      mario.style.width = "50px";

      playSound("./sounds/smb_pipe.wav").play();

      setTimeout(() => (blockInterval = false), 500);
    }

    if (checkIntersection(mario, fungus) && marioIsSmall) {
      marioIsSmall = false;
      mario.src = "./Images/super-mario2.gif";
      mario.style.width = "80px";

      fungus.style.animation = "";
      fungus.classList.remove("fungus-animation");

      playSound("./sounds/smb_powerup.wav").play();
    }

    coinTouch();
  }, 10);
};

const resetGame = () => {
  marioIsSmall = true;
  blockInterval = false;
  coinCounter = 0;
  marioWalking = true;
  gameOver = false;
  coinCountText.textContent = 0;

  music.stop();

  mario.style.bottom = "0";
  mario.classList.remove("block-mario");
  mario.src = "./Images/super-mario-small2.gif";

  pipe.style.left = "auto";
  pipe.classList.add("pipe-animation");

  fungus.style.left = "auto";
  fungus.classList.add("fungus-animation");

  bullet.style.left = "auto";
  bullet.classList.add("bullet-animation");

  cloud.style.left = "auto";
  cloud.classList.add("cloud-animation");
};

startButton.addEventListener("click", () => {
  startGameModal.classList.add("hidden");

  mario.classList.remove("hidden");
  pipe.classList.remove("hidden");
  coinCounterEl.classList.remove("hidden");

  resetGame();

  startAnimations();

  removeAllCoins();

  startGame();

  music.play();
});

bullet.addEventListener("animationiteration", () => {
  bullet.style.animation = "";
  bullet.style.bottom = `${Math.random() * 50}%`;
  bullet.classList.remove("bullet-animation");
});

fungus.addEventListener("animationiteration", () => {
  fungus.style.animation = "";
  fungus.classList.remove("fungus-animation");
});

document.addEventListener("DOMContentLoaded", () => {
  const record = document.querySelector(".start-game-record");
  record.textContent = getRecord();
});

document.addEventListener("keydown", jump);

game.addEventListener("touchstart", jump);
