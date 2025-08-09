'use client'
import AboutSection from '@/components/AboutSection'
import PortfolioCategories from '@/components/PortfolioCategories'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Home() {
    return (
        <div className="relative">
            <AboutSection />
            <PortfolioCategories />
        </div>
    )
}
