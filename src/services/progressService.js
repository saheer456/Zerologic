import { supabase } from '../lib/supabase'

// Save progress to Supabase
export async function saveProgress(userId, progress) {
    const { error } = await supabase
        .from('user_progress')
        .upsert({
            user_id: userId,
            completed_lessons: progress.completedLessons,
            current_lesson: progress.currentLesson,
            last_visited: progress.lastVisited,
            updated_at: new Date().toISOString()
        }, {
            onConflict: 'user_id'
        })

    if (error) {
        console.error('Error saving progress:', error)
        throw error
    }
}

// Load progress from Supabase
export async function loadProgress(userId) {
    const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single()

    if (error && error.code !== 'PGRST116') { // PGRST116 = no rows found
        console.error('Error loading progress:', error)
        throw error
    }

    if (data) {
        return {
            completedLessons: data.completed_lessons || [],
            currentLesson: data.current_lesson,
            lastVisited: data.last_visited
        }
    }

    return null
}
