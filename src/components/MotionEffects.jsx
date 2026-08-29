import { useEffect } from 'react'

const revealSelector = [
  '.hero-copy > *',
  '.hero-art',
  '.section-heading',
  '.archive-header',
  '.project-card',
  '.short-collection__head',
  '.short-card',
  '.about-sticky',
  '.service-row',
  '.skill-row',
  '.contact-copy',
  '.contact-form',
].join(',')

const interactiveSelector = [
  '.project-card',
  '.short-card',
  '.hero-frame',
  '.hero-logo-card',
  '.contact-form',
].join(',')

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const interactiveCleanups = new Map()
    let revealIndex = 0
    let scrollFrame = 0

    root.classList.add('motion-enabled')

    const revealObserver = reduceMotion.matches
      ? null
      : new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            })
          },
          {
            threshold: 0.12,
            rootMargin: '0px 0px -7% 0px',
          },
        )

    function registerReveal(element) {
      if (!(element instanceof HTMLElement) || element.dataset.revealReady) return

      element.dataset.revealReady = 'true'
      element.classList.add('motion-reveal')
      element.style.setProperty('--reveal-delay', `${Math.min((revealIndex % 6) * 55, 275)}ms`)
      revealIndex += 1

      if (!revealObserver) {
        element.classList.add('is-visible')
        return
      }

      revealObserver.observe(element)
    }

    function registerInteractive(element) {
      if (
        !(element instanceof HTMLElement) ||
        element.dataset.motionCardReady ||
        reduceMotion.matches ||
        !finePointer.matches
      ) return

      element.dataset.motionCardReady = 'true'
      element.classList.add('motion-interactive')

      let pointerFrame = 0

      const onPointerMove = (event) => {
        if (pointerFrame) cancelAnimationFrame(pointerFrame)

        pointerFrame = requestAnimationFrame(() => {
          const rect = element.getBoundingClientRect()
          const x = (event.clientX - rect.left) / rect.width
          const y = (event.clientY - rect.top) / rect.height
          const rotateY = (x - 0.5) * 3.2
          const rotateX = (0.5 - y) * 3.2

          element.style.setProperty('--motion-rx', `${rotateX.toFixed(2)}deg`)
          element.style.setProperty('--motion-ry', `${rotateY.toFixed(2)}deg`)
          element.style.setProperty('--motion-x', `${(x * 100).toFixed(1)}%`)
          element.style.setProperty('--motion-y', `${(y * 100).toFixed(1)}%`)
        })
      }

      const onPointerLeave = () => {
        if (pointerFrame) cancelAnimationFrame(pointerFrame)
        element.style.setProperty('--motion-rx', '0deg')
        element.style.setProperty('--motion-ry', '0deg')
        element.style.setProperty('--motion-x', '50%')
        element.style.setProperty('--motion-y', '50%')
      }

      element.addEventListener('pointermove', onPointerMove, { passive: true })
      element.addEventListener('pointerleave', onPointerLeave, { passive: true })

      interactiveCleanups.set(element, () => {
        if (pointerFrame) cancelAnimationFrame(pointerFrame)
        element.removeEventListener('pointermove', onPointerMove)
        element.removeEventListener('pointerleave', onPointerLeave)
      })
    }

    function scan(container = document) {
      if (!(container instanceof Document || container instanceof Element)) return

      if (container instanceof Element) {
        if (container.matches(revealSelector)) registerReveal(container)
        if (container.matches(interactiveSelector)) registerInteractive(container)
      }

      container.querySelectorAll(revealSelector).forEach(registerReveal)
      container.querySelectorAll(interactiveSelector).forEach(registerInteractive)
    }

    function updateScrollProgress() {
      scrollFrame = 0
      const maximum = document.documentElement.scrollHeight - window.innerHeight
      const progress = maximum > 0 ? Math.min(Math.max(window.scrollY / maximum, 0), 1) : 0
      root.style.setProperty('--scroll-progress', progress.toFixed(4))
      root.classList.toggle('has-scrolled', window.scrollY > 18)
    }

    const onScroll = () => {
      if (scrollFrame) return
      scrollFrame = requestAnimationFrame(updateScrollProgress)
    }

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) scan(node)
        })
      })
    })

    scan()
    updateScrollProgress()
    mutationObserver.observe(document.body, { childList: true, subtree: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      root.classList.remove('motion-enabled', 'has-scrolled')
      root.style.removeProperty('--scroll-progress')
      revealObserver?.disconnect()
      mutationObserver.disconnect()
      interactiveCleanups.forEach((cleanup) => cleanup())
      if (scrollFrame) cancelAnimationFrame(scrollFrame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return null
}
