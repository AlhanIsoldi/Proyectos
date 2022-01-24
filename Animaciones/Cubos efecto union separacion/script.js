const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big') )

function createBoxes(){
    for (let i = 0; i < 4; i++) {
        for (let y = 0; y < 4; y++) {
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-y * 125}px ${-i * 125}px`
            
            boxesContainer.appendChild(box)
        }
        
    }
}

createBoxes()