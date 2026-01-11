import { useProgress } from '../../App'
import { achievements, getUnlockedAchievements } from '../../content/achievements'

function BadgeDisplay({ compact = false, showLocked = true }) {
    const progress = useProgress()

    const unlockedIds = getUnlockedAchievements(progress, progress.lessons).map(a => a.id)

    const displayAchievements = showLocked
        ? achievements
        : achievements.filter(a => unlockedIds.includes(a.id))

    if (compact) {
        // Compact view - just show unlocked count
        return (
            <div className="badge-compact">
                <span className="badge-count">{unlockedIds.length}</span>
                <span className="badge-label">/ {achievements.length} badges</span>
            </div>
        )
    }

    return (
        <div className="achievements-container">
            <div className="badge-container">
                {displayAchievements.map(achievement => {
                    const isUnlocked = unlockedIds.includes(achievement.id)
                    return (
                        <div
                            key={achievement.id}
                            className={`achievement-badge ${isUnlocked ? 'unlocked' : 'locked'}`}
                            title={achievement.description}
                        >
                            <span className="badge-icon">{achievement.icon}</span>
                            <span className="badge-name">{achievement.name}</span>
                            {!isUnlocked && (
                                <span className="badge-lock">🔒</span>
                            )}
                        </div>
                    )
                })}
            </div>

            <div className="achievement-summary">
                <span className="achievement-progress">
                    {unlockedIds.length} of {achievements.length} achievements unlocked
                </span>
            </div>
        </div>
    )
}

export default BadgeDisplay
