// GET API DATA
const today = new Date();
const todayString = today.toISOString().substring(0, 10);
const pastDate = new Date(today.setDate(today.getDate() - 60));
const pastDateString = pastDate.toISOString().substring(0, 10);
let myListData = JSON.parse(localStorage.getItem('my List'))
if (!myListData) {
  myListData = [];
}
let objectAPIforlist



function generateAjax() {
  // get Latest movie
  $.ajax({
    url: `https://api.themoviedb.org/3/discover/movie?api_key=8596b8914c63f1b64f5193ff80976696&primary_release_date.gte=${pastDateString}&primary_release_date.lte=${todayString}&with_poster_path=true&with_backdrop_path=true`,
    success: objectAPI => {
      // memanggil fungsi generate content
      generateContent(objectAPI, 'latest')
    },
    error: (e) => {
      console.log(e.responseText);
    }
  })

  // get Action Movie
  $.ajax({
    url: `https://api.themoviedb.org/3/discover/movie?api_key=8596b8914c63f1b64f5193ff80976696&with_genres=28&with_poster_path=true&with_backdrop_path=true`,
    success: objectAPI => {
      // memanggil fungsi generate content
      generateContent(objectAPI, 'action')
    },
    error: (e) => {
      console.log(e.responseText);
    }
  })

  $.ajax({
    url: `https://api.themoviedb.org/3/discover/movie?api_key=8596b8914c63f1b64f5193ff80976696&with_genres=16&with_poster_path=true&with_backdrop_path=true`,
    success: objectAPI => {
      // memanggil fungsi generate content
      generateContent(objectAPI, 'animation')
    },
    error: (e) => {
      console.log(e.responseText);
    }
  })

  $.ajax({
    url: `https://api.themoviedb.org/3/discover/movie?api_key=8596b8914c63f1b64f5193ff80976696&with_genres=10402&with_poster_path=true&with_backdrop_path=true`,
    success: objectAPI => {
      // memanggil fungsi generate content
      generateContent(objectAPI, 'musical')
    },
    error: (e) => {
      console.log(e.responseText);
    }
  })
}

// FUNCTION YG DIJALANKAN SAAT WINDOW READY
$(document).ready(function () {

  let body = document.querySelector('body');
  function splashScreen(time){
    setTimeout(function(){
      let mainContent = document.querySelector('#bodyContent');
      let splash = document.querySelector('.splash-screen');
      mainContent.classList.remove('hide');
      splash.classList.add('hide');
    }, time)
  }
  
  if (body.id === 'myListPage') {
    generateListContent();
    $('.btn-clear').on('click', function () {
      localStorage.clear();
      myListData.length = 0
      updateListHTML();
    })
  } else {
    generateAjax();
    showSlides(slideIndex);
   
    let splash = document.querySelector('.splash-screen');
    if(window.innerWidth < 768){
      let img = splash.querySelector('img');
      img.src = './images/netflix-intro-mobile.gif'
      splashScreen(2500)
    } else {
      let img = splash.querySelector('img');
      img.src = './images/netflix-intro.gif'
      splashScreen(4000)
    }
  }

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".netflix-navbar").css("background", "#0C0C0C");
    } else {
      $(".netflix-navbar").css("background", "transparent");
    }
  });

  $('.search .bi-search').click(function () {
    $('.search .input').toggleClass('toggle');
    $('.search .bi-x-circle').toggleClass('hide')
    $('.search .bi-search').toggleClass('hide');
    $('.netflix-dropdown-box.dropdown').toggleClass('hide');
  });

  $('.search .bi-x-circle').click(function () {
    if ($('.search .input').width() > 0) {
      $('.search .input').removeClass('toggle');
      $('.search .bi-x-circle').toggleClass('hide')
      $('.search .bi-search').toggleClass('hide');
      if (!$('.searchContainer').hasClass('hide')) {
        $('.searchContainer').addClass('hide')
        $('.movieListContainer').removeClass('hide');
      }
      $('.search .input').val('');
    }

    setTimeout(() => {
      $('.netflix-dropdown-box.dropdown').toggleClass('hide');
    }, 300);
    $('.searchContainer .cardListContent .carousel-cell').remove();
  });

  $(".form-input-search").keypress(function (event) {
    if (event.which === 13 && $('.search .input').length) {
      let query = $('.form-input-search').val()
      searchMovie(query);
    }
  });


  let modalButtonContainer = document.querySelector('#cardContainer')
  modalButtonContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('info-modal')) {
      let target = e.target
      clickModal(target);
    }
  })

});

