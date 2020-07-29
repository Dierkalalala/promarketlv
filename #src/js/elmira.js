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


