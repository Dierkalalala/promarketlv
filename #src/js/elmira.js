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
