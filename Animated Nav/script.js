const toggle = document.getElementById('x-btn');

const nav = document.getElementById('n-bar');


toggle.addEventListener('click', () =>{
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
        
});