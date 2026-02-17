"use client"

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export const useGsapAnimations = () => {
  const dashboardRef = useRef<HTMLDivElement>(null)
  
  useLayoutEffect(() => {
    if (!dashboardRef.current) return
    
    const ctx = gsap.context(() => {
      // 1. FADE IN ENTIRE PAGE
      gsap.from(".dashboard-container", {
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: "power2.out"
      })

      // 2. STAGGER CARDS ANIMATION
      gsap.from(".stats-card", {
        duration: 0.6,
        opacity: 0,
        y: 40,
        stagger: 0.1, // Each card appears 0.1s after previous
        ease: "back.out(1.7)",
        delay: 0.3
      })

      // 3. BANNER ENTRANCE
      gsap.from(".announcement-banner", {
        duration: 0.8,
        scale: 0.95,
        opacity: 0,
        ease: "elastic.out(1, 0.5)"
      })

      // 4. SEARCH BAR ENTRANCE
      gsap.from(".search-container", {
        duration: 0.7,
        y: 20,
        opacity: 0,
        ease: "power2.out",
        delay: 0.2
      })

      // 5. CHART ENTRANCE
      gsap.from(".chart-container", {
        duration: 0.9,
        scale: 0.9,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5
      })

      // 6. TABLE ENTRANCE
      gsap.from(".table-container", {
        duration: 0.7,
        y: 30,
        opacity: 0,
        ease: "power2.out",
        delay: 0.7
      })

      // 7. FOOTER ENTRANCE
      gsap.from(".footer-stats", {
        duration: 0.6,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.9
      })

      // 8. CONTINUOUS FLOATING EFFECT FOR CARDS
      gsap.to(".stats-card", {
        y: -5,
        duration: 2,
        repeat: -1, // Infinite repeat
        yoyo: true, // Go back and forth
        ease: "sine.inOut",
        stagger: 0.2 // Stagger the floating
      })
    }, dashboardRef)

    return () => ctx.revert() // Cleanup
  }, [])

  return dashboardRef
}