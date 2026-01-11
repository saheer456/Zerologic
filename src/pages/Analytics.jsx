import { useProgress } from '../App'

function Analytics() {
    const { phases, lessons, completedLessons, getPhaseProgress, getTotalProgress, streak } = useProgress()
    const totalProgress = getTotalProgress()

    // Calculate stats
    const totalLessons = lessons.length
    const completedCount = completedLessons.length
    const remainingLessons = totalLessons - completedCount

    // Estimate time (avg 5 mins per lesson)
    const estimatedMinutesRemaining = remainingLessons * 5
    const hoursRemaining = Math.floor(estimatedMinutesRemaining / 60)
    const minutesRemaining = estimatedMinutesRemaining % 60

    // Calculate phase completion percentages
    const phaseStats = phases.map(phase => {
        const progress = getPhaseProgress(phase.id)
        return {
            ...phase,
            ...progress
        }
    })

    // Find strongest and weakest areas (by completion %)
    const sortedPhases = [...phaseStats].sort((a, b) => b.percent - a.percent)
    const strongestPhase = sortedPhases[0]
    const weakestPhase = sortedPhases.find(p => p.percent < 100 && p.total > 0) || sortedPhases[sortedPhases.length - 1]

    return (
        <div className="container animate-fadeIn">
            <h1 className="mb-6">Learning Analytics</h1>

            {/* Summary Cards */}
            <div className="grid-desktop-3 gap-4 mb-8">
                <div className="analytics-card">
                    <div className="analytics-icon">📊</div>
                    <div className="analytics-value">{totalProgress.percent}%</div>
                    <div className="analytics-label">Course Completed</div>
                </div>

                <div className="analytics-card">
                    <div className="analytics-icon">✅</div>
                    <div className="analytics-value">{completedCount}</div>
                    <div className="analytics-label">Lessons Completed</div>
                </div>

                <div className="analytics-card">
                    <div className="analytics-icon">🔥</div>
                    <div className="analytics-value">{streak}</div>
                    <div className="analytics-label">Day Streak</div>
                </div>
            </div>

            {/* Time Remaining Estimate */}
            <div className="card mb-8">
                <h3 className="mb-4">Time to Completion</h3>
                <div className="time-estimate">
                    <div className="time-remaining">
                        {hoursRemaining > 0 && <span className="time-value">{hoursRemaining}h </span>}
                        <span className="time-value">{minutesRemaining}m</span>
                        <span className="time-label"> estimated remaining</span>
                    </div>
                    <div className="lessons-remaining">
                        {remainingLessons} lessons to go
                    </div>
                </div>
                <div className="progress-bar mt-4">
                    <div className="progress-bar-fill" style={{ width: `${totalProgress.percent}%` }} />
                </div>
            </div>

            {/* Phase Breakdown */}
            <h3 className="mb-4">Progress by Phase</h3>
            <div className="grid-desktop-2 gap-4 mb-8">
                {phaseStats.map(phase => (
                    <div key={phase.id} className="card">
                        <div className="flex justify-between items-center mb-3">
                            <span style={{ fontWeight: '500' }}>
                                {phase.icon} {phase.title}
                            </span>
                            <span className={`badge ${phase.percent === 100 ? 'badge-success' : 'badge-primary'}`}>
                                {phase.percent}%
                            </span>
                        </div>
                        <div className="progress-bar mb-2">
                            <div className="progress-bar-fill" style={{ width: `${phase.percent}%` }} />
                        </div>
                        <div className="text-xs text-muted">
                            {phase.completed} of {phase.total} lessons completed
                        </div>
                    </div>
                ))}
            </div>

            {/* Insights */}
            <h3 className="mb-4">Insights</h3>
            <div className="grid-desktop-2 gap-4">
                {strongestPhase && strongestPhase.percent > 0 && (
                    <div className="insight-card success">
                        <div className="insight-icon">💪</div>
                        <div className="insight-content">
                            <div className="insight-title">Strongest Area</div>
                            <div className="insight-value">{strongestPhase.icon} {strongestPhase.title}</div>
                            <div className="insight-desc">{strongestPhase.percent}% complete</div>
                        </div>
                    </div>
                )}

                {weakestPhase && weakestPhase.percent < 100 && (
                    <div className="insight-card warning">
                        <div className="insight-icon">🎯</div>
                        <div className="insight-content">
                            <div className="insight-title">Focus Area</div>
                            <div className="insight-value">{weakestPhase.icon} {weakestPhase.title}</div>
                            <div className="insight-desc">{weakestPhase.total - weakestPhase.completed} lessons remaining</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Analytics
