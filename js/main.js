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
    '.header_form_search'
  )
  let commodityCardPrice = document.querySelectorAll('.commodity-card-price');
  Array.from(commodityCardPrice).forEach(card => {
    let parent = card.closest('.commodity-default-card');
    parent.querySelector('.commodity-card-parameter').prepend(card);
  })
  let shopDropDownLis = document.querySelectorAll('shop__drop__down-tabs-side-container ul > li')
  Array.from(shopDropDownLis).forEach(el => {
    el.classList.remove('active');
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

function Burger(burger, menu, parentElement = {}) {
  this.burger = document.querySelector(burger)
  this.menu = document.querySelector(menu)
  let self = this
  this.attribute = `data-burger${Math.random()}`;
  this.burger.setAttribute('data-burger', this.attribute)
  this.menu.setAttribute('data-burger', this.attribute)
  Array.from(this.burger.querySelectorAll('*')).forEach(el => {
    el.setAttribute('data-burger', this.attribute)
  })
  Array.from(this.menu.querySelectorAll('*')).forEach(el => {
    el.setAttribute('data-burger', this.attribute)
  })

  this.burger.addEventListener('click', activateBurger);

  function activateBurger(e) {
    document.body.classList.add('overflow-js')
    self.menu.classList.toggle('active')
    this.classList.toggle('open')
    window.addEventListener('scroll', noScroll)
  }

  document.addEventListener('click', closeBurger)

  function closeBurger(e) {
    if (
      e.target.getAttribute('data-burger') === self.attribute ||
      e.target.getAttribute('data-burger') === parentElement.attribute
    ) {
      parentElement.burger.classList.add('open')
      parentElement.menu.classList.add('active')
    } else {
      self.burger.classList.remove('open');
      self.menu.classList.remove('active');
      document.body.classList.remove('overflow-js');
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
  '.header_navigation',

)
let headerCartDrop = new Burger(
  '.header_cart',
  '.header__cart__inner'
)
let headerShopDrop = new Burger(
  '.header__shop__link > a',
  '.shop__dropdown__wrapper',
  menuBurger
)
let headerShopTabs = new Tabs(
  document.querySelectorAll('.shop__drop__down-tabs-side-container li'),
  document.querySelector('.shop__drop__down-content-side'),
  document.querySelector('.shop__dropdown__wrapper'),
  '.shop__drop__down-content-side-header'
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

function Tabs(tabTrigger, tabContentWrapper, parentElement, closeButtonSelectorName) {
  this.tab = tabTrigger
  this.tabContent = tabContentWrapper
  this.parent = parentElement
  this.closeButtons = [];
  Array.from(this.tabContent.children).forEach(child => {
    this.closeButtons.push(child.querySelector(closeButtonSelectorName))
  })
  let self = this
  if(!this.tab ||
    !this.tabContent ||
    !this.parent
  ) {
    return false
  }
  Array.from(this.tab).forEach(tab => {
    tab.addEventListener('click', changeTheTab)
  })

  this.closeButtons.forEach(el => {
    el.addEventListener('click', closeTabs);
  })


  function closeTabs() {
    Array.from(self.tabContent.children).forEach(tab => {
      tab.classList.remove('active')
    })
    Array.from(self.tab).forEach(tab => {
      tab.classList.remove('active')
    })
    self.tabContent.classList.remove('active')

  }

  function changeTheTab(e) {
    e.preventDefault()
    let index = Array.from(this.parentNode.children).indexOf(this)
    closeTabs()
    self.tabContent.children[index].classList.add('active')
    this.classList.add('active')
    self.tabContent.classList.add('active')
  }
  this.closeAllTabs = closeTabs;
}

