const cardImg = document.querySelector('.pic');

const imgBox = document.getElementById('img-box');

const cardHead = document.querySelector('h3');

const cardInfo = document.querySelector('.info');

const cardAuthor =  document.querySelector('.author');

const circlePic  = document.querySelector('.circle');

const animatedBgs = document.querySelectorAll('.animated-bg');

const animatedBgTxts = document.querySelectorAll('.animated-bg-txt');

setTimeout(getCard, 2500);

function getCard(){
    imgBox.style.height='180px'
    cardImg.innerHTML = '<img src="https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2Vyc3xlbnwwfHwwfHx8Mg%3D%3D" alt="Flower" class="animated-bg img">';

    cardHead.innerHTML = 'Consectetur voluptas aperiam incidunt';

    cardInfo.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.';

    cardAuthor.innerHTML = '<strong>Shoeb Uddin</strong> <br><small>21/01/24</small>';

    animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));

    animatedBgTxts.forEach(bg => bg.classList.remove('animated-bg-txt'));
}

