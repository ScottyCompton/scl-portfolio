'use client'
import AboutSection from '@/components/about/AboutSection'
import PortCats from '@/components/PortCats'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Home() {
    return (
        <div className="relative">
            {/* About Section */}
            <AboutSection />
            <PortCats />
        </div>
    )
}
