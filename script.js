// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    const windowHeight = window.innerHeight;

    reveals.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if(top < windowHeight - 100){
            el.classList.add("active");
        }

    });
}

window.addEventListener("scroll", revealElements);
revealElements();


// Typing Animation

const words = [
    "Computer Science Student",
    "Java Developer",
    "Python Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let current = "";

function typeEffect(){

    if(charIndex < words[wordIndex].length){

        current += words[wordIndex][charIndex];

        document.getElementById("typing").textContent = current;

        charIndex++;

        setTimeout(typeEffect,100);

    }else{

        setTimeout(()=>{

            current="";
            charIndex=0;

            wordIndex=(wordIndex+1)%words.length;

            typeEffect();

        },1500);
    }
}

typeEffect();


// Achievement Counter

function animateValue(id,end){

    let current=0;

    const interval=setInterval(()=>{

        current++;

        document.getElementById(id).innerText=current;

        if(current>=end){
            clearInterval(interval);
        }

    },20);
}

animateValue("projectsCount",15);
animateValue("dsaCount",300);


// Theme Toggle

document.getElementById("themeBtn")
.addEventListener("click",()=>{

    document.body.classList.toggle("light");

});


// Scroll Progress Bar

window.addEventListener("scroll",()=>{

    let scrollTop=document.documentElement.scrollTop;

    let scrollHeight=
    document.documentElement.scrollHeight-
    document.documentElement.clientHeight;

    let progress=
    (scrollTop/scrollHeight)*100;

    document.getElementById("progressBar")
    .style.width=progress+"%";

});