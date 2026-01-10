import { Routes, Route } from 'react-router-dom'
import { useState, createContext, useContext, useEffect, useRef } from 'react'
import { AuthProvider, useAuth } from './context/AuthContext'
import { saveProgress, loadProgress } from './services/progressService'
import Navbar from './components/layout/Navbar'
import MobileNav from './components/layout/MobileNav'
import Sidebar from './components/layout/Sidebar'
import SidebarToggle from './components/layout/SidebarToggle'
import ProtectedRoute from './components/auth/ProtectedRoute'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Lesson from './pages/Lesson'
import Practice from './pages/Practice'
import Login from './pages/Login'
import Projects from './pages/Projects'
import Diagnostic from './pages/Diagnostic'
import ResetPassword from './pages/ResetPassword'
import { lessons, phases } from './content/lessons'

// Progress Context
export const ProgressContext = createContext()

export function useProgress() {
    return useContext(ProgressContext)
}

const defaultProgress = {
    completedLessons: [],
    currentLesson: null,
    lastVisited: null
}

function AppContent() {
    const { user } = useAuth()
    const [loading, setLoading] = useState(true)
    const saveTimeoutRef = useRef(null)

    const [progress, setProgress] = useState(() => {
        const saved = localStorage.getItem('zerologic_progress')
        return saved ? JSON.parse(saved) : defaultProgress
    })

    // Load progress from Supabase when user logs in
    useEffect(() => {
        async function fetchProgress() {
            if (user) {
                try {
                    const cloudProgress = await loadProgress(user.id)
                    if (cloudProgress) {
                        // Merge cloud progress with local (cloud takes priority)
                        setProgress(prev => ({
                            completedLessons: [...new Set([...prev.completedLessons, ...cloudProgress.completedLessons])],
                            currentLesson: cloudProgress.currentLesson || prev.currentLesson,
                            lastVisited: cloudProgress.lastVisited || prev.lastVisited
                        }))
                    }
                } catch (err) {
                    console.error('Failed to load progress:', err)
                }
            }
            setLoading(false)
        }
        fetchProgress()
    }, [user])

    // Save progress to localStorage always, and to Supabase when logged in (debounced)
    useEffect(() => {
        localStorage.setItem('zerologic_progress', JSON.stringify(progress))

        if (user) {
            // Debounce Supabase saves to avoid too many requests
            if (saveTimeoutRef.current) {
                clearTimeout(saveTimeoutRef.current)
            }
            saveTimeoutRef.current = setTimeout(() => {
                saveProgress(user.id, progress).catch(err =>
                    console.error('Failed to save progress:', err)
                )
            }, 1000)
        }

        return () => {
            if (saveTimeoutRef.current) {
                clearTimeout(saveTimeoutRef.current)
            }
        }
    }, [progress, user])

    const markLessonComplete = (lessonId) => {
        setProgress(prev => ({
            ...prev,
            completedLessons: [...new Set([...prev.completedLessons, lessonId])],
            lastVisited: lessonId
        }))
    }

    const setCurrentLesson = (lessonId) => {
        setProgress(prev => ({
            ...prev,
            currentLesson: lessonId,
            lastVisited: lessonId
        }))
    }

    const getPhaseProgress = (phaseId) => {
        const phaseLessons = lessons.filter(l => l.phase === phaseId)
        const completed = phaseLessons.filter(l =>
            progress.completedLessons.includes(l.id)
        ).length
        return {
            completed,
            total: phaseLessons.length,
            percent: phaseLessons.length > 0
                ? Math.round((completed / phaseLessons.length) * 100)
                : 0
        }
    }

    const getTotalProgress = () => {
        return {
            completed: progress.completedLessons.length,
            total: lessons.length,
            percent: lessons.length > 0
                ? Math.round((progress.completedLessons.length / lessons.length) * 100)
                : 0
        }
    }

    const [isSidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

    const progressValue = {
        ...progress,
        markLessonComplete,
        setCurrentLesson,
        getPhaseProgress,
        getTotalProgress,
        lessons,
        phases,
        loading
    }

    return (
        <ProgressContext.Provider value={progressValue}>
            <div className={`app ${!user ? 'auth-view' : ''}`}>
                {user && <Navbar onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />}
                {user && <Sidebar isOpen={isSidebarOpen} />}
                {user && <SidebarToggle isOpen={isSidebarOpen} onToggle={toggleSidebar} />}
                <main className={`main-content ${!user ? 'no-sidebar' : (!isSidebarOpen ? 'sidebar-closed' : '')}`}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/dashboard" element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        } />
                        <Route path="/lesson/:lessonId" element={
                            <ProtectedRoute>
                                <Lesson />
                            </ProtectedRoute>
                        } />
                        <Route path="/practice" element={
                            <ProtectedRoute>
                                <Practice />
                            </ProtectedRoute>
                        } />
                        <Route path="/projects" element={
                            <ProtectedRoute>
                                <Projects />
                            </ProtectedRoute>
                        } />
                        <Route path="/diagnostic" element={
                            <ProtectedRoute>
                                <Diagnostic />
                            </ProtectedRoute>
                        } />
                        <Route path="/reset-password" element={<ResetPassword />} />
                    </Routes>
                </main>
                {user && <MobileNav />}
            </div>
        </ProgressContext.Provider>
    )
}

function App() {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    )
}

export default App
