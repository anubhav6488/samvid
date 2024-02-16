window.addEventListener('DOMContentLoaded', (event)=>{

    // the inner frame of scrolling animation
    innerFrame = document.getElementById('scroll-animation-inner-frame');

    // the images
    img1  = document.querySelector(".img1");
    img2  = document.querySelector(".img2");
    img3  = document.querySelector(".img3");
    img4  = document.querySelector(".img4");
    img5  = document.querySelector(".img5");

    function scroller(){
        rectangle = innerFrame.getBoundingClientRect();
        if(rectangle.top < window.innerHeight && rectangle.bottom > 0){

            // img1 => x : (-22, -25)
            //         y : (-12, 37)
            yChange = (window.scrollY-990)*(-(-12)+(-37))/(2559-990)+(-12);
            xChange = (window.scrollY-990)*(-(-22)+(-(25)))/(2559-990)+(-22);
            
            img1.style.top = yChange+'vh';
            img1.style.left = xChange+"vh";
            

            // img2 => x : (25, 27)
            //         y : (-33, -15)
            yChange = (window.scrollY-990)*(-(-33)+(-10))/(2559-990)+(-33);
            xChange = (window.scrollY-990)*(-(25)+(27))/(2559-990)+(25);

            img2.style.top = yChange+"vh";
            img2.style.left = xChange+"vh";


            // img3 => x : (77, 73)
            //         y : (-16, -52)
            yChange = (window.scrollY-990)*(-(16)+(-52))/(2559-990)+(-16);
            xChange = (window.scrollY-990)*(-(77)+(69))/(2559-990)+(77);

            img3.style.top = yChange+'vh';
            img3.style.left = xChange+"vh";

            // img4 => x : (125, 128)
            //         y : (-36, -9)
            yChange = (window.scrollY-990)*(-(-36)+(-9))/(2559-990)+(-36);
            xChange = (window.scrollY-990)*(-(125)+(128))/(2559-990)+(125);

            img4.style.top = yChange+"vh";
            img4.style.left = xChange+"vh";


            // img5 => x : (180, 175)
            //         y : (-12, -52)
            yChange = (window.scrollY-990)*(-(-12)+(-52))/(2559-990)+(-12);
            xChange = (window.scrollY-990)*(-(180)+(175))/(2559-990)+(180);

            img5.style.top = yChange+"vh";
            img5.style.left = xChange+"vh";
        }
    };

    window.addEventListener('scroll', scroller);
    scroller();

}); 