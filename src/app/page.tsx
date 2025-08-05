import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockProjects } from "@/data/mock-data"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            SCL Portfolio
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Mobile-first developer portfolio showcasing modern web development projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="mobile" className="min-h-touch">
              View Projects
            </Button>
            <Button variant="outline" size="mobile" className="min-h-touch">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.slice(0, 3).map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="relative overflow-hidden">
                  <div className="aspect-video relative overflow-hidden rounded-lg bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      {project.title}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-First Features Demo */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Mobile-First Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  📱
                </div>
                <CardTitle className="text-lg">Touch Optimized</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All interactive elements meet the 44px minimum touch target requirement
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  🎨
                </div>
                <CardTitle className="text-lg">Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Built with mobile-first approach using Tailwind CSS breakpoints
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  ⚡
                </div>
                <CardTitle className="text-lg">Fast Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Optimized with Next.js App Router and React Query for optimal performance
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
