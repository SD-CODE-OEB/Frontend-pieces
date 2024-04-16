const rectangle = document.getElementById('rectangle');

rectangle.addEventListener('mousemove', function (e) {

    const x = e.clientX;
    const y = e.clientY;

    const recTop = e.target.offsetTop;
    const recLeft = e.target.offsetLeft;

    const xInside = x - recLeft;
    const yInside = y - recTop;

    const midpoint = rectangle.offsetWidth / 2;

    if (xInside > midpoint) {
        rectangle.classList.remove('left');
        rectangle.classList.add('right');
    } else if (xInside < midpoint) {
        rectangle.classList.remove('right');
        rectangle.classList.add('left');
    }
});

rectangle.addEventListener('mouseleave', function () {
    rectangle.classList.remove('left');
    rectangle.classList.remove('right');
});