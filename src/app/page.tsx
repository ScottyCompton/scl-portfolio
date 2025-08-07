'use client'

import { Navigation } from '@/components/layout/Navigation'
// import { HeroSlider } from '@/components/home/HeroSlider'
// import { ProjectGrid } from '@/components/projects/ProjectGrid'
import AboutSection from '@/components/about/AboutSection'
// import { mockProjects, mockSliderImages, mockAbout } from '@/data/mock-data'
import PortCats from '@/components/PortCats'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Home() {
    return (
        <div className="relative">
            {/* Navigation */}
            <Navigation />

            {/* Hero Slider */}
            {/* <HeroSlider images={mockSliderImages} /> */}

            {/* Featured Projects */}
            {/* <ProjectGrid 
        projects={mockProjects.filter(p => p.featured)}
        title="Featured Projects"
        description="Showcasing my best work with modern technologies and mobile-first design"
      /> */}

            {/* About Section */}
            <AboutSection />
            <PortCats />

            {/* All Projects */}
            {/* <ProjectGrid 
        projects={mockProjects}
        title="All Projects"
        description="Explore my complete portfolio of web development projects"
      /> */}
        </div>
    )
}
