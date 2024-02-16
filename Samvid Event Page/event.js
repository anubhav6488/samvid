var tl = gsap.timeline();

tl.from (".main-heading", {
    y :-100,
    duration:1,
    opacity:0,
    stagger: 1,
})

tl.from(".event-box ",{
    scale:0,
    duration:1,
    stagger :0.5,
    scrollTrigger: ".event-box"
})

tl.from("#btn", {
    scale:0
})
tl.from("#btn ",{
    y :-20,
    duration:1,
    stagger :0.5,
    repeat:-1,
    yoyo :true,    
})