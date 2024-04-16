const img_btns = document.getElementById('btns');
const screen = document.getElementById('container');
const imgs = ['Nature', 'Moon', 'Sun', 'Pollution', 'Galaxy'];
const audios = ['nature', 'moon', 'sun', 'pollution', 'galaxy'];

imgs.forEach((img, index) => {
    const i_btn = document.createElement('button');
    i_btn.classList.add('i-btn');
    i_btn.innerText = img;
    img_btns.append(i_btn);

    i_btn.addEventListener('click', () => {
        stopSong();
        document.getElementById(audios[index]).play();
    });

    img_btns.appendChild(i_btn);
});
function stopSong() {
    audios.forEach(audio => {
        const audioElement = document.getElementById(audio);
        audioElement.pause();
        audioElement.currentTime = 0;
    });
}
