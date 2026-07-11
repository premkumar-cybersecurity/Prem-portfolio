/* =====================================
   Smooth Scroll
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* =====================================
   Navbar Shadow
===================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 50){

        navbar.style.padding="15px 10%";
        navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

    }

    else{

        navbar.style.padding="22px 10%";
        navbar.style.boxShadow="none";

    }

});


/* =====================================
   Typing Animation
===================================== */


/* =====================================
   Fade Animation
===================================== */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});


document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(80px)";

section.style.transition=".8s";

observer.observe(section);

});


/* =====================================
   Scroll To Top Button
===================================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.classList.add("topBtn");

document.body.appendChild(topBtn);

topBtn.style.cssText=`

position:fixed;
bottom:30px;
right:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#00E5FF;
font-size:24px;
cursor:pointer;
display:none;
z-index:999;
transition:.3s;

`;

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =====================================
   Image Hover
===================================== */

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.03)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


/* =====================================
   Loading Screen
===================================== */

window.onload=()=>{

document.body.style.opacity="1";

};

document.body.style.opacity="0";
document.body.style.transition="1s";