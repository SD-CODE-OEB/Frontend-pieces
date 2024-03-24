const boxes= document.querySelectorAll('.box');



const showBox= () =>  {
    const triggerBox=window.innerHeight / 6 * 5 ;
    
    boxes.forEach(box => {
        const boxTop=box.getBoundingClientRect().top;
        
        if(boxTop < triggerBox){
            box.classList.add('show');
        } else{
            box.classList.remove('show');
        }
    });
}


showBox();
window.addEventListener('scroll',showBox);