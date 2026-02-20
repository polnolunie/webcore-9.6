import '../scss/style.scss'

console.log('It works!')
;('use strict')

document.querySelectorAll('.swiper').forEach((swiperEl) => {
  new Swiper(swiperEl, {
    slidesPerView: 1.3,
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

let isShowingAll = false // для tablet-ver__btn на маленьких экранах
let isPcShown = false // для pc-ver__btn на больших экранах

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

function openModal() {
  modal.classList.add('open');
  document.body.classList.add('shifted');
  modal.showModal();
}

function closeModal() {
  modal.classList.remove('open');
  document.body.classList.remove('shifted');
  modal.close();
}

// Перехват закрытия через кнопку внутри dialog
document.getElementById('modalClose-btn').addEventListener('click', (e) => {
  e.preventDefault();
  closeModal();
});

// Если у вас есть кнопка открытия, например:
document.getElementById('modalOpen-btn').addEventListener('click', (e) => {
  e.preventDefault();
  openModal();
});




