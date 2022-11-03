$("#sidebar").load("component/sidebar.html");
$("footer").load("component/footer.html");

$(function () {
  $("#header").load("component/header.html"),
    function () {
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

      const cart = document.querySelector('.productCart');
      cart.classList.toggle('hide');
      document.querySelector('body').classList.toggle('stopScrolling')


    }
});


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





const myTime = setTimeout(function () {

}, 6000)



window.addEventListener('DOMContentLoaded', function () {

})



function closeCart() {

}