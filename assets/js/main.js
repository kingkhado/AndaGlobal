// Loading Screen - Only show on initial page load, not on navigation
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Check if this is the first visit to the site (not a navigation)
    const isFirstVisit = !sessionStorage.getItem('hasVisited');
    
    if (isFirstVisit) {
        // Mark that user has visited the site
        sessionStorage.setItem('hasVisited', 'true');
        
        // Start initializing components while loading screen is shown
        Promise.all([
            initializeScrollProgress(),
            initializeBackToTop(),
            initializeCounters(),
            initializeMobileMenu(),
            initializeTestimonials()
        ]).then(() => {
            // Fade out loading screen after components are ready
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 1500); // Reduced loading time for better UX
        });
    } else {
        // Hide loading screen immediately for subsequent page visits
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Still initialize components
        Promise.all([
            initializeScrollProgress(),
            initializeBackToTop(),
            initializeCounters(),
            initializeMobileMenu(),
            initializeTestimonials()
        ]);
    }
});

// Project Slider Functionality
let currentSlideIndex = 1;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slider-container .slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    
    if (!slides.length) return;
    
    // Remove active class from current slide and dot
    slides[currentSlideIndex - 1].classList.remove('active');
    dots[currentSlideIndex - 1].classList.remove('active');
    
    // Update slide index
    currentSlideIndex += direction;
    
    // Handle wrap around
    if (currentSlideIndex > slides.length) {
        currentSlideIndex = 1;
    } else if (currentSlideIndex < 1) {
        currentSlideIndex = slides.length;
    }
    
    // Add active class to new slide and dot
    slides[currentSlideIndex - 1].classList.add('active');
    dots[currentSlideIndex - 1].classList.add('active');
}

function currentSlide(slideIndex) {
    const slides = document.querySelectorAll('.slider-container .slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    
    if (!slides.length) return;
    
    // Remove active class from current slide and dot
    slides[currentSlideIndex - 1].classList.remove('active');
    dots[currentSlideIndex - 1].classList.remove('active');
    
    // Update slide index
    currentSlideIndex = slideIndex;
    
    // Add active class to new slide and dot
    slides[currentSlideIndex - 1].classList.add('active');
    dots[currentSlideIndex - 1].classList.add('active');
}

// Auto-advance slider every 5 seconds
setInterval(function() {
    if (document.querySelector('.slider-container .slide')) {
        changeSlide(1);
    }
}, 5000);

// Progress Scroll Bar
function initializeScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        // Create if doesn't exist
        const newProgressBar = document.createElement('div');
        newProgressBar.className = 'scroll-progress';
        document.body.appendChild(newProgressBar);
        return initializeScrollProgress();
    }
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });
}

// Back to Top Button
function initializeBackToTop() {
    const backToTopBtn = document.querySelector('.scroll-to-top');
    if (!backToTopBtn) {
        // Create if doesn't exist
        const newBackToTopBtn = document.createElement('button');
        newBackToTopBtn.className = 'scroll-to-top';
        newBackToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(newBackToTopBtn);
        return initializeBackToTop();
    }
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Dynamic Progress Counters
function initializeCounters() {
    return new Promise((resolve) => {
        const cards = document.querySelectorAll('.achievement-card');
        const counters = document.querySelectorAll('.achievement-number');
        
        // Use requestIdleCallback for better performance
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    
                    // Add animation with hardware acceleration
                    card.style.transform = 'translate3d(0,0,0)';
                    card.classList.add('animate-in');
                    
                    const counter = card.querySelector('.achievement-number');
                    if (counter) {
                        const target = parseInt(counter.textContent.replace(/\D/g, ''));
                        const suffix = counter.textContent.replace(/\d/g, '');
                        let current = 0;
                        const duration = 2000; // 2 seconds
                        const startTime = performance.now();
                        
                        const updateCounter = (currentTime) => {
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            
                            // Use easeOutExpo for smooth animation
                            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                            current = Math.ceil(target * easeProgress);
                            
                            counter.textContent = `${current}${suffix}`;
                            
                            if (progress < 1) {
                                requestAnimationFrame(updateCounter);
                            }
                        };
                        
                        requestAnimationFrame(updateCounter);
                    }
                    
                    observer.unobserve(card);
                }
            });
        }, { 
            threshold: 0.2,
            rootMargin: '50px'
        });
        
        cards.forEach(card => observer.observe(card));
        resolve();
    });
}

