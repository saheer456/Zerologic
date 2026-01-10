import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

import ErrorBoundary from './components/ErrorBoundary'

console.log("Main.jsx loaded")

try {
    const root = ReactDOM.createRoot(document.getElementById('root'))
    console.log("Root created")

    root.render(
        <React.StrictMode>
            <ErrorBoundary>
                <HashRouter>
                    <App />
                </HashRouter>
            </ErrorBoundary>
        </React.StrictMode>
    )
    console.log("Render called")
} catch (e) {
    console.error("Fatal render error:", e)
}
