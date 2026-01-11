import { useProgress } from '../../App'

function StreakDisplay({ compact = false }) {
    const { streak = 0, streakLastDate } = useProgress()

    // Check if streak is active (was updated today or yesterday)
    const today = new Date().toDateString()
    const yesterday = new Date(Date.now() - 86400000).toDateString()
    const isActive = streakLastDate === today || streakLastDate === yesterday

    if (compact) {
        return (
            <div className="streak-compact" title={`${streak} day streak`}>
                <span className={`streak-flame ${isActive ? 'active' : 'inactive'}`}>🔥</span>
                <span className="streak-count">{streak}</span>
            </div>
        )
    }

    return (
        <div className={`streak-display ${isActive ? 'active' : 'inactive'}`}>
            <div className="streak-flame-container">
                <span className="streak-flame">🔥</span>
            </div>
            <div className="streak-info">
                <div className="streak-count-large">{streak}</div>
                <div className="streak-label">
                    {streak === 1 ? 'day streak' : 'day streak'}
                </div>
            </div>
            {!isActive && streak > 0 && (
                <div className="streak-warning">
                    Learn today to keep your streak!
                </div>
            )}
        </div>
    )
}

export default StreakDisplay
