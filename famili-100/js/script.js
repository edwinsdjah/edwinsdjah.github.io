let counter = null;
let questionCounter = 0;
let currentQuestion;
let availableQuestion = [];
let tab = document.querySelector('table');
let q = document.querySelector('.question');
let a = document.querySelectorAll('.answer');
let s = document.querySelectorAll('.score');
let poin = document.querySelector('.poin');
let l = document.querySelector('.life');
let p = document.querySelector('.player');
let r = document.querySelector('.hasil');

window.addEventListener('load', () => {
    l.textContent = 3;
    poin.textContent = 0;
    setAvailableQuestion();
    getQuestion();
    timer(10);
    search();
})


function setAvailableQuestion() {
    // push Question into Array
    for (i = 0; i < quiz.length; i++) {
        availableQuestion.push(quiz[i]);
    }
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

    // get position of question index from availablequestion array
    const index1 = availableQuestion.indexOf(questionIndex);

    // remove the question index from array, so the question does not repeat
    availableQuestion.splice(index1, 1);
}


function search() {
    p.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            r.value = '';
            for (let i = 0; i < currentQuestion.jawab.length; i++) {
                if (p.value.toUpperCase() === currentQuestion.jawab[i] && a[i].parentElement.classList.contains('block') === true) {
                    r.value = 'SUDAH DIJAWAB';
                    return;
                } else if (p.value.toUpperCase() === currentQuestion.jawab[i]) {
                    a[i].parentElement.classList.add('block');
                    poin.textContent = currentQuestion.skor.reduce((a, b) => (parseInt(poin.textContent) + parseInt(currentQuestion.skor[i])), 0);
                    r.value = 'BENAR';
                    p.value = '';
                    reset();
                    return;
                } else if (i === currentQuestion.jawab.length - 1) {
                    vibrate();
                    parseInt(l.textContent);
                    l.textContent--;
                    r.value = 'SALAH';
                    p.value = '';
                    reset();
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
            parseInt(l.textContent);
            r.value = 'SALAH'
            l.textContent--;
            if (parseInt(l.textContent) === 0) {
                clearInterval(counter);
                r.value = 'WAKTU HABIS'
            } else {
                reset();
            }
        } else {
            time -= 1
            e.textContent = time;
        }
    }, 1000)

}

function vibrate() {
    tab.classList.add('vibrate');
    setInterval(() => {
        tab.classList.remove('vibrate')
    }, 1500)
}

function reset() {
    clearInterval(counter);
    timer(10);
}