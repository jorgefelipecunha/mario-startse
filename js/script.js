const batman = document.querySelector(".batman");
const coringa = document.querySelector(".coringa");

const jump = () => {
  batman.classList.add("jump-batman");

  setTimeout(() => {
    batman.classList.remove("jump-batman");
  }, 500);
};

const loopGame = setInterval(() => {
  const coringaPosition = coringa.offsetLeft;
  const batmanPosition = + window
    .getComputedStyle(batman)
    .bottom.replace("px", "");

  if (coringaPosition <= 120 && coringaPosition > 0 && batmanPosition < 80) {
    coringa.style.animation = "none";
    coringa.style.left = `${coringaPosition}px`;

    batman.style.animation = "none";
    batman.style.bottom = `${batmanPosition}px`;

    batman.src = "./img/hit.png"
    batman.style.width = "200px";
    batman.style.marginLeft = "5px";

    clearInterval(loopGame);
  }
}, 10);

document.addEventListener("keydown", jump);
