// Toggle Menu Icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll Sections Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when clicking a nav link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll Reveal Animation (requires scrollreveal.js in HTML)
if(typeof ScrollReveal !== 'undefined'){
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .projects-container, .skills-row, .resume-row, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
}

// Typed JS Animation (requires typed.js in HTML)
if(typeof Typed !== 'undefined'){
    const typed = new Typed('.multiple-text', {
        strings: ['Master Electrician', 'Lighting Specialist', 'Smart Home Expert', 'Industrial Wiring Pro'],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1500,
        loop: true
    });
}
