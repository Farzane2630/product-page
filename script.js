const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".main-navigation");
const closeMenu = document.querySelector(".close-menu-btn");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("expanded");
  mobileMenu.setAttribute("aria-expanded", true);
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("expanded");
    mobileMenu.setAttribute("aria-expanded", false);

});
