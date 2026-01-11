import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import App from './App'
import './index.css'
import './scroll-fix.css'

import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ErrorBoundary>
            <ThemeProvider>
                <HashRouter>
                    <App />
                </HashRouter>
            </ThemeProvider>
        </ErrorBoundary>
    </React.StrictMode>
)

