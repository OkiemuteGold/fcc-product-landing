// update footer year
let footerYear = document.getElementById("footer-year");
let fullCopyrightYear;
let date = new Date();
let currentYear = date.getFullYear();
currentYear > 2021 ? fullCopyrightYear = `2021 - ${currentYear}` : fullCopyrightYear = currentYear;
footerYear.innerHTML = fullCopyrightYear;

let navbar = document.getElementById("nav-bar")
let toggler = document.querySelector("#mobile-menu-toggler");

// toggle navbar
toggler.addEventListener("click", function () {
    navbar.classList.toggle("show-nav");
    this.classList.toggle("styled-toggler");
    // setInterval(() => {
    //     this.classList.toggle("styled-toggler");
    // }, 300);
})

// Smooth nav link transition
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});