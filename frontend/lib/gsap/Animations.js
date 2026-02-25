// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// export const gsapAnimations = () => {

// // MAIN ENTRANCE - Using opacity and padding instead of transform
// gsap.from(".main-content", {
//   opacity: 0,
//   duration: 1,
//   ease: "power3.out",
//   onStart: function() {
//     // Ensure elements are visible but transparent
//     gsap.set(".main-content", { 
//       opacity: 0,
//       visibility: "visible" 
//     });
//   }
// });

// // Alternative using clipPath (very safe, no stacking context issues)
// gsap.from(".main-content", {
//   clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
//   duration: 1.2,
//   ease: "power2.out",
//   stagger: 0.1
// });

// // STAGGERED CARDS - Using opacity and border/spacing
// gsap.from(".stagger-card", {
//   opacity: 0,
//   duration: 0.8,
//   stagger: 0.15,
//   ease: "power2.out",
//   delay: 0.3,
//   onComplete: function() {
//     // Ensure final state is clean
//     gsap.set(".stagger-card", { clearProps: "opacity" });
//   }
// });

// // Alternative using filter (doesn't affect stacking context)
// gsap.from(".stagger-card", {
//   filter: "blur(10px)",
//   opacity: 0,
//   duration: 0.8,
//   stagger: 0.15,
//   ease: "power2.out",
//   delay: 0.3
// });

// // Alternative using letter-spacing for text-based cards
// gsap.from(".stagger-card h3, .stagger-card p", {
//   letterSpacing: "10px",
//   opacity: 0,
//   duration: 0.6,
//   stagger: 0.1,
//   ease: "power2.out"
// });

//   // PARALLAX BANNER
//   gsap.to(".parallax-banner", {
//     yPercent: -30,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".parallax-banner",
//       start: "top bottom",
//       end: "bottom top",
//       scrub: true
//     }
//   })

//   // SCALE ON SCROLL
//   gsap.utils.toArray(".scale-on-scroll").forEach((card) => {
//     gsap.to(card, {
//       scale: 1.05,
//       duration: 0.5,
//       scrollTrigger: {
//         trigger: card,
//         start: "top 80%",
//         end: "top 30%",
//         scrub: 1,
//         toggleActions: "play none none reverse"
//       }
//     })
//   })

//   // // TEXT REVEAL
//   gsap.utils.toArray(".reveal-text").forEach((text) => {
//     gsap.from(text, {
//       clipPath: "inset(0 100% 0 0)",
//       opacity: 0,
//       duration: 1.5,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: text,
//         start: "top 85%",
//         toggleActions: "play reverse play reverse"
//       }
//     })
//   })

//   // GRADIENT SHIFT
//   gsap.to(".gradient-shift", {
//     backgroundPosition: "100% 50%",
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".gradient-shift",
//       start: "top bottom",
//       end: "bottom top",
//       scrub: 1
//     }
//   })

//   // MAGNETIC BUTTONS
//   document.querySelectorAll(".magnetic").forEach((btn) => {

//     btn.addEventListener("mousemove", (e) => {
//       const rect = btn.getBoundingClientRect()
//       const x = e.clientX - rect.left
//       const y = e.clientY - rect.top

//       gsap.to(btn, {
//         x: (x - rect.width / 2) * 0.3,
//         y: (y - rect.height / 2) * 0.3,
//         duration: 0.3,
//         ease: "power2.out"
//       })
//     })

//     btn.addEventListener("mouseleave", () => {
//       gsap.to(btn, {
//         x: 0,
//         y: 0,
//         duration: 0.5,
//         ease: "elastic.out(1, 0.5)"
//       })
//     })

//   })

//   // CARD HOVER REVEAL
//   document.querySelectorAll(".card").forEach(card => {
//     const bg = card.querySelector(".card-bg")
//     if (!bg) return

//     gsap.set(bg, { scaleX: 0, transformOrigin: "left" })

//     card.addEventListener("mouseenter", () => {
//       gsap.to(bg, {
//         scaleX: 1,
//         duration: 0.5,
//         ease: "power2.out"
//       })
//     })

//     card.addEventListener("mouseleave", () => {
//       gsap.to(bg, {
//         scaleX: 0,
//         duration: 0.5,
//         ease: "power2.out"
//       })
//     })
//   })

