import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { diagnosticQuestions, calculateDiagnosticResult } from '../content/diagnostic'
import { useProgress } from '../App'

// Modern SVG Icons
const Icons = {
    clipboard: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            <path d="M9 12h6" />
            <path d="M9 16h6" />
        </svg>
    ),
    clock: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    ),
    brain: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            <path d="M12 18v4" />
        </svg>
    ),
    lightbulb: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
        </svg>
    ),
    target: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    ),
    code: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    ),
    bug: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m8 2 1.88 1.88" />
            <path d="M14.12 3.88 16 2" />
            <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
            <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
            <path d="M12 20v-9" />
            <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
            <path d="M6 13H2" />
            <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
            <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
            <path d="M22 13h-4" />
            <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
        </svg>
    ),
    check: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    ),
    mapPin: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    ),
    arrowLeft: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
        </svg>
    ),
    arrowRight: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    ),
    sparkles: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" />
            <path d="M19 17v4" />
            <path d="M3 5h4" />
            <path d="M17 19h4" />
        </svg>
    )
}

function Diagnostic() {
    const navigate = useNavigate()
    const { setCurrentLesson } = useProgress()

    const [stage, setStage] = useState('intro')
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState([])
    const [selectedOption, setSelectedOption] = useState(null)
    const [showHint, setShowHint] = useState(false)
    const [result, setResult] = useState(null)

    const startTimeRef = useRef(null)

    useEffect(() => {
        if (stage === 'questions') {
            startTimeRef.current = Date.now()
        }
    }, [currentQuestion, stage])

    const question = diagnosticQuestions[currentQuestion]

    const handleStartDiagnostic = () => {
        setStage('questions')
        setCurrentQuestion(0)
        setAnswers([])
    }

    const handleSelectOption = (index) => {
        setSelectedOption(index)
    }

    const handleNextQuestion = () => {
        if (selectedOption === null) return

        const timeMs = Date.now() - startTimeRef.current

        const newAnswers = [...answers, {
            questionId: question.id,
            selectedIndex: selectedOption,
            timeMs,
            usedHint: showHint
        }]
        setAnswers(newAnswers)

        if (currentQuestion < diagnosticQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setSelectedOption(null)
            setShowHint(false)
        } else {
            const diagnosticResult = calculateDiagnosticResult(newAnswers)
            setResult(diagnosticResult)
            setStage('results')

            localStorage.setItem('zerologic_diagnostic', JSON.stringify({
                completed: true,
                result: diagnosticResult,
                completedAt: new Date().toISOString()
            }))
        }
    }

    const handleStartLearning = () => {
        if (result) {
            setCurrentLesson(result.recommendation.startingLessonId)
            navigate(`/lesson/${result.recommendation.startingLessonId}`)
        }
    }

    const fullScreenStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--color-bg-primary)',
        zIndex: 1000,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'var(--space-6)'
    }

    const containerStyle = {
        width: '100%',
        maxWidth: '700px',
        margin: '0 auto'
    }

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'logic': return Icons.brain
            case 'syntax': return Icons.code
            case 'error': return Icons.bug
            default: return Icons.brain
        }
    }

    const getCategoryLabel = (category) => {
        switch (category) {
            case 'logic': return 'Logic'
            case 'syntax': return 'Syntax'
            case 'error': return 'Error'
            default: return 'Logic'
        }
    }

    // Intro Screen
    if (stage === 'intro') {
        return (
            <div style={fullScreenStyle}>
                <div style={containerStyle} className="animate-fadeIn">
                    <div className="text-center mb-8">
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '24px',
                            background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto var(--space-4)',
                            color: 'white'
                        }}>
                            {Icons.clipboard}
                        </div>
                        <h1 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)' }}>
                            Entry Assessment
                        </h1>
                        <p className="text-secondary" style={{ fontSize: 'var(--text-lg)' }}>
                            Let's find the perfect starting point for your Python journey
                        </p>
                    </div>

                    <div className="card mb-6" style={{
                        background: 'var(--color-bg-secondary)',
                        padding: 'var(--space-6)'
                    }}>
                        <h3 className="mb-4" style={{ fontSize: 'var(--text-lg)' }}>What to expect:</h3>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-4)'
                        }}>
                            {[
                                { icon: Icons.clock, text: '10 questions, about 10-15 minutes', color: 'var(--color-primary)' },
                                { icon: Icons.brain, text: 'Tests logical thinking, not memorization', color: 'var(--color-accent)' },
                                { icon: Icons.lightbulb, text: 'Hints available if you need them', color: '#facc15' },
                                { icon: Icons.target, text: 'Places you at the right starting level', color: 'var(--color-success)' }
                            ].map((item, i) => (
                                <li key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--space-3)',
                                    fontSize: 'var(--text-base)'
                                }}>
                                    <span style={{
                                        color: item.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '12px',
                                        background: `${item.color}15`,
                                        flexShrink: 0
                                    }}>
                                        {item.icon}
                                    </span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card mb-6" style={{
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                        padding: 'var(--space-4)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-3)'
                    }}>
                        <span style={{ color: 'var(--color-primary)' }}>{Icons.sparkles}</span>
                        <p className="m-0" style={{ lineHeight: '1.6' }}>
                            This isn't a test of how smart you are. It helps us understand where you're starting from.
                        </p>
                    </div>

                    <button
                        className="btn btn-primary"
                        onClick={handleStartDiagnostic}
                        style={{
                            width: '100%',
                            padding: 'var(--space-4)',
                            fontSize: 'var(--text-lg)',
                            borderRadius: 'var(--radius-lg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 'var(--space-2)'
                        }}
                    >
                        Start Assessment {Icons.arrowRight}
                    </button>

                    <button
                        onClick={() => navigate('/')}
                        style={{
                            width: '100%',
                            marginTop: 'var(--space-3)',
                            padding: 'var(--space-3)',
                            background: 'none',
                            border: 'none',
                            color: 'var(--color-text-muted)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 'var(--space-2)'
                        }}
                    >
                        {Icons.arrowLeft} Back to Home
                    </button>
                </div>
            </div>
        )
    }

    // Questions Screen
    if (stage === 'questions') {
        return (
            <div style={fullScreenStyle}>
                <div style={containerStyle} className="animate-fadeIn">
                    {/* Progress Bar */}
                    <div className="mb-6">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 'var(--space-3)'
                        }}>
                            <span style={{
                                fontSize: 'var(--text-sm)',
                                color: 'var(--color-text-muted)',
                                fontWeight: '500'
                            }}>
                                Question {currentQuestion + 1} of {diagnosticQuestions.length}
                            </span>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 'var(--space-2)',
                                padding: 'var(--space-1) var(--space-3)',
                                background: 'var(--color-bg-tertiary)',
                                borderRadius: 'var(--radius-full)',
                                fontSize: 'var(--text-sm)',
                                color: 'var(--color-text-secondary)'
                            }}>
                                {getCategoryIcon(question.category)}
                                <span>{getCategoryLabel(question.category)}</span>
                            </span>
                        </div>
                        <div style={{
                            height: '8px',
                            background: 'var(--color-bg-tertiary)',
                            borderRadius: 'var(--radius-full)',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: `${((currentQuestion + 1) / diagnosticQuestions.length) * 100}%`,
                                height: '100%',
                                background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
                                borderRadius: 'var(--radius-full)',
                                transition: 'width 0.3s ease'
                            }} />
                        </div>
                    </div>

                    {/* Question Card */}
                    <div className="card mb-6" style={{
                        background: 'var(--color-bg-secondary)',
                        padding: 'var(--space-6)'
                    }}>
                        <h2 style={{
                            fontSize: 'var(--text-xl)',
                            marginBottom: 'var(--space-5)',
                            lineHeight: '1.4'
                        }}>
                            {question.question}
                        </h2>

                        <pre style={{
                            background: 'var(--color-bg-tertiary)',
                            padding: 'var(--space-5)',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'auto',
                            fontFamily: '"Fira Code", "JetBrains Mono", Consolas, monospace',
                            fontSize: '15px',
                            lineHeight: '1.7',
                            color: 'var(--color-accent)',
                            border: '1px solid var(--color-border)'
                        }}>
                            {question.code}
                        </pre>
                    </div>

                    {/* Options */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-3)',
                        marginBottom: 'var(--space-6)'
                    }}>
                        {question.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleSelectOption(index)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--space-4)',
                                    padding: 'var(--space-4)',
                                    background: selectedOption === index
                                        ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.1))'
                                        : 'var(--color-bg-secondary)',
                                    border: selectedOption === index
                                        ? '2px solid var(--color-primary)'
                                        : '2px solid var(--color-border)',
                                    borderRadius: 'var(--radius-lg)',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    transition: 'all 0.2s ease',
                                    color: 'var(--color-text-primary)',
                                    fontSize: 'var(--text-base)'
                                }}
                            >
                                <span style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '10px',
                                    background: selectedOption === index
                                        ? 'var(--color-primary)'
                                        : 'var(--color-bg-tertiary)',
                                    color: selectedOption === index
                                        ? 'white'
                                        : 'var(--color-text-secondary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    fontSize: 'var(--text-sm)',
                                    flexShrink: 0
                                }}>
                                    {String.fromCharCode(65 + index)}
                                </span>
                                <span style={{ flex: 1 }}>{option}</span>
                            </button>
                        ))}
                    </div>

                    {/* Hint */}
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        {!showHint ? (
                            <button
                                onClick={() => setShowHint(true)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--space-2)',
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--color-text-muted)',
                                    cursor: 'pointer',
                                    fontSize: 'var(--text-sm)',
                                    padding: 'var(--space-2)'
                                }}
                            >
                                <span style={{ color: '#facc15' }}>{Icons.lightbulb}</span>
                                Need a hint?
                            </button>
                        ) : (
                            <div style={{
                                background: 'rgba(250, 204, 21, 0.1)',
                                border: '1px solid rgba(250, 204, 21, 0.3)',
                                borderRadius: 'var(--radius-lg)',
                                padding: 'var(--space-4)',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 'var(--space-3)'
                            }}>
                                <span style={{ color: '#facc15', flexShrink: 0 }}>{Icons.lightbulb}</span>
                                <p style={{ margin: 0, color: 'var(--color-text-primary)' }}>
                                    <strong>Hint:</strong> {question.hint}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNextQuestion}
                        disabled={selectedOption === null}
                        style={{
                            width: '100%',
                            padding: 'var(--space-4)',
                            fontSize: 'var(--text-lg)',
                            background: selectedOption === null
                                ? 'var(--color-bg-tertiary)'
                                : 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                            color: selectedOption === null
                                ? 'var(--color-text-muted)'
                                : 'white',
                            border: 'none',
                            borderRadius: 'var(--radius-lg)',
                            cursor: selectedOption === null ? 'not-allowed' : 'pointer',
                            fontWeight: '600',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 'var(--space-2)'
                        }}
                    >
                        {currentQuestion < diagnosticQuestions.length - 1 ? 'Next Question' : 'See Results'}
                        {Icons.arrowRight}
                    </button>
                </div>
            </div>
        )
    }

    // Results Screen
    if (stage === 'results' && result) {
        return (
            <div style={fullScreenStyle}>
                <div style={containerStyle} className="animate-fadeIn">
                    <div className="text-center mb-6">
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))',
                            border: '3px solid var(--color-success)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto var(--space-4)',
                            color: 'var(--color-success)'
                        }}>
                            {Icons.check}
                        </div>
                        <h1 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)' }}>
                            Assessment Complete!
                        </h1>
                    </div>

                    <div className="card mb-6" style={{
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                        padding: 'var(--space-5)'
                    }}>
                        <p style={{
                            fontSize: 'var(--text-lg)',
                            lineHeight: '1.7',
                            margin: 0,
                            textAlign: 'center'
                        }}>
                            {result.feedback.message}
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 'var(--space-4)',
                        marginBottom: 'var(--space-6)'
                    }}>
                        <div className="card text-center" style={{ padding: 'var(--space-4)' }}>
                            <div style={{
                                fontSize: 'var(--text-2xl)',
                                fontWeight: 'bold',
                                color: 'var(--color-primary)',
                                marginBottom: 'var(--space-1)'
                            }}>
                                {result.stats.correctAnswers}/{result.stats.totalQuestions}
                            </div>
                            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                                Correct
                            </div>
                        </div>
                        <div className="card text-center" style={{ padding: 'var(--space-4)' }}>
                            <div style={{
                                fontSize: 'var(--text-xl)',
                                fontWeight: 'bold',
                                color: 'var(--color-accent)',
                                marginBottom: 'var(--space-1)'
                            }}>
                                {result.classification.logicLevel === 'high' ? 'Strong' :
                                    result.classification.logicLevel === 'medium' ? 'Developing' : 'Building'}
                            </div>
                            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                                Logic Level
                            </div>
                        </div>
                        <div className="card text-center" style={{ padding: 'var(--space-4)' }}>
                            <div style={{
                                fontSize: 'var(--text-2xl)',
                                fontWeight: 'bold',
                                color: 'var(--color-success)',
                                marginBottom: 'var(--space-1)'
                            }}>
                                {Math.round(result.stats.totalTimeMs / 1000 / 60)}m
                            </div>
                            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                                Time Taken
                            </div>
                        </div>
                    </div>

                    <div className="card mb-6" style={{ padding: 'var(--space-5)' }}>
                        <h3 style={{ marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                            {Icons.sparkles} Your Performance
                        </h3>

                        {[
                            { label: 'Logical Thinking', score: result.scores.logic, color: 'var(--color-primary)', icon: Icons.brain },
                            { label: 'Syntax Awareness', score: result.scores.syntax, color: 'var(--color-accent)', icon: Icons.code },
                            { label: 'Error Understanding', score: result.scores.error, color: 'var(--color-success)', icon: Icons.bug }
                        ].map((item, i) => (
                            <div key={i} style={{ marginBottom: i < 2 ? 'var(--space-4)' : 0 }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: 'var(--space-2)',
                                    fontSize: 'var(--text-sm)'
                                }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: item.color }}>
                                        {item.icon} {item.label}
                                    </span>
                                    <span style={{ fontWeight: '600' }}>{item.score}%</span>
                                </div>
                                <div style={{
                                    height: '10px',
                                    background: 'var(--color-bg-tertiary)',
                                    borderRadius: 'var(--radius-full)',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        width: `${item.score}%`,
                                        height: '100%',
                                        background: item.color,
                                        borderRadius: 'var(--radius-full)',
                                        transition: 'width 0.5s ease'
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card mb-6" style={{
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '2px solid rgba(16, 185, 129, 0.3)',
                        padding: 'var(--space-5)',
                        textAlign: 'center'
                    }}>
                        <div style={{ color: 'var(--color-success)', marginBottom: 'var(--space-2)' }}>
                            {Icons.mapPin}
                        </div>
                        <h3 style={{ marginBottom: 'var(--space-1)' }}>Your Starting Point</h3>
                        <p style={{
                            fontSize: 'var(--text-lg)',
                            fontWeight: '600',
                            color: 'var(--color-success)',
                            margin: 0
                        }}>
                            Phase {result.recommendation.phase}: {result.recommendation.phaseName}
                        </p>
                    </div>

                    <button
                        onClick={handleStartLearning}
                        style={{
                            width: '100%',
                            padding: 'var(--space-4)',
                            fontSize: 'var(--text-lg)',
                            background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                            color: 'white',
                            border: 'none',
                            borderRadius: 'var(--radius-lg)',
                            cursor: 'pointer',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 'var(--space-2)'
                        }}
                    >
                        Start Learning at Phase {result.recommendation.phase} {Icons.arrowRight}
                    </button>
                </div>
            </div>
        )
    }

    return null
}

export default Diagnostic
