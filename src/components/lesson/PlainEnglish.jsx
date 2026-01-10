function PlainEnglish({ data }) {
    if (!data) return null

    return (
        <section className="lesson-section plain-english">
            <div className="lesson-section-header">
                <div className="lesson-section-icon">📖</div>
                <h3 className="lesson-section-title">In Plain English</h3>
            </div>

            <div style={{ fontSize: 'var(--text-lg)', lineHeight: 1.8 }}>
                {data.explanation.split('\n\n').map((para, i) => (
                    <p key={i} style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>
                        {para}
                    </p>
                ))}
            </div>

            {data.keyPoints && (
                <div style={{
                    background: 'var(--color-bg-tertiary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-4)',
                    marginTop: 'var(--space-4)'
                }}>
                    <h4 style={{ marginBottom: 'var(--space-3)', fontSize: 'var(--text-sm)' }}>
                        📌 Key Points
                    </h4>
                    <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-2)'
                    }}>
                        {data.keyPoints.map((point, i) => (
                            <li key={i} style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 'var(--space-2)',
                                color: 'var(--color-text-secondary)'
                            }}>
                                <span style={{ color: 'var(--color-accent)' }}>•</span>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    )
}

export default PlainEnglish