// }

// // CLEANUP FUNCTION
// export const cleanupDashboardAnimations = () => {
//   ScrollTrigger.getAll().forEach(trigger => trigger.kill())
// }

// lib/gsap/Animations.ts
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// export const gsapAnimations = () => {
//   // Kill any existing animations first to prevent conflicts
//   gsap.killTweensOf([".main-content", ".stagger-card", ".scale-on-scroll", ".reveal-text"]);
  
//   // Use a timeline for better control
//   const tl = gsap.timeline({
//     defaults: {
//       ease: "power2.out"
//     }
//   });

//   // MAIN ENTRANCE - Use opacity only, no transforms
//   tl.fromTo(".main-content", 
//     { 
//       opacity: 0,
//     },
//     { 
//       opacity: 1,
//       duration: 0.8,
//       stagger: 0.1,
//       clearProps: "opacity" // Clean up after animation
//     }
//   );

//   // STAGGERED CARDS - Use opacity only, no transforms
//   tl.fromTo(".stagger-card",
//     { 
//       opacity: 0,
//     },
//     { 
//       opacity: 1,
//       duration: 0.6,
//       stagger: 0.1,
//       clearProps: "opacity"
//     },
//     "-=0.3" // Overlap with previous animation
//   );

//   // PARALLAX BANNER - This uses yPercent which is safer than y
//   gsap.to(".parallax-banner", {
//     yPercent: -30,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".parallax-banner",
//       start: "top bottom",
//       end: "bottom top",
//       scrub: true
//     }
//   });

//   // SCALE ON SCROLL - Use transform but on specific elements
//   gsap.utils.toArray(".scale-on-scroll").forEach((card) => {
//     ScrollTrigger.create({
//       trigger: card,
//       start: "top 80%",
//       end: "top 30%",
//       scrub: 1,
//       onUpdate: (self) => {
//         // Use scale but ensure it doesn't affect z-index
//         gsap.set(card, { 
//           scale: 1 + (0.05 * self.progress),
//           transformOrigin: "center center",
//           zIndex: 1 // Ensure cards stay above background
//         });
//       },
//       onLeave: () => {
//         gsap.set(card, { scale: 1, zIndex: 1 });
//       },
//       onLeaveBack: () => {
//         gsap.set(card, { scale: 1, zIndex: 1 });
//       }
//     });
//   });

//   // TEXT REVEAL - Safe (clipPath doesn't affect stacking)
//   gsap.utils.toArray(".reveal-text").forEach((text) => {
//     gsap.fromTo(text,
//       { 
//         clipPath: "inset(0 100% 0 0)",
//         opacity: 0 
//       },
//       { 
//         clipPath: "inset(0 0% 0 0)",
//         opacity: 1,
//         duration: 1.2,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: text,
//           start: "top 85%",
//           toggleActions: "play none none reverse"
//         }
//       }
//     );
//   });

//   // GRADIENT SHIFT - Safe
//   gsap.to(".gradient-shift", {
//     backgroundPosition: "100% 50%",
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".gradient-shift",
//       start: "top bottom",
//       end: "bottom top",
//       scrub: 1
//     }
//   });

//   // MAGNETIC BUTTONS - These are event-based, not persistent
//   document.querySelectorAll(".magnetic").forEach((btn) => {
//     const handleMouseMove = (e) => {
//       const rect = (btn ).getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       gsap.to(btn, {
//         x: (x - rect.width / 2) * 0.2,
//         y: (y - rect.height / 2) * 0.2,
//         duration: 0.3,
//         ease: "power2.out",
//         overwrite: true
//       });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(btn, {
//         x: 0,
//         y: 0,
//         duration: 0.4,
//         ease: "elastic.out(1, 0.3)",
//         overwrite: true
//       });
//     };

//     btn.addEventListener("mousemove", handleMouseMove);
//     btn.addEventListener("mouseleave", handleMouseLeave);
    
//     // Store event listeners for cleanup
//     (btn)._gsapListeners = { handleMouseMove, handleMouseLeave };
//   });

//   // CARD HOVER REVEAL - Event-based
//   document.querySelectorAll(".card").forEach(card => {
//     const bg = card.querySelector(".card-bg");
//     if (!bg) return;

