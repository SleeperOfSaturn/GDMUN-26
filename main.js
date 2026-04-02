document.addEventListener("DOMContentLoaded", () => {

fetch("header.html")
.then(res => res.text())
.then(data => {

document.getElementById("header").innerHTML = data;

/* scroll button */

const btn = document.getElementById("scroll-next");

if(btn){
btn.addEventListener("click", () => {

const landing = document.querySelector(".landing");
const next = landing ? landing.nextElementSibling : null;

if(next){
next.scrollIntoView({ behavior: "smooth" });
}

});
}

/* hamburger menu */

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-links");

if(hamburger && nav){
hamburger.addEventListener("click", () => {
nav.classList.toggle("show");
hamburger.classList.toggle("active");
});
}

/* close menu on link click */

document.querySelectorAll("#nav-links a").forEach(link=>{
link.addEventListener("click", ()=>{
nav.classList.remove("show");
hamburger.classList.remove("active");
});
});

});

});

const updateTeamLink = () => {
    const teamLink = document.getElementById('team-nav-link');
    if (teamLink) {
        // Test date set to 2025 so it triggers immediately
        const launchDate = new Date(2026, 3, 14); 
        const today = new Date();

        if (today >= launchDate) {
            teamLink.setAttribute("href", "team.html");
            console.log("Team link updated to team.html");
        }
    }
};

// This observer watches the document for when your header is injected
const observer = new MutationObserver((mutations, obs) => {
    const teamLink = document.getElementById('team-nav-link');
    if (teamLink) {
        updateTeamLink();
        obs.disconnect(); // Stop looking once we've found it and fixed it
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});