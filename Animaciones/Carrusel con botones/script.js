const imgs = document.getElementById('imgs')
const btnLeft = document.getElementById('left')
const btnRight = document.getElementById('right')
const img = document.querySelectorAll('#imgs img')

let index = 0
let interval = setInterval(run, 2000)

function run(){
    index++
    changeImage()
}

function changeImage(){
    if (index > img.length - 1) {
        index = 0
    } else if (index < 0) {
        index = img.length - 1
    }

    imgs.style.transform = `translateX(${-index * 500}px)`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

btnRight.addEventListener('click', () =>{
    index++

    changeImage()
    resetInterval()
})

btnLeft.addEventListener('click', () =>{
    index--

    changeImage()
    resetInterval()
})