// Testimonials Slider
function initializeTestimonials() {
    const testimonialContainer = document.querySelector('.testimonials-slider');
    if (!testimonialContainer) return;
    
    const testimonials = testimonialContainer.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.transform = `translateX(${100 * (i - index)}%)`;
            testimonial.style.opacity = i === index ? '1' : '0';
        });
    }
    
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }
    
    // Navigation dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'testimonial-dots';
    testimonials.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'testimonial-dot';
        dot.addEventListener('click', () => {
            currentIndex = i;
            showTestimonial(currentIndex);
            updateDots();
        });
        dotsContainer.appendChild(dot);
    });
    testimonialContainer.appendChild(dotsContainer);
    
    function updateDots() {
        dotsContainer.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }
    
    // Initialize first testimonial and start autoplay
    showTestimonial(0);
    updateDots();
    setInterval(nextTestimonial, 5000);
}

// Enhanced Mobile Menu
function initializeMobileMenu() {
    return new Promise((resolve) => {
        const nav = document.querySelector('nav');
        const navContainer = nav.querySelector('.container');
        
        // Create mobile menu button with enhanced touch area
        let menuBtn = nav.querySelector('.mobile-menu-btn');
        if (!menuBtn) {
            menuBtn = document.createElement('button');
            menuBtn.className = 'mobile-menu-btn';
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            menuBtn.setAttribute('aria-label', 'Toggle mobile menu');
            menuBtn.style.padding = '15px'; // Larger touch target
            navContainer.appendChild(menuBtn);
        }
        
        const navLinks = nav.querySelector('.nav-links');
        let isMenuOpen = false;
        
        // Toggle menu function
        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            navLinks.classList.toggle('active', isMenuOpen);
            menuBtn.querySelector('i').classList.toggle('fa-bars', !isMenuOpen);
            menuBtn.querySelector('i').classList.toggle('fa-times', isMenuOpen);
            
            // Don't prevent body scroll for compact menu
            // document.body.style.overflow = isMenuOpen ? 'hidden' : '';
            
            // Update aria attributes
            menuBtn.setAttribute('aria-expanded', isMenuOpen);
            navLinks.setAttribute('aria-hidden', !isMenuOpen);
        }
        
        // Menu button click handler
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
        
        // Close menu when clicking nav links
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                if (isMenuOpen) {
                    toggleMenu();
                }
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (isMenuOpen && !nav.contains(e.target)) {
                toggleMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                toggleMenu();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                toggleMenu();
            }
        });
        
        // Touch swipe to close menu (swipe up on compact menu)
        let touchStartY = 0;
        navLinks.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        
        navLinks.addEventListener('touchmove', (e) => {
            if (!isMenuOpen) return;
            
            const touchY = e.touches[0].clientY;
            const deltaY = touchY - touchStartY;
            
            // Swipe up to close compact menu
            if (deltaY < -30) {
                toggleMenu();
            }
        });
        
        resolve();
    });
}

