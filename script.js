var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".cursor_blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x - 20+"px"
    crsr.style.top = dets.y - 20+"px"
    blur.style.left = dets.x - 150 +"px"
    blur.style.top = dets.y - 150 +"px"
})

var h4All = document.querySelectorAll(".nav h4")
h4All.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
        crsr.style.scale = 3
        crsr.style.border = '1px solid #fff'
        crsr.style.backgroundColor = 'transparent'
    })
    elem.addEventListener('mouseleave', function(){
        crsr.style.scale = 1
        crsr.style.border = '0px solid #95C11E'
        crsr.style.backgroundColor = '#95C11E'
    })
})

gsap.to(".nav",{
    backgroundColor:"#000",
    duration:0.2,
    height: "90px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -12%",
        scrub:1
    }
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
    scroller:"body",
    markers:true,
    start:"top -30%",
    end: "top -80%",
    scrub:2
    }
})

gsap.from('.about_us img, #aboutusin',{
    y:60,
    opacity:0,
    duration:1,
    // stagger:0.5,              //for one by one
    scrollTrigger:{
        trigger:'.about_us',
        scroller: 'body',        //why body?
        // markers:true,
        start: 'top 60%',
        end: 'top 48%',
        scrub: 3
    }
})

gsap.from('#col1',{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger: '#col1',
        scroller: 'body',
        // markers: true,
        start:'top 50%',
        end: 'top 40%',
        scrub: 5
    }
})
gsap.from('#col2',{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger: '#col1',
        scroller: 'body',
        // markers: true,
        start:'top 50%',
        end: 'top 40%',
        scrub: 5
    }
})
gsap.from('#page4 h1',{
    y: 50,
    scrollTrigger:{
        trigger: '#page4 h1',
        scroller: 'body',
        // markers: true,
        start:'top 75%',
        end: 'top 30%',
        scrub: 3
    }
})























