gsap.from("#main h1",{
    opacity:0,
    duration:2,
    delay:0.4,
    x:-30,
})

gsap.from(".navbar img, #navbar #logo",{
    opacity:0,
    duration:2,
    delay:0.4,
    y:-30,
})
gsap.from(".navbar a",{
    opacity:0,
    duration:2,
    delay:0.4,
    y:-30,
    stagger:0.3
})
gsap.from("#main #img1",{
    opacity:0,
    duration:2,
    delay:0.4,
    y:30,
})
gsap.from("#main #img2",{
    opacity:0,
    duration:2,
    delay:0.4,
    x:30,
})
gsap.from("#main #img3",{
    opacity:0,
    duration:2,
    delay:0.4,
    y:30,
})

gsap.to("#search .items",{
    transform: "translateX(-80%)",
    scrollTrigger:{
        trigger: "#search",
        scroll:"body",
        start: "top 0%",
        scrub: 1,
        pin:true,
        
    }
})
gsap.to(".search h2",{
    transform: "translateX(-50%)",
    scrollTrigger:{
        trigger: ".search",
        scroll:"body",
        start: "top 0%",
        end: "top -100%",
        scrub: 1,
        pin:true,
        ease:"none",
    }
})


gsap.from("#article h2",{
    opacity:0,
    duration:1,
    delay:0.4,
    x:-30,
    scrollTrigger:{
        trigger: "#article",
        scroll:"body",
        start:"top 50%",
    }
})
gsap.from(".blog1 ",{
    opacity:0,
    duration:1,
    delay:0.4,
    x:30,
    scrollTrigger:{
        trigger: ".blog1 ",
        scroll:"body",
        start:"top 50%",
    }
})
gsap.from(".blog2",{
    opacity:0,
    duration:1,
    x:-30,
    scrollTrigger:{
        trigger: ".blog2",
        scroll:"body",
        start:"top 50%",
    }
})
gsap.from(".blog3",{
    opacity:0,
    duration:1,
 
    x:30,
    scrollTrigger:{
        trigger: ".blog3",
        scroll:"body",
        start:"top 70%",
    }
})
gsap.from(".blog4",{
    opacity:0,
    duration:1,
    x:-30,
    scrollTrigger:{
        trigger: ".blog4",
        scroll:"body",
        start:"top 70%",
    repeat:-1,

    }
})
var main=document.querySelector("#full")
var cursor=document.querySelector("#cursor")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.6,
        ease:"back.out",
    })
})

//----------------------------------------BLOG PAGE-------------------------------------------------------------------------------

var tl=gsap.timeline()
var menu=document.querySelector("#navbar i")
var close=document.querySelector("#nav-content i")

gsap.from(menu,{
    opacity:0,
    duration:2,
    delay:1
})
tl.to(menu,{
    opacity:0,
    duration:0.3
})
tl.to("#nav-content",{
    right:0 ,
    duration: 0.4,
    delay: 0.4,

})
tl.from("#nav-content h3",{
    x:80,
    opacity: 0,
    stagger:0.3,
})
tl.from("#nav-content i",{
    opacity: 0,
})
tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
close.addEventListener("click",function(){
    tl.reverse()
})
gsap.from("#main-box",{
    opacity:0,
    y:30,
    duration:2,
    delay:1
})