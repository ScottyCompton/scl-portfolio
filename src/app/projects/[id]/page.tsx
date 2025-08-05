import { notFound } from 'next/navigation'
import { mockProjects } from '@/data/mock-data'
import { ProjectDetail } from '@/components/projects/ProjectDetail'
import { RelatedProjects } from '@/components/projects/RelatedProjects'
import { Navigation } from '@/components/layout/Navigation'

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

// Generate static params for all projects
export async function generateStaticParams() {
  return mockProjects.map((project) => ({
    id: project.id,
  }))
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params
  const project = mockProjects.find(p => p.id === id)
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    }
  }

  return {
    title: `${project.title} - SCL Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.images || [project.image],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = mockProjects.find(p => p.id === id)
  
  if (!project) {
    notFound()
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = mockProjects
    .filter(p => p.id !== project.id && p.category === project.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-16">
        <ProjectDetail project={project} />
        
        {relatedProjects.length > 0 && (
          <RelatedProjects 
            projects={relatedProjects}
            currentProjectId={project.id}
          />
        )}
      </main>
    </div>
  )
} 