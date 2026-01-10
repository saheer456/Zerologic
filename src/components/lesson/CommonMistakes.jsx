import { useState } from 'react'

function CommonMistakes({ data }) {
    if (!data || data.length === 0) return null

    const [activeView, setActiveView] = useState('wrong')

    return (
        <section className="lesson-section mistakes-block">
            <div className="lesson-section-header">
                <div className="lesson-section-icon">⚠️</div>
                <h3 className="lesson-section-title">Common Mistakes</h3>
            </div>

            {data.map((mistake, index) => (
                <div key={index} style={{ marginBottom: 'var(--space-6)' }}>
                    <div className="code-toggle">
                        <button
                            className={`code-toggle-btn ${activeView === 'wrong' ? 'active wrong' : ''}`}
                            onClick={() => setActiveView('wrong')}
                        >
                            ❌ Wrong
                        </button>
                        <button
                            className={`code-toggle-btn ${activeView === 'correct' ? 'active correct' : ''}`}
                            onClick={() => setActiveView('correct')}
                        >
                            ✅ Correct
                        </button>
                    </div>

                    <div className="code-editor-container">
                        <div style={{ padding: 'var(--space-4)' }}>
                            <pre style={{
                                margin: 0,
                                fontFamily: 'var(--font-mono)',
                                fontSize: 'var(--text-sm)',
                                color: activeView === 'wrong' ? 'var(--color-error)' : 'var(--color-success)'
                            }}>
                                {activeView === 'wrong' ? mistake.wrong : mistake.correct}
                            </pre>
                        </div>
                    </div>

                    <div className="callout callout-confused" style={{ marginTop: 'var(--space-3)' }}>
                        {mistake.explanation}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default CommonMistakes
