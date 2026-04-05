import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls the window to the top on every client-side route change.
 * Must be rendered inside the Router (uses `useLocation`).
 *
 * @component
 * @returns {null}
 */
function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, search])

  return null
}

export default ScrollToTop
