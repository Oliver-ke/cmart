export default {
  slidesPerView: 2,
  grabCursor: true,
  simulateTouch: true,
  containerClass: 'item-swipper',
  navigation: {
    nextEl: '.swiper-button-next.swipper-btn-right.swapper-btn',
    prevEl: '.swiper-button-prev.swiper-btn-left.swapper-btn',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  spaceBetween: 20,
};