import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ================ MAIN ANIMATION INIT ================
export const initWatchlistAnimations = () => {
    if (typeof window === 'undefined') return;
    
    animateHeader();
    animateStats();
    animateWatchlistCards();
    animateEmptyState();
};

// ================ HEADER ANIMATION ================
const animateHeader = () => {
    const header = document.querySelector('.watchlist-header');
    const title = document.querySelector('.watchlist-title');
    const description = document.querySelector('.watchlist-description');
    const stats = document.querySelector('.watchlist-stats');
    
    if (!header) return;
    
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

// ================ STATS CARDS ANIMATION ================
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-card');
    
    if (stats.length === 0) return;
    
    gsap.fromTo(stats,
        { 
            opacity: 0, 
            y: 30,
            scale: 0.95
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.2)',
            scrollTrigger: {
                trigger: '.stats-grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );
};

// ================ WATCHLIST CARDS ANIMATION ================
export const animateWatchlistCards = () => {
    const cards = document.querySelectorAll('.watchlist-card');
    
    if (cards.length === 0) return;
    
    // Initial animation
    gsap.fromTo(cards,
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
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.watchlist-grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Hover animations
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -8,
                scale: 1.02,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                duration: 0.3,
                ease: 'power2.out'
            });
            
            // Animate the icon/logo
            const logo = card.querySelector('.coin-logo');
            if (logo) {
                gsap.to(logo, {
                    scale: 1.1,
                    rotate: 5,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            }
            
            // Animate the remove button
            const removeBtn = card.querySelector('.remove-btn');
            if (removeBtn) {
                gsap.to(removeBtn, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                duration: 0.3,
                ease: 'power2.in'
            });
            
            const logo = card.querySelector('.coin-logo');
            if (logo) {
                gsap.to(logo, {
                    scale: 1,
                    rotate: 0,
                    duration: 0.3,
                    ease: 'power2.in'
                });
            }
            
            const removeBtn = card.querySelector('.remove-btn');
            if (removeBtn) {
                gsap.to(removeBtn, {
                    scale: 1,
                    duration: 0.2,
                    ease: 'power2.in'
                });
            }
        });
    });
};

// ================ REMOVE CARD ANIMATION ================
export const animateRemoveCard = (cardElement, onComplete) => {
    if (!cardElement) return;
    
    gsap.to(cardElement, {
        opacity: 0,
        x: -100,
        scale: 0.8,
        rotate: -10,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
            if (onComplete) onComplete();
        }
    });
};

// ================ ADD CARD ANIMATION ================
export const animateAddCard = (cardElement) => {
    if (!cardElement) return;
    
    gsap.fromTo(cardElement,
        {
            opacity: 0,
            y: 50,
            scale: 0.8,
            rotateX: -10
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.6,
            ease: 'back.out(1.7)'
        }
    );
};

// ================ EMPTY STATE ANIMATION ================
const animateEmptyState = () => {
    const emptyState = document.querySelector('.empty-state');
    const emptyIcon = document.querySelector('.empty-icon');
    const emptyTitle = document.querySelector('.empty-title');
    const emptyDesc = document.querySelector('.empty-description');
    const exploreBtn = document.querySelector('.explore-btn');
    
    if (!emptyState) return;
    
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: emptyState,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
    
    tl.fromTo(emptyState,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.2)' }
    )
    .fromTo(emptyIcon,
        { opacity: 0, y: 30, rotate: -10 },
        { opacity: 1, y: 0, rotate: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.5'
    )
    .fromTo(emptyTitle,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.4'
    )
    .fromTo(emptyDesc,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
    )
    .fromTo(exploreBtn,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.2)' },
        '-=0.2'
    );
    
    // Add hover animation to explore button
    if (exploreBtn) {
        exploreBtn.addEventListener('mouseenter', () => {
            gsap.to(exploreBtn, {
                scale: 1.05,
                boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        exploreBtn.addEventListener('mouseleave', () => {
            gsap.to(exploreBtn, {
                scale: 1,
                boxShadow: 'none',
                duration: 0.3,
                ease: 'power2.in'
            });
        });
    }
};

// ================ STAR BUTTON ANIMATION ================
export const animateStarButton = (buttonElement, isAdding) => {
    if (!buttonElement) return;
    
    if (isAdding) {
        gsap.timeline()
            .to(buttonElement, {
                scale: 1.3,
                rotate: 10,
                duration: 0.2,
                ease: 'power2.out'
            })
            .to(buttonElement, {
                scale: 1,
                rotate: 0,
                duration: 0.3,
                ease: 'elastic.out(1, 0.5)'
            });
    } else {
        gsap.timeline()
            .to(buttonElement, {
                scale: 1.2,
                rotate: -10,
                duration: 0.2,
                ease: 'power2.out'
            })
            .to(buttonElement, {
                scale: 1,
                rotate: 0,
                duration: 0.3,
                ease: 'elastic.out(1, 0.5)'
            });
    }
};

// ================ CLEANUP ================
export const cleanupAnimations = () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.globalTimeline.clear();
};
