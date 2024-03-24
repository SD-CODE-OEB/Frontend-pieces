const rectangle = document.getElementById('rectangle');

rectangle.addEventListener('mousemove', function(e) {
    
    const x= e.clientX;
    const y= e.clientY;
    
    const recTop = e.target.offsetTop;
    const recleft = e.target.offsetLeft;

    // const recLocation = rectangle.getBoundingClientRect();

    const xInside = x - recleft;
    const yInside = y - recTop;
    
    const midpoint = rectangle.offsetWidth / 2;
    

})