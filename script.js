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

tabs = document.getElementsByClassName("slider-tab")
let slide = 3
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
    }
    tabs[slide].classList.add("active")
}