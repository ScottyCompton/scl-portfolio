import { PortfolioItem } from '@/types'
import { ProjectCard } from './ProjectCard'

interface ProjectGridProps {
    projects: PortfolioItem[]
    title?: string
    description?: string
}

export function ProjectGrid({
    projects,
    title,
    description,
}: ProjectGridProps) {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                {(title || description) && (
                    <div className="text-center mb-12">
                        {title && (
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                {description}
                            </p>
                        )}
                    </div>
                )}

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Empty State */}
                {projects.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-500 text-lg">
                            No projects found. Check back soon for new
                            additions!
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
