console.log("Starting coding Cangaço Store");

// menu
const btnMobile = document.getElementsByClassName("btn-mobile")[0];

function toggleMenu() {
  const nav = document.getElementsByClassName("nav")[0];
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);


const btnDropdowns = document.querySelectorAll(".dropdown");
function showDropdown(target) {
  btnDropdowns.forEach(x=> {
    x.classList.remove("show");
  });

  target.classList.add("show");
}

// cart
const btnCart = document.getElementsByClassName("btn-cart")[0];
const btnCloseCart = document.getElementsByClassName("btn-close-cart")[0];
const cartBlockToutch = document.getElementsByClassName("block-toutch")[0];

function togleCart() {
  const cart = document.getElementsByClassName("cart")[0];
  const cartBlockToutch = document.getElementsByClassName("block-toutch")[0];
  cart.classList.toggle("active");
  cartBlockToutch.classList.toggle("active");

}

cartBlockToutch.addEventListener("click", togleCart);
btnCart.addEventListener("click", togleCart);
btnCloseCart.addEventListener("click", togleCart);

