// Initialize Lucide Icons
lucide.createIcons();

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');
const backToTopBtn = document.getElementById('backToTop');

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle hamburger icon between menu and x
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// Close mobile menu when link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Smooth Scroll for Back to Top Button
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, observerOptions);

// Select elements to animate
const animElements = document.querySelectorAll('.fade-in, .slide-up');
animElements.forEach(el => observer.observe(el));

// Active Nav Link on Scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// ==========================================================================
// 3D Card Tilt Effect
// ==========================================================================
function apply3DTilt(el, maxTilt = 12) {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const cx   = rect.left + rect.width  / 2;
        const cy   = rect.top  + rect.height / 2;
        const dx   = (e.clientX - cx) / (rect.width  / 2);
        const dy   = (e.clientY - cy) / (rect.height / 2);

        const rotateX = -dy * maxTilt;   // tilt toward cursor vertically
        const rotateY =  dx * maxTilt;   // tilt toward cursor horizontally

        el.style.transform =
            `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`;
        el.style.boxShadow =
            `${-rotateY * 1.2}px ${rotateX * 1.2}px 40px rgba(10,17,40,0.14),
             0 30px 60px rgba(32,201,151,0.09)`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = '';
        el.style.boxShadow = '';
    });
}

// Apply tilt to all card-like elements
document.querySelectorAll(
    '.hover-effect, .edu-card, .project-card, .skill-category.card, .tilt-card, .about-content'
).forEach(card => apply3DTilt(card, 10));

// Contact card gets a slightly softer tilt
const contactCard = document.getElementById('contactCard');
if (contactCard) apply3DTilt(contactCard, 8);

// ==========================================================================
// Parallax Hero Section on Mouse Move
// ==========================================================================
const heroSection = document.querySelector('.hero-section');
const heroImage   = document.querySelector('.hero-image');
const bgShape     = document.querySelector('.image-bg-shape');

if (heroSection && heroImage) {
    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const cx   = rect.width  / 2;
        const cy   = rect.height / 2;
        const dx   = (e.clientX - rect.left  - cx) / cx;
        const dy   = (e.clientY - rect.top   - cy) / cy;

        // Image drifts opposite the cursor for depth
        heroImage.style.transform =
            `translateY(${-dy * 8}px) translateX(${dx * 5}px) rotateY(${dx * -4}deg) rotateX(${dy * 4}deg)`;

        // Background shape drifts the same direction (parallax layers)
        if (bgShape) {
            bgShape.style.transform =
                `translate(${dx * 18}px, ${dy * 14}px) scale(1.04)`;
        }
    });

    heroSection.addEventListener('mouseleave', () => {
        heroImage.style.transform = '';
        if (bgShape) bgShape.style.transform = '';
    });
}

