import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useProgress } from '../../App'

function Sidebar({ isOpen }) {
    const location = useLocation()
    const { phases, lessons, completedLessons, getPhaseProgress } = useProgress()

    // Find current phase from URL
    const currentLessonId = location.pathname.split('/lesson/')[1]
    const currentLesson = lessons.find(l => l.id === currentLessonId)
    const currentPhaseId = currentLesson?.phase ?? 0

    // Track expanded phases - current phase expanded by default
    const [expandedPhases, setExpandedPhases] = useState(new Set([currentPhaseId]))

    const togglePhase = (phaseId) => {
        setExpandedPhases(prev => {
            const newSet = new Set(prev)
            if (newSet.has(phaseId)) {
                newSet.delete(phaseId)
            } else {
                newSet.add(phaseId)
            }
            return newSet
        })
    }

    return (
        <aside className={`sidebar ${!isOpen ? 'closed' : ''}`}>
            {/* Quick Navigation */}
            <div className="sidebar-quick-nav">
                <Link to="/" className="sidebar-quick-link">
                    <span>🏠</span> Home
                </Link>
                <Link to="/dashboard" className="sidebar-quick-link">
                    <span>📊</span> Dashboard
                </Link>
                <Link to="/projects" className="sidebar-quick-link">
                    <span>🛠️</span> Projects
                </Link>
            </div>

            <div className="sidebar-divider"></div>

            {/* Phases with collapsible lessons */}
            {phases.map(phase => {
                const phaseProgress = getPhaseProgress(phase.id)
                const phaseLessons = lessons.filter(l => l.phase === phase.id)
                const isExpanded = expandedPhases.has(phase.id)
                const isComplete = phaseProgress.completed === phaseProgress.total && phaseProgress.total > 0
                const hasCurrentLesson = phaseLessons.some(l => l.id === currentLessonId)

                return (
                    <div key={phase.id} className="sidebar-section">
                        <button
                            className={`sidebar-phase-header ${hasCurrentLesson ? 'active' : ''} ${isComplete ? 'complete' : ''}`}
                            onClick={() => togglePhase(phase.id)}
                        >
                            <span className="sidebar-phase-icon">{phase.icon}</span>
                            <span className="sidebar-phase-title">
                                Phase {phase.id}
                                <span className="sidebar-phase-subtitle">{phase.title.split(':')[1]?.trim()}</span>
                            </span>
                            <span className="sidebar-phase-progress">
                                {phaseProgress.completed}/{phaseProgress.total}
                            </span>
                            <span className={`sidebar-phase-arrow ${isExpanded ? 'expanded' : ''}`}>
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </span>
                        </button>

                        {isExpanded && (
                            <div className="sidebar-lessons">
                                {phaseLessons.map(lesson => {
                                    const isCompleted = completedLessons.includes(lesson.id)
                                    const isActive = currentLessonId === lesson.id

                                    return (
                                        <Link
                                            key={lesson.id}
                                            to={`/lesson/${lesson.id}`}
                                            className={`sidebar-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                                        >
                                            <span className="sidebar-item-icon">
                                                {isCompleted ? (
                                                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                ) : (
                                                    <span className="sidebar-item-dot" />
                                                )}
                                            </span>
                                            <span className="sidebar-item-title">{lesson.title}</span>
                                        </Link>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                )
            })}
        </aside>
    )
}

export default Sidebar
