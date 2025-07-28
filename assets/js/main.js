/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle && navMenu){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        // Add body scroll lock
        document.body.style.overflow = 'hidden'
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose && navMenu){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
        // Remove body scroll lock
        document.body.style.overflow = 'auto'
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

if (navLink.length > 0) {
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
        if (navMenu) {
    navMenu.classList.remove('show-menu')
            // Remove body scroll lock
            document.body.style.overflow = 'auto'
        }
}
    navLink.forEach(n => {
        if (n) {
            n.addEventListener('click', linkAction)
        }
    })
}

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

if (skillsHeader.length > 0) {
function toggleSkills(){
    let itemClass = this.parentNode.className

        for(let i = 0; i < skillsContent.length; i++){
            if (skillsContent[i]) {
        skillsContent[i].className = 'skills__content skills__close'
            }
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
            // Animate skill bars when opening
            setTimeout(() => {
                animateSkillBars(this.parentNode)
            }, 300)
        }
    }

    // Function to animate skill bars
    function animateSkillBars(skillsContainer) {
        if (!skillsContainer) return;
        
        const skillBars = skillsContainer.querySelectorAll('.skills__percentage')
        skillBars.forEach((bar, index) => {
            if (bar) {
                const width = bar.style.width
                bar.style.width = '0%'
                setTimeout(() => {
                    if (bar) {
                        bar.style.width = width
                    }
                }, index * 100) // Stagger animation
            }
        })
}

skillsHeader.forEach((el) =>{
        if (el) {
    el.addEventListener('click', toggleSkills)
        }
})
}

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

if (tabs.length > 0 && tabContents.length > 0) {
tabs.forEach(tab =>{
        if (tab) {
    tab.addEventListener('click', () =>{
        console.log('Tab clicked:', tab.dataset.target);
        const target = document.querySelector(tab.dataset.target)
        console.log('Target found:', target);

                if (target) {
        tabContents.forEach(tabContent =>{
                        if (tabContent && tabContent.classList) {
            tabContent.classList.remove('qualification__content-active')
            // Reset ScrollReveal styles
            tabContent.style.opacity = '0';
            tabContent.style.transform = 'translateY(30px)';
            console.log('Removed active class from:', tabContent.id);
                        }
        })
                    if (target && target.classList) {
        target.classList.add('qualification__content-active')
        // Reset ScrollReveal styles for active content
        target.style.opacity = '1';
        target.style.transform = 'translateY(0)';
        console.log('Added active class to:', target.id);
                }

        tabs.forEach(tab =>{
                        if (tab && tab.classList) {
            tab.classList.remove('qualification__active')
                        }
        })
                    if (tab && tab.classList) {
        tab.classList.add('qualification__active')
        console.log('Added active class to tab button');
                    }
                }
            })
        }
    })
}



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

