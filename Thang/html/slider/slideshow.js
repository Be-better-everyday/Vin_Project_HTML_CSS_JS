var slideIndex = 1;
showSlides(slideIndex);

// chuyển đến slide kế tiếp hoặc trở lại slide trước đó
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// chuyển đến slide được chọn bởi dot
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// hiển thị slide hiện tại và ẩn các slide còn lại
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// tự động chuyển slide sau mỗi 5 giây
setInterval(function() {
  plusSlides(1);
}, 5000);
