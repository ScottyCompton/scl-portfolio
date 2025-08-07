'use client'

import { useQuery } from '@apollo/client'
import { GET_CATEGORIES_QUERY } from '@/app/graphql/queries'
import { Category, PortfolioItem } from '@/types'
import CatRail from './CatRail'
import { Card } from '@radix-ui/themes'
import ProjectModal from './ProjectModal'
import { useState } from 'react'

interface CategoryData {
    categories: Category[]
}

const PortCats = () => {
    const [selectedProject, setSelectedProject] =
        useState<PortfolioItem | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = (project: PortfolioItem) => {
        const modalContainer = document.getElementById(
            'project-modal-container'
        )
        modalContainer?.classList.remove('opacity-0', 'pointer-events-none')
        modalContainer?.classList.add('opacity-100')
        setTimeout(() => {
            setSelectedProject(project)
            setIsModalOpen(true)
        }, 500)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedProject(null)
        const modalContainer = document.getElementById(
            'project-modal-container'
        )
        modalContainer?.classList.remove('opacity-100')
        modalContainer?.classList.add('opacity-0', 'pointer-events-none')
    }

    const { loading, error, data } =
        useQuery<CategoryData>(GET_CATEGORIES_QUERY)

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
                    <div className="text-center text-red-600">
                        <p>Error loading categories: {error.message}</p>
                    </div>
                </div>
            </div>
        )
    }

    const categories = data?.categories || []

    return (
        <>
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
                                    <h3 className="text-4xl font-light uppercase text-gray-400">
                                        {category.category}
                                    </h3>
                                    <Card className="space-y-4">
                                        <CatRail
                                            categoryId={category._id}
                                            openModal={openModal}
                                        />
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
            <div
                id="project-modal-container"
                className="bg-gray-50 dark:bg-gray-900 transition-opacity ease-in opacity-0 duration-500 pointer-events-none w-full h-full fixed top-0 left-0"
            >
                <ProjectModal
                    project={selectedProject}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            </div>
        </>
    )
}

export default PortCats
