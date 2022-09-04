function colorChange() {
    const btn = document.getElementById('btn1');
    addEventListener('click', () => {
        document.body.style.backgroundColor = 'red';
    })
}

function colorRandom() {
    const btn = document.getElementById('btn1');
    const txt = document.getElementById('txt');
    btn.addEventListener('click', () => {
        const r = Math.round(Math.random() * 255 + 1);
        const g = Math.round(Math.random() * 255 + 1);
        const b = Math.round(Math.random() * 255 + 1);
        let s = document.body.style.backgroundColor = `rgb(${r},${g},${b})`
        txt.value = s
    })
}

function sliderChange() {
    const red = document.querySelector('input[name = sRed]');
    const green = document.querySelector('input[name = sGreen]');
    const blue = document.querySelector('input[name = sBlue]');
    let txt = document.getElementById('txt')
    red.addEventListener('input', () => {
        let r = red.value;
        let g = green.value;
        let b = blue.value;
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`
        txt.value = (getComputedStyle(document.body).backgroundColor)
    })
    green.addEventListener('input', () => {
        let r = red.value;
        let g = green.value;
        let b = blue.value;
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`
        txt.value = (getComputedStyle(document.body).backgroundColor)
    })
    blue.addEventListener('input', ()=>{
        let r = red.value;
        let g = green.value;
        let b = blue.value;
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`
        txt.value = (getComputedStyle(document.body).backgroundColor)
    })
    
}

function copy(){
    const txt = document.getElementById('txt');
    const copy = document.querySelector('.btn-copy');
    copy.addEventListener('click', () =>{
        if(txt.value = ''){
            alert('Text empty')
        } else {
        navigator.clipboard.writeText(txt.value);
        alert("Copy success")
        }
    }) 
}

colorRandom();
sliderChange();
copy();