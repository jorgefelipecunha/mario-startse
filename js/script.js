const sonic = document.querySelector(".super-sonic");
const pipe = document.querySelector(".pipe-game");
const game = document.querySelector(".game");
const score = document.querySelector("#score");
let cont = 0;

const jump = () => {
  sonic.classList.add("jump-sonic");

  setTimeout(() => {
    sonic.classList.remove("jump-sonic");
  }, 500);
};

const startButton = document.querySelector("#startButton");

startButton.addEventListener("click", function(){
  startButton.parentNode.style.display = "none";
  let playerScore = 0;
  const loopGame = setInterval(() => {
        const coins = document.querySelectorAll(".coin-game");
    const coin1Position = coins[0].offsetLeft;
    
    const coin2Position = coins[1].offsetLeft;
    const coin3Position = coins[2].offsetLeft;
    const pipePosition = pipe.offsetLeft;
    const sonicPosition = +window
      .getComputedStyle(sonic)
      .bottom.replace("px", "");   

    if (coin1Position <= 120 && coin1Position > 0 && sonic < 80) {
      playerScore += 10;    
      score.textContent = playerScore;       
      coins[0].hidden = "hidden";      
      setTimeout(() => {
        coins[0].removeAttribute("hidden");
      }, 1000);
    }  

    if (coin2Position <= 120 && coin2Position > 0 && sonicPosition < 80) {
      playerScore += 10;      
      score.textContent = playerScore;       
      coins[1].hidden = "hidden";
      setTimeout(() => {
        coins[1].removeAttribute("hidden");
      }, 1000);
    }
  
    if (coin3Position <= 120 && coin3Position > 0 && sonicPosition < 80) {
      playerScore += 10;            
      score.textContent = playerScore;       
      coins[2].hidden = "hidden";
      setTimeout(() => {
        coins[2].removeAttribute("hidden");
      }, 1000);
    }

    if (pipePosition <= 120 && pipePosition > 0 && sonicPosition < 80) {
      pipe.style.animation = "hidden";
      pipe.style.left = `${pipePosition}px`;
  
      sonic.style.animation = "none";
      sonic.style.bottom = `${sonicPosition}px`;
  
      sonic.src = "./Images/gameOverSonic.png";
      sonic.style.width = "110px";
      sonic.style.marginLeft = "45px";

      for(coin of coins){
        coin.style.display = "none";
      }      
      
      const restartButton = document.createElement("button");
      restartButton.setAttribute('id', 'restartButton');
      restartButton.textContent = "Try again";
      const wrapper = document.createElement("div");
      wrapper.setAttribute("id", "wrapper");
      const titleScore = document.createElement("h1");
      titleScore.textContent = "SCORE:";
      wrapper.appendChild(titleScore);
      const finalScore = document.createElement("div");
      finalScore.setAttribute("id", "finalScore");
      finalScore.innerHTML = score.textContent;
      wrapper.appendChild(finalScore);
      wrapper.appendChild(restartButton);
      game.appendChild(wrapper);

      restartButton.addEventListener("click", function(){
        restartButton.remove();        
        location.reload();        
      })
      

      clearInterval(loopGame);
    }
  }, 10);
})





document.addEventListener("keydown", jump);
