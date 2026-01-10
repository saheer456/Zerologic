import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function ResetPassword() {
    const navigate = useNavigate()
    const { updatePassword } = useAuth()

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters')
            return
        }

        setLoading(true)
        try {
            const { error } = await updatePassword(password)
            if (error) throw error

            setSuccess('Password updated successfully! You can now sign in with your new password.')
            setTimeout(() => {
                navigate('/login')
            }, 3000)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container animate-fadeIn" style={{
            maxWidth: '450px',
            padding: 'var(--space-6)',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <div className="text-center mb-6">
                <h1 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-2)' }}>
                    Set New Password
                </h1>
                <p className="text-secondary">
                    Create a strong password for your account
                </p>
            </div>

            {error && (
                <div className="alert alert-error mb-4">
                    {error}
                </div>
            )}

            {success && (
                <div className="alert alert-success mb-4">
                    {success}
                </div>
            )}

            {!success && (
                <form onSubmit={handleSubmit} className="card" style={{ padding: 'var(--space-6)' }}>
                    <div style={{ marginBottom: 'var(--space-4)' }}>
                        <label className="form-label">New Password</label>
                        <input
                            type="password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="At least 6 characters"
                            required
                        />
                    </div>

                    <div style={{ marginBottom: 'var(--space-4)' }}>
                        <label className="form-label">Confirm New Password</label>
                        <input
                            type="password"
                            className="form-input"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Re-enter your password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary w-full mt-4"
                    >
                        {loading ? 'Updating Password...' : 'Update Password'}
                    </button>
                </form>
            )}

            <div className="text-center mt-6">
                <button
                    onClick={() => navigate('/login')}
                    className="text-link text-sm"
                >
                    Back to Login
                </button>
            </div>
        </div>
    )
}

export default ResetPassword
