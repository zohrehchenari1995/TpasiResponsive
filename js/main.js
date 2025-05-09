// navbar(برای اینکه اول کدهای اچ تی ام ال اجرا بشه و بعدش کدهای جاوااسکریپت ار دام لوودد استفاده کردم)

// document.addEventListener("DOMContentLoaded", () => {
//   const navToggler = document.querySelector(".nav__toggler");
//   const navbar = document.querySelector(".nav");
  
//   if (navToggler && navbar) {
//     navToggler.addEventListener("click", () => {
//       navbar.classList.toggle("nav__expanded");
//     });
//   }
// });

//----------------------------------------------------- services

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    // REMOVE PREVIOUS ACTIVED CLASSES
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    // ADD NEW ACTIVE CLASSES
    tab.classList.add("active");
    targeTabContent.classList.add("active");
  });
});

//--------------------------------------------------- ACCORDION

const accordionHeader = document.querySelectorAll(".accordion__header");
accordionHeader.forEach((item) => {
  item.addEventListener("click", (e) => {
   const accordion = item.closest(".accordion");
   console.log(accordion);
     accordion.classList.toggle("accordion__expanded");

    })
  });




// const accordionHeaders = document.querySelectorAll(".accordion__header");

// accordionHeaders.forEach((header) => {
//   header.addEventListener("click", () => {
//     const accordion = header.closest(".accordion");
//     accordion.classList.toggle("accordion__expanded");
//   });
// });
