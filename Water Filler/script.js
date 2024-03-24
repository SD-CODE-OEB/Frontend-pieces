const bottles = document.querySelectorAll('.bottle-small');

const constText = document.getElementById('text');

const fill = document.getElementById('fill');


bottles.forEach((bottle, index) => {
    let bottleCount = bottles.length;
    let bottleNumber = index;
    bottle.addEventListener('click', () => {
        smallBottleFill();
        bigBottleFill();
    });

    function smallBottleFill() {
        if (!bottle.classList.contains('fill')) {
            bottle.classList.add('fill');
            for (let i = 0; i <= index; i++) {
                if (bottles[i].classList.contains('fill')) {
                    for (let j = 0; j <= i; j++) {
                        bottles[j].classList.add('fill');
                    }
                }
            }
        }
        else if (bottle.classList.contains('fill')) {
            for (let i = bottleNumber; i < bottles.length; i++) {
                if (bottles[i].classList.contains('fill')) {
                    bottles[i].classList.remove('fill');
                }
            }
        }
    }

    function bigBottleFill() {
        const fullBottles = document.querySelectorAll('.bottle.fill').length;
        console.log(fullBottles);
        if (fullBottles === 0) {
            fill.style.padding = 0;
            fill.style.opacity = 0;
            fill.style.height = 0;
        } else {
            fill.style.opacity = 1;
            fill.style.padding = '15px';
            fill.style.height = `${fullBottles / bottleCount * 360}px`;
            fill.innerText = `${fullBottles / bottleCount * 100}%`;
        }
        if (fullBottles === bottleCount) {
            constText.style.opacity = 0;
            constText.style.height = 0;
        } else {
            constText.style.opacity = 1;
            constText.style.height = '60px';
            constText.innerText = `${2 - (250 * fullBottles / 1000)} L Remained`;
        }
    }
});
