const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".main-navigation");
const closeMenu = document.querySelector(".close-menu-btn");

const productImage = document.querySelector(".product-img");
const previousBtn = document.getElementById("icon-previous");
const nextBtn = document.getElementById("icon-next");

const overlayContainer = document.querySelector(".overlay-container");
const overlayPreviousBtn = document.getElementById("icon-previous_overlay");
const overlayNextBtn = document.getElementById("icon-next_overlay");
const closeOverlayBtn = document.querySelector(".close-btn_overlay");
const overLayProductImage = document.querySelector(".product-img_overlay");
const overlayAlbumImages = document.querySelectorAll(".img-overlay");

const minusBtn = document.querySelector("#icon-minus");
const plusBtn = document.querySelector("#icon-plus");
const productCount = document.querySelector(".product-count");
const cartBadge = document.querySelector(".cart-counter-badge");
const addToCartBtn = document.querySelector(".purchase-btn");

const albumImages = document.querySelectorAll(".img");

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
  if (overlayContainer.classList.contains("hide")) {
    return productImages.indexOf(productImage.getAttribute("src"));
  } else {
    return productImages.indexOf(overLayProductImage.getAttribute("src"));
  }
};
const btnHandler = (step) => {
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

  if (overlayContainer.classList.contains("hide")) {
    productImage.setAttribute("src", productImages[imageIndex]);
  } else {
    overLayProductImage.setAttribute("src", productImages[imageIndex]);
  }
};

previousBtn.addEventListener("click", () => btnHandler(+1));
nextBtn.addEventListener("click", () => btnHandler(-1));

// overlay
productImage.addEventListener("click", () => {
  overlayContainer.classList.remove("hide");
});

overlayPreviousBtn.addEventListener("click", () => btnHandler(+1));

overlayNextBtn.addEventListener("click", () => btnHandler(-1));

closeOverlayBtn.addEventListener("click", () => {
  overlayContainer.classList.add("hide");
});

// album
function albumHandler(img, index, album, productImg) {
  img.addEventListener("click", () => {
    album.forEach((img) => img.classList.remove("active")); // reset img style
    productImg.setAttribute("src", productImages[index]);
    img.classList.add("active");
  });
}

Array.from(albumImages).forEach((img, index) => {
  albumHandler(img, index, albumImages, productImage);
});

Array.from(overlayAlbumImages).forEach((img, index) => {
  albumHandler(img, index, overlayAlbumImages, overLayProductImage);
});

// add to cart
minusBtn.addEventListener("click", () => {
  Number(productCount.innerHTML) > 0 && productCount.innerHTML--;
});

plusBtn.addEventListener("click", () => {
  productCount.innerHTML++;
});

addToCartBtn.addEventListener("click", () => {
  if (Number(productCount.innerHTML) > 0) {
    alert("purchased!");
    cartBadge.classList.add("show");
    cartBadge.innerHTML = productCount.innerHTML;
  } else alert("Oops! Your cart is empty! Please select atleast one!");
});
