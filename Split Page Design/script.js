const left= document.querySelector(".left-scrn");

const right= document.querySelector(".right-scrn");

left.addEventListener('mouseenter', () => {
    left.classList.add('hover');
});

left.addEventListener('mouseleave', () =>left.classList.remove('hover'));

right.addEventListener('mouseenter', () => right.classList.add('hover'));

right.addEventListener('mouseleave', () =>right.classList.remove('hover'));