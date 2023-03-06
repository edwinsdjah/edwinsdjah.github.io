// GET API DATA
const today = new Date();
const todayString = today.toISOString().substring(0, 10);
const pastDate = new Date(today.setDate(today.getDate() - 60));
const pastDateString = pastDate.toISOString().substring(0, 10);
const arrayObjectofDetail = {
  result: []
};

// get Latest movie
$.ajax({
  url: `https://api.themoviedb.org/3/discover/movie?api_key=8596b8914c63f1b64f5193ff80976696&primary_release_date.gte=${pastDateString}&primary_release_date.lte=${todayString}`,
  success: objectAPI => {
    const arr = objectAPI.results;
    const latestChild = {
      id: "latest",
      content: []
    }

    arrayObjectofDetail.result.push(latestChild)
    console.log(arr);
    let cards = ``;
    for (i = 0; i < 10; i++) {
      cards += `<div class="col-lg-2 col-4 carousel-cell">
      <div class="card-content">
        <div class="imageOverlay">
          <img src="https://www.themoviedb.org/t/p/w1280/${arr[i].poster_path}" alt="">
          <div class="overlay">
            <button type="button" class="btn btn-light btn-overlay info-modal" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${arr[i].id}">See Detail</button>
          </div>
        </div>
        <h3 class="movieTitle">${arr[i].title}</h3>
      </div>
    </div>`;


      let detail = {
        id: `${arr[i].id}`,
        backdrop: `${arr[i].backdrop_path}`,
        genre: `${arr[i].genre_ids[0]}`,
        title: `${arr[i].title}`,
        releaseYear: `${arr[i].release_date.split("-")[0]}`,
        plot: `${arr[i].overview}`
      }
      latestChild.content.push(detail)
    }
    


    const container = document.querySelector('.cardListContent');
    container.innerHTML = cards;
    
    $('.info-modal').on('click',function(){
      let parameter = this
      getDetail(parameter);
    })
  },
  error: (e) => {
    console.log(e.responseText);
  }
})

// get Action Movie
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
            <button type="button" class="btn btn-light btn-overlay info-modal" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${arr[i].id}">See Detail</button>
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
      cards += `<div class="col-lg-2 col-4 carousel-cell">
      <div class="card-content">
        <div class="imageOverlay">
          <img src="https://www.themoviedb.org/t/p/w1280/${arr[i].poster_path}" alt="">
          <div class="overlay">
            <button type="button" class="btn btn-light btn-overlay info-modal" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${arr[i].id}">See Detail</button>
          </div>
        </div>
        <h3 class="movieTitle">${arr[i].title}</h3>
      </div>
    </div>`
    }
    const container = document.querySelector('#animation .cardListContent');
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
  
  // window.addEventListener('click',function(e){
  //   if(e.target.classList.contains('info-modal')){
  //     let attId = e.target.getAttribute('data-id')
  //     console.log(attId)
  //     getDetail(attId);
  //   }
  // })
  // const modalBtn = document.querySelectorAll('.info-modal');
  // modalBtn.addEventListener('click',getDetail)

});


function position(id) {
  var card = document.getElementsByClassName('card')[id];
  // card.style.transform = 'scale(1.5)';
  console.log(id)
}


// CAROUSEL
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
// CAROUSEL

function getContent() {

}



function getDetail(parameter) {
      let currentObject = {}
      let id = parameter.getAttribute('data-id');
      for (i = 0; i < arrayObjectofDetail.result.length; i++) {
        if (arrayObjectofDetail.result[i].id === parameter.closest('div[id]').id) {
          let specifiedArray = arrayObjectofDetail.result[i].content;
          for (i = 0; i < specifiedArray.length; i++) {
            if (parameter.getAttribute('data-id') === specifiedArray[i].id) {
              currentObject = specifiedArray[i];
            }
          }
        }
      }
      $.ajax({
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=8596b8914c63f1b64f5193ff80976696&append_to_response=credits`,
        success: objectAPI => {
          console.log(objectAPI);
          let director;
          objectAPI.credits.crew.find(function(e){
            if(e.job === 'Director'){
              director = e.name
            }
          });
          let cast = objectAPI.credits.cast.slice(0, 5).map(e => e.name);
          let cards = ``;
          cards += `<div class="modal-header">
          <img class="back-drop" src="https://www.themoviedb.org/t/p/w1280/${currentObject.backdrop}" alt="">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="modal-title">
            <h2 class="modal-title">${currentObject.title}</h2>
            <div class="col-6 button-play-container">
                  <div class="row">
                    <div class="col-6">
                      <button type="button" class="btn btn-light btn-modal-play" data-id=${id}>Play</button>
                    </div>
                    <div class="col-3">
                      <button type="button" class="btn btn-light">Light</button>
                    </div>
                    <div class="col-3">
                      <button type="button" class="btn btn-light">Light</button>
                    </div>
                  </div>
            </div>
            <div class="modal-detail">
              <div class="row">
                <div class="col-lg-7 col-12">
                  <table class="movie-table">
                    <thead>
                      <tr>
                        <th class="release">Release Year</th>
                        <th class="duration">Duration</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>${currentObject.releaseYear}</td>
                        <td>1h 60m</td>
                        <td><img src="./images/4k.png"></td>
                      </tr>
                    </tbody>
                  </table>
                  <p class="synopsis">${currentObject.plot}</p>
                </div>
                <div class="col-lg-5 col-12">
                  <table class="cast-table">
                    <tbody>
                      <tr>
                        <th>Cast:</th>
                        <td>${cast}</td>
                      </tr>
                      <tr>
                        <th>Director:</th>
                        <td>${director}</td>
                      </tr>
                      <tr>
                        <th>Genre:</th>
                        <td>${objectAPI.genres[0].name}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
          </div>`
          const container = document.querySelector('.modal-content');
          container.innerHTML = cards
        },
        error: (e) => {
          console.log(e.responseText);
        }
      })
  }


