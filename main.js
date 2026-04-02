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
