if (screen.width > 991) {
  let mySwiper = new Swiper('.commodity .swiper-container', {
    loop: true,
    spaceBetween: 24,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 'auto',

  })
}
if (screen.width < 991) {
  let dropDown = document.querySelector('.language-selection-drop-down');
  let headerNavigationWrapper = document.querySelector('.header_navigation_wrapper');
  let newLi = document.createElement('li')
  newLi.classList.add('language-wrapper');
  newLi.append(dropDown)
  headerNavigationWrapper.prepend(newLi);
  let menuBurger = new Burger(
    '.search_form_submit',
    '.header_form_search .form_control'
  )
  let commodityCardPrice = document.querySelectorAll('.commodity-card-price');
  Array.from(commodityCardPrice).forEach(card => {
    let parent = card.closest('.commodity-default-card');
    parent.querySelector('.commodity-card-parameter').prepend(card);
  })
}

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

function Burger(burger, menu) {
  this.burger = document.querySelector(burger)
  this.menu = document.querySelector(menu)
  let self = this
  let attribute = `data-burger${Math.random()}`;
  this.burger.setAttribute('data-burger', attribute)
  this.menu.setAttribute('data-burger', attribute)
  Array.from(this.burger.querySelectorAll('*')).forEach(el => {
    el.setAttribute('data-burger', attribute)
  })
  Array.from(this.menu.querySelectorAll('*')).forEach(el => {
    el.setAttribute('data-burger', attribute)
  })

  this.burger.addEventListener('click', activateBurger);

  function activateBurger(e) {
    document.body.classList.add('overflow-js')
    self.menu.classList.add('active')
    this.classList.add('open')
    window.addEventListener('scroll', noScroll)
  }

  document.addEventListener('click', closeBurger)

  function closeBurger(e) {
    if (e.target.getAttribute('data-burger') == attribute) {

    } else {
      self.burger.classList.remove('open')
      self.menu.classList.remove('active')
      document.body.classList.remove('overflow-js')
    }
  }

  function noScroll(e) {
    // console.log(e)
  }
}

let headerLangDropDownParent = 'language-selection-drop-down';
let headerLangDropTrigger = 'language-selected-text';
let changers = 'language-selected-text-inner';
let headerLangDropDown = new DropDown(
  headerLangDropDownParent,
  headerLangDropTrigger,
  changers
)
let menuBurger = new Burger(
  '.header-burger',
  '.header_navigation'
)
let headerCartDrop = new Burger(
  '.header_cart',
  '.header__cart__inner'
)


let brandProductActiveCommodityWrapper = document
  .querySelector('.fixing-type-for-device-row');

function makeCommodityActive(commodityWrapper) {
  try {
    this.commodity = commodityWrapper.children

  } catch (e) {
    console.log(e)
  }
  try{
  Array.from(this.commodity).forEach(el => {
    el.addEventListener('click', toggleActiveClass)
  })
  } catch (e) {
    console.log(e)
  }


  function toggleActiveClass(e) {
    e.preventDefault();
    if (this.classList.contains('active')) {
      removeActiveClass(this)
      return false
    }
    addActiveClass(this)
  }

  function addActiveClass(el) {
    el.classList.add('active');
  }

  function removeActiveClass(el) {
    el.classList.remove('active')
  }
}

new makeCommodityActive(brandProductActiveCommodityWrapper);


