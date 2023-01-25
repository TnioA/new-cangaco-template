console.log("Starting coding Cangaço Store");

const bodyDocument = document.querySelector("body");

// menu
const btnMobile = document.getElementsByClassName("btn-mobile")[0];

function toggleMenu() {
    const nav = document.getElementsByClassName("nav")[0];
    nav.classList.toggle("active");

    bodyDocument.classList = nav.classList.contains("active") ? ["no-scroll"] : [];
}

btnMobile.addEventListener("click", toggleMenu);

const btnDropdowns = document.querySelectorAll(".dropdown");
function showDropdown(target) {
    btnDropdowns.forEach(x => x.classList.remove("show"));
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

    bodyDocument.classList = cart.classList.contains("active") ? ["no-scroll"] : [];
}

cartBlockToutch.addEventListener("click", togleCart);
btnCart.addEventListener("click", togleCart);
btnCloseCart.addEventListener("click", togleCart);


const btnScrollToTop = document.querySelector(".btn-to-top");

window.onscroll = () => scrollFunction();

//check if show btnScroll 
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        btnScrollToTop.style.display = "block";
    } else {
        btnScrollToTop.style.display = "none";
    }
}

// scroll to top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// colapse
const btnColapseHandlerList = document.querySelectorAll(".colapse-handler");
const colapseContentList = document.querySelectorAll(".colapse-content");
function handleColapse(target) {
    btnColapseHandlerList.forEach(x => x.classList.remove("active"));
    colapseContentList.forEach(x => x.classList.remove("active"));
    target.classList.add("active");

    var colapseContent = document.querySelector(`.colapse-content[name='${target.getAttribute("name")}']`);
    colapseContent.classList.add("active");
}