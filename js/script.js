document.addEventListener("DOMContentLoaded", function () {
  const hamberger = document.getElementById("hamberger");
  const navLinks = document.querySelector(".nav-links");
  const navBtn = document.querySelector(".nav-buttons");
  const navItems = document.querySelectorAll(".nav-links a");

  hamberger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    navBtn.classList.toggle("active");
  });

  // Close menu when a link is clicked
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navLinks.classList.remove("active");
      navBtn.classList.remove("active");
    });
  });
});



// For Banner




var swiper = new Swiper(".bannerSwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// for cards

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
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
