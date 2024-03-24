
const tArea = document.getElementById('text-box');

const choiceSpace = document.getElementById('choice');

tArea.focus();
tArea.addEventListener('keyup', (e) => {
    createChoices(e.target.value);

    if(e.key==='Enter'){
        const btns = document.querySelectorAll('.btn');

        btns.pickRandomTag();
    }
})

function createChoices(input){
    const choices = input.split(',').filter(choice => choice.trim() !== '').map(choice => choice.trim());
    console.log(choices)

    choiceSpace.innerHTML = '';
    choices.forEach(btn => {
        const newBtn =document.createElement('span');
        newBtn.classList.add('btn');
        // newBtn.classList.add('select');
        newBtn.innerHTML = btn;
        choiceSpace.appendChild(newBtn);
        // highlight each choice added and randomly select a choice
        newBtn.addEventListener('click', () => {
            tArea.value = '';
            choiceSpace.innerHTML = '';
            tArea.focus();
            newBtn.classList.add('select');
            setTimeout(() => {
                newBtn.classList.remove('select');
                tArea.focus();
            
    },100)
}
    )}

}

