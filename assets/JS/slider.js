let slideIndex = 1;
showSlide(slideIndex)

function showSlide(n){
    
    let i;
    let slides = document.getElementsByClassName("slider__item");
    let dot = document.getElementsByClassName("slider__btn");
    
    for(i = 0; i < slides.length; i++){
        // alert(typeof(n));
        slides[i].style.display = "none";
        dot[i].className = dot[i].className.replace(" active","");
    }
    alert(typeof(n));
    
    slides[n - 1].style.display = "block";
    
    dot[n - 1].className += " active" ;
    slideIndex = n;
}


