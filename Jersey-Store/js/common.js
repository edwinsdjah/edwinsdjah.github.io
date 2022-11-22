function getCatalogueContent() {
  let parentCatalogue = document.querySelector('.content-generate .row');
  let catalogueList;
  const catalogueParameter = parentCatalogue.parentElement.id;

  switch (catalogueParameter) {
    case 'jersey-man':
      catalogueList = menCatalogueList;
      break;
    case 'special-catalogue':
      catalogueList = specialCatalogueList;
      break;
    case 'jersey-woman':
      catalogueList = womenCatalogueList;
      break;

  }

  let newContent = catalogueList.map(function (product) {
    let currency = Intl.NumberFormat('id-ID');
    let newPrice = currency.format(product.price);

    if (product.isNew === true) {
      return `<div class="col-lg-3 col-md-6 col-6">
  <div class="product-grid3" data-product="new" data-brand="${product.brand}">
      <div class="product-image3">
          <a href="javaScript:void(0)">
              <img class="pic-1"
                  src="${product.img1}">
              <img class="pic-2"
                  src="${product.img2}">
          </a>
          <ul class="social">
              <li><a href="javaScript:void(0)"><i class="fa fa-heart"></i></a></li>
              <li><a href="javaScript:void(0)"><i class="fa fa-shopping-cart"></i></a></li>
          </ul>
          <span class="product-new-label">New</span>
      </div>
      <div class="product-content">
          <h3 class="title"><a href="javaScript:void(0)">${product.name}</a></h3>
          <div class="price">
              Rp ${newPrice}
          </div>
          <ul class="rating">
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star disable"></li>
              <li class="fa fa-star disable"></li>
          </ul>
      </div>
  </div>
</div>`
    } else {
      return `<div class="col-lg-3 col-md-6 col-6">
  <div class="product-grid3" data-product="old" data-brand="${product.brand}">
      <div class="product-image3">
          <a href="javaScript:void(0)">
              <img class="pic-1"
                  src="${product.img1}">
              <img class="pic-2"
                  src="${product.img2}">
          </a>
          <ul class="social">
              <li><a href="javaScript:void(0)"><i class="fa fa-heart"></i></a></li>
              <li><a href="javaScript:void(0)"><i class="fa fa-shopping-cart"></i></a></li>
          </ul>
      </div>
      <div class="product-content">
          <h3 class="title"><a href="javaScript:void(0)">${product.name}</a></h3>
          <div class="price">
              Rp ${newPrice}
          </div>
          <ul class="rating">
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star disable"></li>
              <li class="fa fa-star disable"></li>
          </ul>
      </div>
  </div>
</div>`
    }
  });
  parentCatalogue.innerHTML = newContent.join('');
}

function getPrice(price) {
  let new_price = price.replaceAll('.', '');
  return parseInt(new_price);
}

function getCurrency(price) {
  let currency = Intl.NumberFormat('id-ID');
  return currency.format(price);
}

