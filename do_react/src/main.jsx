import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './styles/index.css'

/**
 * Application Entry Point
 * 
 * This is the main entry point for the React application.
 * It renders the root App component into the DOM.
 * 
 * ErrorBoundary wraps the app to catch and handle React errors gracefully.
 * 
 * @module main
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)