if (sections.length > 0) {
function scrollActive(){
        const scrollY = window.pageYOffset || window.scrollY || 0

    sections.forEach(current =>{
            if (current) {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    const activeLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
                    if (activeLink) {
                        activeLink.classList.add('active-link')
                    }
        }else{
                    const activeLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
                    if (activeLink) {
                        activeLink.classList.remove('active-link')
                    }
                }
        }
    })
}
window.addEventListener('scroll', scrollActive)
}

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
const header = document.getElementById('header')
if (header) {
function scrollHeader(){
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
        const scrollY = window.pageYOffset || window.scrollY || 0;
        if(scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
}

/*==================== SHOW SCROLL UP ====================*/ 
const scrollup = document.getElementById('scroll-up');
if (scrollup) {
function scrollUp(){
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        const scrollY = window.pageYOffset || window.scrollY || 0;
        if(scrollY >= 560) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Add click event to scroll to top
scrollup.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
}

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

if (themeButton) {
// Previously selected topic (if user selected)
    let selectedTheme, selectedIcon;
    try {
        selectedTheme = localStorage.getItem('selected-theme')
        selectedIcon = localStorage.getItem('selected-icon')
    } catch (error) {
        console.log('localStorage not supported');
    }

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
        try {
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
        } catch (error) {
            console.log('Could not save theme preference');
        }
    })
}

/*==================== SCROLL REVEAL ANIMATION ====================*/
// Add class to body based on ScrollReveal availability
if (typeof ScrollReveal !== 'undefined') {
    document.body.classList.add('scrollreveal-available');
} else {
    document.body.classList.add('no-scrollreveal');
}

// Check if ScrollReveal is available
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1500,
        delay: 200,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        reset: false,
        mobile: true,
        useDelay: 'always',
        viewFactor: 0.1,
        viewOffset: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    });

    // Reveal elements with better control
    sr.reveal(`.home__data, .home__img`, {
        interval: 150,
        origin: 'left'
    });

    sr.reveal(`.about__data, .about__img`, {
        interval: 200,
        origin: 'bottom'
    });

    sr.reveal(`.skills__content, .qualification__content`, {
        interval: 200,
        origin: 'bottom'
    });

    // Portfolio cards with optimized settings
    sr.reveal(`.portfolio__content`, {
        interval: 250,
        origin: 'bottom',
        distance: '40px',
        duration: 1200,
        delay: 100,
        beforeReveal: function(el) {
            // Reset any conflicting styles
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.classList.add('sr-reveal');
        },
        afterReveal: function(el) {
            // Clean up styles after reveal
            setTimeout(() => {
                if (el) {
                    el.style.opacity = '';
                    el.style.transform = '';
                    el.style.transition = '';
                }
            }, 100);
        }
    });

    sr.reveal(`.contact__data, .contact__input`, {
        interval: 200,
        origin: 'bottom'
    });

    sr.reveal(`.footer__content`, {
        interval: 150,
        origin: 'bottom'
    });
} else {
    // Fallback for when ScrollReveal is not available
    console.log('ScrollReveal not available, using CSS animations');
    
    // Add fallback animation classes
    const animateElements = document.querySelectorAll('.home__data, .home__img, .about__data, .about__img, .portfolio__content, .skills__content, .qualification__content, .contact__data, .contact__input, .footer__content');
    
    animateElements.forEach((el, index) => {
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                if (el) {
                    el.style.transition = 'all 0.6s ease-out';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            }, index * 100);
        }
    });
}

// Error handling for ScrollReveal
window.addEventListener('error', function(e) {
    if (e.message.includes('ScrollReveal') || e.filename.includes('scrollreveal')) {
        console.log('ScrollReveal error detected, switching to CSS animations');
        document.body.classList.remove('scrollreveal-available');
        document.body.classList.add('no-scrollreveal');
        
        // Force show all elements
        const hiddenElements = document.querySelectorAll('.portfolio__content, .home__data, .home__img, .about__data, .about__img, .skills__content, .qualification__content');
        hiddenElements.forEach(el => {
            if (el) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'all 0.6s ease-out';
            }
        });
    }
});

// Auto-fix ScrollReveal issues after page load
window.addEventListener('load', function() {
    setTimeout(() => {
        // Check if any portfolio cards are still hidden
        const hiddenCards = document.querySelectorAll('.portfolio__content[style*="opacity: 0"], .portfolio__content[style*="transform: translateY"]');
        
        if (hiddenCards.length > 0) {
            console.log('Detected hidden portfolio cards, fixing...');
            document.body.classList.add('scrollreveal-error');
            
            hiddenCards.forEach((card, index) => {
                setTimeout(() => {
                    if (card) {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        card.style.transition = 'all 0.6s ease-out';
                    }
                }, index * 100);
            });
        }
    }, 2000); // Wait 2 seconds after page load
});

// Fix ScrollReveal issues on scroll
let scrollFixTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollFixTimeout);
    
    scrollFixTimeout = setTimeout(() => {
        const hiddenCards = document.querySelectorAll('.portfolio__content[style*="opacity: 0"]');
        if (hiddenCards.length > 0) {
            hiddenCards.forEach(card => {
                if (card && card.getBoundingClientRect().top < window.innerHeight) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        }
    }, 100);
});

