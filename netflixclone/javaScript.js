// GET API DATA
const today = new Date();
const todayString = today.toISOString().substring(0, 10);
const pastDate = new Date(today.setDate(today.getDate() - 60));
const pastDateString = pastDate.toISOString().substring(0, 10);

$.ajax({
  url: `https://api.themoviedb.org/3/discover/movie?api_key=8596b8914c63f1b64f5193ff80976696&primary_release_date.gte=${pastDateString}&primary_release_date.lte=${todayString}`,
  success: objectAPI => {
    const arr = objectAPI.results
    console.log(arr);
    let cards = ``;
    for( i = 0; i < 10; i++){
      cards += `<div class="col-lg-2 col-4 carousel-cell">
      <div class="card-content">
        <div class="imageOverlay">
          <img src="https://www.themoviedb.org/t/p/w1280/${arr[i].poster_path}" alt="">
          <div class="overlay">
            <button type="button" class="btn btn-light btn-overlay" data-bs-toggle="modal" data-bs-target="#exampleModal">See Detail</button>
          </div>
        </div>
        <h3 class="movieTitle">${arr[i].title}</h3>
      </div>
    </div>`;
    }
    const container = document.querySelector('.cardListContent');
    container.innerHTML = cards
  },
  error: (e) => {
    console.log(e.responseText);
  }
})

$.ajax({
  url: `https://api.themoviedb.org/3/discover/movie?api_key=8596b8914c63f1b64f5193ff80976696&with_genres=28`,
  success: objectAPI => {
    const arr = objectAPI.results
    console.log(arr);
    let cards = ``;
    for (i = 0; i < 10; i++) {
      cards += `<div class="col-lg-2 col-4 carousel-cell">
      <div class="card-content">
        <div class="imageOverlay">
          <img src="https://www.themoviedb.org/t/p/w1280/${arr[i].poster_path}" alt="">
          <div class="overlay">
            <button type="button" class="btn btn-light btn-overlay" data-bs-toggle="modal" data-bs-target="#exampleModal">See Detail</button>
          </div>
        </div>
        <h3 class="movieTitle">${arr[i].title}</h3>
      </div>
    </div>`
    }
    const container = document.querySelector('#action .cardListContent');
    container.innerHTML = cards
  },
  error: (e) => {
    console.log(e.responseText);
  }
})

$.ajax({
  url: `https://api.themoviedb.org/3/discover/movie?api_key=8596b8914c63f1b64f5193ff80976696&with_genres=16`,
  success: objectAPI => {
    const arr = objectAPI.results
    console.log(arr);
    let cards = ``;
    for (i = 0; i < 10; i++) {
      console.log(arr[i].credits)
      cards += `<div class="col-lg-2 col-4 carousel-cell">
      <div class="card-content">
        <div class="imageOverlay">
          <img src="https://www.themoviedb.org/t/p/w1280/${arr[i].poster_path}" alt="">
          <div class="overlay">
            <button type="button" class="btn btn-light btn-overlay" data-bs-toggle="modal" data-bs-target="#exampleModal">See Detail</button>
          </div>
        </div>
        <h3 class="movieTitle">${arr[i].title}</h3>
      </div>
    </div>`
    }
    const container = document.querySelector('#horror .cardListContent');
    container.innerHTML = cards
  },
  error: (e) => {
    console.log(e.responseText);
  }
})

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".netflix-navbar").css("background", "#0C0C0C");
    } else {
      $(".netflix-navbar").css("background", "transparent");
    }
  });

  $('.carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });
});


function position(id) {
  var card = document.getElementsByClassName('card')[id];
  // card.style.transform = 'scale(1.5)';
  console.log(id)
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carouselItem");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}