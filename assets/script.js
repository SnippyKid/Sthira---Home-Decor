// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect - transparent to colored
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to nav links on scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.add('active');
        } else {
            document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Products Grid - Intersection Observer for scroll animations
const productCards = document.querySelectorAll('.product-card');

const productObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            productObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

productCards.forEach(card => {
    card.style.animationPlayState = 'paused';
    productObserver.observe(card);
});

// Add parallax effect to product images on mouse move
productCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        const img = card.querySelector('.product-image img');
        if (img) {
            img.style.transform = `scale(1.15) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const img = card.querySelector('.product-image img');
        if (img) {
            img.style.transform = 'scale(1) rotateX(0) rotateY(0)';
        }
    });
});

// Animate inspirations grid on scroll
const inspirationCards = document.querySelectorAll('.inspiration-card');

const inspirationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }, index * 150);
            inspirationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px'
});

inspirationCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px) scale(0.9)';
    card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    inspirationObserver.observe(card);
});

// Animate founder section
const founderImage = document.querySelector('.founder-image');
const founderContent = document.querySelector('.founder-content');

const founderObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('founder-image')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            } else {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
            founderObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

if (founderImage && founderContent) {
    founderImage.style.opacity = '0';
    founderImage.style.transform = 'translateX(-50px)';
    founderImage.style.transition = 'opacity 1s ease, transform 1s ease';
    
    founderContent.style.opacity = '0';
    founderContent.style.transform = 'translateX(50px)';
    founderContent.style.transition = 'opacity 1s ease, transform 1s ease';
    
    founderObserver.observe(founderImage);
    founderObserver.observe(founderContent);
}

// Animate main inspiration section
const mainInspirationContent = document.querySelector('.main-inspiration-content');

const mainInspirationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
            mainInspirationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

if (mainInspirationContent) {
    mainInspirationContent.style.opacity = '0';
    mainInspirationContent.style.transform = 'scale(0.9)';
    mainInspirationContent.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
    mainInspirationObserver.observe(mainInspirationContent);
}

// Animate philosophy section
const philosophyContent = document.querySelector('.philosophy-content');

const philosophyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            philosophyObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

if (philosophyContent) {
    philosophyContent.style.opacity = '0';
    philosophyContent.style.transform = 'translateY(50px)';
    philosophyContent.style.transition = 'opacity 1s ease, transform 1s ease';
    philosophyObserver.observe(philosophyContent);
}

// Animate values section
const valueItems = document.querySelectorAll('.value-item');

const valuesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
            valuesObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

valueItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(40px)';
    item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    valuesObserver.observe(item);
});

// Animate testimonial section
const testimonialContainer = document.querySelector('.testimonial-container');

const testimonialObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
            testimonialObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

if (testimonialContainer) {
    testimonialContainer.style.opacity = '0';
    testimonialContainer.style.transform = 'scale(0.95)';
    testimonialContainer.style.transition = 'opacity 1s ease, transform 1s ease';
    testimonialObserver.observe(testimonialContainer);
}

// Animate process steps
const processSteps = document.querySelectorAll('.process-step');
const processLines = document.querySelectorAll('.process-line');

const processObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
            processObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

processSteps.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(30px)';
    step.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    processObserver.observe(step);
});

processLines.forEach((line, index) => {
    line.style.opacity = '0';
    line.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        const lineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                    }, index * 150 + 400);
                    lineObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        lineObserver.observe(line);
    }, 100);
});

// Animate contact section
const contactContent = document.querySelector('.contact-content');

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            contactObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

if (contactContent) {
    contactContent.style.opacity = '0';
    contactContent.style.transform = 'translateY(40px)';
    contactContent.style.transition = 'opacity 1s ease, transform 1s ease';
    contactObserver.observe(contactContent);
}

// Smooth scroll enhancement for entire page
document.documentElement.style.scrollBehavior = 'smooth';

// Add momentum scrolling for touch devices
if ('ontouchstart' in window) {
    document.body.style.webkitOverflowScrolling = 'touch';
}
