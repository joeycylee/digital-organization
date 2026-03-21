// 🎯 Digital Organize - Interactive Scripts

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (email && name && age) {
        alert(`Thank you, ${name}!\n\nWe've received your interest in getting organized.\n\nYou'll receive our free guide at: ${email}\n\nIn the meantime, check out our repository:\nhttps://github.com/joeycylee/digital-organization`);

        // Clear the form
        this.reset();
    } else {
        alert('Please fill in all fields');
    }
});

// Add scroll animation to sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// FAQ accordion functionality
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('h3');
    question.addEventListener('click', () => {
        const answer = item.querySelector('p');
        const isExpanded = answer.style.maxHeight;

        // Close all other FAQ items
        document.querySelectorAll('.faq-item p').forEach(a => {
            a.style.maxHeight = null;
            a.style.display = 'none';
        });

        // Toggle current item
        if (!isExpanded) {
            answer.style.display = 'block';
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// Add to cart animation for pricing section
const pricingCard = document.querySelector('.pricing-card');
let hasAnimated = false;

const pricingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            pricingCard.style.transform = 'scale(1.05)';
            pricingCard.style.transition = 'transform 0.5s ease';

            setTimeout(() => {
                pricingCard.style.transform = 'scale(1)';
            }, 300);
        }
    });
}, { threshold: 0.5 });

pricingObserver.observe(pricingCard);

// Newsletter form
const newsletterForm = document.createElement('form');
newsletterForm.style.cssText = `
    max-width: 400px;
    margin: 0 auto;
    background: var(--white);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

newsletterForm.innerHTML = `
    <h2 style="color: var(--primary-color); margin-bottom: 1rem;">Stay Organized!</h2>
    <p style="margin-bottom: 1rem;">Get free organization tips delivered to your inbox</p>
    <input type="email" placeholder="Enter your email" style="
        width: 100%;
        padding: 0.75rem;
        margin-bottom: 1rem;
        border: 1px solid #d1d5db;
        border-radius: 4px;
    " required>
    <button type="submit" style="
        width: 100%;
        padding: 0.75rem;
        background: var(--primary-color);
        color: var(--white);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 600;
    ">Subscribe Free</button>
    <p style="margin-top: 1rem; font-size: 0.9rem; color: #6b7280;">No spam, unsubscribe anytime</p>
`;

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    alert(`Thanks for subscribing! We'll send tips to ${email}`);
    newsletterForm.reset();
});

document.querySelector('.footer').after(newsletterForm);

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎉 Digital Organize - Website Loaded!');
    console.log('Repository: https://github.com/joeycylee/digital-organization');
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});