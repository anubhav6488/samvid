document.addEventListener('DOMContentLoaded', function() {

    // Define the function to move dots
    function moveDots(dots) {
        dots.forEach(dot => {
            const { element, amplitude, frequency, time } = dot;
            const x = time * frequency;
            const y = amplitude * Math.sin(x);
            const left = x + 'vh';
            const top = y + window.innerHeight / 3 + 'px';
            // Check if the dot is within the window boundaries
            if (parseInt(left) > 0 && parseInt(left) < window.innerWidth) {
                element.style.left = left;
                element.style.top = top;
            }
            // If dot moves out of the window, reset its position
            if (parseInt(left) > window.innerWidth) {
                dot.time = dot.initialTime;
            } else {
                dot.time += 2;
            }
        });
        requestAnimationFrame(() => moveDots(dots));
    }

    // Initialize dots and their parameters
    const dots = [{ element: document.getElementById('dot1'), amplitude: 10, frequency: 0.02, time: 6950, initialTime: 6950 }];

    // Start the animation
    moveDots(dots);



    // for desktop view and mobile view
    function isMobile(){
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // load .js file accordingly to the device type (mobile/desktop)
    function loadScript(src) {
        var script = document.createElement('script');
        script.src = src;
        document.head.appendChild(script);
    }

    if(isMobile()){
        loadScript('./footer-Assets/scriptForMobile.js');

        var event_view_for_desktop = document.querySelector('.events-page');
        event_view_for_desktop.style.display = "none";

        var event_view_for_mobile = document.querySelector('.events-page-for-mobile-view');
        event_view_for_mobile.style.display = "flex";

    } else {
        loadScript('./footer-Assets/scriptForDesktop.js');
        event_view_for_desktop.style.display = "flex";
        event_view_for_mobile.style.display = "none";
    }
    
});


//Falling blossoms



for(let i =1;i < 23 ;i++){
        let random = Math.floor(Math.random()*8)+3;
        let d = document.getElementById("d"+i);
        const string = random+"px";
        console.log(d.style.height);
        d.style.height=string;
        d.style.width=string;
        console.log(string);    
}

for(let i = 1;i < 23; i++){
    let d = document.getElementById("d"+i);
    const attr = window.getComputedStyle(d).getPropertyValue("top")
    console.log(attr);
    if(attr === "95%"){
        let random = Math.floor(Math.random()*10)+3;
        let d = document.getElementById("d"+i);
        const string = random+"px";
        d.style.height=string;
        d.style.width=string;
        console.log(string);  
    }

}

//mobile navbar
const hamburger_React = document.querySelector(".hamburger-react");
console.log(hamburger_React);
console.log(document.getElementById("bar1").style.transform);
hamburger_React.onclick=()=>{

    if(hamburger_React.style.transform === "none"){
    hamburger_React.style.transform='rotate(-90deg)';
    document.getElementById("bar1").style.transform='rotate(-45deg) translate(-7.07px,7.07px)';
    document.querySelector(".bar2").style.transform='scaleX(0)';
    document.querySelector(".bar3").style.transform='rotate(45deg) translate(-7.07px,-7.07px)';
    document.querySelector(".mob_nav").classList.add("active");
    }
    else{
        hamburger_React.style.transform='none';
        document.getElementById("bar1").style.transform='none';
        document.querySelector(".bar2").style.transform='none';
        document.querySelector(".bar3").style.transform='none';
        document.querySelector(".mob_nav").classList.remove("active");
    }
}


const closeBtn = document.getElementById("close");
const eventsPreview = document.getElementById("Events-preview")
closeBtn.onclick=()=>{
    eventsPreview.style.display="none";
    closeBtn.style.display="none";
}
