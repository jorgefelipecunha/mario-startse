const audioJump = document.querySelector(".audioJump");
const audioDeath = document.querySelector(".deathSound");

const audios = {
    jump: audioJump,
    death: audioDeath
}

function AudioPlay(nome) {
    audios[nome].play();
}

export { AudioPlay };