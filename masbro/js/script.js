const start = document.querySelector('.button-start')
let character = document.querySelector('.capyBara');
let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'));
let characterRight = parseInt(window.getComputedStyle(character).getPropertyValue('right'));
let characterWidth = parseInt(window.getComputedStyle(character).getPropertyValue('width'));
let ground = document.querySelector('.ground');
let groundBottom = parseInt(window.getComputedStyle(ground).getPropertyValue('bottom'));
let groundHeight = parseInt(window.getComputedStyle(ground).getPropertyValue('height'));
let jumpBtn = document.querySelector('.jumpBtn');
let isJumping = false;
let isDone = false;
let upTime;
let downTime;
let scoreNumber = 0;
let scoreInterval;
let scoreValue = document.querySelector('.score .value');
let endValue = document.querySelector('.end-value');
const obstacleObject = [{
    name: 'pipe-small.png',
    height: 107,
    heightSP: 80
}, {
    name: 'pipe-med.png',
    height: 173,
    heightSP: 100
}, {
    name: 'pipe-long.png',
    height: 269,
    heightSP: 150
}]

function addScore() {
    scoreNumber++;
    scoreValue.innerHTML = scoreNumber;
    endValue.innerHTML = scoreNumber;
}


function jump() {
    if (isJumping) return;
    upTime = setInterval(function () {
        if (characterBottom >= groundHeight + 200) {
            clearInterval(upTime);
            downTime = setInterval(function () {
                if (characterBottom <= groundHeight - 160) {
                    clearInterval(downTime);
                    isJumping = false;
                }
                characterBottom -= 10;
                character.style.bottom = characterBottom + 'px';
            }, 8);
        }
        characterBottom += 10;
        character.style.bottom = characterBottom + 'px'
        isJumping = true;
    }, 10);
}

function control(e) {
    if (e.key === 'ArrowUp' || e.key == ' ' || e.target === 'jumpBtn') {
        jump();
        jumpSound.play();
    }
}



jumpBtn.addEventListener('click', jump)

function generateObstacles() {
    let randomIndex = Math.floor(Math.random() * obstacleObject.length);
    let obstacles = document.querySelector('.obstacles');
    let ground = document.querySelector('.ground')
    let obstacle = document.createElement('img');
    obstacle.setAttribute('class', 'pipe');
    obstacle.setAttribute('src', `images/${obstacleObject[randomIndex].name}`);
    obstacles.appendChild(obstacle);
    let obstacleRight;
    let obstacleBottom = parseInt(window.getComputedStyle(obstacle).getPropertyValue('bottom'));
    let obstacleWidth = parseInt(window.getComputedStyle(obstacle).getPropertyValue('width'));
    let obstacleHeight
    if (screen.width < 600) {
        obstacleRight = -35
        obstacleHeight = obstacleObject[randomIndex].heightSP;
    } else {
        obstacleRight = 0
        obstacleHeight = obstacleObject[randomIndex].height;
    }




    function moveObstacle() {

        let object = document.querySelector('.gameObject')
        let over = document.querySelector('.gameOver')
        if (screen.width < 600) {
            obstacleRight += 8;
        } else {
            obstacleRight += 16;
        }

        ground.style.backgroundPositionX = obstacleRight + 'px';
        obstacle.style.right = obstacleRight + 'px';
        obstacle.style.bottom = obstacleBottom + 'px';
        if (characterRight >= obstacleRight - characterWidth && characterRight <= obstacleRight + obstacleWidth && characterBottom <= obstacleBottom + obstacleHeight) {
            clearInterval(obstacleInterval);
            clearInterval(generateObstaclesInterval);
            clearInterval(scoreInterval);
            mainMusic.stop();
            overMusic.play();
            object.classList.add('none');
            over.classList.remove('none');
            over.classList.add('show');
            jumpBtn.classList.add('none');
            jumpBtn.classList.remove('show')
        }

    }
    let obstacleInterval = setInterval(moveObstacle, 20);
}



function setBackground() {
    let backgroundRight = 0;
    let background = document.querySelector('.gameLayer');

    function moveBackground() {
        backgroundRight -= 1;
        background.style.backgroundPositionX = backgroundRight + 'px';
    }
    let backgroundInterval = setInterval(moveBackground, 30);
    setTimeout(function () {
        clearInterval(backgroundInterval);
    }, 60000);
}

let generateObstaclesInterval

start.addEventListener('click', function () {
    let score = document.querySelector('.score');
    let titleMenu = document.querySelector('.title-section');
    if(screen.width < 600){
        let main = document.getElementById('mainGame');
        main.addEventListener('click',function(e){
            if(e.target.classList.contains('gameLayer')){
                jump();
            }
        })
    }
    click.play();
    mainMusic.play();
    scoreInterval = setInterval(addScore, 100);
    titleMenu.classList.add('none');
    score.classList.remove('none');
    score.classList.add('show');
    if (screen.width < 600) {
        jumpBtn.classList.remove('none');
        jumpBtn.classList.add('show')
    }
    generateObstacles
    generateObstaclesInterval = setInterval(generateObstacles, 1500);
    return scoreNumber;
})

setBackground();

let reset = document.querySelector('.button-reset').addEventListener('click', function () {
    click.play()
    window.location.reload();

})
document.addEventListener('keydown', control);

const jumpSound = new Howl({
    src: ['sound/jump.mp3'],
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

const overMusic = new Howl({
    src: ['sound/over.mp3'],
    html5: true,
    loop: false
})