const playerChoose = document.querySelectorAll('.player-pic img');
const pcPic = document.querySelector('.pc-pic img');
const scorepc = document.querySelector('.score .score-pc img');
const scoreplayer = document.querySelector('.score .score-player img');
const optwin = document.querySelector('.option');
const mainwin = document.querySelector('.main');
const over = document.querySelector('.over');
const scoreval = document.querySelectorAll('.score p span');
const opt = document.querySelectorAll('.option a');
const restart = document.querySelector('.restart');
const quit = document.querySelector('.quit');
let optval = 0;
let gameResult = document.querySelector('.score-result');
let valplayer = 0;
let valpc = 0;
// const theme = new Howl({
//     src: ['sound/main.mp3'],
//     html5: true
// });

const click = new Howl({
    src: ['sound/click.wav'],
    html5: true
})

const vict = new Howl({
    src: ['sound/win.mp3'],
    html5: true
})

const boo = new Howl({
    src: ['sound/lose.mp3'],
    html5: true
})

const roll = new Howl({
    src: ['sound/load.mp3'],
    html5: true
})

const tie = new Howl({
    src: ['sound/tie.mp3'],
    html5: true
})

function PC() {
    let x = Math.random();
    if (x < 0.34) return 'gunting';
    if (x >= 0.34 && x < 0.67) return 'kertas';
    return 'batu';
}

function result(pc, player) {
    if (player === pc) return 'SERI'
    if (player === 'batu') return (pc === 'gunting') ? 'MENANG' : 'KALAH';
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
        playerChoose.forEach(function(el){
            el.classList.add('none')
        })
    }, 100)
}



opt.forEach(function (el) {
    el.addEventListener('click', function (e) {
        click.play();
        optval = parseInt(this.id);
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
        

        roll.play();
        info.innerHTML = '';

        putar();

        setTimeout(function () {
            playerChoose.forEach(function(el){
                el.classList.remove('none');
            })
            pcPic.setAttribute('src', `img/${pc}.png`);
            info.innerHTML = hasil
            if (hasil === 'MENANG') {
                vict.play();
                valplayer++;
                scoreplayer.setAttribute('src',`img/${valplayer}.png`);
            } else if (hasil === 'KALAH') {
                boo.play();
                valpc++;
                console.log(valpc);
                scorepc.setAttribute('src',`img/${valpc}.png`);
            } else if (hasil === 'SERI'){
                tie.play();
            }

            if (parseInt(valpc) === optval || parseInt(valplayer) === optval) {
                mainwin.style.display = "none"
                info.textContent = ''
                pcPic.setAttribute('src','img/q.png')
                over.style.display = "block"
                if (parseInt(valpc) === optval) {
                    gameResult.textContent = 'PC WIN'
                    gameResult.classList.add('lose')
                } else if (parseInt(valplayer) === optval) {
                    gameResult.textContent = 'PLAYER WIN'
                    gameResult.classList.add('win')
                } else {
                    gameResult.textContent = 'GOBLOK'
                }
               
            }
            
            
        }, 1000)
    })
});

restart.addEventListener('click',function(e){
    click.play();
    over.style.display = 'none'
    optwin.style.display = 'block'
    valplayer = 0;
    valpc = 0;
    scoreplayer.setAttribute('src',`img/${valplayer}.png`);
    scorepc.setAttribute('src',`img/${valpc}.png`);
})