function colorRandom() {
    const btn = document.getElementById('btn1');
    const txt = document.getElementById('txt');
    const txt2 = document.getElementById('txt2');
    btn.addEventListener('click', () => {
        const r = Math.round(Math.random() * 255 + 1);
        const g = Math.round(Math.random() * 255 + 1);
        const b = Math.round(Math.random() * 255 + 1);
        let hexvalR = rgbtohex(r);
        let hexvalG = rgbtohex(g);
        let hexvalB = rgbtohex(b);
        txt.value = document.body.style.backgroundColor = `rgb(${r},${g},${b})`
        txt2.value = `#${hexvalR}${hexvalG}${hexvalB}`
    })
}

function rgbtohex(n) {
    let hex = Number(n).toString(16);
    if (hex.length < 2) {
        hex = '0' + hex;
    }
    return hex
}


function sliderChange() {
    const red = document.querySelector('input[name = sRed]');
    const green = document.querySelector('input[name = sGreen]');
    const blue = document.querySelector('input[name = sBlue]');
    let txt = document.getElementById('txt');
    let txt2 = document.getElementById('txt2');
    red.addEventListener('input', () => {
        let r = red.value;
        let g = green.value;
        let b = blue.value;
        let hexvalR = rgbtohex(r);
        let hexvalG = rgbtohex(g);
        let hexvalB = rgbtohex(b);
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
        txt.value = (getComputedStyle(document.body).backgroundColor);
        txt2.value = `#${hexvalR}${hexvalG}${hexvalB}`
    })
    green.addEventListener('input', () => {
        let r = red.value;
        let g = green.value;
        let b = blue.value;
        let hexvalR = rgbtohex(r);
        let hexvalG = rgbtohex(g);
        let hexvalB = rgbtohex(b);
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
        txt.value = (getComputedStyle(document.body).backgroundColor);
        txt2.value = `#${hexvalR}${hexvalG}${hexvalB}`
    })
    blue.addEventListener('input', () => {
        let r = red.value;
        let g = green.value;
        let b = blue.value;
        let hexvalR = rgbtohex(r);
        let hexvalG = rgbtohex(g);
        let hexvalB = rgbtohex(b);
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
        txt.value = (getComputedStyle(document.body).backgroundColor);
        txt2.value = `#${hexvalR}${hexvalG}${hexvalB}`
    })

}

function copy() {
    // const copy = document.getElementsByClassName('btn-copy');
    const copy = document.querySelectorAll('.btn-copy');
    copy.forEach ( element => element.addEventListener('click', function() {
        let txt = this.previousElementSibling;
        if(txt.value === ''){
            alert('text empty')
        } else {
            navigator.clipboard.writeText(txt.value);
            alert('copy success')
        }   
    }))
}




colorRandom();
sliderChange();
copy();