window.addEventListener('keydown', function (e) {

    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`div[data-key="${e.code}"]`)
    console.log(audio) // "e" stands for event
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
})
function removeTransition(e) {
    console.log(e)
    if (e.propertyName !== 'transform') return
    this.classList.remove('playing')

}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))