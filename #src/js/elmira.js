let quantityDropDownParent = 'quantity-selection-drop-down';
let quantityDropTrigger = 'quantity-selected-text';
let quantitychangers = 'quantity-selected-text-inner';
let quantityDropDown = new DropDown(
    quantityDropDownParent,
    quantityDropTrigger,
    quantitychangers
)


let cityDropDownParent = 'city-selection-drop-down';
let cityDropTrigger = 'city-selected-text';
let citychangers = 'city-selected-text-inner';
let cityDropDown = new DropDown(
    cityDropDownParent,
    cityDropTrigger,
    citychangers
)

let paymentDropDownParent = 'payment-selection-drop-down';
let paymentDropTrigger = 'payment-selected-text';
let paymentchangers = 'payment-selected-text-inner';
let paymentDropDown = new DropDown(
    paymentDropDownParent,
    paymentDropTrigger,
    paymentchangers
)

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
