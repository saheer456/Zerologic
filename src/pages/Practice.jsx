import CodeEditor from '../components/editor/CodeEditor'

function Practice() {
    return (
        <div className="container animate-fadeIn">
            <h1 className="mb-4">Practice Python</h1>
            <p className="text-secondary mb-6">
                Write and run Python code directly in your browser. No installation needed!
            </p>

            <div className="mb-8">
                <CodeEditor
                    initialCode={`# Welcome to ZeroLogic Python Editor!
# Try writing your first Python program:

print("Hello, World!")
print("I am learning Python!")

# Try some math:
result = 5 + 3
print("5 + 3 =", result)`}
                />
            </div>

            <div className="card mb-6">
                <h3 className="mb-4">💡 Tips for the Editor</h3>
                <ul style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)',
                    listStyle: 'none'
                }}>
                    <li className="text-secondary">• Press <code>Ctrl + Enter</code> to run code quickly</li>
                    <li className="text-secondary">• Press <code>Tab</code> to indent (add spaces)</li>
                    <li className="text-secondary">• Click <strong>Reset</strong> to restore original code</li>
                    <li className="text-secondary">• Errors will show helpful explanations</li>
                </ul>
            </div>

            <div className="card">
                <h3 className="mb-4">🎯 Try These Challenges</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <div>
                        <h4 style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-2)' }}>
                            Challenge 1: Print your name
                        </h4>
                        <p className="text-sm text-secondary">
                            Use print() to display your name on screen.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-2)' }}>
                            Challenge 2: Calculate your age in months
                        </h4>
                        <p className="text-sm text-secondary">
                            Create a variable for your age, multiply by 12, and print the result.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-2)' }}>
                            Challenge 3: Check if a number is even
                        </h4>
                        <p className="text-sm text-secondary">
                            Use the modulus operator (%) to check if 17 is even or odd.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Practice
