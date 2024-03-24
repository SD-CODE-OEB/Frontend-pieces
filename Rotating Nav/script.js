const bar=document.getElementById('bars');

const cross=document.getElementById('cross');

const circle=document.getElementById('circle');

const showNav=document.querySelector('.container');

const navElements=document.querySelectorAll('.nav-el');

bar.addEventListener('click',()=>{
    bar.style.opacity="0";
    cross.style.opacity="1";
    circle.classList.add('active');
    showNav.classList.add('active');
    navElements.forEach(element => {
        element.classList.add('show');
    });
})

cross.addEventListener('click',()=>{
    cross.style.opacity="0";
    bar.style.opacity="1";
    circle.classList.remove('active');
    showNav.classList.remove('active');
    navElements.forEach(element => {
        element.classList.remove('show');
    });
})