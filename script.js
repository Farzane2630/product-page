const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".main-navigation");
const closeMenu = document.querySelector(".close-menu-btn");

const productImage = document.querySelector(".product-img");
const previousBtn = document.getElementById("icon-previous");
const nextBtn = document.getElementById("icon-next");

// Menu
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("expanded");
  mobileMenu.setAttribute("aria-expanded", true);
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("expanded");
  mobileMenu.setAttribute("aria-expanded", false);
});

// Products images
const productImages = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];

const getCurrentImgIndex = () =>
  productImages.indexOf(productImage.getAttribute("src"));

const BtnHandler = (step) => {
  const currentImgIndex = getCurrentImgIndex();
  const total = productImages.length;

  /*
  below line makes sure to follow DRY and 
  also avoid long if/else checks.
  1. currentIndex + step: shifts the index forward or backward.
  Example: if currentIndex = 3 and step = 1, you get 4.

  2. + total: prevents negatives. 
  If you go back from 0 (0 + (-1) = -1), adding total (like 4) makes it 3 instead of -1.
  Example: -1 + 4 = 3.

  3. % total: wraps around the number so it always stays within 0 … total-1.
  Example: (4) % 4 = 0, (3) % 4 = 3.
  */
  const imageIndex = (currentImgIndex + step + total) % total;
  productImage.setAttribute("src", productImages[imageIndex]);
};

previousBtn.addEventListener("click", () => BtnHandler(+1));
nextBtn.addEventListener("click", () => BtnHandler(-1));
