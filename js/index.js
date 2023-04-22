/** @format */

// Scroll Top Btn
let scrollTopBtn = document.querySelector(".scrollTotop");

// Hide Footer Logo When Scroll End
const footerLogo = document.querySelector(".footer-box .logo");

window.addEventListener("scroll", () => {
  let scrollValue = window.scrollY;

  // Scroll Top Btn
  if (scrollValue > 100) {
    scrollTopBtn.classList.add("active");
  } else {
    scrollTopBtn.classList.remove("active");
  }

  // Hide Footer Logo When Scroll End
  if (
    document.documentElement.scrollTop + window.innerHeight + 400 >=
    document.documentElement.scrollHeight
  ) {
   footerLogo.classList.add("hide");
  } else {
       footerLogo.classList.remove("hide");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});





