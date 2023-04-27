/** @format */

// Scroll Top Btn
let scrollTopBtn = document.querySelector(".scrollTotop");

// Hide Footer Logo When Scroll End
const footerLogo = document.querySelector(".footer-box .logo");

window.addEventListener("scroll", () => {
  handelPosition();
  let scrollValue = window.scrollY;

  // Scroll Top Btn
  if (scrollValue > 100) {
    scrollTopBtn.classList.add("active");
  } else {
    scrollTopBtn.classList.remove("active");
  }

  

 addClassShadowToNavBar()

});

;

// Go to Top
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

 

  // Add Class To NavBar When Scroll
  let navBar = document.querySelector(".navbar");
function addClassShadowToNavBar() {
  let scrollValue = window.scrollY;
   if (scrollValue > 0) {
     navBar.classList.add("shadow-bottom", "move-top");
    } else {
     navBar.classList.remove("shadow-bottom", "move-top");
     
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

function goToLink(e) {
  window.open(e, "_self");
  
}

let htmlElement = document.documentElement;

let navToggler = document.querySelector(".navbar-toggler");

navToggler.addEventListener("click", ()=> {
  htmlElement.classList.toggle("remove-scrollY");
  handelPosition();
})


// Close Navbar in Small Screen
let closeNav = document.querySelector(".close-nav");

closeNav.addEventListener("click", () => {
  navbarCollapse.classList.remove("show");
  htmlElement.classList.remove("remove-scrollY");
   
})


// Handel nav menu position in small screen
function handelPosition() {
  if(window.scrollY > 100) {
   navbarCollapse.classList.remove("move-top");
  } else {
    
    navbarCollapse.classList.add("move-top");
  }
}

// let dropLink = document.querySelector(".drop-link");
// dropLink.addEventListener("click", () => {
//   document.querySelector(".dropdown-menu").classList.remove("show")
// })


