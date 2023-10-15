var swiperHome = new Swiper(".swiper-home", {
  spaceBetween: 10,
  // effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

var swiperCourses = new Swiper(".swiper-courses", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    390: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});

var swiperCooperation = new Swiper(".swiper-partners", {
  slidesPerView: 3,
  spaceBetween: 8,
  // loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    390: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 4,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
  },
});
