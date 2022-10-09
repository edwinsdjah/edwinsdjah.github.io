function PC() {
    let x = Math.random();
    if (x < 0.34) return 'gunting';
    if (x >= 0.34 && x < 0.67) return 'kertas';
    return 'batu';
}

function result(pc, player) {
    if (player === pc) return 'SERI'
    if (player === 'batu') return (pc === 'kertas') ? 'MENANG' : 'KALAH';
    if (player === 'gunting') return (pc === 'kertas') ? 'MENANG' : 'KALAH';
    if (player === 'kertas') return (pc === 'gunting') ? 'KALAH' : 'MENANG';
}

function putar() {
    const img = ['batu', 'gunting', 'kertas'];
    let i = 0
    const start = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - start > 1000) {
            clearInterval;
            return
        }
        pcPic.setAttribute('src', `img/${img[i++]}.png`);
        if (i === img.length) i = 0;
    }, 100)
}


const playerChoose = document.querySelectorAll('.player-pic img');
const pcPic = document.querySelector('.pc-pic img');
const scorepc = document.querySelector('.score .score-pc');
const scoreplayer = document.querySelector('.score .score-player');
const optwin = document.querySelector('.option');
const mainwin = document.querySelector('.main');
const over = document.querySelector('.over');
const scoreval = document.querySelectorAll('.score p span');
const opt = document.querySelectorAll('.option a');
const restart = document.querySelector('.restart');
const quit = document.querySelector('.quit');
let optval = 0;
let gameResult = document.querySelector('.score-result');



opt.forEach(function (el) {
    el.addEventListener('click', function (e) {
        optval = parseInt(this.innerHTML);
        console.log(optval)
        optwin.style.display = "none"
        mainwin.style.display = "block"
    })
})


playerChoose.forEach(el => {
    el.addEventListener('click', function () {
        const pc = PC();
        const player = el.className;
        const hasil = result(pc, player);
        const info = document.querySelector('.result');


        info.innerHTML = '';

        putar();

        setTimeout(function () {
            pcPic.setAttribute('src', `img/${pc}.png`);
            info.innerHTML = hasil
            if (hasil === 'MENANG') {
                scoreplayer.innerHTML++;
            } else if (hasil === 'KALAH') {
                scorepc.innerHTML++;
            }

            if (parseInt(scorepc.textContent) === optval || parseInt(scoreplayer.textContent) === optval) {
                mainwin.style.display = "none"
                info.textContent = ''
                pcPic.setAttribute('src','img/q.png')
                over.style.display = "block"
                if (parseInt(scorepc.textContent) === optval) {
                    gameResult.textContent = 'PC WIN'
                } else if (parseInt(scoreplayer.textContent) === optval) {
                    gameResult.textContent = 'PLAYER WIN'
                } else {
                    gameResult.textContent = 'GOBLOK'
                }
            }
        }, 1000)
    })
});

restart.addEventListener('click',function(e){
    over.style.display = 'none'
    optwin.style.display = 'block'
    scorepc.textContent = 0
    scoreplayer.textContent = 0
})

quit.addEventListener('click',function(e){
    window.close;
})