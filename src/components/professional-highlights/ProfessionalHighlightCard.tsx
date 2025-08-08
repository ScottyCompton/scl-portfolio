'use client'

import { ProfessionalHighlight } from '@/types'
import { useState } from 'react'
import Image from 'next/image'

interface ProfessionalHighlightCardProps {
    highlight: ProfessionalHighlight
    index: number
}

const ProfessionalHighlightCard = ({
    highlight,
    index,
}: ProfessionalHighlightCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpanded = (event: React.MouseEvent) => {
        event.stopPropagation()
        setIsExpanded(!isExpanded)
    }

    const handleShowMoreResponsibilities = (event: React.MouseEvent) => {
        event.stopPropagation()
        setIsExpanded(true)
    }

    return (
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <div className="p-6 pb-4">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                            {highlight.jobTitle}
                        </h3>
                        <div className="space-y-1">
                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                {highlight.orgName}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {highlight.location}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-500">
                                {highlight.startDate} - {highlight.endDate}
                            </p>
                        </div>
                    </div>

                    {/* Avatar */}
                    <div className="ml-4 w-25 h-25 rounded-lg flex items-center justify-center shadow-md overflow-hidden">
                        {highlight.avatar ? (
                            <Image
                                src={`/images/logos/${highlight.avatar}`}
                                alt={`${highlight.orgName} logo`}
                                width={100}
                                height={100}
                                className="w-full h-full object-cover"
                                onError={() => {
                                    // Fallback to initials if image fails to load
                                    const fallback = document.querySelector(
                                        `[data-org="${highlight.orgName}"]`
                                    ) as HTMLElement
                                    if (fallback) {
                                        fallback.style.display = 'flex'
                                    }
                                }}
                            />
                        ) : null}
                        <div
                            data-org={highlight.orgName}
                            className={`w-full h-full flex items-center justify-center text-white font-bold text-xl ${
                                highlight.avatar ? 'hidden' : ''
                            } bg-gradient-to-br from-blue-500 to-purple-600`}
                        >
                            {highlight.orgName
                                .split(' ')
                                .map((word) => word[0])
                                .join('')
                                .slice(0, 2)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 pt-0 space-y-4">
                {/* Technologies */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Technologies Used ({highlight.technologies.length}):
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {highlight.technologies.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Responsibilities */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Key Responsibilities (
                        {highlight.responsibilities.length}):
                    </h4>
                    <ul className="space-y-2">
                        {highlight.responsibilities
                            .slice(0, isExpanded ? undefined : 3)
                            .map((responsibility, respIndex) => (
                                <li
                                    key={respIndex}
                                    className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex items-start"
                                >
                                    <span className="text-blue-500 mr-2 mt-1">
                                        •
                                    </span>
                                    <span>{responsibility}</span>
                                </li>
                            ))}
                        {!isExpanded &&
                            highlight.responsibilities.length > 3 && (
                                <li
                                    onClick={handleShowMoreResponsibilities}
                                    className="text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:underline"
                                >
                                    +{highlight.responsibilities.length - 3}{' '}
                                    more responsibilities
                                </li>
                            )}
                    </ul>
                </div>

                {/* Detailed Description */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Experience Overview:
                    </h4>
                    <div
                        className={`text-sm text-gray-600 dark:text-gray-400 leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}
                    >
                        {highlight.detaileDesc}
                    </div>
                </div>

                {/* Expand/Collapse Button */}
                <button
                    onClick={toggleExpanded}
                    className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded cursor-pointer"
                >
                    {isExpanded ? 'Show Less' : 'Read More'}
                </button>
            </div>
        </div>
    )
}

export default ProfessionalHighlightCard
