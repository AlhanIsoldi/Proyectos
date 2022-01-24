const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Alhan Gabriel Isoldi Cayola'
let index = 1
let speed = 300 / speedEl.ariaValueMax

writeText()

function writeText(){
    textEl.innerHTML = text.slice(0, index)

    index++

    if (index > text.length) {
        index = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e)=> speed = 300 / e.target.value)