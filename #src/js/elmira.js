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