/*==================== EMAIL JS ====================*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactMessage = document.getElementById('contact-message'),
      contactStatus = document.getElementById('contact-status')

if (contactForm && contactName && contactEmail && contactMessage && contactStatus) {
const sendEmail = (e) => {
    e.preventDefault()

        // Check if the form is valid
        if(contactName.value === '' || contactEmail.value === '' || contactMessage.value === '') {
            // Show error message
            contactStatus.textContent = 'Please fill in all fields'
            contactStatus.className = 'contact__status contact__status--error'
        contactStatus.style.display = 'block'
        return
    }

        // Check if EmailJS is available
        if (typeof emailjs !== 'undefined') {
            // EmailJS configuration
            emailjs.sendForm('service_id', 'template_id', '#contact-form', 'public_key')
        .then(() => {
                    // Show success message
            contactStatus.textContent = 'Message sent successfully!'
                    contactStatus.className = 'contact__status contact__status--success'
            contactStatus.style.display = 'block'

                    // Clear form
                    contactForm.reset()
        }, (error) => {
                    // Show error message
                    contactStatus.textContent = 'Something went wrong. Please try again.'
                    contactStatus.className = 'contact__status contact__status--error'
                    contactStatus.style.display = 'block'
                })
        } else {
            // Fallback if EmailJS is not available
            contactStatus.textContent = 'Email service not available. Please contact directly.'
            contactStatus.className = 'contact__status contact__status--error'
            contactStatus.style.display = 'block'
        }
}

contactForm.addEventListener('submit', sendEmail)
}

/*==================== TYPING ANIMATION ====================*/
function typeWriter(element, text, speed = 100) {
    if (!element || !text) return;
    
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typing animation to home title
const homeTitle = document.querySelector('.home__title');
if (homeTitle && homeTitle.textContent) {
    const originalText = homeTitle.textContent;
    typeWriter(homeTitle, originalText, 150);
}

/*==================== SMOOTH SCROLLING ====================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/*==================== PROJECT FILTER ====================*/
// Add filter functionality for projects (optional enhancement)
const filterButtons = document.querySelectorAll('.portfolio__filter-btn');
const projectItems = document.querySelectorAll('.portfolio__content');

if (filterButtons.length > 0 && projectItems.length > 0) {
    filterButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', () => {
                const filterValue = button.getAttribute('data-filter');
                
                // Remove active class from all buttons
                filterButtons.forEach(btn => {
                    if (btn && btn.classList) {
                        btn.classList.remove('active');
                    }
                });
                // Add active class to clicked button
                if (button && button.classList) {
                    button.classList.add('active');
                }
                
                // Filter projects
                projectItems.forEach(item => {
                    if (item) {
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            if (item.style) {
                                item.style.display = 'block';
                                item.style.animation = 'fadeIn 0.5s ease-in-out';
                            }
                        } else {
                            if (item.style) {
                                item.style.display = 'none';
                            }
                        }
                    }
                });
            });
        }
    });
}

/*==================== LAZY LOADING FOR IMAGES ====================*/
const images = document.querySelectorAll('img[data-src]');

if (images.length > 0) {
    try {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            if (img) {
                imageObserver.observe(img);
            }
        });
    } catch (error) {
        console.log('IntersectionObserver not supported for lazy loading');
    }
}

/*==================== PARALLAX EFFECT ====================*/
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset || window.scrollY || 0;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length > 0) {
        parallaxElements.forEach(element => {
            if (element && element.dataset) {
                const speed = element.dataset.speed || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            }
        });
    }
});

/*==================== COUNTER ANIMATION ====================*/
function animateCounter(element, target, duration = 2000) {
    if (!element || isNaN(target)) return;
    
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            if (typeof requestAnimationFrame !== 'undefined') {
                requestAnimationFrame(updateCounter);
            } else {
                setTimeout(updateCounter, 16);
            }
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Animate counters when they come into view
const counters = document.querySelectorAll('.about__info-title');
if (counters.length > 0) {
    try {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const textContent = counter.textContent;
                    // Remove any non-numeric characters and parse
                    const target = parseInt(textContent.replace(/\D/g, ''));
                    if (!isNaN(target)) {
                        animateCounter(counter, target);
                        counterObserver.unobserve(counter);
                    }
                }
            });
        });

        counters.forEach(counter => {
            if (counter) {
                counterObserver.observe(counter);
            }
        });
    } catch (error) {
        console.log('IntersectionObserver not supported for counters');
    }
}

