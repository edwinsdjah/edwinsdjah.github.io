$("#sidebar").load("component/sidebar.html");
$("footer").load("component/footer.html");

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
    const overlay = document.querySelector('.overlay');
    const product = document.querySelectorAll('.sideProduct');
    const productDetail = document.querySelectorAll('.product-grid3');
    const parentElement = document.querySelectorAll('.buyItems');
    let productInCart = JSON.parse(localStorage.getItem('shoppingCart'));
    let wishlistData = JSON.parse(localStorage.getItem('wishlist'));
    if (!productInCart) {
      productInCart = [];
    }
    if (!wishlistData) {
      wishlistData = [];
    }


    // TOGGLE NAV MENU //
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
        };
      });
    });

    nav.addEventListener('click', function (e) {
      if (e.target.classList.contains('fa-heart') || e.target.classList.contains('click')) {
        openWish();
      } else if (e.target.classList.contains('fa-shopping-cart') || e.target.classList.contains('click')) {
        openCart();
      };
    });

    // UPDATE TO PRODUCT CART //

    const countTheSumPrice = () => {
      let sum = 0;
      productInCart.forEach(function (item) {
        sum += item.price
      });
      return sum
    }

    productDetail.forEach(function (el, index) {
      el.addEventListener('click', function (event) {
        if (event.target.classList.contains('fa-shopping-cart') || event.target.classList.contains('addCart')) {
          const productID = index + 1;
          const productName = el.querySelector('.title').textContent;
          const productPrice = el.querySelector('.price').textContent;
          const productImg = el.querySelector('.pic-1').src;
          let product = {
            id: productID,
            name: productName,
            image: productImg,
            price: +productPrice,
            basePrice: +productPrice,
          }
          updateProduct(product);
          updateCartinHTML();
        } else if (event.target.classList.contains('fa-heart') || event.target.classList.contains('addWish')) {
          const productID = index + 1;
          const productName = el.querySelector('.title').textContent;
          const productPrice = el.querySelector('.price').textContent;
          const productImg = el.querySelector('.pic-1').src;
          let product = {
            id: productID,
            name: productName,
            image: productImg,
          }
          updateWish(product);
          updateWishinHTML();
        }
      });
    });

    function updateProduct(product) {
      for (let i = 0; i < productInCart.length; i++) {
        if (productInCart[i].name === product.name) {
          productInCart[i].count += 1;
          productInCart[i].price = productInCart[i].basePrice * productInCart.count;
          return;
        }
      }
      productInCart.push(product);
    }

    function updateWish(product) {
      for (let i = 0; i < wishlistData.length; i++) {
        if (wishlistData[i].name === product.name) {
          alert('WISHLIST SUDAH ADA');
          return;
        }
      }
      wishlistData.push(product);
    }

    const updateCartinHTML = function () {
      localStorage.setItem('shoppingCart', JSON.stringify(productInCart));
      if (productInCart.length > 0) {
        let result = productInCart.map(product => {
          return `<li class="buyItem">
            <img src='${product.image}'>
            <div class ="caption">
              <h5>${product.name}</h5>
              <h6>$${product.price}</h6>
            </div>
          </li>`
        });
        parentElement[0].innerHTML = result.join('');
      } else {
        parentElement[0].innerHTML = `<h4 class="empty">Your shopping cart is empty</h4>`;
      }
    }

    const updateWishinHTML = function () {
      localStorage.setItem('wishlist', JSON.stringify(wishlistData));
      if (wishlistData.length > 0) {
        let notif = document.querySelector('#wishlist .notif');
        notif.classList.add('heartbeat');
        setTimeout(() => {
          notif.classList.remove('heartbeat')
        }, 1000)
        notif.classList.remove('hide');
        notif.firstChild.textContent = wishlistData.length;
        let result = wishlistData.map(product => {
          return `<li class="buyItem">
            <img src='${product.image}'>
            <div class ="caption">
              <h5>${product.name}</h5>
            </div>
          </li>`
        });
        parentElement[1].innerHTML = result.join('');
      } else {
        parentElement[1].innerHTML = `<h4 class="empty">Your wishlist is empty</h4>`;
      }
    }

    updateCartinHTML();
    updateWishinHTML();

    // UPDATE TO WISHLIST


  });
});