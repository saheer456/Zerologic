function MentalModel({ data }) {
    if (!data) return null

    return (
        <section className="lesson-section mental-model">
            <div className="lesson-section-header">
                <div className="lesson-section-icon">🧠</div>
                <h3 className="lesson-section-title">Mental Model</h3>
            </div>

            <div className="callout-tip" style={{
                background: 'rgba(99, 102, 241, 0.1)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-4)',
                marginBottom: 'var(--space-4)'
            }}>
                <p style={{
                    fontSize: 'var(--text-lg)',
                    fontStyle: 'italic',
                    color: 'var(--color-text-primary)',
                    margin: 0
                }}>
                    💡 Think of it like: <strong>{data.analogy}</strong>
                </p>
            </div>

            {data.explanation && (
                <p className="text-secondary">{data.explanation}</p>
            )}

            {data.diagram && (
                <div style={{
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-5)',
                    marginTop: 'var(--space-4)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    overflow: 'auto'
                }}>
                    <pre style={{
                        fontFamily: '"Fira Code", "JetBrains Mono", Consolas, monospace',
                        fontSize: '13px',
                        lineHeight: '1.5',
                        color: 'var(--color-accent)',
                        whiteSpace: 'pre',
                        margin: 0,
                        textAlign: 'left',
                        display: 'inline-block',
                        minWidth: 'fit-content'
                    }}>
                        {data.diagram.trim()}
                    </pre>
                </div>
            )}
        </section>
    )
}

export default MentalModel
