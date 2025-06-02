// =========== HOME SWIPER ================
var homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//============== NEW SWIPER ===============
var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  slidesPerView: "auto",
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
  loop: true,
});

// ============ HEADER SCROLL ==============

const header = document.querySelector(".header");
function scrollHeader() {
  if (this.scrollY > 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// ============ SHOW CART ==============
const cart = document.querySelector(".cart"),
  cartShop = document.getElementById("cart-shop"),
  cartClose = document.querySelector(".cart__close");

if (cartShop) {
  cartShop.addEventListener("click", () => {
    cart.classList.add("show-cart");
  });
}

if (cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove("show-cart");
  });
}

// ============= SHOW LOGIN ==============
const login = document.getElementById("login"),
  loginShow = document.getElementById("login-toggle"),
  loginClose = document.getElementById("login__close");

if (loginShow) {
  loginShow.addEventListener("click", () => {
    login.classList.add("show-login");
  });
}

if (loginClose) {
  loginClose.addEventListener("click", () => {
    login.classList.remove("show-login");
  });
}

// ============== SHOW SCROLL UP =============
const scrollUp = document.querySelector(".scrollUp");
function showScrollUp() {
  if (this.scrollY > 350) scrollUp.classList.add("show-scrollUp");
  else scrollUp.classList.remove("show-scrollUp");
}
window.addEventListener("scroll", showScrollUp);

// ============== SHOW NAV MENU ===============
const navMenu = document.querySelector(".nav__menu"),
  navShow = document.querySelector(".nav__toggle"),
  navClose = document.querySelector(".nav__close");

if (navShow) {
  navShow.addEventListener("click", () => {
    navMenu.classList.add("show-nav");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-nav");
  });
}
