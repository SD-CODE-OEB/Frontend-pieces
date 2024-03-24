const slides=document.querySelectorAll('.slides');

const removeActive = () =>{
    slides.forEach(slide =>{
        slide.classList.remove('panels');
    })
}

slides.forEach(slide =>{
    slide.addEventListener('click',() =>{
        removeActive();
        slide.classList.add('panels');
    })

})