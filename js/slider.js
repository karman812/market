let slides = document.querySelectorAll('.slider .slider__item');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,5000);

function nextSlide(){
    goToSlide(currentSlide+1);
    
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slider__item';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slider__item active';            
}


let next = document.querySelector('.slider-next-btn');
let previous = document.querySelector('.slider-prev-btn');

next.onclick = function(){
    nextSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide,2000);
    
};
previous.onclick = function(){
    previousSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide,2000);

};


