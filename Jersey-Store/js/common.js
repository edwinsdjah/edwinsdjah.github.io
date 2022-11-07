$("#sidebar").load("component/sidebar.html");
$("footer").load("component/footer.html");

window.onscroll = function () {
  // scrollFunction()
};

// function scrollFunction() {
//   if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
//     document.getElementById("header").style.fontSize = "20px";
//   } else {
//     document.getElementById("header").style.fontSize = "28px";
//   }
// };

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





$(document).ready(function () {
  $("#header").load("component/header.html", function () {
    const cartWindow = document.getElementById('cartWindow');
    const wishWindow = document.getElementById('wishWindow');
    const nav = document.querySelector('.nav-icons');
    const sideCloseBtn = document.querySelectorAll('.closeButton');
    const overlay = document.querySelector('.overlay');
    const product = document.querySelectorAll('.sideProduct');
    const wish = document.querySelector('.wishlistWindow');


    function openCart() {
      product[0].classList.toggle('hide');
      document.querySelector('body').classList.toggle('stopScrolling');
      overlay.classList.toggle('hide');
      overlay.classList.add('fade-in');
      setTimeout(function () {
        overlay.classList.remove('fade-in');
      }, 300)
    }

    function openWish() {
      product[1].classList.toggle('hide');
      document.querySelector('body').classList.toggle('stopScrolling');
      overlay.classList.toggle('hide');
      overlay.classList.add('fade-in');
      setTimeout(function () {
        overlay.classList.remove('fade-in');
      }, 300);
    }

    product.forEach(function (el) {
      el.addEventListener('click', function (event) {
        if (event.target.classList.contains('closeIcon') || event.target.classList.contains('closeButton')) {
          const sideWindow = event.target.closest('.sideProduct');
          document.querySelector('body').classList.toggle('stopScrolling');
          sideWindow.classList.add('exit');
          overlay.classList.add('fade-out');
          setTimeout(function () {
            sideWindow.classList.remove('exit');
            overlay.classList.remove('fade-out');
            sideWindow.classList.toggle('hide');
            overlay.classList.toggle('hide');
          }, 300);
        }
      })
    })

    nav.addEventListener('click', function (e) {
      if (e.target.classList.contains('fa-heart')) {
        openWish();
      } else if (e.target.classList.contains('fa-shopping-cart')) {
        openCart();
      }
    })

  })

});