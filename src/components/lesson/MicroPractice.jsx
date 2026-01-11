import { useState, useEffect, useMemo } from 'react'

function MicroPractice({ data, lessonId }) {
    const [answers, setAnswers] = useState({})
    const [showHints, setShowHints] = useState({})
    const [checked, setChecked] = useState({})
    const [showAnswer, setShowAnswer] = useState({})
    const [attempts, setAttempts] = useState({})

    // Shuffle exercises when lessonId changes for randomization
    const shuffledExercises = useMemo(() => {
        if (!data || data.length === 0) return []
        // Create a shuffled copy of the exercises
        const shuffled = [...data]
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
        }
        return shuffled
    }, [lessonId, data])

    // Reset state when lesson changes
    useEffect(() => {
        setAnswers({})
        setShowHints({})
        setChecked({})
        setShowAnswer({})
        setAttempts({})
    }, [lessonId])

    if (!shuffledExercises || shuffledExercises.length === 0) return null

    const handleCheck = (index, correct, exercise) => {
        const newAttempts = { ...attempts, [index]: (attempts[index] || 0) + 1 }
        setAttempts(newAttempts)
        setChecked(prev => ({ ...prev, [index]: correct }))

        // Show answer after 3 failed attempts
        if (!correct && newAttempts[index] >= 3) {
            setShowAnswer(prev => ({ ...prev, [index]: true }))
        }
    }

    const getAnswerDisplay = (exercise) => {
        if (exercise.type === 'multiple-choice' && exercise.options) {
            return exercise.options[exercise.correctIndex]
        }
        return exercise.answer
    }

    return (
        <section className="lesson-section practice-block">
            <div className="lesson-section-header">
                <div className="lesson-section-icon">🎯</div>
                <h3 className="lesson-section-title">Practice Time</h3>
            </div>

            {shuffledExercises.map((exercise, index) => (
                <div key={index} style={{
                    marginBottom: 'var(--space-6)',
                    padding: 'var(--space-4)',
                    background: 'var(--color-bg-tertiary)',
                    borderRadius: 'var(--radius-lg)'
                }}>
                    <div className="flex justify-between items-start mb-3">
                        <span className="badge badge-primary">
                            {exercise.type === 'predict-output' ? '🔮 Predict' :
                                exercise.type === 'fill-blank' ? '✏️ Fill' :
                                    exercise.type === 'debug' ? '🐛 Debug' :
                                        exercise.type === 'multiple-choice' ? '📝 Choose' : '💻 Write'}
                        </span>
                        <div className="flex gap-2 items-center">
                            {attempts[index] > 0 && (
                                <span className="text-sm text-muted">
                                    Attempts: {attempts[index]}
                                </span>
                            )}
                            {checked[index] !== undefined && (
                                <span className={`badge ${checked[index] ? 'badge-success' : 'badge-error'}`}>
                                    {checked[index] ? '✓ Correct!' : '✗ Try again'}
                                </span>
                            )}
                        </div>
                    </div>

                    <p style={{ marginBottom: 'var(--space-4)', fontWeight: 'var(--font-medium)' }}>
                        {exercise.question}
                    </p>

                    {exercise.code && (
                        <div className="code-editor-container" style={{ marginBottom: 'var(--space-3)' }}>
                            <div style={{ padding: 'var(--space-3)' }}>
                                <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)' }}>
                                    {exercise.code}
                                </pre>
                            </div>
                        </div>
                    )}

                    {exercise.type === 'multiple-choice' && exercise.options ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                            {exercise.options.map((option, optIndex) => {
                                const isSelected = answers[index] === optIndex
                                const isCorrect = optIndex === exercise.correctIndex
                                const showResult = checked[index] !== undefined

                                let buttonStyle = {
                                    justifyContent: 'flex-start',
                                    background: undefined,
                                    borderColor: undefined
                                }

                                if (showResult && isSelected) {
                                    if (isCorrect) {
                                        buttonStyle.background = 'rgba(34, 197, 94, 0.2)'
                                        buttonStyle.borderColor = 'var(--color-success)'
                                    } else {
                                        buttonStyle.background = 'rgba(239, 68, 68, 0.2)'
                                        buttonStyle.borderColor = 'var(--color-error)'
                                    }
                                } else if (showResult && showAnswer[index] && isCorrect) {
                                    // Show correct answer after 3 wrong attempts
                                    buttonStyle.background = 'rgba(34, 197, 94, 0.2)'
                                    buttonStyle.borderColor = 'var(--color-success)'
                                } else if (isSelected) {
                                    buttonStyle.background = 'rgba(99, 102, 241, 0.2)'
                                }

                                return (
                                    <button
                                        key={optIndex}
                                        className={`btn btn-secondary ${isSelected ? 'active' : ''}`}
                                        style={buttonStyle}
                                        onClick={() => {
                                            if (!checked[index]) {
                                                setAnswers(prev => ({ ...prev, [index]: optIndex }))
                                                handleCheck(index, optIndex === exercise.correctIndex, exercise)
                                            }
                                        }}
                                        disabled={checked[index] === true}
                                    >
                                        {option}
                                    </button>
                                )
                            })}
                        </div>
                    ) : (
                        <div>
                            <input
                                type="text"
                                className="input"
                                placeholder="Your answer..."
                                value={answers[index] || ''}
                                onChange={(e) => setAnswers(prev => ({ ...prev, [index]: e.target.value }))}
                                disabled={checked[index] === true}
                            />
                            <div className="flex gap-2 mt-4">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        const isCorrect = answers[index]?.toLowerCase().trim() ===
                                            exercise.answer?.toLowerCase().trim()
                                        handleCheck(index, isCorrect, exercise)
                                    }}
                                    disabled={checked[index] === true}
                                >
                                    Check Answer
                                </button>
                                {checked[index] === false && attempts[index] >= 2 && !showAnswer[index] && (
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => setShowAnswer(prev => ({ ...prev, [index]: true }))}
                                    >
                                        Show Answer
                                    </button>
                                )}
                            </div>

                            {/* Show answer after failed attempts */}
                            {showAnswer[index] && (
                                <div className="callout callout-success" style={{ marginTop: 'var(--space-3)' }}>
                                    <strong>Answer:</strong> {exercise.answer}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Hint system */}
                    {exercise.hints && exercise.hints.length > 0 && (
                        <div style={{ marginTop: 'var(--space-4)' }}>
                            <button
                                className="btn btn-ghost"
                                style={{ padding: 'var(--space-1) var(--space-2)', fontSize: 'var(--text-sm)' }}
                                onClick={() => setShowHints(prev => ({ ...prev, [index]: !prev[index] }))}
                            >
                                {showHints[index] ? '🙈 Hide Hint' : '💡 Need a Hint?'}
                            </button>
                            {showHints[index] && (
                                <div className="callout callout-tip" style={{ marginTop: 'var(--space-2)' }}>
                                    {exercise.hints[0]}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Reset button for trying again */}
                    {checked[index] !== undefined && (
                        <div style={{ marginTop: 'var(--space-3)' }}>
                            <button
                                className="btn btn-ghost"
                                style={{ fontSize: 'var(--text-sm)' }}
                                onClick={() => {
                                    setAnswers(prev => ({ ...prev, [index]: exercise.type === 'multiple-choice' ? undefined : '' }))
                                    setChecked(prev => ({ ...prev, [index]: undefined }))
                                    setShowAnswer(prev => ({ ...prev, [index]: false }))
                                    setAttempts(prev => ({ ...prev, [index]: 0 }))
                                }}
                            >
                                🔄 Try Again
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </section>
    )
}

export default MicroPractice
