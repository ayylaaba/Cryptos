import gsap from "gsap"

export const magneticEffect = (selector) => {
  document.querySelectorAll(selector).forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      gsap.to(btn, {
        x: (x - rect.width / 2) * 0.3,
        y: (y - rect.height / 2) * 0.3,
        duration: 0.3
      })
    })

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5 })
    })
  })
}

export const hoverReveal = (selector) => {
  document.querySelectorAll(selector).forEach((card) => {
    const bg = card.querySelector(".card-bg")
    if (!bg) return

    gsap.set(bg, { scaleX: 0, transformOrigin: "left" })

    card.addEventListener("mouseenter", () => {
      gsap.to(bg, { scaleX: 1, duration: 0.5 })
    })

    card.addEventListener("mouseleave", () => {
      gsap.to(bg, { scaleX: 0, duration: 0.5 })
    })
  })
}
