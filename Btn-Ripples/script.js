const btn = document.getElementById('btn');

const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX;
        const y =e.clientY;

        const btnTop = e.target.offsetTop;
        const btnLeft = e.target.offsetLeft;

        const xInside = x - btnLeft
        const yInside = y - btnTop;

        const ripple = document.createElement('span');
        ripple.classList.add('circle');

        ripple.style.top = yInside + 'px';
        ripple.style.left = xInside + 'px';

        this.appendChild(ripple);

        setTimeout(()=> ripple.remove() ,500);
});

});