$(document).ready(function () {
  $("#header").load("component/header.html", function () {
    // FUNCTION DALAM HEADER
    const cartWindow = document.getElementById('cartWindow');
    const wishWindow = document.getElementById('wishWindow');
    const nav = document.querySelector('.nav-icons');
    const overlay = document.querySelector('.overlay');
    const product = document.querySelectorAll('.sideProduct');
    const productDetail = document.querySelectorAll('.product-grid3');
    const parentElement = document.querySelectorAll('.buyItems');
    const checkout = document.querySelector('.checkout');
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
            count: 1,
            price: +priceNum,
            basePrice: priceNum,
          }
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
          productInCart[i].price = productInCart[i].count * productInCart[i].basePrice;
          console.log(productInCart[i].basePrice)
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
                 <button class="plus">+</button>
                 <span class="count">${product.count}</span>
                 <button class="minus">-</button>
                </div>
                <li class=""><a href="javaScript:void(0)" class=""><i class="fas fa-trash"></i></a></li>
              </ul>
            </div>
          </li>`
        });
        checkout.removeAttribute('disabled');
        parentElement[0].innerHTML = result.join('');
      } else {
        let notif = document.querySelector('#cart .notif');
        notif.classList.add('hide')
        parentElement[0].innerHTML = `<h4 class="empty">Your shopping cart is empty</h4>`;
        checkout.setAttribute('disabled', 'true');
      }
      countTotalPrice();
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

    wishWindow.addEventListener('click', function (event) {
      if (event.target.classList.contains('fa-trash')) {
        let list = event.target.closest('.buyItem');
        let name = list.querySelector('.product-name').textContent;
        list.remove();
        wishlistData.forEach(function (el, index) {
          if (name === el.name) {
            wishlistData.splice(index, 1)
          }
        })
      } else if (event.target.classList.contains('btn-danger') || event.target.innerHTML === 'CLEAR') {
        wishlistData.length = 0;
      }
      updateWishinHTML();
    })

    cartWindow.addEventListener('click', function (event) {
      if (event.target.classList.contains('fa-trash')) {
        let list = event.target.closest('.buyItem');
        let name = list.querySelector('.product-name').textContent;
        list.remove();
        productInCart.forEach(function (el, index) {
          if (name === el.name) {
            productInCart.splice(index, 1)
          }
        });
      }
      updateCartinHTML();
    })

    // COUNT ITEM IN CART
    function countItemInCart() {
      let parentElement = document.querySelector('#cartWindow .buyItems');
      parentElement.addEventListener('click', function (event) {
        const plusButton = event.target.classList.contains('plus');
        const minusButton = event.target.classList.contains('minus');
        if (plusButton || minusButton) {
          let parent = event.target.closest('.caption');
          let name = parent.querySelector('.product-name');
          productInCart.forEach(function (el, index) {
            if (el.name === name.textContent) {
              if (plusButton) {
                el.count += 1;
              } else if (minusButton) {
                el.count -= 1;
              }
              el.price = el.count * el.basePrice;
            }

            if (el.count < 1) {
              productInCart.splice(index, 1)
            }
          })
          countTotalPrice();
        }
      })
      updateCartinHTML();
    }

    // count Total Price
    function countTotalPrice() {
      let value = document.querySelector('.price-value')
      let sum = 0;
      let currency = Intl.NumberFormat('id-ID');
      productInCart.forEach((el) => {
        sum += el.price;
      });
      localStorage.setItem('totalValue', sum)
      let newPrice = currency.format(sum);
      return value.innerHTML = newPrice
    }
    countTotalPrice();
    countItemInCart();
    updateCartinHTML();
    updateWishinHTML();
  });
  $("#sidebar").load("component/sidebar.html", function () {
    let parentElement = document.getElementById('sidebar');
    parentElement.addEventListener('click', function (event) {
      // checkbox new and vintage
      let isNew = document.getElementById('checkboxnew');
      let isVintage = document.getElementById('checkboxvintage');
      let product = document.querySelectorAll('.product-grid3');

      product.forEach(function (el) {
        let dataProduct = el.getAttribute('data-product');
        newOldCheck();

        function newOldCheck() {
          if (isNew.checked) {
            if (dataProduct !== 'new') {
              el.classList.add('hide');
            }
          } else if (!isNew.checked) {
            if (dataProduct !== 'new') {
              el.classList.remove('hide');
            }
          }

          if (isVintage.checked) {
            if (dataProduct !== 'old') {
              el.classList.add('hide');
            }
          } else if (!isVintage.checked) {
            if (dataProduct !== 'old') {
              el.classList.remove('hide');
            }
          }

          if (isNew.checked && isVintage.checked) {
            el.classList.remove('hide');
          }
        }
      })
    })
  });
  $("footer").load("component/footer.html");

  let body = document.querySelector('body');
  if (body.classList.contains('cataloguePage')) {
    getCatalogueContent();
    // PAGINATION
    const content = document.querySelectorAll('.product-grid3');
    const pageContainer = document.querySelector('.pagination');
    const pageItem = document.querySelectorAll('.page-item');
    const before = document.querySelector('.page-before');
    const after = document.querySelector('.page-after');
    const pageLimit = 12;
    const pageCount = Math.ceil(content.length / pageLimit);
    let currentPage;

    const appendPageNumber = function (index) {
      const pageNumber = document.createElement('a');
      pageNumber.className = 'page-number';
      pageNumber.innerHTML = index;
      pageNumber.setAttribute('href', '#main')
      pageNumber.setAttribute('page-index', index);
      pageNumber.setAttribute('aria-label', 'Page' + index);
      pageNumber.setAttribute('role', 'button')

      pageContainer.appendChild(pageNumber)
    };

    const getPageNumber = function () {
      for (i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
      }
    };

    const setCurrentPage = function (pagenum) {
      currentPage = pagenum;
      handleButtons();
      handleActivePageNumber();

      const prevRange = (pagenum - 1) * pageLimit;
      const currRange = pagenum * pageLimit;

      content.forEach(function (el, index) {
        el.classList.add('hide')
        if (index >= prevRange && index < currRange) {
          el.classList.remove('hide');
        }
      })
    }

    const handleActivePageNumber = function () {
      document.querySelectorAll('.page-number').forEach(function (button) {
        button.classList.remove('active');

        const pageIndex = Number(button.getAttribute('page-index'));
        if (pageIndex === currentPage) {
          button.classList.add('active');
        }
      })
    }

    const disableButton = function (button) {
      button.setAttribute('disabled', 'true');
    }

    const enableButton = function (button) {
      button.removeAttribute('disabled');
    }

    const handleButtons = function () {
      if (currentPage === 1) {
        disableButton(before);
      } else {
        enableButton(before);
      }

      if (pageCount === currentPage) {
        disableButton(after)
      } else {
        enableButton(after)
      }
    };

    getPageNumber();
    setCurrentPage(1);
    before.addEventListener('click', function () {
      setCurrentPage(currentPage - 1);
    })
    after.addEventListener('click', function () {
      setCurrentPage(currentPage + 1);
    })

    document.querySelectorAll('.page-number').forEach((function (button) {
      const pageIndex = Number(button.getAttribute('page-index'));
      if (pageIndex) {
        button.addEventListener('click', function () {
          setCurrentPage(pageIndex);
        })
      };
    }));
  }

  if (body.classList.contains('checkoutPage')) {
    localStorage.setItem('coupon', JSON.stringify(couponList));
    let total = getCurrency(localStorage.getItem('totalValue'))
    let container = document.querySelector('.order-container')
    let totalValue = document.querySelector('.totalValue')
    let productInCart = JSON.parse(localStorage.getItem('shoppingCart'));
    let orderDetail = productInCart.map(function (el, index) {

      if (index + 1 === el.length) {
        return ` <tr>
          <td colspan="3" class="caption" style="font-family: 'Anton', sans-serif; font-size: 2em;">TOTAL</td>
          <td class="totalValue">${total}</td>
      </tr>`
      } else {
        return `<tr>
        <th scope="row">${index+1}</th>
        <td>${el.name}</td>
        <td>${el.count}</td>
        <td>Rp ${el.priceString}</td>
      </tr>`
      }
    });
    container.innerHTML = orderDetail.join('');
    console.log(orderDetail)
  }

  // END OF WINDOW LOAD
});