let scrollTopBtn = document.querySelector(".scrollTotop");

window.addEventListener("scroll",() => {
  
  let scrolValue = window.scrollY;

  if (scrolValue > 100) {
    scrollTopBtn.classList.add("active")
  } else {
    scrollTopBtn.classList.remove("active")
  }
})

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo(0,0)
})