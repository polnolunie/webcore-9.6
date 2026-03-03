import '../scss/style.scss'

console.log('It works!')
;('use strict')

document.querySelectorAll('.swiper').forEach((swiperEl) => {
  new Swiper(swiperEl, {
    slidesPerView: 'auto',
    spaceBetween: 15,
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: swiperEl.querySelector('.swiper-pagination'),
      clickable: true,
    },
  });
});


const showAllButton = document.getElementById('showAllButton')
const tabletButtons = document.querySelectorAll('.tablet-ver__btn')
const pcButtons = document.querySelectorAll('.pc-ver__btn')

let isShowingAll = false
let isPcShown = false

function updateVisibility() {
  if (window.innerWidth <= 1120) {
    tabletButtons.forEach((btn, index) => {
      if (index >= 6 && !isShowingAll) {
        btn.style.display = 'none'
      } else {
        btn.style.display = 'inline-flex'
      }
    })
    pcButtons.forEach((btn) => (btn.style.display = 'none'))
    showAllButton.style.display = 'inline-flex'
    showAllButton.innerHTML = isShowingAll
      ? '<img src="./img/hideall.svg" alt="hide icon" /> Скрыть'
      : '<img src="./img/readmore.svg" alt="show icon" /> Показать все'
  } else {
    tabletButtons.forEach((btn) => (btn.style.display = 'inline-flex'))
    pcButtons.forEach((btn) => {
      btn.style.display = isPcShown ? 'inline-flex' : 'none'
    })
    showAllButton.style.display = 'inline-flex'
    showAllButton.innerHTML = isPcShown
      ? '<img src="./img/hideall.svg" alt="hide icon" /> Скрыть'
      : '<img src="./img/readmore.svg" alt="show icon" /> Показать все'
  }
}

showAllButton.addEventListener('click', () => {
  if (window.innerWidth <= 1120) {
    isShowingAll = !isShowingAll
  } else {
    isPcShown = !isPcShown
  }
  updateVisibility()
});

const modal = document.getElementById('modal');
const closeBtn = document.getElementById('modalClose-btn');
const openBtn = document.getElementById('modalOpen-btn');

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  console.log ('close modal');
});




