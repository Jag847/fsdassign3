// ========================================
// Form Validation for Contact Form
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Perform validation
            if (!validateForm()) {
                return;
            }

            // Mark form as validated
            this.classList.add('was-validated');

            // Show success message
            showSuccessMessage();

            // Reset form after 2 seconds
            setTimeout(() => {
                this.reset();
                this.classList.remove('was-validated');
                document.getElementById('successMessage').style.display = 'none';
            }, 3000);
        });

        // Real-time validation for phone number
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function () {
                this.value = this.value.replace(/\D/g, '').slice(0, 10);
                validatePhoneNumber();
            });
        }

        // Real-time validation for email
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('blur', function () {
                validateEmail();
            });
        }

        // Real-time validation for message length
        const messageInput = document.getElementById('message');
        if (messageInput) {
            messageInput.addEventListener('input', function () {
                validateMessage();
            });
        }
    }
});

/**
 * Validate the entire form
 */
function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    const terms = document.getElementById('terms').checked;

    let isValid = true;

    // Validate Full Name
    if (fullName === '' || fullName.length < 3) {
        showFieldError('fullName', 'Please enter a valid full name (minimum 3 characters)');
        isValid = false;
    } else {
        clearFieldError('fullName');
    }

    // Validate Email
    if (!validateEmailFormat(email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    } else {
        clearFieldError('email');
    }

    // Validate Phone Number
    if (phone === '' || phone.length !== 10) {
        showFieldError('phone', 'Mobile number must be exactly 10 digits');
        isValid = false;
    } else {
        clearFieldError('phone');
    }

    // Validate Subject
    if (subject === '') {
        showFieldError('subject', 'Please enter a subject');
        isValid = false;
    } else {
        clearFieldError('subject');
    }

    // Validate Service
    if (service === '') {
        showFieldError('service', 'Please select a service');
        isValid = false;
    } else {
        clearFieldError('service');
    }

    // Validate Message
    if (message === '' || message.length < 10) {
        showFieldError('message', 'Message must be at least 10 characters');
        isValid = false;
    } else {
        clearFieldError('message');
    }

    // Validate Terms and Conditions
    if (!terms) {
        showFieldError('terms', 'You must agree to the terms and conditions');
        isValid = false;
    } else {
        clearFieldError('terms');
    }

    return isValid;
}

/**
 * Validate email format
 */
function validateEmailFormat(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate phone number
 */
function validatePhoneNumber() {
    const phone = document.getElementById('phone').value;
    const phoneField = document.getElementById('phone');

    if (phone.length === 10) {
        phoneField.classList.remove('is-invalid');
        phoneField.classList.add('is-valid');
    } else if (phone.length > 0) {
        phoneField.classList.remove('is-valid');
        phoneField.classList.add('is-invalid');
    } else {
        phoneField.classList.remove('is-valid', 'is-invalid');
    }
}

/**
 * Validate email format in real-time
 */
function validateEmail() {
    const email = document.getElementById('email').value;
    const emailField = document.getElementById('email');

    if (validateEmailFormat(email)) {
        emailField.classList.remove('is-invalid');
        emailField.classList.add('is-valid');
    } else if (email.length > 0) {
        emailField.classList.remove('is-valid');
        emailField.classList.add('is-invalid');
    } else {
        emailField.classList.remove('is-valid', 'is-invalid');
    }
}

/**
 * Validate message length
 */
function validateMessage() {
    const message = document.getElementById('message').value;
    const messageField = document.getElementById('message');

    if (message.length >= 10) {
        messageField.classList.remove('is-invalid');
        messageField.classList.add('is-valid');
    } else if (message.length > 0) {
        messageField.classList.remove('is-valid');
        messageField.classList.add('is-invalid');
    } else {
        messageField.classList.remove('is-valid', 'is-invalid');
    }
}

/**
 * Show field error
 */
function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');

        let feedback = field.nextElementSibling;
        if (!feedback || !feedback.classList.contains('invalid-feedback')) {
            feedback = document.createElement('div');
            feedback.className = 'invalid-feedback d-block';
            field.parentNode.insertBefore(feedback, field.nextSibling);
        }
        feedback.textContent = message;
    }
}

/**
 * Clear field error
 */
function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');

        let feedback = field.nextElementSibling;
        if (feedback && feedback.classList.contains('invalid-feedback')) {
            feedback.textContent = '';
        }
    }
}

/**
 * Show success message
 */
function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'block';
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// ========================================
// Smooth Scrolling
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Active Navigation Link
// ========================================

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNavLink);

// ========================================
// Bootstrap Form Validation
// ========================================

(function () {
    'use strict';
    window.addEventListener('load', function () {
        let forms = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// ========================================
// Scroll to Top Button
// ========================================

function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.id = 'scrollToTop';
    scrollBtn.className = 'btn btn-primary rounded-circle';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        display: none;
        width: 50px;
        height: 50px;
        padding: 0;
        border: none;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        cursor: pointer;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
    `;

    document.body.appendChild(scrollBtn);

    scrollBtn.addEventListener('mouseover', () => {
        scrollBtn.style.transform = 'translateY(-3px)';
        scrollBtn.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
    });

    scrollBtn.addEventListener('mouseout', () => {
        scrollBtn.style.transform = 'translateY(0)';
        scrollBtn.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', createScrollToTopButton);

// ========================================
// Lazy Loading Images
// ========================================

if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Animate on Scroll
// ========================================

function animateOnScroll() {
    const elements = document.querySelectorAll('.card, .alert, .section-padding');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', animateOnScroll);

// ========================================
// Console API for Debugging (Optional)
// ========================================

console.log('%cPortfolio Website Loaded Successfully!', 'color: #667eea; font-size: 14px; font-weight: bold;');
console.log('%cVersion: 1.0.0', 'color: #764ba2; font-size: 12px;');
