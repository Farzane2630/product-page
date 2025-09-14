const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".main-navigation");
const closeMenu = document.querySelector(".close-menu-btn");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("expanded");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("expanded");
});
