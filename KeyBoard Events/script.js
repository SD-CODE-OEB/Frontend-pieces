const input = document.getElementById('k-name');

const number = document.getElementById('k-num');

const key = document.querySelectorAll('.key');

const code = document.getElementById('k-code');

const mssg= document.getElementById('mssg');

window.addEventListener('keydown', (e) => {
    key.forEach(k =>{
        k.classList.add('show')
    })
    mssg.style.display='none';
    const key_name = e.key;

    const key_code = e.code;

    const key_value =e.keyCode;

    input.innerHTML = key_name;

    number.innerHTML = key_value;

    code.innerHTML = key_code;
})