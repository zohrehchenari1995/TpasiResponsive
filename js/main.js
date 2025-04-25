
const navToggler= document.querySelector(".nav__toggler");
const navbar= document.querySelector(".nav");
navToggler.addEventListener("click",(e)=>{
  console.log("clicked");
  navbar.classList.toggle("nav__expanded");
})