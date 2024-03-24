
const displays = document.querySelectorAll(".display");


    displays.forEach(display => {
        display.innerHTML = '0';
        const updateCount = () => { 
            const endVal = +display.getAttribute('data-target'); // '+' here means we have conbverted into Number type.(It's a Shorthand property.)
            let val = +display.innerHTML;
            const increment = endVal /150 ;
            if(val < endVal){
                display.innerText = `${Math.ceil( val + increment)}`;
                setTimeout(updateCount, 1); 
            } else {
            display.innerHTML = endVal;
            }
        };
        updateCount();
    });