//     gsap.set(bg, { scaleX: 0, transformOrigin: "left" });

//     const handleMouseEnter = () => {
//       gsap.to(bg, {
//         scaleX: 1,
//         duration: 0.4,
//         ease: "power2.out",
//         overwrite: true
//       });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(bg, {
//         scaleX: 0,
//         duration: 0.4,
//         ease: "power2.out",
//         overwrite: true
//       });
//     };

//     card.addEventListener("mouseenter", handleMouseEnter);
//     card.addEventListener("mouseleave", handleMouseLeave);
    
//     (card)._gsapListeners = { handleMouseEnter, handleMouseLeave };
//   });

//   return tl;
// }

// // CLEANUP FUNCTION - Enhanced
// export const cleanupDashboardAnimations = () => {
//   // Kill all ScrollTriggers
//   ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
//   // Kill all animations
//   gsap.killTweensOf(["*"]);
  
//   // Remove event listeners
//   document.querySelectorAll(".magnetic, .card").forEach((el) => {
//     if ((el)._gsapListeners) {
//       const listeners = (el)._gsapListeners;
      
//       if (el.classList.contains("magnetic")) {
//         el.removeEventListener("mousemove", listeners.handleMouseMove);
//         el.removeEventListener("mouseleave", listeners.handleMouseLeave);
//       }
      
//       if (el.classList.contains("card")) {
//         el.removeEventListener("mouseenter", listeners.handleMouseEnter);
//         el.removeEventListener("mouseleave", listeners.handleMouseLeave);
//       }
      
//       delete (el)._gsapListeners;
//     }
//   });
  
//   // Clear any inline styles that might affect stacking
//   // document.querySelectorAll(".main-content, .stagger-card, .scale-on-scroll").forEach((el) => {
//   //   (el as HTMLElement).style.transform = '';
//   //   (el as HTMLElement).style.opacity = '';
//   //   (el as HTMLElement).style.zIndex = '';
//   // });
// }

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const gsapAnimations = () => {

  // MAIN ENTRANCE
  gsap.from(".main-content", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
  })

  // STAGGERED CARDS
  gsap.from(".stagger-card", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.7)",
    delay: 0.3
  })

  // FLOATING COINS
  gsap.to(".floating-coin", {
    y: -20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.2
  })

  // PARALLAX BANNER
  gsap.to(".parallax-banner", {
    yPercent: -30,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax-banner",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  })

  // SCALE ON SCROLL
  gsap.utils.toArray(".scale-on-scroll").forEach((card) => {
    gsap.to(card, {
      scale: 1.05,
      duration: 0.5,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
        toggleActions: "play none none reverse"
      }
    })
  })

  // TEXT REVEAL
  gsap.utils.toArray(".reveal-text").forEach((text) => {
    gsap.from(text, {
      clipPath: "inset(0 100% 0 0)",
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: text,
        start: "top 85%",
        toggleActions: "play reverse play reverse"
      }
    })
  })

  // GRADIENT SHIFT
  gsap.to(".gradient-shift", {
    backgroundPosition: "100% 50%",
    ease: "none",
    scrollTrigger: {
      trigger: ".gradient-shift",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  })

  // MAGNETIC BUTTONS
  document.querySelectorAll(".magnetic").forEach((btn) => {

    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      gsap.to(btn, {
        x: (x - rect.width / 2) * 0.3,
        y: (y - rect.height / 2) * 0.3,
        duration: 0.3,
        ease: "power2.out"
      })
    })

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)"
      })
    })

  })

  // CARD HOVER REVEAL
  document.querySelectorAll(".card").forEach(card => {
    const bg = card.querySelector(".card-bg")
    if (!bg) return

    gsap.set(bg, { scaleX: 0, transformOrigin: "left" })

    card.addEventListener("mouseenter", () => {
      gsap.to(bg, {
        scaleX: 1,
        duration: 0.5,
        ease: "power2.out"
      })
    })

    card.addEventListener("mouseleave", () => {
      gsap.to(bg, {
        scaleX: 0,
        duration: 0.5,
        ease: "power2.out"
      })
    })
  })

}


// CLEANUP FUNCTION
export const cleanupDashboardAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}