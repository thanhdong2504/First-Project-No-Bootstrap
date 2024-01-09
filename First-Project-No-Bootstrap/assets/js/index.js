var nextButton = document.querySelector('.carousel-control-next');
var prevButton = document.querySelector('.carousel-control-prev');

var slideIndex = 0;
var slides = document.getElementsByClassName('carousel-item');
console.log(slides.length);

// Add event for the next button
nextButton.addEventListener('click', function () {
    slides[slideIndex].classList.remove('active');
    slideIndex++;
    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }
    slides[slideIndex].classList.add('active');
});

prevButton.addEventListener('click', () => {
    slides[slideIndex].classList.remove('active');
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides[slideIndex].classList.add('active');
});

// setInterval(()=> {
//     slides[slideIndex].classList.remove('active');
//     slideIndex++;
//     if (slideIndex > slides.length - 1) {
//         slideIndex = 0;
//     }
//     slides[slideIndex].classList.add('active');
// }, 3000);


// setInterval(() => {
//     alert("hello world");
// }, 5000);

