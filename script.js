nav_content = document.getElementsByClassName("toggleable")
nav_btn = document.getElementsByClassName("nav-toggler")[0]
var open = false
const toggle = () => {
    if(open){
        nav_btn.classList.remove("fa-close")
        nav_btn.classList.add("fa-bars")
        for(let i = 0; i < nav_content.length; i++) {
            nav_content[i].style.display = "none"
        }
        open = false
    }else{
        nav_btn.classList.add("fa-close")
        nav_btn.classList.remove("fa-bars")
        for(let i = 0; i < nav_content.length; i++) {
            nav_content[i].style.display = "block"
        }
        open = true
    }
}
const check_screen = () =>{
    if(window.innerWidth >= 1226){
        for(let i = 0; i < nav_content.length; i++) {
            nav_content[i].style.display = "block"
        }
    }else{
        if(!open){
            for(let i = 0; i < nav_content.length; i++) {
                nav_content[i].style.display = "none"
            }
        }
    }
}

let tabs = document.getElementsByClassName("slider-tab")
let slides = document.getElementsByClassName("slides")
let slide = 0
const slideRight = () => {
    if(slide<3){
        slide++
    }else{
        slide = 0
    }
    changeSlider()
}
const slideLeft = () => {
    if(slide>0){
        slide--
    }else{
        slide = 3
    }
    changeSlider()
}
const changeSlider = () => {
    for(let i = 0; i < tabs.length; i++){
        tabs[i].classList.remove("active")
        slides[i].style.opacity = 0
    }
    tabs[slide].classList.add("active")
    setTimeout(() => {
        slides[slide].style.opacity = 1
    }, 200)
}
changeSlider()

let daysTimer = document.getElementById("days")
let hoursTimer = document.getElementById("hours")
let minutesTimer = document.getElementById("minutes")
let secondsTimer = document.getElementById("seconds")
let days = 2, hours = 12, minutes = 3, seconds = 15
const myTimeout = setInterval(() => {
    if(seconds > 0){
        seconds--
    }else{
        seconds = 60
        if(minutes > 0){
            minutes--
        }else{
            minutes = 60
            if(hours > 0){
                hours--
            }else{
                hours = 60
                if(days > 0){
                    days--
                }else{
                    clearInterval(myTimeout)
                }
            }
        }
    }
    updateTimer()
}, 1000)
const updateTimer = () => {
    daysTimer.textContent = days
    hoursTimer.textContent = hours
    minutesTimer.textContent = minutes
    secondsTimer.textContent = seconds
}