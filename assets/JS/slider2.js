let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider__item");
  let dots = document.getElementsByClassName("slider__btn");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

AutoshowSlides();

function AutoshowSlides() {
    // alert("1");
  let i;
  let slides = document.getElementsByClassName("slider__item");
  let dot = document.getElementsByClassName("slider__btn");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
//   alert("1");
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dot[slideIndex-1].className += " active";
  setTimeout(AutoshowSlides, 4000); // Change image every 2 seconds
}