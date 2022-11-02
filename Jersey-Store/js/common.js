$("#header").load("component/header.html");
$("#sidebar").load("component/sidebar.html");
$("footer").load("component/footer.html");


window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("header").style.fontSize = "20px";
  } else {
    document.getElementById("header").style.fontSize = "28px";
  }
};



$('#carouselExample').on('slide.bs.carousel', function (e) {

  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 3;
  var totalItems = $('.carousel-item').length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $('.carousel-item').eq(i).appendTo('.carousel-inner');
      } else {
        $('.carousel-item').eq(0).appendTo('.carousel-inner');
      }
    }
  }
});





$(".panel-title1").click(function () {
  $(".angle-down1").toggleClass("down");
})
$(".panel-title2").click(function () {
  $(".angle-down2").toggleClass("down");
})

$(".panel-title3").click(function () {
  $(".angle-down3").toggleClass("down");
})

$(".panel-title4").click(function () {
  $(".angle-down4").toggleClass("down");
})

$(".panel-title5").click(function () {
  $(".angle-down5").toggleClass("down");
});




const openShopCart = document.querySelector('#cart a');
openShopCart.addEventListener('click', () => {
  const cart = document.querySelector('.productCart');
  cart.classList.toggle('hide');
  document.querySelector('body').classList.toggle('stopScrolling');
});

const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

function closeCart() {
	const cart = document.querySelector('.productCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}