import { useState } from 'react'

function MicroPractice({ data, lessonId }) {
    const [answers, setAnswers] = useState({})
    const [showHints, setShowHints] = useState({})
    const [checked, setChecked] = useState({})

    if (!data || data.length === 0) return null

    const handleCheck = (index, correct) => {
        setChecked(prev => ({ ...prev, [index]: correct }))
    }

    return (
        <section className="lesson-section practice-block">
            <div className="lesson-section-header">
                <div className="lesson-section-icon">🎯</div>
                <h3 className="lesson-section-title">Practice Time</h3>
            </div>

            {data.map((exercise, index) => (
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
                                    exercise.type === 'debug' ? '🐛 Debug' : '💻 Write'}
                        </span>
                        {checked[index] !== undefined && (
                            <span className={`badge ${checked[index] ? 'badge-success' : 'badge-error'}`}>
                                {checked[index] ? '✓ Correct!' : '✗ Try again'}
                            </span>
                        )}
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
                            {exercise.options.map((option, optIndex) => (
                                <button
                                    key={optIndex}
                                    className={`btn btn-secondary ${answers[index] === optIndex ? 'active' : ''}`}
                                    style={{
                                        justifyContent: 'flex-start',
                                        background: answers[index] === optIndex
                                            ? 'rgba(99, 102, 241, 0.2)'
                                            : undefined
                                    }}
                                    onClick={() => {
                                        setAnswers(prev => ({ ...prev, [index]: optIndex }))
                                        handleCheck(index, optIndex === exercise.correctIndex)
                                    }}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <input
                                type="text"
                                className="input"
                                placeholder="Your answer..."
                                value={answers[index] || ''}
                                onChange={(e) => setAnswers(prev => ({ ...prev, [index]: e.target.value }))}
                            />
                            <button
                                className="btn btn-primary mt-4"
                                onClick={() => {
                                    const isCorrect = answers[index]?.toLowerCase().trim() ===
                                        exercise.answer?.toLowerCase().trim()
                                    handleCheck(index, isCorrect)
                                }}
                            >
                                Check Answer
                            </button>
                        </div>
                    )}

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
                </div>
            ))}
        </section>
    )
}

export default MicroPractice
