import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../content/projects'
import CodeEditor from '../components/editor/CodeEditor'

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [showSolution, setShowSolution] = useState(false)
    const [showStarterCode, setShowStarterCode] = useState(false)
    const [showHints, setShowHints] = useState(0) // 0 = no hints, 1 = hint 1, 2 = hint 2, etc.
    const [userCode, setUserCode] = useState('')
    const [filter, setFilter] = useState('all')

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.level === filter)

    const levelColors = {
        beginner: { bg: 'var(--color-success-bg)', text: 'var(--color-success)' },
        intermediate: { bg: 'var(--color-warning-bg)', text: 'var(--color-warning)' },
        advanced: { bg: 'var(--color-error-bg)', text: 'var(--color-error)' }
    }

    // Generate progressive hints from the project
    const getHints = (project) => {
        const hints = []

        // Hint 1: Concepts to use
        hints.push({
            title: '💡 Hint 1: Key Concepts',
            content: `Focus on these concepts: ${project.concepts.join(', ')}`
        })

        // Hint 2: Structure suggestion
        hints.push({
            title: '💡 Hint 2: Code Structure',
            content: `Think about the flow:\n1. Get input from user\n2. Process the data\n3. Display the result\n\nBreak the problem into smaller functions.`
        })

        // Hint 3: Starter code snippets (first few lines)
        const starterLines = project.starterCode.split('\n').slice(0, 8).join('\n')
        hints.push({
            title: '💡 Hint 3: Getting Started',
            content: `Here's how to begin:\n\n${starterLines}...`
        })

        return hints
    }

    const resetProjectState = () => {
        setShowSolution(false)
        setShowStarterCode(false)
        setShowHints(0)
        setUserCode('')
    }

    if (selectedProject) {
        const hints = getHints(selectedProject)

        return (
            <div className="container animate-fadeIn">
                <button
                    onClick={() => { setSelectedProject(null); resetProjectState() }}
                    className="btn btn-ghost mb-4"
                >
                    ← Back to Projects
                </button>

                <div className="mb-6">
                    <span
                        className="badge mb-2"
                        style={{
                            background: levelColors[selectedProject.level].bg,
                            color: levelColors[selectedProject.level].text
                        }}
                    >
                        {selectedProject.level}
                    </span>
                    <h1>{selectedProject.title}</h1>
                    <p className="text-secondary">{selectedProject.description}</p>

                    <div className="flex gap-4 mt-4" style={{ flexWrap: 'wrap' }}>
                        <span className="text-sm text-muted">⏱️ ~{selectedProject.timeMinutes} min</span>
                        <span className="text-sm text-muted">📚 Phase {selectedProject.phase}</span>
                        <span className="text-sm text-muted">
                            {'⭐'.repeat(selectedProject.difficulty)}
                        </span>
                    </div>
                </div>

                {/* Instructions */}
                <div className="card mb-6">
                    <h3 className="mb-4">📋 Instructions</h3>
                    <pre style={{
                        whiteSpace: 'pre-wrap',
                        fontFamily: 'inherit',
                        color: 'var(--color-text-secondary)'
                    }}>
                        {selectedProject.instructions}
                    </pre>
                </div>

                {/* Concepts */}
                <div className="card mb-6">
                    <h3 className="mb-4">📖 Concepts You'll Need</h3>
                    <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                        {selectedProject.concepts.map((concept, i) => (
                            <span key={i} className="badge badge-primary">{concept}</span>
                        ))}
                    </div>
                </div>

                {/* Your Code Editor - Empty by Default */}
                <div className="card mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3>💻 Your Code</h3>
                        <span className="text-sm text-muted">Try it yourself first!</span>
                    </div>
                    <CodeEditor
                        initialCode={userCode || `# ${selectedProject.title}\n# Start coding here!\n\n`}
                        onChange={(code) => setUserCode(code)}
                    />
                </div>

                {/* Progressive Help Section */}
                <div className="card mb-6">
                    <h3 className="mb-4">🆘 Need Help?</h3>
                    <p className="text-sm text-muted mb-4">
                        Stuck? Use hints progressively before looking at the solution!
                    </p>

                    {/* Hint Buttons */}
                    <div className="flex gap-2 mb-4" style={{ flexWrap: 'wrap' }}>
                        {hints.map((hint, i) => (
                            <button
                                key={i}
                                onClick={() => setShowHints(i + 1)}
                                className={`btn ${showHints >= i + 1 ? 'btn-primary' : 'btn-secondary'}`}
                                disabled={showHints >= i + 1}
                            >
                                {showHints >= i + 1 ? '✓' : '💡'} Hint {i + 1}
                            </button>
                        ))}
                    </div>

                    {/* Show revealed hints */}
                    {Array.from({ length: showHints }, (_, i) => (
                        <div key={i} className="callout callout-tip mb-3">
                            <strong>{hints[i].title}</strong>
                            <pre style={{
                                whiteSpace: 'pre-wrap',
                                fontFamily: 'inherit',
                                marginTop: 'var(--space-2)',
                                fontSize: 'var(--text-sm)'
                            }}>
                                {hints[i].content}
                            </pre>
                        </div>
                    ))}

                    {/* Show Starter Code button - available after hint 2 */}
                    {showHints >= 2 && !showStarterCode && (
                        <button
                            onClick={() => setShowStarterCode(true)}
                            className="btn btn-secondary mr-2"
                        >
                            📝 Show Starter Code
                        </button>
                    )}

                    {/* Show Solution button - available after all hints */}
                    {showHints >= hints.length && !showSolution && (
                        <button
                            onClick={() => setShowSolution(true)}
                            className="btn btn-error"
                            style={{ background: 'var(--color-error-bg)', color: 'var(--color-error)' }}
                        >
                            👁️ Show Full Solution
                        </button>
                    )}
                </div>

                {/* Starter Code (if revealed) */}
                {showStarterCode && (
                    <div className="card mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3>📝 Starter Code</h3>
                            <button
                                onClick={() => setUserCode(selectedProject.starterCode)}
                                className="btn btn-secondary"
                                style={{ fontSize: 'var(--text-sm)' }}
                            >
                                📋 Copy to Your Editor
                            </button>
                        </div>
                        <div className="code-editor-container">
                            <pre style={{
                                padding: 'var(--space-4)',
                                margin: 0,
                                fontFamily: 'var(--font-mono)',
                                fontSize: 'var(--text-sm)',
                                overflow: 'auto'
                            }}>
                                {selectedProject.starterCode}
                            </pre>
                        </div>
                    </div>
                )}

                {/* Solution (if revealed) */}
                {showSolution && (
                    <div className="card mb-6" style={{ borderColor: 'var(--color-success)' }}>
                        <div className="flex justify-between items-center mb-4">
                            <h3 style={{ color: 'var(--color-success)' }}>✅ Solution</h3>
                            <button
                                onClick={() => setShowSolution(false)}
                                className="btn btn-ghost"
                                style={{ fontSize: 'var(--text-sm)' }}
                            >
                                🔒 Hide Solution
                            </button>
                        </div>
                        <CodeEditor
                            initialCode={selectedProject.solution}
                        />
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="container animate-fadeIn">
            <h1 className="mb-2">Practice Projects</h1>
            <p className="text-secondary mb-6">
                Build real projects to reinforce your learning. Try to solve them yourself first - hints are available if you get stuck!
            </p>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6" style={{ flexWrap: 'wrap' }}>
                {['all', 'beginner', 'intermediate', 'advanced'].map(level => (
                    <button
                        key={level}
                        onClick={() => setFilter(level)}
                        className={`btn ${filter === level ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ textTransform: 'capitalize' }}
                    >
                        {level === 'all' ? '🎯 All' : level}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 'var(--space-4)'
            }}>
                {filteredProjects.map(project => (
                    <div
                        key={project.id}
                        className="card"
                        onClick={() => setSelectedProject(project)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="flex justify-between items-start mb-3">
                            <span
                                className="badge"
                                style={{
                                    background: levelColors[project.level].bg,
                                    color: levelColors[project.level].text
                                }}
                            >
                                {project.level}
                            </span>
                            <span className="text-sm text-muted">
                                {'⭐'.repeat(project.difficulty)}
                            </span>
                        </div>

                        <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }}>
                            {project.title}
                        </h3>
                        <p className="text-sm text-secondary mb-4">
                            {project.description}
                        </p>

                        <div className="flex gap-4 text-sm text-muted">
                            <span>⏱️ {project.timeMinutes}m</span>
                            <span>📚 Phase {project.phase}</span>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center text-muted mt-8">
                    No projects found for this level.
                </div>
            )}
        </div>
    )
}

export default Projects
