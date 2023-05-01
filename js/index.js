/** @format */

// Scroll Top Btn
let scrollTopBtn = document.querySelector(".scrollTotop");

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
  let navTopImage = document.querySelector(".top-nav-img");
  console.log(navTopImage.style.height)
  let navBar = document.querySelector(".navbar");
function addClassShadowToNavBar() {
  let scrollValue = window.scrollY;
   if (scrollValue > 0) {
     navBar.classList.add("shadow-bottom", "move-top");
     navTopImage.style.height = 0
    } else {
     navBar.classList.remove("shadow-bottom", "move-top");
     navTopImage.style.height= "111px"
     
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

// Go To Page On Click a Link
function goToLink(e) {
  window.open(e, "_self");
}

// Stop Scrolling When navbar open in small screen
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

// Stop Click Event On DropDown
let navItemDropdown = document.querySelector(".nav-item.dropdown "); 
let dropDownMenu = document.querySelector(".dropdown-menu");
navItemDropdown.addEventListener("click", (e)=> {
e.target.parentElement.classList.remove("show")
dropDownMenu.classList.remove("show")
})



