'use client'

import { useQuery } from '@apollo/client'
import { GET_CATEGORIES_QUERY } from '@/app/graphql/queries'
import { Category } from '@/types'
import CatRail from './CatRail'
import { Card } from '@radix-ui/themes'

interface CategoryData {
    categories: Category[]
}

const PortCats = () => {
    const { loading, error, data } =
        useQuery<CategoryData>(GET_CATEGORIES_QUERY)

    if (loading) {
        return (
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded mb-4"></div>
                        <div className="space-y-3">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="h-6 bg-gray-200 rounded"
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center text-red-600">
                        <p>Error loading categories: {error.message}</p>
                    </div>
                </div>
            </div>
        )
    }

    const categories = data?.categories || []

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-7xl mx-auto">
                <div className="space-y-4">
                    {categories
                        .filter((category) => category.active)
                        .sort((a, b) => a.displayOrder - b.displayOrder)
                        .map((category) => (
                            <div
                                key={category._id}
                                className="space-y-10 py-10"
                            >
                                <h3 className="text-4xl font-semibold">
                                    {category.category}
                                </h3>
                                <Card className="space-y-4">
                                    <CatRail categoryId={category._id} />
                                </Card>
                            </div>
                        ))}
                </div>

                {categories.filter((category) => category.active).length ===
                    0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-500 text-lg">
                            No active categories found.
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default PortCats
