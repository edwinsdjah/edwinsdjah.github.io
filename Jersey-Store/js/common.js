$("#sidebar").load("component/sidebar.html");
$("footer").load("component/footer.html");


function getPrice(price) {
  price = price.replace(/\,/g, '');
  return parseInt(price);
}

function numberWithCommas(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// FUNCTION DI DALAM HEADER

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
          const productPrice = el.querySelector('.price').textContent.split('Rp')[1];
          const productImg = el.querySelector('.pic-1').src;
          const priceNum = getPrice(productPrice);
          let product = {
            id: productID,
            name: productName,
            image: productImg,
            priceString: productPrice,
            price: +priceNum,
            basePrice: +priceNum,
          }
          let numString = numberWithCommas(priceNum);
          console.log(priceNum);
          console.log(numString);
          updateProduct(product);
          updateCartinHTML();
        }
        // UPDATE WISHLIST TO STORAGE
        else if (event.target.classList.contains('fa-heart') || event.target.classList.contains('addWish')) {
          const productID = index + 1;
          const productName = el.querySelector('.title').textContent;
          const productPrice = el.querySelector('.price').textContent.split('Rp')[1];
          const priceNum = getPrice(productPrice);
          const productImg = el.querySelector('.pic-1').src;
          let product = {
            id: productID,
            name: productName,
            image: productImg,
            priceString: productPrice,
            price: +priceNum,
            basePrice: +priceNum,
          }
          getPrice(productPrice);
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
        let notif = document.querySelector('#cart .notif');
        notif.classList.add('heartbeat');
        setTimeout(() => {
          notif.classList.remove('heartbeat')
        }, 1000)
        notif.classList.remove('hide');
        notif.firstChild.textContent = productInCart.length;
        let result = productInCart.map(product => {
          return `<li class="buyItem">
            <img src='${product.image}'>
            <div class ="caption">
              <h5 class="product-name">${product.name}</h5>
              <h6 class="product-price">Rp${product.priceString}</h6>
              <ul class="social row">
                <div class="">
                 <button>+</button>
                 <span class="count">1</span>
                 <button>-</button>
                </div>
                <li class=""><a href="javaScript:void(0)" class=""><i class="fas fa-trash"></i></a></li>
              </ul>
            </div>
          </li>`
        });
        parentElement[0].innerHTML = result.join('');
      } else {
        let notif = document.querySelector('#cart .notif');
        notif.classList.add('hide')
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
              <h5 class="product-name">${product.name}</h5>
              <h6 class="product-price">Rp${product.priceString}</h6>
              <ul class="social row">
                <li><a href="javaScript:void(0)" class="addCart"><i class="fa fa-shopping-cart"></i></a></li>
                <li><a href="javaScript:void(0)" class=""><i class="fas fa-trash"></i></a></li>
              </ul>
            </div>
          </li>`
        });
        parentElement[1].innerHTML = result.join('');
      } else {
        let notif = document.querySelector('#wishlist .notif');
        notif.classList.add('hide')
        parentElement[1].innerHTML = `<h4 class="empty">Your wishlist is empty</h4>`;
      }
    }
    
    wishWindow.addEventListener('click',function(event){
      if(event.target.classList.contains('fa-trash')){
          let list = event.target.closest('.buyItem');
          let name = list.querySelector('.product-name').textContent;
          list.remove();
          wishlistData.forEach(function(el,index){
            if(name === el.name){
              wishlistData.splice(index,1)
            }
          })
      } else if (event.target.classList.contains('btn-danger')|| event.target.innerHTML === 'CLEAR') {
        wishlistData.length = 0;
      }
      updateWishinHTML();
    })
    
    cartWindow.addEventListener('click', function(event){
      if(event.target.classList.contains('fa-trash')){
          let list = event.target.closest('.buyItem');
          let name = list.querySelector('.product-name').textContent;
          list.remove();
          productInCart.forEach(function(el,index){
            if(name === el.name){
              productInCart.splice(index,1)
            }
          });
      }
      updateCartinHTML();
    })

    updateCartinHTML();
    updateWishinHTML();

    // UPDATE TO WISHLIST


  });
});