// Video Controls with Enhanced Features
document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.querySelector('.hero-video');
    const video = videoContainer?.querySelector('video');

    if (video) {
        // Add loading indicator
        const loadingSpinner = document.createElement('div');
        loadingSpinner.className = 'video-loading';
        loadingSpinner.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        videoContainer.appendChild(loadingSpinner);

        video.addEventListener('loadeddata', () => {
            loadingSpinner.style.display = 'none';
        });

        // Set video volume to 0 (muted) by default
        video.volume = 0;

        // Optional volume control slider - positioned absolutely to prevent layout shifts
        const volumeControl = document.createElement('input');
        volumeControl.type = 'range';
        volumeControl.min = 0;
        volumeControl.max = 1;
        volumeControl.step = 0.05;
        volumeControl.value = video.volume;
        volumeControl.className = 'volume-control';
        
        // Position absolutely to prevent layout shifts - moved lower to avoid being too high
        volumeControl.style.position = 'absolute';
        volumeControl.style.bottom = '60px';
        volumeControl.style.right = '20px';
        volumeControl.style.zIndex = '5';
        volumeControl.style.opacity = '0';
        volumeControl.style.visibility = 'hidden';
        volumeControl.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';

        // Append volume control to video container
        videoContainer.appendChild(volumeControl);

        // Volume control event
        volumeControl.addEventListener('input', () => {
            video.volume = volumeControl.value;
        });

        // Show volume control on hover without affecting layout
        videoContainer.addEventListener('mouseenter', () => {
            volumeControl.style.opacity = '1';
            volumeControl.style.visibility = 'visible';
        });
        videoContainer.addEventListener('mouseleave', () => {
            volumeControl.style.opacity = '0';
            volumeControl.style.visibility = 'hidden';
        });

        // Add progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'video-progress';
        videoContainer.appendChild(progressBar);

        video.addEventListener('timeupdate', () => {
            const progress = (video.currentTime / video.duration) * 100;
            progressBar.style.width = `${progress}%`;
        });
    }
});

// Enhanced Companies Slider
class CompaniesSlider {
    constructor(element, options = {}) {
        this.slider = element;
        this.track = element.querySelector('.slider-track');
        this.slides = [...element.querySelectorAll('.slide')];
        this.options = {
            speed: options.speed || 1,
            autoplay: options.autoplay !== false,
            gap: options.gap || 40,
            ...options
        };

        this.position = 0;
        this.isDragging = false;
        this.startPos = 0;
        this.currentTranslate = 0;
        this.prevTranslate = 0;

        this.init();
    }

    init() {
        // Clone slides for infinite effect
        this.slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            this.track.appendChild(clone);
        });

        // Add touch and mouse events
        this.track.addEventListener('mousedown', this.startDragging.bind(this));
        this.track.addEventListener('touchstart', this.startDragging.bind(this));
        this.track.addEventListener('mousemove', this.drag.bind(this));
        this.track.addEventListener('touchmove', this.drag.bind(this));
        this.track.addEventListener('mouseup', this.endDragging.bind(this));
        this.track.addEventListener('touchend', this.endDragging.bind(this));
        this.track.addEventListener('mouseleave', this.endDragging.bind(this));

        if (this.options.autoplay) {
            this.startAutoplay();
        }

        this.slider.addEventListener('mouseenter', () => this.stopAutoplay());
        this.slider.addEventListener('mouseleave', () => this.startAutoplay());
    }

    startDragging(e) {
        this.isDragging = true;
        this.startPos = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        this.stopAutoplay();
    }

    drag(e) {
        if (!this.isDragging) return;
        
        const currentPosition = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        const diff = currentPosition - this.startPos;
        
        this.currentTranslate = this.prevTranslate + diff;
        this.track.style.transform = `translateX(${this.currentTranslate}px)`;
    }

    endDragging() {
        this.isDragging = false;
        this.prevTranslate = this.currentTranslate;
        this.startAutoplay();
    }

    startAutoplay() {
        if (this.interval) return;
        
        this.interval = setInterval(() => {
            this.position -= this.options.speed;
            
            if (Math.abs(this.position) >= this.slides.length * (this.slides[0].offsetWidth + this.options.gap)) {
                this.position = 0;
            }
            
            this.track.style.transform = `translateX(${this.position}px)`;
        }, 30);
    }

    stopAutoplay() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}

// Initialize companies slider
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.companies-slider');
    if (slider) {
        new CompaniesSlider(slider, {
            speed: 1,
            gap: 40
        });
    }
});

// Enhanced Page Transitions
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[data-transition]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.href;
            
            document.body.classList.add('page-transition');
            
            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    });
});

