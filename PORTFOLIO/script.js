/*smooth scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


/* navbar shad*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding = "15px 10%";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    }

    else {

        navbar.style.padding = "22px 10%";
        navbar.style.boxShadow = "none";

    }

});





/* fade anime */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, { threshold: .15 });


document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(80px)";

    section.style.transition = ".8s";

    observer.observe(section);

});


/* scroll up */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("topBtn");

document.body.appendChild(topBtn);

topBtn.style.cssText = `

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

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

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


/*IMG Hover */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.03)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});




/*NAVBAR SCROLL EFF*/

const header = document.querySelector(".navbar");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}

/*Timeline Prog*/

const timeline = document.querySelector(".timeline");
const progress = document.querySelector(".timeline-progress");

window.addEventListener("scroll", () => {

    if (!timeline || !progress) return;

    const rect = timeline.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    const totalHeight = timeline.offsetHeight;

    let percent = (windowHeight - rect.top) / (windowHeight + totalHeight);

    percent = Math.max(0, Math.min(percent, 1));

    progress.style.height = (percent * 100) + "%";

});


/*cell menu*/

window.onload = function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    if (menuToggle && navMenu) {

        menuToggle.onclick = function () {

            navMenu.classList.toggle("active");

        };

        navItems.forEach(item => {

            item.onclick = function () {

                navMenu.classList.remove("active");

            };

        });

    }

};

/*Universal card Glow*/

const scrollCards = document.querySelectorAll(".scroll-card");

const glowObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            scrollCards.forEach(card => {

                card.classList.remove("active-card");

            });

            entry.target.classList.add("active-card");

        }

    });

}, {
    threshold: 0.55
});

scrollCards.forEach(card => {

    glowObserver.observe(card);

});

/*Fade up*/

const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

fadeElements.forEach(element => {

    fadeObserver.observe(element);

});

const flipCard = document.querySelector(".flip-card");

if (flipCard) {

    flipCard.addEventListener("click", function (e) {

        if (e.target.closest("a")) return;

        flipCard.classList.toggle("flipped");

    });

}

/*pk contact form*/

const pkForm = document.getElementById("pkContactForm");

if (pkForm) {

    const sendBtn = pkForm.querySelector(".pk-send-btn");


    pkForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const originalHTML = sendBtn.innerHTML;

        sendBtn.disabled = true;

        sendBtn.innerHTML =
            `<i class="fas fa-spinner fa-spin"></i> Sending...`;

        const formData = new FormData(pkForm);

        try {

            const response = await fetch(pkForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                pkForm.reset();

                const toast = document.getElementById("successToast");

                toast.classList.add("show");

                sendBtn.innerHTML =
                    `<i class="fas fa-check"></i> Message Sent`;

                setTimeout(() => {

                    toast.classList.remove("show");

                    sendBtn.innerHTML = originalHTML;

                }, 3000);

            } else {

                alert("Message couldn't be sent. Please try again.");

            }

        } catch (error) {

            alert("Network Error. Please try again.");

        }

        sendBtn.disabled = false;

        sendBtn.innerHTML = originalHTML;

    });

}