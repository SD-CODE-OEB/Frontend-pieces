const canvas = document.getElementById('canvas');

const minus = document.getElementById('minus');

const sizeEl = document.getElementById('number');

const plus = document.getElementById('plus');

const colors = document.getElementById('colors');

const clear = document.getElementById('restart');

const ctx = canvas.getContext('2d');


let size  =Number(sizeEl.innerText);
let isPressed = false;
let color =colors.value;
let x;
let y;

plus.addEventListener('click',()=>{
    size +=2;
    if(size>=20){
        size = 20;
    }
    sizeEl.innerText = size;
})

minus.addEventListener('click', () =>{
    size -=2;
    if(size <= 4){
        size = 4;
    }
    sizeEl.innerText = size;
});

colors.addEventListener('change', (e)=> color = e.target.value);

clear.addEventListener('click', () => ctx.clearRect(0,0,canvas.width,canvas.height));


canvas.addEventListener('mousedown',(e)=>{
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup',(e)=>{  
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);

        x= x2;
        y= y2;
    }
})




function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}


function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size*2;
    ctx.stroke();
}