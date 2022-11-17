// a test function that runs when the button is clicked
function navToggle() {
  let siteNav = document.getElementById('site-nav');
  let trigram = document.getElementById('trigram');
  if (siteNav.className === 'nav-wrap') {
    siteNav.classList.add('mobile');
    trigram.classList.add('tri-mobile');
  } else {
    siteNav.classList = 'nav-wrap';
    trigram.classList = 'nav-link';
  }
}
/*--- 
Slideshow functions 
--*/
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n );
}
//main slideshow function
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("thumb");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
} 

// Image modal functions - Requires jQuery!!!
$(".button").on("click", function() { // when item with class of button is clicked, fire function
  var modal = $(this).data("modal"); // sets modal var equal to data attribute
  $(modal).show(); // opens up modal (much code hidden here by jQuery)
});
$(".modal").on("click", function(e) { // sets up click function
  var className = e.target.className; // var className set to event target
  if(className === "modal" || className === "close"){ // if conditions are met...
    $(this).closest(".modal").hide(); // then hide the modal
  } // closes if-statement
}); // closes function
