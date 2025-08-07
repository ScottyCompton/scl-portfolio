// import { mockProjects, mockCategories } from '@/data/mock-data'
import { Navigation } from '@/components/layout/Navigation'
// import { ProjectGrid } from '@/components/projects/ProjectGrid'
// import { ProjectFilters } from '@/components/projects/ProjectFilters'

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            <main className="pt-16">
                {/* Header */}
                <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            All Projects
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Explore my complete portfolio of web development
                            projects, from simple websites to complex
                            applications
                        </p>
                    </div>
                </section>

                {/* Filters */}
                {/* <ProjectFilters 
          projects={mockProjects}
          categories={mockCategories}
        /> */}

                {/* All Projects */}
                {/* <ProjectGrid 
          projects={mockProjects}
          title="All Projects"
          description="Browse through my complete collection of web development projects"
        /> */}
            </main>
        </div>
    )
}
