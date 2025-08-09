'use client'

import { useQuery } from '@apollo/client'
import { GET_PROFESSIONAL_HIGHLIGHTS_QUERY } from '@/app/graphql/queries'
import { ProfessionalHighlight } from '@/types'
import ProfessionalHighlightCard from './ProfessionalHighlightCard'
import { useState, useEffect } from 'react'

interface ProfessionalHighlightsData {
    professionalHighlights: ProfessionalHighlight[]
}

const ProfessionalHighlightsList = () => {
    const [viewMode, setViewMode] = useState<'list' | 'single'>('list')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const { data, loading, error } = useQuery<ProfessionalHighlightsData>(
        GET_PROFESSIONAL_HIGHLIGHTS_QUERY
    )

    // Reset current index when switching to single view
    useEffect(() => {
        if (viewMode === 'single') {
            setCurrentIndex(0)
        }
    }, [viewMode])

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 dark:border-blue-400"></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center text-red-600 dark:text-red-400">
                        <p>
                            Error loading professional highlights:{' '}
                            {error.message}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const highlights = data?.professionalHighlights || []

    if (highlights.length === 0) {
        return (
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center text-gray-600 dark:text-gray-400">
                        <p>No professional highlights found.</p>
                    </div>
                </div>
            </div>
        )
    }

    const handlePrevious = () => {
        if (currentIndex > 0 && !isTransitioning) {
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentIndex(currentIndex - 1)
                setTimeout(() => setIsTransitioning(false), 150)
            }, 150)
        }
    }

    const handleNext = () => {
        if (currentIndex < highlights.length - 1 && !isTransitioning) {
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentIndex(currentIndex + 1)
                setTimeout(() => setIsTransitioning(false), 150)
            }, 150)
        }
    }

    const currentHighlight = highlights[currentIndex]
    const previousHighlight =
        currentIndex > 0 ? highlights[currentIndex - 1] : null
    const nextHighlight =
        currentIndex < highlights.length - 1
            ? highlights[currentIndex + 1]
            : null

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                        Professional Highlights
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        A journey through my professional experience, showcasing
                        diverse roles and technologies across different
                        industries.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                            {highlights.length}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Professional Roles
                        </div>
                    </div>
                    <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                            {
                                new Set(
                                    highlights.flatMap(
                                        (highlight) => highlight.technologies
                                    )
                                ).size
                            }
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Unique Technologies
                        </div>
                    </div>
                    <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                            {highlights.reduce(
                                (total, highlight) =>
                                    total + highlight.responsibilities.length,
                                0
                            )}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Key Responsibilities
                        </div>
                    </div>
                </div>

                {/* View Toggle */}
                <div className="flex justify-end mb-8">
                    <button
                        onClick={() =>
                            setViewMode(viewMode === 'list' ? 'single' : 'list')
                        }
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
                        title={
                            viewMode === 'list'
                                ? 'Switch to Single View'
                                : 'Switch to List View'
                        }
                    >
                        {viewMode === 'list' ? (
                            // Document icon for single view
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
                        ) : (
                            // List icon for list view
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
                                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Content */}
                {viewMode === 'list' ? (
                    // List View
                    <div className="space-y-8">
                        {highlights.map((highlight, index) => (
                            <div key={index}>
                                <ProfessionalHighlightCard
                                    highlight={highlight}
                                    index={index}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    // Single View
                    <div className="space-y-8">
                        <div
                            className={`transition-opacity duration-300 ease-in-out ${
                                isTransitioning ? 'opacity-0' : 'opacity-100'
                            }`}
                        >
                            <ProfessionalHighlightCard
                                highlight={currentHighlight}
                                index={currentIndex}
                            />
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center items-center space-x-8 mt-12">
                            {previousHighlight && (
                                <button
                                    onClick={handlePrevious}
                                    disabled={isTransitioning}
                                    className={`flex items-center space-x-2 transition-colors ${
                                        isTransitioning
                                            ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                                            : 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 cursor-pointer'
                                    }`}
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                    <span className="text-sm font-medium">
                                        {previousHighlight.orgName}
                                    </span>
                                </button>
                            )}

                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                {currentIndex + 1} of {highlights.length}
                            </div>

                            {nextHighlight && (
                                <button
                                    onClick={handleNext}
                                    disabled={isTransitioning}
                                    className={`flex items-center space-x-2 transition-colors ${
                                        isTransitioning
                                            ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                                            : 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 cursor-pointer'
                                    }`}
                                >
                                    <span className="text-sm font-medium">
                                        {nextHighlight.orgName}
                                    </span>
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfessionalHighlightsList
