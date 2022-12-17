const dots = document.querySelectorAll(".dot");
const next = document.querySelector(".next");
const slides = document.querySelectorAll("article")


next.addEventListener("click" ,(e) => {
  plusSlides(1);
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll("article")
    if (n > slides.length) {
      next.setAttribute("href" , "./getStarted.html")
    }
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }