/** @format */



// Before Content Lode
let loaderContainer = document.querySelector(".loader-container");
let page = document.documentElement;
window.addEventListener("load", ()=> {
 
  setTimeout(() => {
    
    loaderContainer.style.display = "none"
    page.style.overflowY="auto"
  }, 1000);

})

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
  addClassShadowToNavBar();
});

// Go to Top
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Add Class To NavBar When Scroll
let navTopImage = document.querySelector(".top-nav-img");

let navBar = document.querySelector(".navbar");
function addClassShadowToNavBar() {
  let scrollValue = window.scrollY;
  if (scrollValue > 0) {
    navBar.classList.add("shadow-bottom", "move-top");
    navTopImage.style.height = 0;
  } else {
    navBar.classList.remove("shadow-bottom", "move-top");
    navTopImage.style.height = "111px";
  }
}
addClassShadowToNavBar();

// Hide Collapsed menu After Clicking OutSide It
let navbarCollapse = document.querySelector(".navbar-collapse");
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navbarCollapse.classList.remove("show");
  }
});



// Go To Page On Click a Link


function goToLink(e) {

//  event.stopPropagation();

  
  
  window.open(e, "_self");
}




// Close Navbar in Small Screen
let closeNav = document.querySelector(".close-nav");

closeNav.addEventListener("click", () => {
  navbarCollapse.classList.remove("show");
});

// Handel nav menu position in small screen
function handelPosition() {
  if (window.scrollY > 100) {
    navbarCollapse.classList.remove("move-top");
  } else {
    navbarCollapse.classList.add("move-top");
  }
}

handelPosition();

// Stop Click Event On DropDown
let navItemDropdown = document.querySelector(".nav-item.dropdown ");
let dropDownMenu = document.querySelector(".dropdown-menu");
navItemDropdown.addEventListener("click", (e) => {
  e.target.parentElement.classList.remove("show");
  dropDownMenu.classList.remove("show");
});

// Validation Email
const submitForm = document.querySelector(".subscrip-form");
const subscripInput = document.querySelector(".subscrip-input");
const succAlert = document.querySelector(".alert.succ-alert");
const waringAlert = document.querySelector(".alert.waring-alert");
const dangerAlert = document.querySelector(".alert.danger-alert");

let EmailIsExist = false
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let mail_format = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (subscripInput.value.match(mail_format)) {
    succAlert.style.display = "flex"
    setTimeout(() => {
      succAlert.style.display = "none"
      
    }, 2000);
    return true;
  } else if(EmailIsExist == true) {
    waringAlert.style.display = "flex";
    setTimeout(() => {
      waringAlert.style.display = "none";
    }, 2000);
    subscripInput.focus()
   return false
  } else {
      dangerAlert.style.display = "flex";
      setTimeout(() => {
        dangerAlert.style.display = "none";
      }, 2000);
      subscripInput.focus();
    return false;
  }
});

// Marketing page
// Change Background Our Work Section
let ourWorkSection = document.querySelector(".our-work");
let titles = document.querySelectorAll(
  ".overlay .container .overlay-l ul li h2"
);
let bgImages = [
  "../assets/SVG/marketing-page/Manazel.png",
  "../assets/SVG/marketing-page/Vesuvio.png",
  "../assets/SVG/marketing-page/Trackmat.png",
  "../assets/SVG/marketing-page/Ta3lam.png",
  "../assets/SVG/marketing-page/Urmoney.png",
];
titles.forEach((title, index)=> {
  title.addEventListener("click",() => {
    ourWorkSection.style.backgroundImage = "url("+bgImages[index]+")";
  
  })
})

// Marketing page
// The Services
let serTitles = document.querySelectorAll(".ser-r-titles");
let serBoxes = document.querySelectorAll(".ser-l")
serTitles.forEach((title, index) => {
  title.addEventListener("click", ()=> {
    serTitles.forEach(tit => tit.classList.remove("active"))
    title.classList.add("active")
    serBoxes.forEach(box => {
      box.classList.remove("active")
    })
    serBoxes[index].classList.add("active")
  })
})


