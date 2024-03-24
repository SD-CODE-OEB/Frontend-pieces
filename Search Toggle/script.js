const btn=document.getElementById('search-btn');

const bar=document.getElementById('search-field');


btn.addEventListener('click',() =>{
    bar.classList.toggle('active');
    // bar.style.opacity=1;
    bar.focus();
})

// calsslist.toggle() func is use to open and close btns.
//.focus() on a input feild automatically shifts focus onto the input feild when clicked.