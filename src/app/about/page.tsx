import { Navigation } from '@/components/layout/Navigation'
import { AboutSection } from '@/components/about/AboutSection'
import { ContactForm } from '@/components/contact/ContactForm'
import { mockAbout } from '@/data/mock-data'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Learn more about my background, skills, and passion for creating exceptional digital experiences
            </p>
          </div>
        </section>

        {/* About Section */}
        <AboutSection about={mockAbout} />

        {/* Contact Form */}
        <ContactForm />
      </main>
    </div>
  )
} 