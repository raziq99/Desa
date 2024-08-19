// currentSlideID = 1;
// sliderElement = document.getElementById("slider");
// totalSlides = sliderElement.childElementCount;

let sliderContainer = document.getElementById("slideContainer");
let slider = document.getElementById("slider");
let cards = slider.getElementsByTagName("li");

let elementsToShow = 3;
if (document.body.clientWidth < 740) {
  elementsToShow = 1;
}

let sliderContainerWidth = sliderContainer.clientWidth;

let cardWidth = sliderContainerWidth / elementsToShow;

slider.style.width = cards.length * cardWidth + "px";
slider.style.transition = "margin";
slider.style.transitionDuration = "1s";

for (let index = 0; index < cards.length; index++) {
  const element = cards[index];
  element.style.width = cardWidth + "px";
}

function prev() {
  if (
    +slider.style.marginLeft.slice(0, -2) !=
    -cardWidth * (cards.length - elementsToShow)
  )
    slider.style.marginLeft =
      +slider.style.marginLeft.slice(0, -2) - cardWidth + "px"; //100px
}

function next() {
  if (+slider.style.marginLeft.slice(0, -2) != 0)
    slider.style.marginLeft =
      +slider.style.marginLeft.slice(0, -2) + cardWidth + "px";
}

function Menu(e) {
  let list = document.querySelector("ul");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[42px]"),
      list.classList.add("opacity-100"),
      list.classList.add("z-[1]"))
    : ((e.name = "menu"),
      list.classList.remove("top-[42px]"),
      list.classList.remove("opacity-100"),
      list.classList.remove("z-[1]"));
}

// function next() {
//   if (currentSlideID < totalSlides) {
//     currentSlideID++;
//     showSlide();
//   }
// }

// function prev() {
//   if (currentSlideID > 1) {
//     currentSlideID--;
//     showSlide();
//   }
// }

// function showSlide() {
//   slides = document.getElementById("slider").getElementsByTagName("li");
//   for (let index = 0; index < totalSlides; index++) {
//     const element = slides[index];
//     if (currentSlideID === index + 1) {
//       element.classList.remove("hidden");
//     } else {
//       element.classList.add("hidden");
//     }
//   }
// }
