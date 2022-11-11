var data = [];
var option = "";
var active = "";
var selecteditem = 0;
var total = 0;
var option2 = "";

window.addEventListener('load', function () {
    setTimeout(showPage, 2000)
});

function isIE() {
    return /Trident\/|MSIE/.test(window.navigator.userAgent);
}

if (isIE() === true) {
    let burger = document.querySelector('.hamburger');

    burger.addEventListener('click', function () {
        let c = document.querySelector('.navbar-collapse ');
        c.classList.toggle('show')
    })
}

function spOnly() {
    const sec = document.getElementById('section1');
    const nav = document.querySelector('.navbar');

    window.onload = function () {
        if (window.innerWidth < 787) {
            let h = nav.clientHeight;
            sec.style.paddingTop = h + 'px';
        } else {
            sec.style.paddingTop = '0';
        }
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth < 787) {
            let h = nav.clientHeight;
            sec.style.paddingTop = h + 'px';
        } else {
            sec.style.paddingTop = '0';
        }
    })


    setTimeout(showPage, 2000);
    return
};



function showPage() {
    const l = document.getElementById('loader');
    const c = document.getElementById('content');
    l.style.display = 'none'
    c.style.opacity = '1'
}

function navBack() {
    const nav = document.querySelector('.navbar');
    const btn = document.querySelector('.navbar-toggler');
    const dark = document.querySelector('.nav-black');
    const light = document.querySelector('.nav-light');
    const burg = document.querySelector('.hamburger');
    const body = document.querySelector('body');

    btn.addEventListener('click', function () {
        nav.classList.toggle('show');
        dark.classList.toggle('hide');
        light.classList.toggle('hide');
        burg.classList.toggle('is-active');
        body.classList.toggle('no-scroll')
        // c.classList.toggle('show');
    });
};

function scroll() {
    let nav = document.querySelector(".navbar");

    window.onscroll = function () {
        let scrollPos = window.pageYOffset | document.body.scrollTop;
        if (scrollPos > 50) {
            nav.classList.remove('block');
        } else {
            nav.classList.add('block');
        }
    }
};


// carousel tab
let tabindex = 1;
showTab(tabindex);

function plusTab(n) {
    if (tabindex !== 5 && n > 0) {
        showTab(tabindex += n);
        console.log(tabindex)
    } else if (tabindex <= 5 && tabindex !== 1 && n < 0) {
        showTab(tabindex += n);
        console.log(tabindex)
    }
}


function selectTab() {
    let sel = document.querySelector('select');
    let opt = document.querySelectorAll('.tab-option');




    sel.addEventListener('change', function () {
        tabindex = this.selectedIndex + 1;
        let select = this.selectedIndex;
        console.log(tabindex);
        console.log(opt)
        for (let i = 0; i < opt.length; i++) {
            if (opt[i].hasAttribute('selected')) {
                opt[i].removeAttribute('selected', '')
            }
        }
        opt[select].setAttribute('selected', '')
        let next = document.querySelector('.next');
        let prev = document.querySelector('.prev');

        if (tabindex >= opt.length) {
            next.style.opacity = 0;
        } else {
            next.style.opacity = 1;
        }

        if (tabindex === 1) {
            prev.style.opacity = 0;
        } else {
            prev.style.opacity = 1;
        }

        showTab(tabindex)
    })

}


function showTab(n) {
    let tab = document.querySelectorAll('.tab-pane');
    let opt = document.querySelectorAll('.tab-option');
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');

    console.log(tabindex);

    if (n >= tab.length) {
        next.style.opacity = 0;
    } else {
        next.style.opacity = 1;
    }

    if (tabindex === 1) {
        prev.style.opacity = 0;
    } else {
        prev.style.opacity = 1;
    }


    for (let i = 0; i < tab.length; i++) {
        if (tab[i].classList.contains('active')) {
            tab[i].classList.remove('active');
        }
    }

    for (let i = 0; i < opt.length; i++) {
        if (opt[i].hasAttribute('selected')) {
            opt[i].removeAttribute('selected');
        }
    }


    tab[tabindex - 1].classList.add('active');
    tab[tabindex - 1].classList.add('blink');
    opt[tabindex - 1].setAttribute('selected', '');
    setTimeout(function () {
        tab[tabindex - 1].classList.remove('blink')
    }, 500);
}


// carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add('blink');
    setTimeout(function () {
        slides[slideIndex - 1].classList.remove('blink')
    }, 500);
    dots[slideIndex - 1].className += " active";
}



function openTab(event, id) {
    let i, tabcontent, tablink;
    tabcontent = document.querySelectorAll('.tab-pane');
    tablink = document.querySelectorAll('.nav-link');
    let contId = document.getElementById(id);
    for (let i = 0; i < tabcontent.length; i++) {
        if (tabcontent[i].classList.contains('active')) {
            tabcontent[i].classList.remove('active');
        }
    }

    for (let i = 0; i < tablink.length; i++) {
        if (tablink[i].classList.contains('active')) {
            tablink[i].classList.remove('active');
        }
    }



    contId.classList.add('active');
    contId.classList.add('blink');
    setTimeout(function () {
        contId.classList.remove('blink')
    }, 500);
    event.target.classList.add('active');
    // event.currentTarget.className += 'active';
}


scroll();
// dropDown();
spOnly();
navBack();
// sel();
selectTab();