import { Link } from 'react-router-dom'
import { useProgress } from '../App'

function Dashboard() {
    const { phases, lessons, completedLessons, getPhaseProgress, getTotalProgress, lastVisited } = useProgress()
    const totalProgress = getTotalProgress()

    // Get continue lesson or first lesson
    const continueLessonId = lastVisited || 'what-is-programming'
    const continueLesson = lessons.find(l => l.id === continueLessonId) || lessons[0]

    return (
        <div className="container animate-fadeIn">
            <h1 className="mb-6">Your Dashboard</h1>

            <div className="grid-desktop-2 gap-6 mb-8">
                {/* Overall Progress Card */}
                <div className="card" style={{
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15))',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: '0' }}>{totalProgress.percent}%</h2>
                            <p className="text-secondary mb-0">Overall Progress</p>
                        </div>
                        <div style={{
                            width: '80px', height: '80px', borderRadius: '50%',
                            background: `conic-gradient(var(--color-primary) ${totalProgress.percent * 3.6}deg, var(--color-bg-tertiary) 0deg)`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)'
                        }}>
                            <div style={{
                                width: '60px', height: '60px', borderRadius: '50%',
                                background: 'var(--color-bg-secondary)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontWeight: 'bold',
                                fontSize: 'var(--text-lg)'
                            }}>{totalProgress.completed}</div>
                        </div>
                    </div>
                </div>

                {/* Resume Learning Card */}
                <div className="card flex flex-col justify-between">
                    <div>
                        <h3 className="mb-1">Resume Learning</h3>
                        <p className="text-sm text-secondary mb-4">Continue where you left off</p>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="lesson-section-icon" style={{ width: '40px', height: '40px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <div style={{ fontWeight: '500', fontSize: 'var(--text-base)' }}>{continueLesson.title}</div>
                                <div className="text-xs text-muted">Phase {continueLesson.phase}</div>
                            </div>
                        </div>
                    </div>
                    <Link to={`/lesson/${continueLesson.id}`} className="btn btn-primary w-full">
                        Continue Lesson
                    </Link>
                </div>
            </div>

            <h3 className="mb-4">Phase Progress</h3>
            <div className="grid-desktop-2 gap-4 mb-8">
                {phases.map(phase => {
                    const progress = getPhaseProgress(phase.id)
                    return (
                        <div key={phase.id} className="card hover-premium">
                            <div className="flex justify-between items-center mb-3">
                                <span style={{ fontWeight: '500' }}>{phase.icon} {phase.title}</span>
                                <span className="badge badge-primary">{progress.percent}%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-bar-fill" style={{ width: `${progress.percent}%` }} />
                            </div>
                        </div>
                    )
                })}
            </div>

            <h3 className="mb-4">Recent Actvity</h3>
            {completedLessons.length === 0 ? (
                <div className="card text-center py-8">
                    <p className="text-secondary mb-4">No lessons completed yet. Start your journey today!</p>
                    <Link to="/lesson/what-is-programming" className="btn btn-primary">Start Learning</Link>
                </div>
            ) : (
                <div className="grid-desktop-2 gap-2">
                    {completedLessons.slice(-6).reverse().map(id => {
                        const lesson = lessons.find(l => l.id === id)
                        return lesson ? (
                            <Link key={id} to={`/lesson/${id}`} className="card flex items-center gap-3 hover-premium" style={{ padding: 'var(--space-3)' }}>
                                <div className="text-success" style={{ display: 'flex' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span className="text-sm">{lesson.title}</span>
                            </Link>
                        ) : null
                    })}
                </div>
            )}
        </div>
    )
}

export default Dashboard

