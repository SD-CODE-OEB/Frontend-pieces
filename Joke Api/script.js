const display = document.getElementById('show');

const joke  = document.getElementById('joke');


joke.addEventListener('click', () =>{
    fetch('https://icanhazdadjoke.com', {
        headers:{
         Accept:'application/json',   
        },
    })
    .then(Response => Response.json())
    .then(data => display.innerHTML = data.joke)


})