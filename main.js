document.addEventListener("DOMContentLoaded", () => {

fetch("header.html")
.then(res => res.text())
.then(data => {

document.getElementById("header").innerHTML = data;

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

});

});
