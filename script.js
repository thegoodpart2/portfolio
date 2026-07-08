/* THEME TOGGLE */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    themeToggle.textContent = isLight ? "☀️" : "🌙";

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

});



/* LIGHT MODE STYLES */

const lightMode = document.createElement("style");

lightMode.innerHTML = `

body.light {
    background:#f8fafc;
    color:#0f172a;
}


body.light .navbar {
    background:rgba(255,255,255,.7);
}


body.light nav a {
    color:#334155;
}


body.light .lead,
body.light section p {
    color:#475569;
}


body.light .card,
body.light .stats div {

    background:white;
    border-color:#e2e8f0;

}


body.light input,
body.light textarea {

    background:white;
    color:#0f172a;
    border-color:#cbd5e1;

}


body.light .secondary {

    color:#0f172a;
    border-color:#94a3b8;

}


`;

document.head.appendChild(lightMode);



/* SCROLL REVEAL ANIMATION */


const revealElements = document.querySelectorAll(
    "section, .card, .stats div"
);


const observer = new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.15
});


revealElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});



const revealCSS = document.createElement("style");

revealCSS.innerHTML = `

.hidden {

    opacity:0;
    transform:translateY(40px);
    transition:
    opacity .8s ease,
    transform .8s ease;

}


.show {

    opacity:1;
    transform:none;

}

`;

document.head.appendChild(revealCSS);



/* NAVBAR SCROLL EFFECT */


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.25)";

    }

    else {

        navbar.style.boxShadow="none";

    }


});



/* CONTACT FORM */


const form = document.querySelector("form");


form.addEventListener("submit",(e)=>{

    e.preventDefault();


    const button = form.querySelector("button");


    button.textContent="Message Sent ✓";


    button.style.background =
    "linear-gradient(135deg,#22c55e,#16a34a)";


    setTimeout(()=>{

        button.textContent="Send Message";

        button.style.background =
        "";

        form.reset();


    },3000);


});



/* TYPING EFFECT */


const eyebrow = document.querySelector(".eyebrow");

const text = eyebrow.textContent;

eyebrow.textContent="";


let index = 0;


function typeEffect(){

    if(index < text.length){

        eyebrow.textContent += text[index];

        index++;

        setTimeout(typeEffect,50);

    }

}


typeEffect();
