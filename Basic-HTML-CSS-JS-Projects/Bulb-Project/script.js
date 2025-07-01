let bulb = document.querySelector(".bulb")
let btn = document.querySelector("button")

let flag = 0

btn.addEventListener("click", function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow"
        btn.innerHTML = "Off"
        console.log("On")
        flag  = 1
    }
    else{
        bulb.style.backgroundColor = "transparent"
        console.log("Off")
        btn.innerHTML = "On"
        flag = 0
    }
})