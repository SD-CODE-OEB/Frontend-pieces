
const bgImg=document.getElementById('bg-img');

const load=document.getElementById('load');

let  go = 0;
let start=setInterval(()=>{
    loading()
},30);

function loading(){
    go++;
    load.innerText=`${go}%`;
    if(go > 99){
        clearInterval(start);
        bgImg.style.filter="blur(0px)";
        load.style.display="none";
    }
}

// window.onload=() =>{
//     return start;
// }
