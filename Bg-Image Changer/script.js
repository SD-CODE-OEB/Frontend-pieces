// const imgs= ['Images/pexels-ajinkyaaa-19555540.jpg','Images/pexels-alan-cabello-1250957.jpg','Images/pexels-dan-k-joseph-1749079.jpg','Images/pexels-fox-3655254.jpg']

const body = document.body;

const left = document.getElementById('left');

const slides = document.querySelectorAll('.img');

const right = document.getElementById('right');

let activeImg = 0;

left.addEventListener('click', () => {
    activeImg--;

    if(activeImg<0){
        activeImg = slides.length-1;
    }
    changeBg();
    changeSlide();
});


right.addEventListener('click', () => {
    activeImg++;

    if(activeImg>slides.length-1){
        activeImg = 0;
    }
    changeBg();
    changeSlide();
});


function changeBg() {
    body.style.backgroundImage= slides[activeImg].style.backgroundImage;
}


function changeSlide(){
    slides.forEach(slide => slide.classList.remove('active'));

    slides[activeImg].classList.add('active');
}