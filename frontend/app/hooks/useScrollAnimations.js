"use client"

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const useScrollAnimations = () => {
  const containerRef = useRef(null)
  
  useEffect(() => {
    if (!containerRef.current) return
    
    const ctx = gsap.context(() => {
      // Enable ScrollTrigger
      ScrollTrigger.defaults({
        scroller: containerRef.current,
        markers: false, // Set to true to see trigger markers (for debugging)
      })

      // 1. PARALLAX BACKGROUND EFFECT
      gsap.to(".parallax-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      })

      // 2. FLOATING STATS CARDS ON SCROLL
      document.querySelectorAll(".stats-card").forEach((card, i) => {
        gsap.to(card, {
          y: -20,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            toggleActions: "play none none reverse"
          }
        })
      })

      // 3. STAGGERED FADE IN FOR MARKET STATS
      gsap.utils.toArray(".animate-on-scroll").forEach((element, i) => {
        gsap.from(element, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "top 40%",
            toggleActions: "play none none reverse"
          },
          delay: i * 0.1
        })
      })

      // 4. ROTATING ICONS ON HOVER + SCROLL
      document.querySelectorAll(".rotate-on-scroll").forEach((icon) => {
        gsap.to(icon, {
          rotation: 360,
          duration: 2,
          scrollTrigger: {
            trigger: icon,
            start: "top 90%",
            end: "top 30%",
            scrub: 1
          }
        })
      })

      // 5. TEXT REVEAL ANIMATIONS
      gsap.utils.toArray(".text-reveal").forEach((text) => {
        gsap.from(text, {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          }
        })
      })

      // 6. PROGRESS LINE INDICATOR
      const progressLine = document.querySelector(".progress-line")
      if (progressLine) {
        gsap.to(progressLine, {
          scaleX: 1,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5
          }
        })
      }

      // 7. COUNTER ANIMATIONS (Animate numbers)
      document.querySelectorAll(".counter").forEach((counter) => {
        const target = parseFloat(counter.textContent || "0")
        gsap.to(counter, {
          innerHTML: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        })
      })

      // 8. IMAGE/PARALLAX LAYERS
      gsap.utils.toArray(".parallax-layer").forEach((layer, i) => {
        const depth = i * 0.2
        gsap.to(layer, {
          y: -100 * depth,
          ease: "none",
          scrollTrigger: {
            trigger: layer,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        })
      })

      // 9. CARD FLIP ON HOVER
      document.querySelectorAll(".flip-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            rotationY: 180,
            duration: 0.6,
            ease: "power2.out"
          })
        })
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotationY: 0,
            duration: 0.6,
            ease: "power2.out"
          })
        })
      })

      // 10. MAGNETIC BUTTON EFFECT
      document.querySelectorAll(".magnetic-btn").forEach((btn) => {
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

      // 11. SMOOTH COLOR CHANGE ON SCROLL
      gsap.to("body", {
        backgroundColor: "#1f2937", // dark gray
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        }
      })

      // 12. WAVE EFFECT FOR BANNER
      const wave = document.querySelector(".wave-effect")
      if (wave) {
        gsap.to(wave, {
          x: 100,
          duration: 2,
          repeat: -1,
          ease: "sine.inOut",
          yoyo: true
        })
      }

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}