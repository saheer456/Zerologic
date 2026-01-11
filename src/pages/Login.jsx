import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {
    const navigate = useNavigate()
    const { signIn, signUp, resetPassword, user } = useAuth()

    const [mode, setMode] = useState('login') // 'login', 'signup', 'forgot'
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // Form fields
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [status, setStatus] = useState('')
    const [learningGoal, setLearningGoal] = useState('')

    // Redirect if already logged in
    if (user) {
        navigate('/')
        return null
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')
        setLoading(true)

        try {
            if (mode === 'signup') {
                // Validation
                if (!fullName.trim()) throw new Error('Please enter your name')
                if (!status) throw new Error('Please select your current status')
                if (password !== confirmPassword) throw new Error('Passwords do not match')
                if (password.length < 6) throw new Error('Password must be at least 6 characters')

                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!emailRegex.test(email)) throw new Error('Please enter a valid email address')

                const { error } = await signUp(email, password, {
                    full_name: fullName.trim(),
                    status: status,
                    learning_goal: learningGoal.trim()
                })
                if (error) throw error
                setSuccess('Account created! Check your email to verify your account.')
                setEmail('')
                setPassword('')
                setConfirmPassword('')
                setFullName('')
                setStatus('')
                setLearningGoal('')
            } else if (mode === 'login') {
                const { error } = await signIn(email, password)
                if (error) throw error
                navigate('/')
            } else if (mode === 'forgot') {
                const { error } = await resetPassword(email)
                if (error) throw error
                setSuccess('Password reset link sent! Check your email.')
                setEmail('')
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const statusOptions = [
        { value: 'student-school', label: 'School Student' },
        { value: 'student-college', label: 'College Student (BCA/BSc/etc)' },
        { value: 'student-university', label: 'University Student' },
        { value: 'job-seeker', label: 'Job Seeker' },
        { value: 'working-professional', label: 'Working Professional' },
        { value: 'career-switch', label: 'Career Switcher' },
        { value: 'hobbyist', label: 'Learning for Fun' },
        { value: 'other', label: 'Other' }
    ]

    const goalOptions = [
        { value: 'pass-exams', label: 'Pass college exams' },
        { value: 'get-job', label: 'Get a programming job' },
        { value: 'build-projects', label: 'Build personal projects' },
        { value: 'data-science', label: 'Learn data science/ML' },
        { value: 'automation', label: 'Automate tasks' },
        { value: 'general', label: 'General programming skills' }
    ]

    return (
        <div className="container animate-fadeIn" style={{
            maxWidth: '450px',
            padding: 'var(--space-6)',
            minHeight: 'calc(100vh - 40px)', /* Ensure full height centering */
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '0 auto' /* Horizontal centering */
        }}>
            {/* Header */}
            <div className="text-center mb-6">
                <h1 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-2)' }}>
                    {mode === 'signup' ? 'Create Account' : mode === 'forgot' ? 'Reset Password' : 'Welcome Back'}
                </h1>
                <p className="text-secondary">
                    {mode === 'signup'
                        ? 'Join ZeroLogic and start learning Python'
                        : mode === 'forgot'
                            ? 'Enter your email to receive a reset link'
                            : 'Sign in to continue your Python journey'
                    }
                </p>
            </div>

            {error && (
                <div className="alert alert-error" style={{ marginBottom: 'var(--space-4)' }}>
                    {error}
                </div>
            )}

            {success && (
                <div className="alert alert-success" style={{ marginBottom: 'var(--space-4)' }}>
                    {success}
                </div>
            )}

            <form onSubmit={handleSubmit} className="card" style={{ padding: 'var(--space-6)' }}>
                {mode === 'signup' && (
                    <>
                        <div style={{ marginBottom: 'var(--space-4)' }}>
                            <label className="form-label">Full Name *</label>
                            <input
                                type="text"
                                className="form-input"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div style={{ marginBottom: 'var(--space-4)' }}>
                            <label className="form-label">I am a... *</label>
                            <select
                                className="form-select"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                            >
                                <option value="">Select your status</option>
                                {statusOptions.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>

                        <div style={{ marginBottom: 'var(--space-4)' }}>
                            <label className="form-label">Learning Goal (optional)</label>
                            <select
                                className="form-select"
                                value={learningGoal}
                                onChange={(e) => setLearningGoal(e.target.value)}
                            >
                                <option value="">What's your main goal?</option>
                                {goalOptions.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>
                        <hr className="my-4 op-20" />
                    </>
                )}

                <div style={{ marginBottom: 'var(--space-4)' }}>
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                    />
                </div>

                {mode !== 'forgot' && (
                    <div style={{ marginBottom: 'var(--space-4)' }}>
                        <div className="container-flex justify-between">
                            <label className="form-label">Password</label>
                            {mode === 'login' && (
                                <button
                                    type="button"
                                    onClick={() => setMode('forgot')}
                                    className="text-link text-xs"
                                >
                                    Forgot Password?
                                </button>
                            )}
                        </div>
                        <input
                            type="password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={mode === 'signup' ? 'At least 6 characters' : 'Enter your password'}
                            required
                        />
                    </div>
                )}

                {mode === 'signup' && (
                    <div style={{ marginBottom: 'var(--space-4)' }}>
                        <label className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-input"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Re-enter your password"
                            required
                        />
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-full mt-2"
                >
                    {loading
                        ? (mode === 'signup' ? 'Creating Account...' : mode === 'forgot' ? 'Sending Link...' : 'Signing In...')
                        : (mode === 'signup' ? 'Create Account' : mode === 'forgot' ? 'Send Reset Link' : 'Sign In')
                    }
                </button>
            </form>

            <div className="text-center mt-6 space-y-2">
                <p className="text-sm">
                    {mode === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
                    <button
                        onClick={() => {
                            setMode(mode === 'signup' ? 'login' : 'signup')
                            setError('')
                            setSuccess('')
                        }}
                        className="text-link font-bold"
                    >
                        {mode === 'signup' ? 'Sign In' : 'Create Account'}
                    </button>
                </p>

                {mode === 'forgot' && (
                    <button
                        onClick={() => setMode('login')}
                        className="text-link text-sm"
                    >
                        Back to Login
                    </button>
                )}

                <div>
                    <button
                        onClick={() => navigate('/')}
                        className="text-muted text-sm"
                    >
                        ← Back to Home
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
