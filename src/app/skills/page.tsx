'use client'

import SkillsBarChart from '@/components/SkillsBarChart'
import { useQuery } from '@apollo/client'
import { GET_TECH_SPECS_QUERY } from '@/app/graphql/queries'

const SkillsPage = () => {
    const { data, loading, error } = useQuery(GET_TECH_SPECS_QUERY)

    return (
        <div className="min-h-screen">
            <main className="pt-16">
                {/* Header */}
                <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                            Skills & Experience
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            A comprehensive overview of my technical skills and
                            years of experience across various technologies.
                        </p>
                    </div>
                </section>

                {/* Skills Bar Chart */}
                <section className="px-4 sm:px-6 lg:px-8 py-6">
                    {loading && (
                        <div className="flex justify-center items-center min-h-[60vh]">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 dark:border-blue-400"></div>
                        </div>
                    )}

                    {error && (
                        <div className="text-center py-12">
                            <p className="text-red-600 dark:text-red-400">
                                Error loading skills data. Please try again
                                later.
                            </p>
                        </div>
                    )}

                    {data?.techSpecs && (
                        <SkillsBarChart techSpecs={data.techSpecs} />
                    )}
                </section>
            </main>
        </div>
    )
}

export default SkillsPage
