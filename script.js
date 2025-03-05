"use strict";

// stick header navigation
const header = document.querySelector(".header");
const headerContent = document.querySelector(".header__content");

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    headerContent.classList.add("sticky");
  } else {
    headerContent.classList.remove("sticky");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
headerObserver.observe(header);

// mobile navigation
const mobileMenu = document.querySelector(".mobile__menu");
const overlay = document.querySelector(".overlay");

mobileMenu.addEventListener("click", function () {
  headerContent.classList.toggle("active");
  overlay.classList.toggle("active");
});

// slider
const sliderItem = document.querySelectorAll(".hero__slide-item");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentSlide = 0;
let maxSlide = sliderItem.length;

const gotoSlide = function (slide) {
  sliderItem.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
gotoSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  gotoSlide(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }

  gotoSlide(currentSlide);
};

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// slide with keyboard

document.addEventListener("keydown", function (e) {
  e.key === "ArrowRight" && nextSlide();
  e.key === "ArrowLeft" && prevSlide();
});
