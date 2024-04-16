const hourEl = document.querySelector('.hour');

const minuteEl = document.querySelector('.minute');

const secondEl = document.querySelector('.second');

const timeEl = document.querySelector('.time');

const dateEl = document.querySelector('.date');

const toggle = document.querySelector('.dark-btn');

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = '';
        e.target.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = '';
        e.target.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

//stackoverflow scale method.
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function setTime() {
    let today = new Date();

    const month = today.getMonth();
    const day = today.getDay();
    const date = today.getDate();

    dateEl.innerHTML = `${days[day]}, ${months[month]}&nbsp;<span> ${date}</span>`;

    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 12, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

    const ampm = hours > 12 ? 'PM' : 'AM';
    timeEl.innerHTML = `${hours % 12} : ${minutes < 10 ? `0${minutes}` : minutes}: ${seconds < 10 ? `0${seconds}` : seconds}&nbsp; ${ampm}`;
}
setTime();
setInterval(setTime, 1000);