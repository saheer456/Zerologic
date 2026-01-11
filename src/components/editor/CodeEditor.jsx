import { useState, useRef, useEffect } from 'react'

function CodeEditor({ initialCode = '', expectedOutput = null, readOnly = false }) {
    const [code, setCode] = useState(initialCode)
    const [output, setOutput] = useState('')
    const [isRunning, setIsRunning] = useState(false)
    const [error, setError] = useState(null)
    const [pyodideReady, setPyodideReady] = useState(false)
    const pyodideRef = useRef(null)
    const textareaRef = useRef(null)

    // Load Pyodide
    useEffect(() => {
        const loadPyodide = async () => {
            try {
                if (window.pyodide) {
                    pyodideRef.current = window.pyodide
                    setPyodideReady(true)
                    return
                }

                // Load Pyodide script
                const script = document.createElement('script')
                script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js'
                script.onload = async () => {
                    try {
                        const pyodide = await window.loadPyodide({
                            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
                        })
                        window.pyodide = pyodide
                        pyodideRef.current = pyodide
                        setPyodideReady(true)
                    } catch (err) {
                        console.error('Failed to load Pyodide:', err)
                        setError('Failed to load Python runtime')
                    }
                }
                document.head.appendChild(script)
            } catch (err) {
                console.error('Error loading Pyodide:', err)
            }
        }

        loadPyodide()
    }, [])

    const runCode = async () => {
        if (!pyodideRef.current) {
            setError('Python is still loading. Please wait...')
            return
        }

        setIsRunning(true)
        setError(null)
        setOutput('')

        try {
            // Capture stdout
            pyodideRef.current.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `)

            // Run the user's code
            pyodideRef.current.runPython(code)

            // Get the output
            const stdout = pyodideRef.current.runPython('sys.stdout.getvalue()')
            setOutput(stdout || '(No output)')

        } catch (err) {
            // Make error beginner-friendly
            let friendlyError = err.message

            if (err.message.includes('SyntaxError')) {
                friendlyError = '❌ Syntax Error: Check your code for typos, missing quotes, or brackets.\n\n' + err.message
            } else if (err.message.includes('NameError')) {
                friendlyError = '❌ Name Error: You\'re using a variable or function that doesn\'t exist yet.\n\n' + err.message
            } else if (err.message.includes('TypeError')) {
                friendlyError = '❌ Type Error: You\'re mixing incompatible types (like adding text to numbers).\n\n' + err.message
            } else if (err.message.includes('IndentationError')) {
                friendlyError = '❌ Indentation Error: Check your spacing. Python is picky about indentation!\n\n' + err.message
            }

            setError(friendlyError)
        } finally {
            setIsRunning(false)
        }
    }

    const resetCode = () => {
        setCode(initialCode)
        setOutput('')
        setError(null)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault()
            const start = e.target.selectionStart
            const end = e.target.selectionEnd
            setCode(code.substring(0, start) + '    ' + code.substring(end))
            setTimeout(() => {
                textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4
            }, 0)
        }

        // Ctrl/Cmd + Enter to run
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault()
            runCode()
        }
    }

    return (
        <div className="code-editor-container">
            <div className="code-editor-header">
                <div className="code-editor-title">
                    <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: pyodideReady ? 'var(--color-success)' : 'var(--color-warning)'
                    }}></span>
                    <span>Python Editor</span>
                    {!pyodideReady && (
                        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-warning)' }}>
                            Loading...
                        </span>
                    )}
                </div>
                <div className="code-editor-actions">
                    <button
                        className="btn btn-ghost"
                        onClick={resetCode}
                        style={{ padding: 'var(--space-1) var(--space-3)', minHeight: 'auto' }}
                    >
                        ↺ Reset
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={runCode}
                        disabled={isRunning || !pyodideReady}
                        style={{ padding: 'var(--space-1) var(--space-3)', minHeight: 'auto' }}
                    >
                        {isRunning ? '⏳ Running...' : '▶ Run'}
                    </button>
                </div>
            </div>

            <div style={{ position: 'relative' }}>
                <textarea
                    ref={textareaRef}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onKeyDown={handleKeyDown}
                    readOnly={readOnly}
                    spellCheck={false}
                    className="code-editor-textarea"
                    placeholder="Write your Python code here..."
                />
            </div>

            {(output || error) && (
                <div className={`code-output ${error ? 'error' : 'success'}`}>
                    <div style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-muted)',
                        marginBottom: 'var(--space-2)'
                    }}>
                        OUTPUT:
                    </div>
                    <pre style={{
                        margin: 0,
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word'
                    }}>
                        {error || output}
                    </pre>

                    {expectedOutput && output.trim() === expectedOutput.trim() && (
                        <div style={{
                            marginTop: 'var(--space-3)',
                            padding: 'var(--space-2) var(--space-3)',
                            background: 'var(--color-success-bg)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--color-success)'
                        }}>
                            ✓ Correct output!
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default CodeEditor
