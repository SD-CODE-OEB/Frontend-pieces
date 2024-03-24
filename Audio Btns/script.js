const img_btns= document.getElementById('btns');

const screen = document.getElementById('container');

const imgs= ['Nature', 'Moon', 'Sun', 'Pollution', 'Galaxy'];


imgs.forEach(img => {
    const i_btn= document.createElement('button');

    i_btn.classList.add('i-btn');
    i_btn.innerText = img;

    img_btns.append(i_btn);

    i_btn.addEventListener('click', () => {
        stopSong()
        document.getElementById('heriye').play();
    })
    img_btns.appendChild(i_btn);
});


function stopSong(){
    imgs.forEach(img => {
        const i_btn= document.createElement('button');

        i_btn.classList.add('i-btn');
        i_btn.innerText = img;
        img_btns.append(i_btn);
        img_btns.appendChild(i_btn);
        document.getElementById('heriye').pause();
        currentTime=0;         
    });
}