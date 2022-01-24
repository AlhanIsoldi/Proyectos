

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.tecla[data-key="${e.keyCode}"]`);
      
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('teclaefecto');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('teclaefecto');
    console.log('hola');
  }

  window.addEventListener('keydown', playSound);
  const keys = document.querySelectorAll('.tecla');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

