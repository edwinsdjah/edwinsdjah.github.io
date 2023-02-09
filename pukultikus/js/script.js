const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreValue = document.querySelector('.scoreValue');
let lastHole;
let isTimeUp = false;
let score = 0;
let min;
let max;


function selectLevel(){
    const menu = document.querySelector('.menu');
    const main = document.querySelector('.mainContent');
    let id;
    let container = document.querySelector('.menu .content .row');
    container.addEventListener('click',function(e){
        click.play();
        mainMusic.play();
        if (e.target.classList.contains('level')){
            id = e.target.id
            console.log(id)
        } else {
            return
        }
        switch(id){
            case 'easy':
            min = 800;
            max = 1500;
            break;
            case 'medium':
            min = 500;
            max = 1000;
            break;
            case 'hard':
            min = 300;
            max = 800;
        }
        menu.classList.remove('show');
        menu.classList.add('none');
        main.classList.remove('none');
        main.classList.add('show');
        peep();
    })
    return
}

// random time to pop up
function randomTime(min,max){
    return Math.round(Math.random() * (max-min) + min);
}

function randomHole(holes){
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    // if hole index same as last index, it will return to start new function
    if(hole === lastHole){
        return randomHole(holes)
    }
    lastHole = hole;
    return hole;
}


function peep(){
    // get randome time to determine how long mole peep
    const time = randomTime(min,max); 
    // get random hole from randomhole function
    const hole = randomHole(holes);
    hole.classList.add('up');
    appear.play();
    setTimeout(function(){
        hole.classList.remove('up');
        if(!isTimeUp){
            peep();
        }
    },time);
}

function whack(e){
    score++;
    hit.play();
    let mole = this
    mole.classList.add('vibrate');
    setTimeout(function(){
        mole.classList.remove('vibrate');
    },300)
    // this refer to item clicked
    this.parentNode.classList.remove('up');
    scoreValue.textContent = score;
}

moles.forEach(function(element){
    element.addEventListener('click',whack)
})


selectLevel();
setTimeout(function(){
    isTimeUp = true
},24000)


const appear = new Howl({
    src: ['sound/peep.mp3'],
    html5: true
})

const hit = new Howl({
    src: ['sound/whack.mp3'],
    html5: true
})

const click = new Howl({
    src: ['sound/click.wav'],
    html5: true
})

const mainMusic = new Howl({
    src: ['sound/soundtrack.mp3'],
    html5: true
})


