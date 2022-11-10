var data = [];
var option = "";
var active = "";
var selecteditem = 0;
var total = 0;
var option2 = "";

window.addEventListener('load', function () {
    setTimeout(showPage, 2000)
});

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
    const burg = document.querySelector('.hamburger')
    // if(content.classList.contains('show')){
    //     // nav.style.backgroundColor = 'red !important';
    //     console.log(nav);
    // }

    btn.addEventListener('click', function () {
        nav.classList.toggle('show');
        dark.classList.toggle('hide');
        light.classList.toggle('hide');
        burg.classList.toggle('is-active');
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


function dropDown() {
    let contents = document.getElementsByClassName('drop-content');
    let drop = document.getElementById('drop');
    let car = document.querySelectorAll('#carouselExampleControls .carousel-item')
    for (i = 0; i < contents.length; i++) {
        drop.options.add(new Option(contents[i].value));
    }
};

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
    dots[slideIndex - 1].className += " active";
}

function sel() {
    const ctrl = document.querySelectorAll('.tabctrl');
    const prev = document.querySelector('.carousel-control-prev span');
    const next = document.querySelector('.carousel-control-next span');

    const cont = document.querySelectorAll('#carouselExampleControls .carousel-inner .carousel-item')
    const btn = document.querySelector('.carousel-control-prev');
    const btn2 = document.querySelector('.carousel-control-next');
    let drop = document.querySelector('.dropdown');

    ctrl.forEach(function (e, index) {
        let target = e.getAttribute('data-target');
        let label = e.innerHTML;
        let classname = e.getAttribute('class');
        data.push(target);

        if (classname === "tabctrl active") {
            active = label;
            selecteditem = index;
            option += "<option value='" + target + "' selected>" + label + "</option>";
        } else {
            option += "<option value='" + target + "'>" + label + "</option>";
        }
        total++;
        console.log(data);
        drop.innerHTML = option;
    })


    btn.addEventListener('click', function () {
        if (selecteditem < total - 1) {
            selecteditem++;
            let sel = data[selecteditem];
            drop.setAttribute(sel).addEventListener('change');

        }

    })

}


scroll();
// dropDown();
spOnly();
navBack();
sel();