// Initialize page with transition effect
window.addEventListener('pageshow', () => {
    document.body.classList.remove('page-transition');
});

// Lazy Loading for Images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Enhanced Form Validation
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => clearErrors(input));
        });
        
        form.addEventListener('submit', (e) => {
            // Only prevent default if form has novalidate attribute (for custom handling)
            if (form.hasAttribute('novalidate')) {
                e.preventDefault();
                if (validateForm(form)) {
                    // Allow the form to submit naturally to Formspree
                    form.removeAttribute('novalidate');
                    form.submit();
                }
            }
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name || field.id;
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing errors
    clearErrors(field);
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = `${fieldName} is required`;
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    // Phone validation - Updated to allow South African numbers starting with 0
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[0-9][\d\s\-\(\)]{8,15}$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }
    
    // Minimum length validation
    if (field.hasAttribute('minlength') && value.length < field.getAttribute('minlength')) {
        isValid = false;
        errorMessage = `Minimum ${field.getAttribute('minlength')} characters required`;
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    let isFormValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });
    
    return isFormValid;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    let errorElement = field.parentNode.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
}

function clearErrors(field) {
    field.classList.remove('error');
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

function submitForm(form) {
    const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
        showSuccessMessage(form);
        form.reset();
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }, 2000);
}

function showSuccessMessage(form) {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully.';
    
    form.parentNode.insertBefore(successMessage, form);
    
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

// Responsive Image Loading
function initializeResponsiveImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px'
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            img.classList.add('loaded');
        });
    }
}

// Touch and Gesture Support
function initializeTouchSupport() {
    let touchStartX = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', (e) => {
        if (!touchStartX || !touchStartY) return;
        
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const deltaX = touchStartX - touchEndX;
        const deltaY = touchStartY - touchEndY;
        
        // Horizontal swipe detection
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                // Swipe left
                document.dispatchEvent(new CustomEvent('swipeLeft'));
            } else {
                // Swipe right
                document.dispatchEvent(new CustomEvent('swipeRight'));
            }
        }
        
        // Vertical swipe detection
        if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
            if (deltaY > 0) {
                // Swipe up
                document.dispatchEvent(new CustomEvent('swipeUp'));
            } else {
                // Swipe down
                document.dispatchEvent(new CustomEvent('swipeDown'));
            }
        }
        
        touchStartX = 0;
        touchStartY = 0;
    });
}

// Performance Optimization
function initializePerformanceOptimizations() {
    // Debounce scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) {
                originalScrollHandler();
            }
        }, 16); // ~60fps
    });
    
    // Preload critical resources
    const criticalImages = document.querySelectorAll('img[data-preload]');
    criticalImages.forEach(img => {
        const preloadImg = new Image();
        preloadImg.src = img.src || img.dataset.src;
    });
    
    // Optimize animations for mobile
    if (window.innerWidth <= 768) {
        document.documentElement.style.setProperty('--animation-duration', '0.2s');
    }
}

// Accessibility Enhancements
function initializeAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #0047AB;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content landmark if it doesn't exist
    const main = document.querySelector('main');
    if (main && !main.id) {
        main.id = 'main-content';
    }
    
    // Enhance focus management
    const focusableElements = 'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            const focusable = Array.from(document.querySelectorAll(focusableElements));
            const currentIndex = focusable.indexOf(document.activeElement);
            
            if (e.shiftKey) {
                // Shift + Tab (backward)
                if (currentIndex === 0) {
                    e.preventDefault();
                    focusable[focusable.length - 1].focus();
                }
            } else {
                // Tab (forward)
                if (currentIndex === focusable.length - 1) {
                    e.preventDefault();
                    focusable[0].focus();
                }
            }
        }
    });
}

// Initialize all enhancements
document.addEventListener('DOMContentLoaded', () => {
    initializeFormValidation();
    initializeResponsiveImages();
    initializeTouchSupport();
    initializePerformanceOptimizations();
    initializeAccessibility();
});
