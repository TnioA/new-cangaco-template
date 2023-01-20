console.log("Starting coding Cangaço Store");

// menu
const btnMobile = document.getElementsByClassName("btn-mobile")[0];

function toggleMenu() {
  const nav = document.getElementsByClassName("nav")[0];
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);

// colapse
var btnCategory = document.getElementsByClassName("btn-colapse")[0];
var btnBrand = document.getElementsByClassName("btn-colapse")[1];

function togleMenuBtn(event) {
  const colapseTarget = document.getElementById(`colapse-${event}`);

  if(colapseTarget.classList.contains("active")) {
    colapseTarget.classList.toggle("active");
    return;
  }

  document.getElementsByClassName("colapse")[0].classList.remove("active");
  document.getElementsByClassName("colapse")[1].classList.remove("active");

  colapseTarget.classList.toggle("active");
}

// cart
const btnCart = document.getElementsByClassName("btn-cart")[0];
const btnCloseCart = document.getElementsByClassName("btn-close-cart")[0];
const cartBlockToutch = document.getElementsByClassName("cart-block-toutch")[0];

function togleCart() {
  const cart = document.getElementsByClassName("cart")[0];
  const cartBlockToutch = document.getElementsByClassName("cart-block-toutch")[0];
  cart.classList.toggle("active");
  cartBlockToutch.classList.toggle("active");

}

cartBlockToutch.addEventListener("click", togleCart);
btnCart.addEventListener("click", togleCart);
btnCloseCart.addEventListener("click", togleCart);