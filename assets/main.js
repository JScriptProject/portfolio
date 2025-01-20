"use strict";

gsap.registerPlugin(ScrollTrigger);


let navOpen = document.querySelector(".nav-toggle-open");
let navClose = document.querySelector(".nav-toggle-close");
let menuWrapper = document.querySelector(".menu-wrapper");

navOpen.addEventListener("click", function(){
    console.log("cl");
    navOpen.classList.toggle("nav-active");
    navClose.classList.toggle("nav-active");
    menuWrapper.classList.toggle("nav-active");
})

navClose.addEventListener("click", function(){
    navOpen.classList.toggle("nav-active");
    navClose.classList.toggle("nav-active");
    menuWrapper.classList.toggle("nav-active");
})



// portfolio add element

const portfolioData = {
    kloudtunnel:{
        info:"Responsive, attractive custom created Figma elements and Eye Catche design.",
        link:"https://jscriptproject.github.io/landing-page-KloudTunnel/"
    },
    food:{
        info:"Unique Colors with Dynamic Content and crispy Design pattern.",
        link:"https://jscriptproject.github.io/Harry-s-kitchen/"
    },
    tour:{
        info:"Next level Animations and effects, Stunning graphical effects",
        link:"https://jscriptproject.github.io/tour/"
    },
    blogspage:{
        info:"Color Theme change, best UI/UX highly responsive and eye catche web design",
        link:"http://blog.blogspage.com/"
    },
    edu:{
        info:"Respnsive design, small crafted designed elements, unique color pallete",
        link:"https://jscriptproject.github.io/EDU/ "
    },
    altihealth:{
        info:"Slider with text, Card animations and best on Hover. Responsive Design.",
        link:"https://jscriptproject.github.io/AltiHealth"
    }
}



let portfolioCard = document.querySelectorAll(".portfolio-card");


portfolioCard.forEach(card => {
    let newEle = document.createElement("div");
    newEle.classList.add("portfolio-card-hover");
    let cardDataSelect = card.dataset.name;
    let selectedCard = portfolioData[cardDataSelect];
    card.addEventListener("mouseenter",function(){
        newEle.innerHTML = `<h4>${selectedCard.info}</h4>
                            <a href="${selectedCard.link}" class="btn" target="_blank">View Website <i class="ri-arrow-right-s-line"></i></a>`;
        card.appendChild(newEle);
    })

    card.addEventListener("mouseleave",function(){     
        card.removeChild(newEle);
    })

});


// smoothe scrolling

let menu = document.querySelector(".menu");

menu.addEventListener("click", function (e) {
    // Check if the clicked element is an anchor tag
    if (e.target.tagName === "A") {
        const href = e.target.getAttribute("href");

        // Log the href for debugging
        console.log(href);

        // If the href starts with "#", treat it as an internal link
        if (href && href.startsWith("#")) {
            e.preventDefault(); // Prevent default behavior for internal links
            const targetElement = document.querySelector(href);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            } else {
                console.warn(`No element found with ID: ${href}`);
            }
        } else {
            // Allow external links to open normally
            console.log("External link clicked");
        }
    }
});




// let menu = document.querySelector(".menu");

// menu.addEventListener("click", function(e){
//     console.log(e.target.getAttribute("href"));
//     console.log("i am outside");
//    e.preventDefault();
//    if(e.target.getAttribute("href")){
//     let id = e.target.getAttribute("href");
//     const scrollToId = document.querySelector(id);
//     console.log(scrollToId);
//     scrollToId.scrollIntoView({behavior: "smooth"});
//    }
//    })

//    GSAP Animation start frmo here



// loading animation

let t1 = gsap.timeline();

t1.from("header h1", {
    scale:0.2,
    rotateX:"180deg",
    opacity:0.2,
    duration:2,
    stagger:0.2
})

t1.to("header h1",{
    scale:1,
    rotateX:"0deg",
    opacity:1,
    duration:0.5,
    stagger:0.2
})

t1.from("header .down-arrow , nav .main-title , .menu",{
    opacity:0,
    duration:0.5,
    stagger:0.2
})

t1.from("header .social-menu-desk",{
    x:"-200%",
    stagger:0.2
})

t1.to("header .down-arrow, nav .main-title , .menu",{
    opacity:1, 
    stagger:0.2,
    duration:0.1
})

t1.to("header .social-menu-desk",{
    x:0,
    stagger:0.2
})




