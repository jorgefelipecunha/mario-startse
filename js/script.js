const goku = document.querySelector('.goku-run');
const power = document.querySelector('.power');
const thunder = document.querySelector('.thunder')

const jump = () => {
    goku.src = './img/goku-ataq.gif';
    goku.style.bottom = "210px";

    setTimeout(() => {
        goku.src = './img/goku-run.gif'
        goku.style.bottom = "-10px";
    }, 700);
};

const loopGame = setInterval(() => {
    const powerPosition = power.offsetLeft;
    const reset = document.querySelector('#reset');
    const raditz = document.querySelector('.raditz');
    const gokuPosition = +window
        .getComputedStyle(goku)
        .bottom.replace('px', '');

     if (powerPosition <= 400 && powerPosition > 200 && gokuPosition < 150) {   

        thunder.style.display = 'block';

        goku.src = './img/goku-down.gif';
        goku.style.width = '180px';
        goku.style.marginLeft = '45px';
        goku.style.bottom = "-5px";

        power.style.animation = 'none'
        power.style.left = '-150px'

        raditz.src = './img/raditz-win.gif'
        raditz.style.width = '280px'

        reset.style.display = 'block';
        

        setTimeout(() => {
            thunder.style.display = 'none'
        }, 500);

    }

}, 10);

const loopRaditz = setInterval(() => {
    const raditzPosition = document.querySelector('.raditz').offsetLeft;
    const raditz = document.querySelector('.raditz');
    const raditzAtack = document.querySelector('.raditz-atack')
    const powerPosition = power.offsetLeft;

     if (powerPosition >= raditzPosition ) {    

        raditz.style.display = 'none';
        raditzAtack.style.display = 'block';
        
        setTimeout(() => {
            raditz.style.display = 'block';
            raditzAtack.style.display = 'none';
        }, 450);
    }

}, 10);


document.addEventListener('keydown', jump);
