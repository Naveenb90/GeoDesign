import { useEffect, useRef, useState } from 'react'

/**
 * Custom Hook: useIntersectionObserver
 * 
 * Implements lazy loading using the Intersection Observer API.
 * Useful for loading content (images, videos, etc.) only when it enters the viewport.
 * 
 * Performance Benefits:
 * - Reduces initial page load time
 * - Saves bandwidth for users
 * - Improves Core Web Vitals (LCP, CLS)
 * 
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - When to trigger (0-1)
 * @param {string} options.rootMargin - Margin around root
 * @returns {[React.RefObject, boolean]} - [ref, isIntersecting]
 * 
 * @example
 * const [videoRef, isVisible] = useIntersectionObserver({ threshold: 0.5 })
 * useEffect(() => {
 *   if (isVisible) {
 *     // Load video
 *   }
 * }, [isVisible])
 */
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: load immediately if not supported
      setIsIntersecting(true)
      setHasIntersected(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setIsIntersecting(entry.isIntersecting)
        
        // Once intersected, keep it loaded (don't unload)
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      {
        threshold: options.threshold || 0.5,
        rootMargin: options.rootMargin || '0px',
      }
    )

    observer.observe(element)

    // Cleanup: disconnect observer when component unmounts
    return () => {
      observer.disconnect()
    }
  }, [options.threshold, options.rootMargin, hasIntersected])

  return [elementRef, hasIntersected]
}


