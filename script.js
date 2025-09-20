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

const getCurrentImgIndex = () => {
  const currentImgSrc = productImage.getAttribute("src");
  return productImages.findIndex((img) => img == currentImgSrc);
};

const nextBtnHandler = () => {
  const currentImgIndex = getCurrentImgIndex();

  if (currentImgIndex >= 0 && currentImgIndex < 3) {
    productImage.setAttribute("src", productImages[currentImgIndex + 1]);
  } else {
    productImage.setAttribute("src", productImages[0]);
  }
};

const previousBtnHandler = () => {
  const currentImgIndex = getCurrentImgIndex();

  if (currentImgIndex <= 3 && currentImgIndex >= 1) {
    productImage.setAttribute("src", productImages[currentImgIndex - 1]);
  } else {
    productImage.setAttribute("src", productImages[3]);
  }
};

previousBtn.addEventListener("click", previousBtnHandler);
nextBtn.addEventListener("click", nextBtnHandler);
