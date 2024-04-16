const tArea = document.getElementById('text-box');
const choiceSpace = document.getElementById('choice');

tArea.focus();
tArea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent newline behavior
        const btns = document.querySelectorAll('.btn');
        btns.pickRandomTag();
    } else {
        createChoices(e.target.value);
    }
});

function createChoices(input) {
    const choices = input.split(',').filter(choice => choice.trim() !== '').map(choice => choice.trim());
    choiceSpace.innerHTML = '';
    choices.forEach(btn => {
        const newBtn = document.createElement('span');
        newBtn.classList.add('btn');
        newBtn.innerHTML = btn;
        choiceSpace.appendChild(newBtn);
        newBtn.addEventListener('click', () => {
            tArea.value = '';
            choiceSpace.innerHTML = '';
            tArea.focus();
            newBtn.classList.add('select');
            setTimeout(() => {
                newBtn.classList.remove('select');
                tArea.focus();
            }, 100);
        });
    });
}
