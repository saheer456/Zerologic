import { useState, useEffect } from 'react'

function LessonNotes({ lessonId }) {
    const [notes, setNotes] = useState('')
    const [isSaved, setIsSaved] = useState(true)
    const [isExpanded, setIsExpanded] = useState(false)

    // Load notes from localStorage
    useEffect(() => {
        const savedNotes = localStorage.getItem(`zerologic_notes_${lessonId}`)
        if (savedNotes) {
            setNotes(savedNotes)
        } else {
            setNotes('')
        }
        setIsSaved(true)
    }, [lessonId])

    // Auto-save notes
    useEffect(() => {
        if (!isSaved) {
            const timer = setTimeout(() => {
                localStorage.setItem(`zerologic_notes_${lessonId}`, notes)
                setIsSaved(true)
            }, 1000)
            return () => clearTimeout(timer)
        }
    }, [notes, lessonId, isSaved])

    const handleNotesChange = (e) => {
        setNotes(e.target.value)
        setIsSaved(false)
    }

    const clearNotes = () => {
        if (confirm('Are you sure you want to clear your notes for this lesson?')) {
            setNotes('')
            localStorage.removeItem(`zerologic_notes_${lessonId}`)
            setIsSaved(true)
        }
    }

    return (
        <div className={`lesson-notes ${isExpanded ? 'expanded' : ''}`}>
            <button
                className="lesson-notes-header"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="notes-header-content">
                    <span className="notes-icon">📝</span>
                    <span className="notes-title">My Notes</span>
                    {notes.length > 0 && (
                        <span className="notes-badge">{notes.length} chars</span>
                    )}
                </div>
                <span className={`notes-arrow ${isExpanded ? 'open' : ''}`}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </span>
            </button>

            {isExpanded && (
                <div className="lesson-notes-content">
                    <textarea
                        value={notes}
                        onChange={handleNotesChange}
                        placeholder="Write your notes here... These are saved automatically and only visible to you."
                        className="notes-textarea"
                    />
                    <div className="notes-footer">
                        <span className={`notes-status ${isSaved ? 'saved' : 'saving'}`}>
                            {isSaved ? '✓ Saved' : '⏳ Saving...'}
                        </span>
                        {notes.length > 0 && (
                            <button className="btn btn-ghost text-sm" onClick={clearNotes}>
                                Clear Notes
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default LessonNotes
