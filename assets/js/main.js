// Hamburger Menu

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove Hamburger Menu

const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav-link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Change Header Background

const scrollHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

// Popular SwiperJs File

let swiperPopular = new Swiper(".popular-container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  breakpoints: {
    770: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

// Mixitup Filter

let mixerFeatured = mixitup(".featured-content", {
  selectors: {
    target: ".featured-card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active featured */

const linkFeatured = document.querySelectorAll(".featured-item");

function activeFeatured() {
  linkFeatured.forEach((l) => l.classList.remove("active-featured"));
  this.classList.add("active-featured");
}

linkFeatured.forEach((l) => l.addEventListener("click", activeFeatured));

// Scroll Up Button

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// Active Link

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// Scroll Reveal Animation

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.home-title, .popular-container, .features-img, .featured-filter`);
sr.reveal(`.home-subtitle`, { delay: 500 });
sr.reveal(`.electric`, { delay: 600 });
sr.reveal(`.home-img`, { delay: 800 });
sr.reveal(`.car-data`, { delay: 900, interval: 100, origin: "bottom" });
sr.reveal(`.home-btn`, { delay: 1000, origin: "bottom" });
sr.reveal(`.about-group, .offer_data`, { origin: "left" });
sr.reveal(`.about-data, .offer-img`, { origin: "right" });
sr.reveal(`.features-map`, { delay: 600, origin: "bottom" });
sr.reveal(`.features-card`, { interval: 300 });
sr.reveal(`.featured-card, .logos-content, .footer-content`, { interval: 100 });
