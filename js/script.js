// For Banner

var swiper = new Swiper(".bannerSwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// for cards

var swiper = new Swiper(".servicesSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true, // 👈 This is needed for center slide
  loop: true, // Optional, smooth center scrolling
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: false
    },
  },
});



// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints: {
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//     320: {
//       slidesPerView: 1,
//       //   spaceBetween: 50,
//     },
//   },
// });
