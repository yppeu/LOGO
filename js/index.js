var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // 화면의 넓이가 320px 이상일 때
    400: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // 화면의 넓이가 640px 이상일 때
    670: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
