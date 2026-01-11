import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'

function UserDropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)
    const navigate = useNavigate()
    const { user, signOut, getUserProfile } = useAuth()
    const { theme, toggleTheme } = useTheme()

    const profile = getUserProfile()

    // Get display name - try fullName first, then format email username
    const getDisplayName = () => {
        if (profile?.fullName) return profile.fullName
        const emailUsername = user.email?.split('@')[0] || 'User'
        // Capitalize first letter and replace dots/underscores with spaces
        return emailUsername
            .replace(/[._]/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase())
    }

    const displayName = getDisplayName()

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSignOut = async () => {
        setIsOpen(false)
        await signOut()
        navigate('/')
    }

    const handleThemeToggle = () => {
        toggleTheme()
        // Don't close dropdown after theme toggle
    }

    if (!user) return null

    return (
        <div className="user-dropdown" ref={dropdownRef}>
            <button
                className="user-dropdown-trigger"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <div className="user-avatar">
                    {user.email?.[0]?.toUpperCase() || 'U'}
                </div>
                <span className="user-name hidden lg:block">
                    {displayName}
                </span>
                <svg
                    className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>

            {isOpen && (
                <div className="user-dropdown-menu">
                    <div className="dropdown-header">
                        <div className="user-avatar large">
                            {user.email?.[0]?.toUpperCase() || 'U'}
                        </div>
                        <div className="user-info">
                            <div className="user-fullname">{displayName}</div>
                            <div className="user-email">{user.email}</div>
                        </div>
                    </div>

                    <div className="dropdown-divider" />

                    <button className="dropdown-item" onClick={handleThemeToggle}>
                        <span className="dropdown-icon">
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </span>
                        <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                        <span className="dropdown-badge">{theme}</span>
                    </button>

                    <div className="dropdown-divider" />

                    <button className="dropdown-item danger" onClick={handleSignOut}>
                        <span className="dropdown-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                <polyline points="16 17 21 12 16 7"></polyline>
                                <line x1="21" y1="12" x2="9" y2="12"></line>
                            </svg>
                        </span>
                        <span>Sign Out</span>
                    </button>
                </div>
            )}
        </div>
    )
}

export default UserDropdown
