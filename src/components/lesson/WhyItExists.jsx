function WhyItExists({ data }) {
    if (!data) return null

    return (
        <section className="lesson-section why-exists">
            <div className="lesson-section-header">
                <div className="lesson-section-icon">❓</div>
                <h3 className="lesson-section-title">Why This Exists</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div>
                    <h4 style={{
                        color: 'var(--color-error)',
                        fontSize: 'var(--text-sm)',
                        marginBottom: 'var(--space-2)'
                    }}>
                        ❌ The Problem
                    </h4>
                    <p className="text-secondary">{data.problem}</p>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'var(--color-text-muted)'
                }}>
                    ↓
                </div>

                <div>
                    <h4 style={{
                        color: 'var(--color-success)',
                        fontSize: 'var(--text-sm)',
                        marginBottom: 'var(--space-2)'
                    }}>
                        ✅ The Solution
                    </h4>
                    <p className="text-secondary">{data.solution}</p>
                </div>
            </div>
        </section>
    )
}

export default WhyItExists
