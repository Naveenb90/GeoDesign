import { useEffect, useRef, useState } from 'react'

/**
 * Custom Hook: useScrollAnimation
 * 
 * Adds scroll-triggered animations to elements.
 * Reveals elements as they enter the viewport.
 * 
 * Performance: Uses Intersection Observer API for efficient detection
 * Accessibility: Respects prefers-reduced-motion
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - When to trigger (0-1), default 0.1
 * @param {string} options.rootMargin - Margin around root, default '0px'
 * @returns {[React.RefObject, boolean]} - [ref, isVisible]
 * 
 * @example
 * const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
 * return <div ref={ref} className={isVisible ? 'reveal active' : 'reveal'}>
 */
export function useScrollAnimation(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Optionally unobserve after first intersection
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [options.threshold, options.rootMargin])

  return [elementRef, isVisible]
}
