const fill  = document.querySelector('.fill');

const boxes = document.querySelectorAll('.box');



function dragStart(){
    this.className += 'hold';
    setTimeout(() => this.className = 'none', 0);
}

function dragEnd(){
    this.className = 'box';
    fill.className = 'fill';
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(){
    this.className = 'box';
}

function dragDrop(){
    this.className = 'box';
    this.append(fill);
}

boxes.forEach(box => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
});

fill.addEventListener('dragstart', dragStart);

fill.addEventListener('dragend', dragEnd);
