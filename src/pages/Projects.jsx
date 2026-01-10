import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../content/projects'
import CodeEditor from '../components/editor/CodeEditor'

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [showSolution, setShowSolution] = useState(false)
    const [filter, setFilter] = useState('all')

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.level === filter)

    const levelColors = {
        beginner: { bg: 'var(--color-success-bg)', text: 'var(--color-success)' },
        intermediate: { bg: 'var(--color-warning-bg)', text: 'var(--color-warning)' },
        advanced: { bg: 'var(--color-error-bg)', text: 'var(--color-error)' }
    }

    if (selectedProject) {
        return (
            <div className="container animate-fadeIn">
                <button
                    onClick={() => { setSelectedProject(null); setShowSolution(false) }}
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

                <div className="card mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3>💻 {showSolution ? 'Solution' : 'Starter Code'}</h3>
                        <button
                            onClick={() => setShowSolution(!showSolution)}
                            className="btn btn-secondary"
                            style={{ fontSize: 'var(--text-sm)' }}
                        >
                            {showSolution ? '🔒 Hide Solution' : '👁️ Show Solution'}
                        </button>
                    </div>

                    <CodeEditor
                        initialCode={showSolution ? selectedProject.solution : selectedProject.starterCode}
                    />
                </div>

                <div className="card">
                    <h3 className="mb-4">📖 Concepts Used</h3>
                    <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                        {selectedProject.concepts.map((concept, i) => (
                            <span key={i} className="badge badge-primary">{concept}</span>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container animate-fadeIn">
            <h1 className="mb-2">Practice Projects</h1>
            <p className="text-secondary mb-6">
                Build real projects to reinforce your learning. Start with beginner projects and work your way up!
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
