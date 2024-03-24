const arrows = document.querySelectorAll('.show');

const crosses = document.querySelectorAll('.fa-times');

arrows.forEach(arrow =>{
    arrow.addEventListener('click',() =>{
        arrow.parentElement.classList.add('open');
        arrow.style.display='none';
        arrow.nextElementSibling.style.display='flex';
    })
});

crosses.forEach(cross =>{
    cross.addEventListener('click', () =>{
        cross.parentElement.classList.remove('open');
        cross.style.display='none';
        cross.previousElementSibling.style.display='flex';
    })
});