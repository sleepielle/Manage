const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const toggleIcon = document.querySelector(".toggle-icon");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAtstribute("data-overlay");

  if (
    toggleIcon.getAttribute("src") ===
    "/manage.website/images/icon-hamburger.svg"
  ) {
    toggleIcon.setAttribute("src", "/manage.website/images/icon-close.svg");
  } else {
    toggleIcon.setAttribute("src", "/manage.website/images/icon-hamburger.svg");
  }
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: false,
  prevArrow: false,
  nextArrow: false,
});
