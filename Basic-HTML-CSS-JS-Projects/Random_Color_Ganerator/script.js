let startbtn = document.querySelector('#start')
let stopbtn = document.querySelector('#stop')
let body = document.querySelector('body')
let intervalId = null

const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"

    for (i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

const startChangingColor = function () {
    if (intervalId === null) {
        intervalId = setInterval(changeColor, 1000)
    }

    function changeColor() {
        body.style.backgroundColor = randomColor()
    }
}
const stopChangingColor = function () { 
     clearInterval(intervalId)
    intervalId = null
}

startbtn.addEventListener('click', startChangingColor)
stopbtn.addEventListener('click', stopChangingColor)