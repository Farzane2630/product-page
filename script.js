const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".main-navigation");
const closeMenu = document.querySelector(".close-menu-btn");

const productImage = document.querySelector(".product-img");
const previousBtn = document.getElementById("icon-previous");
const nextBtn = document.getElementById("icon-next");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("expanded");
  mobileMenu.setAttribute("aria-expanded", true);
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("expanded");
  mobileMenu.setAttribute("aria-expanded", false);
});

const productImages = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];

previousBtn.addEventListener("click", () => {
  
    const currentImgSrc = productImage.getAttribute("src");
    const currentImgIndex = productImages.findIndex(
      (img) => img == currentImgSrc
    );

    if (currentImgIndex <= 3 && currentImgIndex >= 1) {
      productImage.setAttribute("src", productImages[currentImgIndex - 1]);
    } else {
      productImage.setAttribute("src", productImages[3]);
    }

});
nextBtn.addEventListener("click", () => {
  // setProductImgSrc("+");
});
