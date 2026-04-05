import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

/**
 * Application Entry Point
 * 
 * This is the main entry point for the React application.
 * It renders the root App component into the DOM.
 * 
 * Note: ErrorBoundary is implemented in App.jsx to catch React errors gracefully.
 * Having it there (closer to the router) allows for better error handling context.
 * 
 * @module main
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

