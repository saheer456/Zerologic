// Achievement definitions for ZeroLogic
export const achievements = [
    // Learning Progress Achievements
    {
        id: 'first-steps',
        icon: '🌟',
        name: 'First Steps',
        description: 'Complete your first lesson',
        condition: (progress) => progress.completedLessons?.length >= 1,
        category: 'progress'
    },
    {
        id: 'bookworm',
        icon: '📚',
        name: 'Bookworm',
        description: 'Complete 10 lessons',
        condition: (progress) => progress.completedLessons?.length >= 10,
        category: 'progress'
    },
    {
        id: 'scholar',
        icon: '🎓',
        name: 'Scholar',
        description: 'Complete 25 lessons',
        condition: (progress) => progress.completedLessons?.length >= 25,
        category: 'progress'
    },
    {
        id: 'master',
        icon: '👑',
        name: 'Python Master',
        description: 'Complete all lessons',
        condition: (progress, lessons) => progress.completedLessons?.length >= lessons?.length,
        category: 'progress'
    },

    // Streak Achievements
    {
        id: 'on-fire',
        icon: '🔥',
        name: 'On Fire',
        description: '3-day learning streak',
        condition: (progress) => progress.streak >= 3,
        category: 'streak'
    },
    {
        id: 'week-warrior',
        icon: '⚡',
        name: 'Week Warrior',
        description: '7-day learning streak',
        condition: (progress) => progress.streak >= 7,
        category: 'streak'
    },
    {
        id: 'dedicated',
        icon: '💪',
        name: 'Dedicated Learner',
        description: '14-day learning streak',
        condition: (progress) => progress.streak >= 14,
        category: 'streak'
    },
    {
        id: 'unstoppable',
        icon: '🏆',
        name: 'Unstoppable',
        description: '30-day learning streak',
        condition: (progress) => progress.streak >= 30,
        category: 'streak'
    },

    // Phase Completion Achievements
    {
        id: 'phase-0-complete',
        icon: '🚀',
        name: 'Getting Started',
        description: 'Complete Phase 0',
        condition: (progress, lessons) => {
            const phase0 = lessons?.filter(l => l.phase === 0) || []
            return phase0.every(l => progress.completedLessons?.includes(l.id))
        },
        category: 'phase'
    },
    {
        id: 'phase-1-complete',
        icon: '💾',
        name: 'Data Master',
        description: 'Complete Phase 1 (Data Types)',
        condition: (progress, lessons) => {
            const phase1 = lessons?.filter(l => l.phase === 1) || []
            return phase1.length > 0 && phase1.every(l => progress.completedLessons?.includes(l.id))
        },
        category: 'phase'
    },
    {
        id: 'phase-2-complete',
        icon: '🔧',
        name: 'Operator Expert',
        description: 'Complete Phase 2 (Operators)',
        condition: (progress, lessons) => {
            const phase2 = lessons?.filter(l => l.phase === 2) || []
            return phase2.length > 0 && phase2.every(l => progress.completedLessons?.includes(l.id))
        },
        category: 'phase'
    },

    // Project Achievements
    {
        id: 'first-project',
        icon: '💻',
        name: 'Builder',
        description: 'Complete your first project',
        condition: (progress) => progress.completedProjects?.length >= 1,
        category: 'project'
    },
    {
        id: 'project-master',
        icon: '🛠️',
        name: 'Project Master',
        description: 'Complete 5 projects',
        condition: (progress) => progress.completedProjects?.length >= 5,
        category: 'project'
    },

    // Special Achievements
    {
        id: 'night-owl',
        icon: '🦉',
        name: 'Night Owl',
        description: 'Complete a lesson after 10 PM',
        condition: (progress) => progress.nightOwlUnlocked,
        category: 'special'
    },
    {
        id: 'early-bird',
        icon: '🐦',
        name: 'Early Bird',
        description: 'Complete a lesson before 7 AM',
        condition: (progress) => progress.earlyBirdUnlocked,
        category: 'special'
    }
]

// Get unlocked achievements based on current progress
export function getUnlockedAchievements(progress, lessons = []) {
    return achievements.filter(a => a.condition(progress, lessons))
}

// Get locked achievements
export function getLockedAchievements(progress, lessons = []) {
    return achievements.filter(a => !a.condition(progress, lessons))
}

// Check if a specific achievement is unlocked
export function isAchievementUnlocked(achievementId, progress, lessons = []) {
    const achievement = achievements.find(a => a.id === achievementId)
    return achievement ? achievement.condition(progress, lessons) : false
}

// Get achievements by category
export function getAchievementsByCategory(category) {
    return achievements.filter(a => a.category === category)
}
