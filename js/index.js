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
 hideLogo();

 addClassShadowToNavBar()

});

function hideLogo() {
  if (
    document.documentElement.scrollTop + window.innerHeight + 10 >=
    document.documentElement.scrollHeight
  ) {
    footerLogo.classList.add("hide");
  } else {
    footerLogo.classList.remove("hide");
  }
}

hideLogo();

// Go to Top
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Hide logo in Small Screen
const media = window.matchMedia("(max-width: 991px)");

  if (media.matches) {
    window.addEventListener("scroll" , () => {
         if (
           document.documentElement.scrollTop + window.innerHeight + 950 >=
           document.documentElement.scrollHeight
         ) {
           footerLogo.classList.add("hide");
         } else {
           footerLogo.classList.remove("hide");
         }
    })
  } 

  // Add Class To NavBar When Scroll
  let navBar = document.querySelector(".navbar");
function addClassShadowToNavBar() {
  let scrollValue = window.scrollY;
   if (scrollValue > 0) {
     navBar.classList.add("shadow-bottom")
    } else {
     navBar.classList.remove("shadow-bottom");
     
   }
}
addClassShadowToNavBar();

// Hide Collapsed menu After Clicking OutSide It
let navbarCollapse = document.querySelector(".navbar-collapse");
document.addEventListener("keydown" ,(e)=> {
 if(e.key === "Escape"){
  navbarCollapse.classList.remove("show")
 }
})