/*==================== MOBILE MENU IMPROVEMENTS ====================*/
// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    if (navMenu && navToggle && navMenu.classList.contains('show-menu') && 
        !navMenu.contains(e.target) && 
        !navToggle.contains(e.target)) {
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = 'auto';
    }
});

// Add swipe gesture for mobile menu
let touchStartX = 0;
let touchEndX = 0;

// Check if touch events are supported
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const navMenu = document.getElementById('nav-menu');
    const swipeThreshold = 50;
    
    if (navMenu && touchEndX < touchStartX - swipeThreshold && navMenu.classList.contains('show-menu')) {
        // Swipe left - close menu
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = 'auto';
    }
}

/*==================== PERFORMANCE OPTIMIZATION ====================*/
// Debounce function for scroll events
function debounce(func, wait) {
    if (typeof func !== 'function') return func;
    
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events (only if functions exist)
if (typeof scrollActive !== 'undefined') {
    const debouncedScrollActive = debounce(scrollActive, 10);
    window.addEventListener('scroll', debouncedScrollActive);
}

if (typeof scrollHeader !== 'undefined') {
    const debouncedScrollHeader = debounce(scrollHeader, 10);
    window.addEventListener('scroll', debouncedScrollHeader);
}

if (typeof scrollUp !== 'undefined') {
    const debouncedScrollUp = debounce(scrollUp, 10);
    window.addEventListener('scroll', debouncedScrollUp);
}

/*==================== MODERN ANIMATIONS ====================*/
// Add hover effects to portfolio items
const portfolioItems = document.querySelectorAll('.portfolio__content');
if (portfolioItems.length > 0) {
    portfolioItems.forEach(item => {
        if (item) {
            item.addEventListener('mouseenter', function() {
                if (this && this.style) {
                    this.style.transform = 'translateY(-15px) scale(1.02)';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                if (this && this.style) {
                    this.style.transform = 'translateY(0) scale(1)';
                }
            });
        }
    });
}

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    if (!button) return;
    
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple && ripple.parentNode) {
            ripple.remove();
        }
    }, 600);
}

// Add ripple effect to all buttons
const buttons = document.querySelectorAll('.button');
if (buttons.length > 0) {
    buttons.forEach(button => {
        if (button) {
            button.addEventListener('click', createRipple);
        }
    });
}

// Add CSS for ripple effect
try {
    const style = document.createElement('style');
    style.textContent = `
        .button {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
} catch (error) {
    console.log('Could not add ripple effect styles');
}

/*==================== LOADING ANIMATION ====================*/
// Add loading animation when page loads
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader && loader.style) {
        loader.style.opacity = '0';
        setTimeout(() => {
            if (loader && loader.style) {
                loader.style.display = 'none';
            }
        }, 500);
    }
    
    // Animate elements on page load
    const animateElements = document.querySelectorAll('.home__data, .home__img, .about__data, .about__img');
    if (animateElements.length > 0) {
        animateElements.forEach((el, index) => {
            if (el) {
                setTimeout(() => {
                    if (el && el.style) {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }
                }, index * 200);
            }
        });
    }
});

/*==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================*/
// Create intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

let observer;
try {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
} catch (error) {
    console.log('IntersectionObserver not supported');
}

// Observe elements for animation
const animateOnScroll = document.querySelectorAll('.portfolio__content, .skills__header, .about__info-item');
if (animateOnScroll.length > 0 && observer) {
    animateOnScroll.forEach(el => {
        if (el) {
            observer.observe(el);
        }
    });
}

// Add CSS for animate-in class
try {
    const animateStyle = document.createElement('style');
    animateStyle.textContent = `
        .portfolio__content,
        .skills__header,
        .about__info-item {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(animateStyle);
} catch (error) {
    console.log('Could not add animate-in styles');
}

