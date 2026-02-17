import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Main animation function to be called from component
export const initNewsAnimations = () => {
    // Ensure we're in browser environment
    if (typeof window === 'undefined') return;
    
    // Run all animations
    animateHeader();
    animateCategories();
    animateNewsCards();
    animateStats();
    animateNewsletter();
};

// Header animation
export const animateHeader = () => {
    const header = document.querySelector('.news-header');
    const title = document.querySelector('.news-title');
    const description = document.querySelector('.news-description');
    const stats = document.querySelector('.news-stats');
    
    if (!header || !title || !description) return;
    
    // Create timeline for header
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(header,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(title,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8 },
        '-=0.6'
    )
    .fromTo(description,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8 },
        '-=0.5'
    )
    .fromTo(stats,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6 },
        '-=0.4'
    );
};

// Categories animation
export const animateCategories = () => {
    const categoriesContainer = document.querySelector('.categories-container');
    const categories = document.querySelectorAll('.category-item');
    
    if (!categoriesContainer || categories.length === 0) return;
    
    gsap.fromTo(categoriesContainer,
        { opacity: 0, y: 30 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            scrollTrigger: {
                trigger: categoriesContainer,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Stagger category items
    gsap.fromTo(categories,
        { opacity: 0, scale: 0.8, x: -20 },
        { 
            opacity: 1, 
            scale: 1, 
            x: 0, 
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(1.2)',
            scrollTrigger: {
                trigger: categoriesContainer,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        }
    );
};

// News cards animation
export const animateNewsCards = () => {
    const newsCards = document.querySelectorAll('.news-card');
    
    if (newsCards.length === 0) return;
    
    newsCards.forEach((card, index) => {
        // Initial animation on scroll
        gsap.fromTo(card,
            { 
                opacity: 0, 
                y: 50,
                rotateX: -5
            },
            { 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
        
        // Add hover animations
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.02,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                duration: 0.3,
                ease: 'power2.out'
            });
            
            // Animate image inside card
            const img = card.querySelector('img');
            if (img) {
                gsap.to(img, {
                    scale: 1.1,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            }
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                duration: 0.3,
                ease: 'power2.in'
            });
            
            const img = card.querySelector('img');
            if (img) {
                gsap.to(img, {
                    scale: 1,
                    duration: 0.4,
                    ease: 'power2.in'
                });
            }
        });
    });
};

// Stats animation (counter effect)
export const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    
    if (stats.length === 0) return;
    
    stats.forEach(stat => {
        const finalValue = stat.textContent;
        const numericValue = parseFloat(finalValue) || 0;
        
        // Store original text with suffix (k, M, etc.)
        const suffix = finalValue.replace(/[0-9.]/g, '');
        
        gsap.fromTo(stat,
            { innerText: 0 },
            {
                innerText: numericValue,
                duration: 2,
                ease: 'power2.out',
                snap: { innerText: 1 },
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                onUpdate: function() {
                    // Format number with suffix
                    const currentValue = Math.floor(this.targets()[0].innerText);
                    stat.textContent = currentValue + suffix;
                }
            }
        );
    });
};

// Newsletter section animation
export const animateNewsletter = () => {
    const newsletter = document.querySelector('.newsletter-section');
    const newsletterContent = document.querySelector('.newsletter-content');
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterButton = document.querySelector('.newsletter-button');
    
    if (!newsletter) return;
    
    gsap.fromTo(newsletter,
        { 
            opacity: 0,
            scale: 0.95,
            borderRadius: '0px'
        },
        {
            opacity: 1,
            scale: 1,
            borderRadius: '1rem',
            duration: 1,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
                trigger: newsletter,
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    if (newsletterContent) {
        gsap.fromTo(newsletterContent,
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                delay: 0.3,
                scrollTrigger: {
                    trigger: newsletter,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }
    
    if (newsletterInput && newsletterButton) {
        gsap.fromTo([newsletterInput, newsletterButton],
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
                delay: 0.5,
                scrollTrigger: {
                    trigger: newsletter,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }
};

// Optional: Parallax effect for background
export const initParallax = () => {
    const background = document.querySelector('.coin-background');
    
    if (!background) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        gsap.to(background, {
            y: scrolled * 0.3,
            duration: 0.1,
            ease: 'none'
        });
    });
};

// Clean up function (optional)
export const cleanupAnimations = () => {
    // Kill all ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    // Kill all GSAP animations
    gsap.globalTimeline.clear();
};