'use client'

import { Skeleton } from '@/components/ui/loading-skeleton'

const CategorySectionSkeleton = () => {
    return (
        <div className="space-y-10 py-10">
            {/* Category title */}
            <Skeleton className="h-10 w-56" />

            {/* Horizontal rail of circular thumbnails (skeleton) */}
            <div className="bg-white dark:bg-blue-900/20 rounded-lg border border-gray-200 dark:border-gray-800 p-6 overflow-x-auto">
                <div className="flex items-center gap-8 min-w-max">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <Skeleton className="w-40 h-40 sm:w-48 sm:h-48 rounded-full" />
                            <Skeleton className="h-4 w-28 mt-3" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const PortfolioCategoriesSkeleton = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-7xl mx-auto">
                <div className="space-y-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CategorySectionSkeleton key={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PortfolioCategoriesSkeleton
