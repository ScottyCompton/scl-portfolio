'use client'
import { useState, useMemo } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { Calendar, ChevronUp, ChevronDown } from 'lucide-react'

export interface TechSpec {
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
    const timelineStart = 2014
    const timelineEnd = currentYear
    const timelineSpan = timelineEnd - timelineStart + 1

    type SortMethod = 'alphabetical' | 'experience'
    type SortDirection = 'asc' | 'desc'

    const [sortMethod, setSortMethod] = useState<SortMethod>('experience')
    const [sortDirection, setSortDirection] = useState<SortDirection>('desc')

    // Compute the base skill objects with timeline information
    const skillsWithTimelineBase = useMemo(() => {
        return techSpecs.map((skill) => {
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
    }, [techSpecs, currentYear, timelineStart, timelineSpan])

    // Sort the skills according to the selected method and direction
    const skillsWithTimeline = useMemo(() => {
        const sorted = [...skillsWithTimelineBase]
        if (sortMethod === 'alphabetical') {
            sorted.sort((a, b) => a.title.localeCompare(b.title))
        } else {
            sorted.sort((a, b) => a.yearsOfExperience - b.yearsOfExperience)
        }
        if (sortDirection === 'desc') {
            sorted.reverse()
        }
        return sorted
    }, [skillsWithTimelineBase, sortMethod, sortDirection])

    const toggleSortMethod = () => {
        const method: SortMethod =
            sortMethod === 'alphabetical' ? 'experience' : 'alphabetical'
        setSortMethod(method)
        if (method === 'alphabetical') {
            setSortDirection('asc')
        } else {
            setSortDirection('desc')
        }
    }

    const toggleSortDirection = () => {
        setSortDirection((d) => (d === 'asc' ? 'desc' : 'asc'))
    }

    return (
        <div className="w-full max-w-6xl mx-auto p-6">
            {/* Sorting Controls */}
            <div className="mb-3 flex flex-wrap items-center justify-end space-x-4">
                <button
                    data-testid="sort-method-icon"
                    onClick={toggleSortMethod}
                    className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                    title={
                        sortMethod === 'experience'
                            ? 'Sort by Skills Alphabetically'
                            : 'Sort by Years of Experience'
                    }
                >
                    {sortMethod !== 'experience' ? (
                        <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    ) : (
                        <svg
                            className="w-5 h-5 text-gray-600 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                    )}
                </button>
                <button
                    data-testid="sort-direction-icon"
                    onClick={toggleSortDirection}
                    className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                    title={sortDirection === 'asc' ? 'Descending' : 'Ascending'}
                >
                    {sortDirection === 'asc' ? (
                        <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400 cursor-pointer" />
                    ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400 cursor-pointer" />
                    )}
                </button>
            </div>
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
