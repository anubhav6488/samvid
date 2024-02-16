window.addEventListener('DOMContentLoaded', (event)=>{

    // the inner frame of scrolling animation
    innerFrame = document.getElementById('scroll-animation-inner-frame');

    // the images
    img1  = document.querySelector(".img1");
    img2  = document.querySelector(".img2");
    img3  = document.querySelector(".img3");


    function scroller(){
        rectangle = innerFrame.getBoundingClientRect();
        if(rectangle.top < window.innerHeight && rectangle.bottom > 0){
            // (1652, 3171)
            console.log(window.scrollY);

            // img1 => x : (-7.734, -9.734)
            //         y : (0.2125, -18)
            yChange = (window.scrollY-1652)*(-(0.2125)+(-18))/(3171-1652)+0.2125;
            xChange = (window.scrollY-1652)*(-(-7.74)+(-9.734))/(3171-1652)+(-7.74);
            
            img1.style.top = yChange+'vh';
            img1.style.left = xChange+"vh";
            

            // img2 => x : (14.3476, 17.3476)
            //         y : (-16.4366, 7.5634)
            yChange = (window.scrollY-1652)*(-(-16.4366)+(7.5634))/(3171-1652)+(-16.4366);
            xChange = (window.scrollY-1652)*(-(14.3476)+(17.3476))/(3171-1652)+(14.3476);

            img2.style.top = yChange+"vh";
            img2.style.left = xChange+"vh";


            // img3 => x : (39.4349, 37.4349)
            //         y : (-8, -22)
            yChange = (window.scrollY-1652)*(-(-8)+(-22))/(3171-1652)+(-8);
            xChange = (window.scrollY-1652)*(-(39.4349)+(37.4349))/(3171-1652)+(39.4349);

            img3.style.top = yChange+'vh';
            img3.style.left = xChange+"vh";
        }
    };
    
    window.addEventListener('scroll', scroller);
    scroller();

}); 