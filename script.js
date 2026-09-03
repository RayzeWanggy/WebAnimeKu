// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===== COUNTER ANIMATION =====
function animateNumbers() {
    const numbers = document.querySelectorAll('.number');
    
    numbers.forEach(num => {
        const target = parseInt(num.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateNumber = () => {
            current += step;
            if (current < target) {
                num.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                num.textContent = target;
            }
        };
        
        updateNumber();
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.stat').forEach(el => {
    if (el.querySelector('.number')) {
        observer.observe(el);
    }
});

// ===== SCROLL ANIMATION =====
const animatedElements = document.querySelectorAll('.anime-card, .genre-card');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    scrollObserver.observe(el);
});

// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 26, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 26, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    }
});

// ===== YEAR AUTO UPDATE =====
document.querySelectorAll('footer .footer-bottom p').forEach(el => {
    const year = new Date().getFullYear();
    el.innerHTML = el.innerHTML.replace('2026', year);
});

console.log('🎬 WebAnimeKu loaded successfully!');
console.log('✨ Dibuat dengan ❤️ oleh RayzeWanggy');
