'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { PortfolioItem } from '@/types'

interface ProjectCardProps {
  project: PortfolioItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card 
      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer min-h-touch"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/projects/${project.id}`}>
        <CardHeader className="relative overflow-hidden p-0">
          <div className="aspect-video relative overflow-hidden rounded-t-lg">
            {/* Placeholder for project image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-2xl font-bold mb-2">{project.title}</div>
                <div className="text-sm opacity-90">{project.category}</div>
              </div>
            </div>
            
            {/* Overlay on hover */}
            <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="text-white text-center">
                <Eye className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm font-medium">View Details</span>
              </div>
            </div>

            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                Featured
              </div>
            )}

            {/* Status badge */}
            <div className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full font-medium ${
              project.status === 'completed' 
                ? 'bg-green-500 text-white' 
                : project.status === 'in-progress'
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-500 text-white'
            }`}>
              {project.status}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4 sm:p-6">
          <div className="space-y-4">
            {/* Title and Description */}
            <div>
              <CardTitle className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {project.title}
              </CardTitle>
              <CardDescription className="text-gray-600 line-clamp-3">
                {project.description}
              </CardDescription>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 min-h-touch"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(project.githubUrl, '_blank')
                  }}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
              )}
              
              {project.liveUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 min-h-touch"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(project.liveUrl, '_blank')
                  }}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
} 