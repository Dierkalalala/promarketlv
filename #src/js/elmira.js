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




function DropDown(parent, trigger, changers) {
    try {
        this.parent = document.getElementsByClassName(parent)[0]
        this.trigger = this.parent.getElementsByClassName(trigger)[0]
        this.changers = this.parent.getElementsByClassName(changers)

        let self = this
        Array.from(this.changers).forEach(changer => {
            changer.addEventListener('click', changeTheTabValue)
        })

        function changeTheTabValue() {
            let text = this.innerText
            self.trigger.getElementsByClassName('changing')[0].innerText = text
            self.trigger.nextElementSibling.classList.remove('active')
        }

        this.trigger.addEventListener('click', toggleActive)

        function toggleActive(e) {
            this.nextElementSibling.classList.toggle('active')
        }

        document.addEventListener('click', closeTabs)

        function closeTabs(e) {
            try {
                if (e.target.parentNode.classList.contains('select-drop-down') || (e.target.parentNode.classList.contains(parent))) {
                    return false
                } else if (e.target.parentNode.classList.contains(trigger)) {
                    return false
                }
                self.trigger.nextElementSibling.classList.remove('active')
            } catch (e) {
                void e
            }
        }
    } catch (e) {
        void e
    }
}


let quantityDropDownParent = 'quantity-selection-drop-down';
let quantityDropTrigger = 'quantity-selected-text';
let quantitychangers = 'quantity-selected-text-inner';
let quantityDropDown = new DropDown(
    quantityDropDownParent,
    quantityDropTrigger,
    quantitychangers
)
