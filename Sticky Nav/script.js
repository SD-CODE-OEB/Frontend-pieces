const header = document.querySelector('header');

const activeLinks = document.querySelectorAll('header ul a');

window.addEventListener('scroll',scrNav);

activeLinks.forEach(link => {
        link.addEventListener('click', () => {
            activeLinks.forEach(link => link.classList.remove('current'));
            link.classList.add('current');
        });

});

function scrNav(){
    if(window.scrollY > 150){
        header.classList.add('active');
    } else{
        header.classList.remove('active');
    }

}


