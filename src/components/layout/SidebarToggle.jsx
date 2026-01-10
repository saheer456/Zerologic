import { useRef, useEffect } from 'react'

function SidebarToggle({ isOpen, onToggle }) {
    return (
        <button
            onClick={onToggle}
            className="sidebar-toggle-fab"
            aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
            title={isOpen ? "Close Sidebar" : "Open Sidebar"}
        >
            <div className={`sidebar-toggle-icon ${isOpen ? 'open' : ''}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="toggle-svg">
                    <path
                        d="M4 6h16M4 12h16M4 18h16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="line-1"
                    />
                </svg>
            </div>
            {/* Glow effect container */}
            <div className="sidebar-toggle-glow"></div>
        </button>
    )
}

export default SidebarToggle
