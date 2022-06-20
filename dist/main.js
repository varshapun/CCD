// slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
}


let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides1, 4000); // Change image every 2 seconds
}



// menu display 

const topNavBtn = document.querySelector(".top-nav-btn");
const topNavMenu = document.querySelector(".top-nav-menu");
var counterTopMenu = false;
const displayMenu = () => {

  if (counterTopMenu) {
    topNavMenu.style.display = "none";
    counterTopMenu =false;
  }else{
    topNavMenu.style.display = "block";
    counterTopMenu =true;
  }
  
}

topNavBtn.addEventListener("click",displayMenu);

// search change

const searchbox = document.querySelector(".searchbox");
const searchIcon = document.querySelector(".search-icon");
var searchCounter = true;
// searchbox.style.display = "none";
searchIcon.addEventListener("click", () => {
    if (searchCounter) {
     
      // searchbox.style.display = "flex";
      searchbox.style.height = "70px";
      searchCounter=false;
     
    }
    else{
      searchbox.style.height = "0";
      // searchbox.style.display = "none";
      searchCounter = true;
      
    }
});

// Fading all elements on scroll

const reveal = ( ) => {
  var reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible){
      reveals[i].classList.add("active");
    }
    
  }
}
window.addEventListener("scroll", reveal);

// Signup
const userIcon = document.querySelector(".user-icon");
const signUpModal = document.querySelector(".sign-up-modal")
const closeIcon = document.querySelector(".close-icon")
const bodyFull = document.getElementsByTagName("body");
userIcon.addEventListener("click", () => {
  signUpModal.style.display = "block";
  signUpModal.style.zIndex = "10";
  
});
closeIcon.addEventListener("click", () => {
  signUpModal.style.display = "none";
 
});