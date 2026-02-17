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
