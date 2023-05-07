/** @format */

$(document).ready(function () {
  $("#cascade-slider").cascadeSlider({
    itemClass: "cascade-slider_item",
    arrowClass: "cascade-slider_arrow",
   
  });
  
});

// Click On Cards In Our Services Section
let sliderItem = document.querySelectorAll(".cascade-slider_item");
let sliderDots = document.querySelectorAll(".cascade-slider_dot");

sliderItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    sliderDots.forEach((dot) => {
      dot.classList.remove("cur");
    });
    sliderDots[index].click();
  });
});
