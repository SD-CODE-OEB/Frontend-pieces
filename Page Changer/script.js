const circles=document.querySelectorAll('.circle');

const line=document.getElementById('prog-line');

const prev=document.getElementById('prev');
const next=document.getElementById('next');

prev.disabled=true;
// let count=0;
// const nextPage = () => {
//     count++;
//     if(count===1 || count===0){
//         line.style.width="33% "
//         circles[1].classList.add('active');
//     } else if(count===2){
//         line.style.width="66%"
//         circles[2].classList.add('active');
//     } else if(count===3){
//         line.style.width="100%"
//         circles[3].classList.add('active');
//     }
//     if(count>0){
//         prev.disabled=false;
//     }
//     if(count===circles.length-1){
//         next.disabled="true;"
//     }
// }

                                 //Own Code.
// function prevPage(){
//     if(count===3){
//         line.style.width="66% "
//         circles[3].classList.remove('active');
//     } else if(count===2){
//         line.style.width="33%";
//         circles[2].classList.remove('active');
//     } else if(count===1 || count===0){
//         line.style.width="0%";
//         circles[1].classList.remove('active');
//     }
//     count--;
//     if(count===0){
//         prev.disabled=true;
//         next.disabled=false;
//     } else{
//         next.disabled=false;
//     }
// }
let active=0;

next.addEventListener('click',(e) =>{
        active++;

        if(active===0 || active ===1){
            circles[1].classList.add('active');
            line.style.width="33%";
        } else if(active===2){
            circles[2].classList.add('active');
            line.style.width="66%";
        } else if(active===3){
            circles[3].classList.add('active');
            line.style.width="100%";
        }
        if(active===circles.length-1){
            active=3;
            next.disabled=true;
        }

    if(active===1){
        prev.disabled=false;
    }
})

prev.addEventListener('click',(e) =>{

        if(active===3){
            circles[3].classList.remove('active');
            line.style.width="66%";
        } else if(active===2){
            circles[2].classList.remove('active');
            line.style.width="33%";
        } else if(active===0 || active ===1){
            circles[1].classList.remove('active');
            line.style.width="0%";
        }

        if(active===circles.length-1){
            active=3;
            next.disabled=true;
        }

    active--;
    if(active===circles.length-2){
        next.disabled=false;
    } else if(active<1){
        prev.disabled=true;
    }
})