// // Animation of why me
const whyMeHead = document.querySelector(".rightToLeft-why-me");

    gsap.fromTo(
        whyMeHead,{x:"100%", opacity:0},{
            x:"0%", opacity:1,
            duration:1,
            scrollTrigger:{
                trigger:whyMeHead,
                scroller:"body",
                start:"top 80%",
                end:"top 70%",
                scrub:false,
                markers:false,
            },
        }
    );


    // why section left

const verticalBar = document.querySelector(".s-data-vertical-div");
gsap.fromTo(
    verticalBar,{x:"100%", opacity:0, rotateZ:"45deg", transformOrigin: "top"},{
        x:"0%", opacity:1,
        rotateZ:"0deg",
        transformOrigin: "top",
        duration:1,
        scrollTrigger:{
            trigger:verticalBar,
            scroller:"body",
            start:"top 80%",
            end:"top 70%",
            scrub:true,
            markers:false,
        },
    }
);

const dataWrap = document.querySelectorAll(".s-data-wrap");

dataWrap.forEach(ele => {
    gsap.fromTo(
        ele,{y:"100%", opacity:0},{
            y:"0%", opacity:1,
            duration:1,
            scrollTrigger:{
                trigger:ele,
                scroller:"body",
                start:"top 80%",
                end:"top 70%",
                scrub:true,
                markers:false,
            },
        }
    );

});

// section data left - why me

const whyDataLeft = document.querySelector(".section-data-left");

    gsap.fromTo(
        whyDataLeft,{ opacity:0},{
            opacity:1,
            duration:1,
            scrollTrigger:{
                trigger:whyDataLeft,
                scroller:"body",
                start:"top 80%",
                end:"top 70%",
                scrub:true,
                markers:false,
            },
        }
    );



// tech stack

const logoWrapper = document.querySelector(".logo-wrapper");

gsap.fromTo(
    logoWrapper,{ scale:0},{
        scale:1,
        duration:1,
        scrollTrigger:{
            trigger:logoWrapper,
            scroller:"body",
            start:"top 80%",
            end:"top 70%",
            scrub:true,
            markers:false,
        },
    }
);


// portfolio

const portfolioSect = document.querySelector("#portfolio .section-heading");

gsap.fromTo(
    portfolioSect,{x:"-100%", opacity:0},{
        x:"0%", opacity:1,
        duration:1,
        scrollTrigger:{
            trigger:portfolioSect,
            scroller:"body",
            start:"top 80%",
            end:"top 70%",
            scrub:false,
            markers:false,
        },
    }
);

// portfolio cards

const portfolioCards = document.querySelectorAll(".portfolio-card");
portfolioCards.forEach(ele => {
    gsap.fromTo(
        ele,{rotateY:"-180deg", opacity:0,transformOrigin: "top"},{
            rotateY:"0deg", opacity:1,
            transformOrigin: "top",
            duration:1,
            scrollTrigger:{
                trigger:ele,
                scroller:"body",
                start:"top 80%",
                end:"top 70%",
                scrub:true,
                markers:false,
            },
        }
    );
});


// contact

const contactSection = document.querySelector("#contact .section-heading");

gsap.fromTo(
    contactSection,{x:"100%", opacity:0},{
        x:"0%", opacity:1,
        duration:1,
        scrollTrigger:{
            trigger:contactSection,
            scroller:"body",
            start:"top 80%",
            end:"top 70%",
            scrub:false,
            markers:false,
        },
    }
);

const contactText = document.querySelector(".contact-text");

gsap.fromTo(
    contactText,{ opacity:0},{
        opacity:1,
        duration:1,
        scrollTrigger:{
            trigger:contactText,
            scroller:"body",
            start:"top 80%",
            end:"top 70%",
            scrub:true,
            markers:false,
        },
    }
);


// footer-top

const footerTop = document.querySelector(".footer-top");

gsap.fromTo(
    footerTop,{y:"100%", opacity:0},{
        y:"0%", opacity:1,
        duration:1,
        scrollTrigger:{
            trigger:footerTop,
            scroller:"body",
            start:"top 80%",
            end:"top 60%",
            scrub:true,
            markers:false,
        },
    }
);



// EmailJS
// init

emailjs.init('q06c_82uyaoHKxI-O');

document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    
    // Optionally log FormData to see if it's being captured
    console.log(new FormData(this));

    emailjs.sendForm('service_3u9vrgg', 'template_jucaot8', this)
        .then(function(response) {
            alert("Form submitted successfully!");
        }, function(error) {
            alert('Failed to submit the form: ' + error);
        });
});