// ALUR SESUAI PROSES FUNCTION
function generateContent(objectAPI, id) {
  // mengambil data result dari hasil url API
  const arr = objectAPI.results;
  let cards = ``;
  if (arr.length > 0 && arr.length > 10) {
    // looping konten sesuai kriteria
    for (i = 0; i < 10; i++) {
      // menjalankan fungsi get konten dan masukkan ke card
      cards += getContent(arr);
    }
  } else {
    for (i = 0; i < arr.length; i++) {
      // menjalankan fungsi get konten dan masukkan ke card
      cards += getContent(arr);
    }
  }


  // memasukan konten hasil looping ke container
  const container = document.querySelector(`#${id} .cardListContent`);
  container.innerHTML = cards;
}

function getContent(arr) {
  return `<div class="col-lg-2 col-4 carousel-cell">
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

function clickModal(target) {
  let parameter = target
  // menjalankan fungsi get detail untuk menambahkan kontent ke modal
  getDetail(parameter);
}

function getRunTime(e) {
  const minutes = parseInt(e.runtime);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`
}

function getDetail(parameter) {
  let id = parameter.getAttribute('data-id');
  $.ajax({
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=8596b8914c63f1b64f5193ff80976696&append_to_response=credits`,
    success: objectAPI => {
      console.log(objectAPI);
      objectAPIforlist = objectAPI
      let director;
      objectAPI.credits.crew.find(function (e) {
        if (e.job === 'Director') {
          director = e.name
        }
      });
      let cast = objectAPI.credits.cast.slice(0, 5).map(e => e.name).join(', ');
      let cards = ``;
      let genre = objectAPI.genres.map(e => e.name).join(', ');
      let runtime = getRunTime(objectAPI)
      cards += `<div class="modal-header">
          <img class="back-drop" src="https://www.themoviedb.org/t/p/w1280/${objectAPI.backdrop_path}" alt="">
          <button type="button" class="btn-close close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="modal-title">
            <h2 class="modal-title">${objectAPI.title}</h2>
            <div class="col-6 button-play-container">
                  <div class="row">
                    <div class="col-6">
                      <button type="button" class="btn btn-light btn-modal-play" data-id=${id}><i class="bi bi-play-fill"></i> Play</button>
                    </div>
                    <div class="col-6">
                      <button type="button" class="btn btn-light myListButton">Add to My List  <i class="bi bi-plus-circle"></i></button>
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
                        <td>${objectAPI.release_date.split('-')[0]}</td>
                        <td>${runtime}</td>
                        <td><img src="./images/4k.png"></td>
                      </tr>
                    </tbody>
                  </table>
                  <p class="synopsis">${objectAPI.overview}</p>
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
                        <td>${genre}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary close-modal" data-bs-dismiss="modal">Close</button>
          </div>`
      const container = document.querySelector('.modal-content');
      container.innerHTML = cards
      
      play();
      deleteModal();
    },
    error: (e) => {
      console.log(e.responseText);
    }
  })
}

let body = document.querySelector('.modal-content')
body.addEventListener('click',function(e){
  if(e.target.classList.contains('myListButton')){
    saveMyList(objectAPIforlist)
  }
})

function play() {
  let play = document.querySelector('.btn-modal-play');
  play.addEventListener('click', function () {
    let id = this.getAttribute('data-id');
    $.ajax({
      url: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=8596b8914c63f1b64f5193ff80976696`,
      success: objectAPI => {
        console.log(objectAPI);
        let img = document.querySelector('.modal-header img')
        const videoResult = objectAPI.results.find(video => video.type === 'Teaser' || video.type === 'Trailer' || video.type === 'Clip');
        console.log(videoResult);
        if (videoResult) {
          // Get the key property of the teaser video
          const videoKey = videoResult.key;

          // Create URL for the video player
          const videoUrl = `https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`;
          let modalHeader = document.querySelector('.modal-header')
          // Embed the video player in your HTML page
          const videoPlayer = document.createElement('iframe');
          videoPlayer.setAttribute('src', videoUrl);
          videoPlayer.setAttribute('width', `${img.clientWidth}`);
          videoPlayer.setAttribute('height', `${img.clientHeight}`);
          modalHeader.appendChild(videoPlayer);
          img.remove()
        } else {
          console.log('Teaser video not found.');
        }
      },
      error: (e) => {
        console.log(e.responseText);
      }
    })
  })
}

