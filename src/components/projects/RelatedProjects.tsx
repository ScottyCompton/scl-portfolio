import { PortfolioItem } from '@/types'
import { ProjectCard } from './ProjectCard'

interface RelatedProjectsProps {
  projects: PortfolioItem[]
  currentProjectId: string
}

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
          Related Projects
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Explore more projects in the same category
          </p>
        </div>
      </div>
    </section>
  )
} 