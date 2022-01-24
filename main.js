//MENU FOR MOBILE VIEW

const menuLinks = document.getElementById("menu-links");
menuLinks.style.maxHeight = "0px";

function menuHandler(){
  if (menuLinks.style.maxHeight == "0px") {
    menuLinks.style.maxHeight = "200px";
  } else{
    menuLinks.style.maxHeight = "0px";
  }
}


// FOR PRODUCTS SLIDER

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
})