function getEmbedVideo() {
  return `<iframe src="${videoUrl}" width="${img.clientWidth}" height="${img.clientHeight}"></iframe>`
}

function deleteModal() {
  $('.close-modal').on('click', function () {
    $('.modal-header').remove();
  })
}

// FUNCTION SEARCH MOVIE
function searchMovie(query) {
  $.ajax({
    url: `https://api.themoviedb.org/3/search/movie?api_key=8596b8914c63f1b64f5193ff80976696&query=${query}&with_poster_path=true&with_backdrop_path=true`,
    success: objectAPI => {
      // memanggil fungsi generate content
      let searchContainer = document.querySelector('.searchContainer');
      let movieListContainer = document.querySelector('.movieListContainer')
      if (searchContainer.classList.contains('hide')) {
        searchContainer.classList.remove('hide');
        movieListContainer.classList.add('hide');
      }
      console.log(objectAPI)
      generateContent(objectAPI, 'search');

    },
    error: (e) => {
      console.log(e.responseText);
    }
  })
}





// FUNCTION SAVE MY LIST
function saveMyList(objectAPI) {
  let object = {
    id: `${objectAPI.id}`,
    title: `${objectAPI.title}`,
    poster_path: `${objectAPI.poster_path}`
  }

  for (let index = 0; index < myListData.length; index++) {
    if (object.id === myListData[index].id) {
      alert('THIS MOVIE IS ALREADY IN LIST');
      return
    }
  }
  myListData.push(object);
  alert('SUCESSFULLY ADDED TO LIST')
  localStorage.setItem('my List', JSON.stringify(myListData));





  // myListData.forEach(function(el){
  //   if(el.id === object.id){
  //     return alert('DATA EXIST')
  //   } else {

  //   }
  // })
}


// CAROUSEL
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
let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// GENERATE LIST CONTENT
function generateListContent() {

  let cards = ``;
  if (myListData.length > 0 && myListData.length > 10) {
    // looping konten sesuai kriteria
    for (i = 0; i < 10; i++) {
      // menjalankan fungsi get konten dan masukkan ke card
      cards += getContent(myListData);
    }
  } else if (myListData.length === 0) {
    cards += `<h2 class='empty-msg'>NO MOVIE DATA FOUND<h2>`
  } {
    for (i = 0; i < myListData.length; i++) {
      // menjalankan fungsi get konten dan masukkan ke card
      cards += getContent(myListData);
    }
  }
  const container = document.querySelector(`#myList .cardListContent`);
  container.innerHTML = cards;
}

function updateListHTML(){
  let parentElement = document.querySelector('.cardListContent');
  parentElement.innerHTML = `<h2 class='empty-msg'>NO MOVIE DATA FOUND<h2>`
}