import { Link } from 'react-router-dom'
import { useProgress } from '../App'

function Home() {
    const { phases, getPhaseProgress, getTotalProgress, lastVisited, lessons } = useProgress()
    const totalProgress = getTotalProgress()

    // Check if user has completed diagnostic
    const diagnosticData = localStorage.getItem('zerologic_diagnostic')
    const hasDiagnostic = diagnosticData ? JSON.parse(diagnosticData).completed : false
    const isNewUser = totalProgress.completed === 0 && !hasDiagnostic

    // Get continue lesson or first lesson
    const continueLesson = lastVisited
        ? lessons.find(l => l.id === lastVisited)
        : lessons[0]

    return (
        <div className="container animate-fadeIn">
            {/* Hero Section */}
            <section className="hero" style={{
                textAlign: 'center',
                padding: 'var(--space-12) 0',
                marginBottom: 'var(--space-8)'
            }}>
                <h1 style={{
                    marginBottom: 'var(--space-4)',
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary), var(--color-accent))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    Learn Python<br />From Zero
                </h1>
                <p style={{
                    fontSize: 'var(--text-lg)',
                    maxWidth: '500px',
                    margin: '0 auto var(--space-6)',
                    color: 'var(--color-text-secondary)'
                }}>
                    A beginner-friendly platform designed for college students.
                    Understand concepts clearly. Score well in exams.
                </p>

                {isNewUser ? (
                    /* New User - Show Diagnostic Option */
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'center' }}>
                        <Link
                            to="/diagnostic"
                            className="btn btn-primary"
                            style={{ fontSize: 'var(--text-lg)', padding: 'var(--space-4) var(--space-8)' }}
                        >
                            📋 Take Entry Assessment
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <p className="text-sm text-muted" style={{ maxWidth: '400px' }}>
                            Find your perfect starting point (10 min)
                        </p>
                        <Link
                            to={`/lesson/${continueLesson?.id || 'what-is-programming'}`}
                            className="text-muted"
                            style={{ fontSize: 'var(--text-sm)', textDecoration: 'underline' }}
                        >
                            Skip and start from the beginning
                        </Link>
                    </div>
                ) : (
                    /* Returning User */
                    <Link
                        to={`/lesson/${continueLesson?.id || 'what-is-programming'}`}
                        className="btn btn-primary"
                        style={{ fontSize: 'var(--text-lg)', padding: 'var(--space-4) var(--space-8)' }}
                    >
                        {totalProgress.completed > 0 ? 'Continue Learning' : 'Start Learning'}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                )}
            </section>

            {/* Progress Overview */}
            {totalProgress.completed > 0 && (
                <section className="card mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3>Your Progress</h3>
                        <span className="badge badge-primary">{totalProgress.percent}% Complete</span>
                    </div>
                    <div className="progress-bar" style={{ height: '12px' }}>
                        <div className="progress-bar-fill" style={{ width: `${totalProgress.percent}%` }} />
                    </div>
                    <p className="text-sm text-muted mt-4">
                        {totalProgress.completed} of {totalProgress.total} lessons completed
                    </p>
                </section>
            )}

            {/* Learning Phases */}
            <section>
                <h2 className="mb-8">Your Learning Path</h2>
                <div className="phases-grid">
                    {phases.map((phase, index) => {
                        const phaseProgress = getPhaseProgress(phase.id)
                        const isLocked = index > 0 && getPhaseProgress(phases[index - 1].id).percent < 50

                        return (
                            <div
                                key={phase.id}
                                className="card hover-premium"
                                style={{
                                    opacity: isLocked ? 0.5 : 0.95,
                                    pointerEvents: isLocked ? 'none' : 'auto',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {isLocked && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '12px',
                                        right: '12px',
                                        zIndex: 2
                                    }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                    </div>
                                )}
                                <div className="flex items-center gap-4 mb-4">
                                    <div style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: 'var(--radius-xl)',
                                        background: `linear-gradient(135deg, ${phase.color || 'var(--color-primary)'}, ${phase.colorEnd || 'var(--color-secondary)'})`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.8rem',
                                        color: 'white',
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                                        flexShrink: 0
                                    }}>
                                        <span role="img" aria-label="icon">{phase.icon}</span>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ marginBottom: '0.25rem', fontSize: 'var(--text-lg)' }}>{phase.title}</h4>
                                        <div className="flex justify-between items-center w-full">
                                            <span className="text-xs text-muted uppercase tracking-wider font-semibold">
                                                {index === 0 ? 'Foundation' : `Phase ${index}`}
                                            </span>
                                            <span className="text-xs font-bold" style={{ color: phaseProgress.percent === 100 ? 'var(--color-success)' : 'var(--color-primary-light)' }}>
                                                {phaseProgress.percent}%
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-sm text-secondary mb-6" style={{ minHeight: '4.5em', lineHeight: '1.6' }}>
                                    {phase.description}
                                </p>

                                <div className="progress-bar mb-6" style={{ height: '6px' }}>
                                    <div
                                        className="progress-bar-fill"
                                        style={{
                                            width: `${phaseProgress.percent}%`,
                                            background: phaseProgress.percent === 100 ? 'var(--color-success)' : undefined
                                        }}
                                    />
                                </div>

                                <Link
                                    to={`/lesson/${phase.firstLesson}`}
                                    className={`btn ${phaseProgress.completed > 0 ? 'btn-primary' : 'btn-secondary'} w-full`}
                                >
                                    {phaseProgress.completed >= phaseProgress.total ? 'Review Phase' : phaseProgress.completed > 0 ? 'Resume Journey' : 'Begin Journey'}
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Features */}
            <section style={{ marginTop: 'var(--space-16)', paddingBottom: 'var(--space-12)' }}>
                <h2 className="text-center mb-12">Why ZeroLogic?</h2>
                <div style={{
                    display: 'grid',
                    gap: 'var(--space-6)',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
                }}>
                    {[
                        {
                            icon: (
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <path d="M20.7 7.3l-1.4 1.4"></path>
                                    <path d="M4.7 16.3l-1.4 1.4"></path>
                                </svg>
                            ),
                            title: 'Logic First, Syntax Later',
                            desc: 'Understand WHY before HOW. Every concept starts with a real-life analogy.'
                        },
                        {
                            icon: (
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                                </svg>
                            ),
                            title: 'Mobile-First Design',
                            desc: 'Learn anywhere, anytime. Optimized for your phone.'
                        },
                        {
                            icon: (
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                            ),
                            title: 'Interactive Code Editor',
                            desc: 'Write and run Python code directly in your browser.'
                        },
                        {
                            icon: (
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                                </svg>
                            ),
                            title: 'Exam-Ready',
                            desc: 'Content aligned with college syllabus. Practice what matters.'
                        }
                    ].map((feature, i) => (
                        <div key={i} className="card-glass hover-premium" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
                            <div className="mb-6" style={{ display: 'flex', justifyContent: 'center' }}>
                                {feature.icon}
                            </div>
                            <h4 className="mb-3">{feature.title}</h4>
                            <p className="text-sm text-secondary">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home
