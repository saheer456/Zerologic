import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useProgress } from '../../App'
import { useAuth } from '../../context/AuthContext'

function Navbar({ onToggleSidebar }) {
    const location = useLocation()
    const navigate = useNavigate()
    const { getTotalProgress } = useProgress()
    const { user, signOut, loading } = useAuth()
    const totalProgress = getTotalProgress()

    const handleSignOut = async () => {
        await signOut()
        navigate('/')
    }

    return (
        <nav className="nav">
            <div className="nav-inner">
                <div className="flex items-center gap-4">
                    <Link to="/" className="nav-logo">
                        <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#6366f1" />
                                    <stop offset="100%" stopColor="#8b5cf6" />
                                </linearGradient>
                            </defs>
                            <rect width="100" height="100" rx="20" fill="url(#logoGrad)" />
                            <text x="50" y="68" textAnchor="middle" fontFamily="Arial Black" fontSize="50" fill="white">0</text>
                        </svg>
                        <span>ZeroLogic</span>
                    </Link>
                </div>

                <div className="nav-actions flex items-center gap-4">
                    {/* Progress indicator - desktop only */}
                    <div className="hidden md:flex items-center gap-2">
                        <div className="progress-bar" style={{ width: '100px', height: '6px' }}>
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${totalProgress.percent}%` }}
                            />
                        </div>
                        <span className="text-sm text-secondary">
                            {totalProgress.percent}%
                        </span>
                    </div>

                    {/* Dashboard link - desktop */}
                    <Link
                        to="/dashboard"
                        className={`btn btn-ghost hidden md:flex ${location.pathname === '/dashboard' ? 'active' : ''}`}
                    >
                        Dashboard
                    </Link>

                    {/* Auth buttons */}
                    {!loading && (
                        user ? (
                            <div className="flex items-center gap-2">
                                <div
                                    className="hidden md:flex items-center gap-2"
                                    style={{
                                        padding: 'var(--space-1) var(--space-3)',
                                        background: 'var(--color-bg-glass)',
                                        borderRadius: 'var(--radius-full)'
                                    }}
                                >
                                    <div style={{
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: 'var(--text-sm)',
                                        fontWeight: 'bold'
                                    }}>
                                        {user.email?.[0]?.toUpperCase() || 'U'}
                                    </div>
                                    <span className="text-sm hidden lg:block" style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {user.email?.split('@')[0]}
                                    </span>
                                </div>
                                <button onClick={handleSignOut} className="btn btn-ghost" style={{ padding: 'var(--space-2) var(--space-3)' }}>
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <Link to="/login" className="btn btn-primary">
                                Sign In
                            </Link>
                        )
                    )}
                </div>
            </div >
        </nav >
    )
}

export default Navbar
