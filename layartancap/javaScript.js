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
    // memanggil fungsi generate content
    generateContent(arrayObjectofDetail,objectAPI,'latest')
  },
  error: (e) => {
    console.log(e.responseText);
  }
})

// get Action Movie
$.ajax({
  url: `https://api.themoviedb.org/3/discover/movie?api_key=8596b8914c63f1b64f5193ff80976696&with_genres=28`,
  success: objectAPI => {
    // memanggil fungsi generate content
    generateContent(arrayObjectofDetail,objectAPI,'action')
  },
  error: (e) => {
    console.log(e.responseText);
  }
})

$.ajax({
  url: `https://api.themoviedb.org/3/discover/movie?api_key=8596b8914c63f1b64f5193ff80976696&with_genres=16`,
  success: objectAPI => {
    // memanggil fungsi generate content
    generateContent(arrayObjectofDetail,objectAPI,'animation')
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
      objectAPI.credits.crew.find(function (e) {
        if (e.job === 'Director') {
          director = e.name
        }
      });
      let cast = objectAPI.credits.cast.slice(0, 5).map(e => e.name);
      let cards = ``;
      let runtime = getRunTime(objectAPI)
      cards += `<div class="modal-header">
          <img class="back-drop" src="https://www.themoviedb.org/t/p/w1280/${currentObject.backdrop}" alt="">
          <button type="button" class="btn-close close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
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
                        <td>${runtime}</td>
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
          <button type="button" class="btn btn-secondary close-modal" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
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

function getRunTime(e){
  const minutes = parseInt(e.runtime);
  console.log(minutes)
  const hours = Math.floor(minutes/60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`
}

function play(){
  let play = document.querySelector('.btn-modal-play');
  play.addEventListener('click',function(){
    let id = this.getAttribute('data-id');
    $.ajax({
      url: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=8596b8914c63f1b64f5193ff80976696`,
      success: objectAPI => {
        console.log(objectAPI);
        let img = document.querySelector('.modal-header img')
        const videoResult = objectAPI.results.find(video => video.type === 'Teaser' || video.type === 'Trailer');
        console.log(videoResult);
        if (videoResult) {
          // Get the key property of the teaser video
          const videoKey = videoResult.key;
    
          // Create URL for the video player
          const videoUrl = `https://www.youtube.com/embed/${videoKey}?autoplay=1`;
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

function getContent(arr){
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

function getContentDetail(arr){
  return {
    id: `${arr[i].id}`,
    backdrop: `${arr[i].backdrop_path}`,
    genre: `${arr[i].genre_ids[0]}`,
    title: `${arr[i].title}`,
    releaseYear: `${arr[i].release_date.split("-")[0]}`,
    plot: `${arr[i].overview}`
  }
}

function generateContent(arrayObjectofDetail,objectAPI,id){
  // mengambil data result dari hasil url API
  const arr = objectAPI.results;
  // membuat object baru sesuai ID parameter
  const latestChild = {
    id: `${id}`,
    content: []
  }
  // menambahkan object baru ke dalam variabel arrayOBjectofDetail
  arrayObjectofDetail.result.push(latestChild)
    let cards = ``;
    // looping konten sesuai kriteria
    for (i = 0; i < 10; i++) {
      // menjalankan fungsi get konten dan masukkan ke card
      cards += getContent(arr);
      // menjalankan fungsi get detail dan masukan ke detail
      let detail = getContentDetail(arr);
      // masukan isi detail ke dalam object latest child
      latestChild.content.push(detail)
    }
    // memasukan konten hasil looping ke container
    const container = document.querySelector(`#${id} .cardListContent`);
    container.innerHTML = cards;
    clickModal();
}

function clickModal(){
  $('.info-modal').on('click', function () {
    let parameter = this
    // menjalankan fungsi get detail untuk menambahkan kontent ke modal
    getDetail(parameter);
  })
}

function deleteModal(){
  $('.close-modal').on('click', function () {
    $('.modal-header').remove();
  })
}

function getEmbedVideo(){
  return `<iframe src="${videoUrl}" width="${img.clientWidth}" height="${img.clientHeight}"></iframe>`
}