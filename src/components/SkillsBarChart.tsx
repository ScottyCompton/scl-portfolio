'use client'

import { useTheme } from '@/contexts/ThemeContext'

interface TechSpec {
    _id: string
    title: string
    from: string
    to?: string
}

interface SkillsBarChartProps {
    techSpecs: TechSpec[]
}

const SkillsBarChart = ({ techSpecs }: SkillsBarChartProps) => {
    const { theme } = useTheme()
    const currentYear = new Date().getFullYear()
    const timelineStart = 1996
    const timelineEnd = currentYear
    const timelineSpan = timelineEnd - timelineStart + 1

    // Calculate years of experience and timeline positioning for each skill
    const skillsWithTimeline = techSpecs
        .map((skill) => {
            const fromYear = parseInt(skill.from)
            const toYear = skill.to ? parseInt(skill.to) : currentYear
            const yearsOfExperience = toYear - fromYear + 1

            // Calculate timeline positioning
            const startPosition =
                ((fromYear - timelineStart) / timelineSpan) * 100
            const durationPercentage = (yearsOfExperience / timelineSpan) * 100

            return {
                ...skill,
                yearsOfExperience,
                fromYear,
                toYear,
                startPosition,
                durationPercentage,
            }
        })
        .sort((a, b) => b.yearsOfExperience - a.yearsOfExperience) // Sort by experience (highest first)

    return (
        <div className="w-full max-w-6xl mx-auto p-6">
            {/* Timeline Header */}
            <div className="mb-8">
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                    <span>{timelineStart}</span>
                    <span>{currentYear}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </div>
            </div>

            <div className="space-y-4">
                {skillsWithTimeline.map((skill) => {
                    const isActive =
                        !skill.to || parseInt(skill.to) >= currentYear - 1

                    return (
                        <div
                            key={skill._id}
                            className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-2 lg:space-y-0"
                        >
                            {/* Skill Name - Top on mobile, Left on desktop */}
                            <div className="lg:w-48 lg:flex-shrink-0">
                                <div className="flex items-center space-x-2">
                                    <span
                                        className={`text-sm font-medium ${
                                            theme === 'dark'
                                                ? 'text-gray-300'
                                                : 'text-gray-700'
                                        }`}
                                    >
                                        {skill.title}
                                    </span>
                                    {!isActive && (
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            (Past)
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Desktop Timeline Bar */}
                            <div className="hidden lg:block flex-1 h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative min-w-0">
                                {/* Background timeline */}
                                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800"></div>

                                {/* Skill bar positioned on timeline */}
                                <div
                                    className={`absolute h-full rounded-full transition-all duration-1000 ease-out ${
                                        isActive
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                                            : 'bg-gradient-to-r from-gray-400 to-gray-500'
                                    }`}
                                    style={{
                                        left: `${skill.startPosition}%`,
                                        width: `${Math.max(skill.durationPercentage, 3)}%`,
                                        minWidth: '12px',
                                    }}
                                />

                                {/* Year markers */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex justify-between w-full px-2">
                                        {(() => {
                                            const years = []
                                            for (
                                                let year = timelineStart;
                                                year <= timelineEnd;
                                                year += 5
                                            ) {
                                                years.push(year)
                                            }
                                            // Ensure current year is included
                                            if (
                                                years[years.length - 1] !==
                                                timelineEnd
                                            ) {
                                                years.push(timelineEnd)
                                            }
                                            return years.map((year) => (
                                                <div
                                                    key={year}
                                                    className="text-xs text-gray-400 dark:text-gray-500"
                                                >
                                                    {year}
                                                </div>
                                            ))
                                        })()}
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Simple Progress Bar */}
                            <div className="lg:hidden flex-1">
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                                            isActive
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                                                : 'bg-gradient-to-r from-gray-400 to-gray-500'
                                        }`}
                                        style={{
                                            width: `${Math.min(skill.durationPercentage * 2, 100)}%`,
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Date/Period Info - Bottom on mobile, Right on desktop */}
                            <div className="lg:w-48 lg:flex-shrink-0 lg:text-right">
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    <span>
                                        {skill.fromYear} - {skill.toYear} (
                                        {skill.yearsOfExperience}{' '}
                                        {skill.yearsOfExperience === 1
                                            ? 'year'
                                            : 'years'}
                                        )
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Legend */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
                    <span
                        className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                        Active Skills
                    </span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-gray-400 to-gray-500 rounded"></div>
                    <span
                        className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                        Past Experience
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SkillsBarChart
