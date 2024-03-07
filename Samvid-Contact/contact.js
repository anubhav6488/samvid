
const container = document.getElementById("Contact-team-member-container");
$(container).children().each(function(element,index){
    console.log(element)

    setInterval(function(){

    })
});


//Hamburger

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

// team members transition on clicking a button
const arrow_Left = document.querySelectorAll(".arrow-left");
let arrow_Right = document.querySelectorAll(".arrow-right");
const memberContainer = document.querySelectorAll(".Contact-team-member-container");

//Changing the  end keyframe value 
memberContainer.forEach((member)=>{
    const num = member.childElementCount-1;
    console.log(num);
    const root = document.documentElement;
    let newChange = num*100;
    root.style.setProperty('--change-end', "-"+newChange+"vw")

    arrow_Right.forEach((element)=>{

        let n = Array.from(arrow_Right).indexOf(element);
            if(n == num){
                element.style.visibility='hidden';
            }
    })

    $(document).ready(function(){
        $(window).scroll(function(evt){
        var v2 = Math.abs($('.Contact-team-member-container').position().top - $(window).height()/2);
        var v1 = $(this).scrollTop();
            if( v1 > v2 ){
            member.style.animationName = 'slide_animation'
          }
        });
    });
});





//animation of team members
// const num = member.childElementCount;
// console.log("hello"+num);
// member.style.animationTimingFunction = 'steps('+num+')';
// console.log(member.style.animationTimingFunction);
