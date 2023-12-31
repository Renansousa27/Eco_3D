let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Muda a imagem a cada 2 segundos
}

document.getElementById("next").addEventListener("click", function() {
    slideIndex += 1;
    if (slideIndex > slides.length) {slideIndex = 1}
    showSlides();
});

document.getElementById("prev").addEventListener("click", function() {
    slideIndex -= 1;
    if (slideIndex < 1) {slideIndex = slides.length}
    showSlides();
});