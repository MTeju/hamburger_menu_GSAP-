var tl = gsap.timeline();

tl.to(".hanburger-menu", {
    right: 0,
    duration: 0.5
})

tl.from(".hanburger-menu .links h2",{
    x: 100,
    duration: 1,
    opacity: 0,
    stagger : 0.3
})

tl.from(".hanburger-menu .close i",{
    x: 100,
    opacity: 0,
    duration: 0.2
})

tl.pause()

const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu.addEventListener("click", function(){
    tl.play();
})

close.addEventListener("click", function(){
    tl.reverse();
})