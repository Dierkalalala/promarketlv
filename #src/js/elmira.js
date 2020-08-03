<<<<<<< HEAD
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
=======
if (screen.width < 768) {
    let comSwiperThird = new Swiper('.commodity-3 .swiper-container', {
        loop: true,
        spaceBetween: 24,
        pagination: {
            el: '.commodity-pagination-1',
            clickable: true,
        },
        slidesPerView: 1,
    })
}
//не работает.

new DropDown(
    'city-drop-down-wrapper',
    'city-drop-down-trigger',
    'city-changer'
)
new DropDown(
    'payment-drop-down-wrapper',
    'payment-drop-down-trigger',
    'payment-changer'
)


ymaps.ready(function () {
    var map = new ymaps.Map('map', {
        center: [56.946262, 24.091404],
        zoom: 1,
        controls: []
    });

    var pin = ymaps.templateLayoutFactory.createClass('<img src="img/offices/pin.png" alt="pin">');
    var office1 = new ymaps.Placemark(
        [56.943325, 24.018319], {
            hintContent: 'Anniņmuižas 17'
        }, {
            iconLayout: pin,
        }
    );
    map.geoObjects.add(office1);

    var office2 = new ymaps.Placemark(
        [56.951233, 24.134147], {
            hintContent: 'Ģertrudes 77'
        }, {
            iconLayout: pin,
        }
    );
    map.geoObjects.add(office2);
    map.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
});


let authorizationTabs = document.querySelectorAll('.delivery-blocks .col-xl-4');
let authorizationTabsContent = document.querySelectorAll('.delivery-tab-content');

function tabss (tabs, tabContent){
    function abc (a) {
        for(let i = a; i < tabContent.length; i++){
            if(tabContent[i].classList.contains('show')){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }else{
                tabContent[i].classList.add('hide');
            }       
        }
    }
    abc(1);
    
    for (let u = 0; u < tabs.length; u++){
        tabs[u].addEventListener('click', () => {
            abc(0);      
            tabContent[u].classList.add('show');
        });
    }
}

tabss(authorizationTabs,authorizationTabsContent);


flatpickr(".datepicker", {});
flatpickr(".timepicker", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
});

>>>>>>> 1c826590a29b3d90c5ad8ea834e2a8129409c734
