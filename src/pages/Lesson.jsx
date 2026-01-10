import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useProgress } from '../App'
import MentalModel from '../components/lesson/MentalModel'
import WhyItExists from '../components/lesson/WhyItExists'
import PlainEnglish from '../components/lesson/PlainEnglish'
import SyntaxSection from '../components/lesson/SyntaxSection'
import CommonMistakes from '../components/lesson/CommonMistakes'
import MicroPractice from '../components/lesson/MicroPractice'

function Lesson() {
    const { lessonId } = useParams()
    const navigate = useNavigate()
    const { lessons, setCurrentLesson, markLessonComplete, completedLessons } = useProgress()

    const lesson = lessons.find(l => l.id === lessonId)
    const currentIndex = lessons.findIndex(l => l.id === lessonId)
    const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null
    const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null
    const isCompleted = completedLessons.includes(lessonId)

    // Set current lesson ID
    useEffect(() => {
        if (lessonId) {
            setCurrentLesson(lessonId)
        }
    }, [lessonId, setCurrentLesson])

    // Scroll to top ONLY when lesson changes
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [lessonId])

    if (!lesson) {
        return (
            <div className="container text-center" style={{ paddingTop: 'var(--space-16)' }}>
                <h2>Lesson not found</h2>
                <p className="text-secondary mb-6">The lesson you're looking for doesn't exist.</p>
                <Link to="/" className="btn btn-primary">Go Home</Link>
            </div>
        )
    }

    const handleComplete = () => {
        markLessonComplete(lessonId)
        if (nextLesson) {
            navigate(`/lesson/${nextLesson.id}`)
        }
    }

    return (
        <div className="container animate-fadeIn">
            {/* Lesson Header */}
            <header style={{ marginBottom: 'var(--space-8)' }}>
                <div className="flex items-center gap-2 mb-2">
                    <span className="badge badge-primary">Phase {lesson.phase}</span>
                    {isCompleted && <span className="badge badge-success">Completed</span>}
                </div>
                <h1>{lesson.title}</h1>
            </header>

            {/* 6-Step Learning Model */}
            <MentalModel data={lesson.mentalModel} />
            <WhyItExists data={lesson.whyItExists} />
            <PlainEnglish data={lesson.plainEnglish} />
            {lesson.syntax && <SyntaxSection data={lesson.syntax} />}
            {lesson.commonMistakes && <CommonMistakes data={lesson.commonMistakes} />}
            <MicroPractice data={lesson.microPractice} lessonId={lessonId} />

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 gap-4" style={{ flexWrap: 'wrap' }}>
                {prevLesson ? (
                    <Link to={`/lesson/${prevLesson.id}`} className="btn btn-secondary">
                        ← {prevLesson.title}
                    </Link>
                ) : <div />}

                {!isCompleted ? (
                    <button onClick={handleComplete} className="btn btn-primary">
                        Mark Complete & Continue →
                    </button>
                ) : nextLesson ? (
                    <Link to={`/lesson/${nextLesson.id}`} className="btn btn-primary">
                        Next: {nextLesson.title} →
                    </Link>
                ) : (
                    <Link to="/dashboard" className="btn btn-success">
                        🎉 All Done! View Progress
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Lesson
