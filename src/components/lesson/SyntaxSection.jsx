import { useState } from 'react'

function SyntaxSection({ data }) {
    if (!data) return null

    const [showExplanations, setShowExplanations] = useState(false)

    return (
        <section className="lesson-section syntax-block">
            <div className="lesson-section-header">
                <div className="lesson-section-icon">💻</div>
                <h3 className="lesson-section-title">Python Syntax</h3>
            </div>

            <div className="code-editor-container">
                <div className="code-editor-header">
                    <div className="code-editor-title">
                        <span style={{ color: 'var(--color-success)' }}>●</span>
                        <span>example.py</span>
                    </div>
                    <button
                        className="btn btn-ghost"
                        style={{ padding: 'var(--space-1) var(--space-3)', minHeight: 'auto' }}
                        onClick={() => setShowExplanations(!showExplanations)}
                    >
                        {showExplanations ? 'Hide' : 'Show'} Explanations
                    </button>
                </div>

                <div style={{ padding: 'var(--space-4)', overflowX: 'auto' }}>
                    <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)' }}>
                        {data.code.split('\n').map((line, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                gap: 'var(--space-4)',
                                marginBottom: 'var(--space-1)'
                            }}>
                                <span style={{
                                    color: 'var(--color-text-muted)',
                                    minWidth: '24px',
                                    userSelect: 'none'
                                }}>
                                    {i + 1}
                                </span>
                                <code style={{ color: 'var(--color-text-primary)' }}>
                                    {line || ' '}
                                </code>
                                {showExplanations && data.lineExplanations?.[i] && (
                                    <span style={{
                                        color: 'var(--color-text-muted)',
                                        fontSize: 'var(--text-xs)',
                                        marginLeft: 'var(--space-4)'
                                    }}>
                                        ← {data.lineExplanations[i]}
                                    </span>
                                )}
                            </div>
                        ))}
                    </pre>
                </div>
            </div>

            {data.note && (
                <div className="callout callout-tip" style={{ marginTop: 'var(--space-4)' }}>
                    <strong>💡 Note:</strong> {data.note}
                </div>
            )}
        </section>
    )
}

export default SyntaxSection
