const container = document.getElementById('container')
const colors = ['#ff9b00', '#0637d9', '#ffe063', '#7c3a1d', '#ffff57', '#a0d125', '#486b01', '#fa7e32', '#dc1693', '#4d59a6', '#ff220c', '#511c29'] 
const SQUARES = 800

for (let index = 0; index < SQUARES; index++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', ()=> setColor(square))
    square.addEventListener('mouseout', ()=> removeColor(square))
    
    container.appendChild(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}