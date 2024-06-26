let counter = null;
let questionCounter = 0;
let currentQuestion;
let availableQuestion = [];
let level;
let optionMenu = document.querySelector('.optionMenu');
let mainMenu = document.querySelector('.main');
let overMenu = document.querySelector('.over');
let tab = document.querySelector('table');
let q = document.querySelector('.question');
let a = document.querySelectorAll('.answer');
let s = document.querySelectorAll('.score');
let poin = document.querySelector('.poin');
let l = document.querySelector('.life');
let p = document.querySelector('.player');
let r = document.querySelector('.hasil');
let option = document.querySelectorAll('.option');
let restart = document.querySelector('.restart');
const mes = document.querySelector('.message');
const start = window.innerHeight;

let optheight = document.querySelector('.optionMenu');
const content = document.querySelectorAll('section>.show');



let inputPlayer = document.querySelector('.player');

// content.forEach(function (e) {
//     let style = getComputedStyle(document.querySelector('h1'));
//     let height = document.querySelector('h1').clientHeight;
//     e.style.height = `calc(100vh - (${height}px + ${style.marginTop} + ${style.marginBottom}))`;
// })


window.addEventListener('load', () => {
    playMainMusic();
    getLevel();
    setAvailableQuestion();
    getQuestion();
    search();
})

// window.addEventListener('resize', () => {
//     let main = document.querySelector('.main-content');
//     if (window.innerHeight > start) {
//         main.classList.add('zoom-out');
//     } else if (window.innerHeight <= start) {
//         main.classList.remove('zoom-out');
//     }

// })

restart.addEventListener('click', function () {
    const table = document.querySelectorAll('table tr');
    table.forEach(function (e) {
        e.classList.remove('block');
    });
    click.play();
    level = undefined;
    r.value = '';
    for (let i = 0; i < currentQuestion.jawab.length; i++) {
        a[i].classList.remove('fade-in');
    }
    window.sessionStorage.setItem('items', JSON.stringify(availableQuestion));
    overMenu.classList.remove('show');
    optionMenu.classList.add('show');
    getQuestion();
    console.log(availableQuestion);
})


const resize = new ResizeObserver(function (e) {
    let content = e[0].contentRect;
    let height = content.height;
    let main = document.querySelector('.main-content');
    console.log(`current height = ${height}`);
    if (height < 400) {
        main.classList.add('zoom-out');
    }

})

function getLevel() {
    option.forEach(function (e) {
        e.addEventListener('click', function (el) {
            level = e.id;
            if (level === 'easy') {
                l.textContent = 7;
            } else if (level === 'medium') {
                l.textContent = 5;
            } else {
                l.textContent = 3;
            }
            console.log(el)
            click.play();
            main.stop();
            optionMenu.classList.remove('show');
            mainMenu.classList.add('show');
            timer(10);
        })
    })

    poin.textContent = parseInt(0);
    return level;
}


function setAvailableQuestion() {
    // push Question into Array
    for (i = 0; i < quiz.length; i++) {
        availableQuestion.push(quiz[i]);
    }

    window.sessionStorage.setItem('items', JSON.stringify(availableQuestion));
}

function getQuestion() {
    // generate random question
    const questionIndex = availableQuestion[Math.floor(Math.random() * availableQuestion.length)]
    currentQuestion = questionIndex;
    q.textContent = currentQuestion.tanya;
    for (let i = 0; i < currentQuestion.jawab.length; i++) {
        a[i].textContent = currentQuestion.jawab[i];
        s[i].textContent = currentQuestion.skor[i];
    }
    return
}


function search() {
    p.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            r.value = '';
            for (let i = 0; i < currentQuestion.jawab.length; i++) {
                if (p.value.toUpperCase() === currentQuestion.jawab[i] && a[i].parentElement.classList.contains('block') === true) {
                    r.value = 'SUDAH DIJAWAB';
                    vibrate();
                    wrongSound();
                    return;
                } else if (p.value.toUpperCase() === currentQuestion.jawab[i]) {
                    a[i].parentElement.classList.add('block');
                    correct.play();
                    a[i].classList.add('fade-in');
                    poin.textContent = currentQuestion.skor.reduce((a, b) => (parseInt(poin.textContent) + parseInt(currentQuestion.skor[i])), 0);
                    r.value = 'BENAR';
                    p.value = '';
                    if (parseInt(poin.textContent) === 100) {
                        clearInterval(counter);
                        overMenu.classList.add('show');
                        mainMenu.classList.remove('show');
                        mes.textContent = 'KAMU MENANG';
                        mes.style.color = 'green'
                        poin.textContent = parseInt(0);
                        // get position of question index from availablequestion array
                        const index1 = availableQuestion.indexOf(currentQuestion);
                        // remove the question index from array, so the question does not repeat
                        availableQuestion.splice(index1, 1);
                        return;
                    } else {
                        reset();
                    }
                    return;
                } else if (i === currentQuestion.jawab.length - 1) {
                    vibrate();
                    wrongSound();
                    parseInt(l.textContent);
                    l.textContent--;
                    r.value = 'SALAH';
                    p.value = '';
                    if (parseInt(l.textContent) === 0) {
                        clearInterval(counter);
                        overMenu.classList.add('show');
                        mainMenu.classList.remove('show');
                        mes.textContent = 'KAMU KALAH';
                        poin.textContent = parseInt(0);
                        mes.style.color = 'red'
                        return;
                    } else {
                        reset();
                    }
                    return;
                }
            }
        } else {
            return
        }

    })
}

function timer(time) {
    let e = document.querySelector('.timer>.content');
    e.textContent = time
    counter = setInterval(function () {
        if (time === 1) {
            clearInterval(counter);
            e.textContent = 0;
            vibrate();
            wrongSound();
            parseInt(l.textContent);
            r.value = 'SALAH'
            l.textContent--;
            if (parseInt(l.textContent) === 0) {
                clearInterval(counter);
                r.value = 'WAKTU HABIS';
                overMenu.classList.add('show');
                mainMenu.classList.remove('show');
                mes.textContent = 'KAMU KALAH';
                poin.textContent = parseInt(0);
                mes.style.color = 'red';
            } else {
                reset();
            }
        } else {
            count.play();
            time -= 1
            e.textContent = time;
        }
    }, 1000)

}

function vibrate() {
    tab.classList.add('vibrate');
    setTimeout(() => {
        tab.classList.remove('vibrate')
    }, 300)
}


function reset() {
    clearInterval(counter);
    timer(10);
}

function wrongSound() {
    wrong.play();
    setTimeout(() => {
        wrong.pause();
    }, 500);
}

function playMainMusic() {
    const btnPlay = document.querySelector('.playMusic');
    let isTrue = true;
    const playIcon = document.querySelector('.ico-play');
    const pauseIcon = document.querySelector('.ico-pause');

    btnPlay.addEventListener('click', () => {
        btnPlay.classList.toggle('play');
        if (btnPlay.classList.contains('play')) {
            main.play();
            playIcon.classList.remove('show');
            pauseIcon.classList.add('show');
        } else {
            main.pause();
            playIcon.classList.add('show');
            pauseIcon.classList.remove('show');
        }
    })
}
