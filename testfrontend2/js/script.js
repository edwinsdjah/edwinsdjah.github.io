var data = [];
var option = "";
var active = "";
var selecteditem = 0;
var total = 0;
var option2 = "";

window.addEventListener('load', function () {
    setTimeout(showPage, 2000)
});

let burger = document.querySelector('.hamburger');

burger.addEventListener('click', function () {
    let c = document.querySelector('.navbar');
    let collapse = document.querySelector('.navbar-collapse');
    burger.classList.toggle('is-active');
    c.classList.toggle('stretch');
    document.querySelector('body').classList.toggle('no-scroll');
    collapse.classList.add('blink');
    collapse.classList.toggle('ie-show');
    setTimeout(function () {
        collapse.classList.remove('blink');
    }, 500);
});

function spOnly() {
    const sec = document.getElementById('section1');
    const nav = document.querySelector('.navbar');

    window.onload = function () {
        if (window.innerWidth <= 768) {
            let h = nav.clientHeight;
            sec.style.paddingTop = h + 'px';
        } else {
            sec.style.paddingTop = '0';
        }
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth <= 768) {
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

// function navBack() {
//     const nav = document.querySelector('.navbar');
//     const btn = document.querySelector('.navbar-toggler');
//     const dark = document.querySelector('.nav-black');
//     const light = document.querySelector('.nav-light');
//     const burg = document.querySelector('.hamburger');
//     const body = document.querySelector('body');

//     btn.addEventListener('click', function () {
//         nav.classList.toggle('show');
//         dark.classList.toggle('hide');
//         light.classList.toggle('hide');
//         burg.classList.toggle('is-active');
//         body.classList.toggle('no-scroll')
//         // c.classList.toggle('show');
//     });
// };

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
    let contId;
    if (tabindex !== 5 && n > 0) {
        contId = 2018
        showTab(tabindex += n);
        console.log(tabindex)
    } else if (tabindex <= 5 && tabindex !== 1 && n < 0) {
        contId = 2022
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
    let contId = opt[tabindex - 1].getAttribute('value');
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
    getTabContentbyId(contId);
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

    getTabContentbyId(id);
    // event.currentTarget.className += 'active';
}

function getTabContentbyId(id) {
    let lowercontent = document.querySelector('.lower-tab-content .content h2');
    let lowercaption = document.querySelector('.lower-tab-content .caption');
    let lowerdate = document.querySelector('.lower-tab-content .content .date');
    let tabBg = document.querySelector('.tab-bg')
    switch (id) {
        case '2018':
            lowercontent.textContent = 'Lorem ipsum dolor sit amet, consectetur cing elit.';
            lowercaption.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta sodales leo ibulum. Nullam vel posuere nisi. Donec in lobortis arcu.'
            lowerdate.textContent = '28';
            tabBg.style.backgroundImage = 'url(/testfrontend2/img/tab-bg-1.png)';
            break;
        case '2019':
            lowercontent.textContent = 'Lorem ipsum dolor sit amet, consectadipiscing elit.';
            lowercaption.textContent = 'Lorem iolor sit amet, consectetur adipiscing elit. Nam porta sodales leo vitae vestibulum. Nullam vel posuere nisi. Donec in lobortis arcu.'
            lowerdate.textContent = '27';
            tabBg.style.backgroundImage = 'url(/testfrontend2/img/tab-bg-2.png)';
            break;
        case '2020':
            lowercontent.textContent = 'Lorem ipsum dolor sit amet, ur adipiscing elit.';
            lowercaption.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta soditae vestibulum. Nullam vel posuere nisi. Donec in lobortis arcu.'
            lowerdate.textContent = '38';
            tabBg.style.backgroundImage = 'url(/testfrontend2/img/tab-bg-3.png)';
            break;
        case '2021':
            lowercontent.textContent = 'Lorem i dolor sit amet, consectetur adipiscing elit.';
            lowercaption.textContent = 'Lorem ipsum dolt, consectetur adipiscing elit. Nam porta sodales leo vitae vestibulum. Nullam vel posuere nisi. Donec in lobortis arcu.'
            lowerdate.textContent = '58';
            tabBg.style.backgroundImage = 'url(/testfrontend2/img/tab-bg-4.png)';
            break;
        case '2022':
            lowercontent.textContent = 'Lorem ipsum dolor sit amet, consectetur elit.';
            lowercaption.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta soe vestibulum. Nullam vel posuere nisi. Donec in lobortis arcu.'
            lowerdate.textContent = '19';
            tabBg.style.backgroundImage = 'url(/testfrontend2/img/tab-bg-5.png)';
            break;
    }
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
    let topDot = document.querySelectorAll("#section1 .dot");
    let toph1 = document.querySelector('.top-caption h1');
    let topcaption = document.querySelector('.top-caption .caption p');
    let btn = document.querySelector('.btn-green')

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
    slides[slideIndex - 1].style.display = "flex";
    slides[slideIndex - 1].classList.add('slide-in-tr');
    // btn.classList.add('slide-top')
    setTimeout(function () {
        slides[slideIndex - 1].classList.remove('slide-in-tr')
        // btn.classList.remove('slide-top')
    }, 500);
    dots[slideIndex - 1].className += " active";

    for (i = 0; i < topDot.length; i++) {
        if (topDot[0].classList.contains('active')) {
            toph1.textContent = 'Reimagining social media through the power of the blockchain.';
            topcaption.textContent = 'We are creating social media 3.0 with influencers, celebrities and creators being able to launch their own digital currency by simply creating a profile with media content posted as Non fungible Tokens that can be owned and traded on the Tknrs network'
        } else if (topDot[1].classList.contains('active')) {
            toph1.textContent = 'Stand Out from The Crowd.';
            topcaption.textContent = 'Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.'
        }
    }
}


// Read more
let btnmore = document.querySelector('.btn-more');

btnmore.addEventListener('click', function () {
    let moretext = document.querySelector('.more-text');
    let caption = document.getElementById('caption-read');
    if (btnmore.textContent === 'Read More') {
        moretext.style.display = 'inline';
        btnmore.textContent = 'Read Less';
        caption.classList.remove('read-blur');
    } else if (btnmore.textContent === 'Read Less') {
        moretext.style.display = 'none';
        btnmore.textContent = 'Read More';
        caption.classList.add('read-blur');
    }

})

scroll();
// dropDown();
spOnly();
// navBack();
// sel();
selectTab();