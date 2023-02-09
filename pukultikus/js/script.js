const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreValue = document.querySelector('.scoreValue');
let lastHole;
let isTimeUp = false;
let score = 0;

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
    const time = randomTime(500,800); 
    // get random hole from randomhole function
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(function(){
        hole.classList.remove('up');
        if(!isTimeUp){
            peep();
        }
    },time);
}

function whack(e){
    score++;
    let mole = this
    mole.classList.add('vibrate');
    setTimeout(function(){
        mole.classList.remove('vibrate');
    },300)
    // this refer to item clicked
    this.parentNode.classList.remove('up');
    scoreValue.textContent = score;
}


peep();
setTimeout(function(){
    isTimeUp = true
},15000)

moles.forEach(function(element){
    element.addEventListener('click',whack)
})
