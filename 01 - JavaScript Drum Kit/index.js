window.addEventListener('keydown', function (e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`div[data-key="${e.keyCode}"]`)
    console.log(audio) // "e" stands for event
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    if (key)
        key.classList.toggle('playing');
})