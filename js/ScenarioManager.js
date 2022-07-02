const bg = document.querySelector(".game");
bg.style.backgroundPositionX = 0;
const ground = document.querySelector(".ground");
ground.style.backgroundPositionX = 0;


function MoveBG() {
    let x = Number.parseInt(bg.style.backgroundPositionX);
    x -= 1;
    bg.style.backgroundPositionX = `${x}px`;
}
function MoveGround() {
    let x = Number.parseInt(ground.style.backgroundPositionX);
    x -= 10;
    ground.style.backgroundPositionX = `${x}px`;
}

function MoveScenario() {
    MoveBG();
    MoveGround();
}

export {MoveScenario}