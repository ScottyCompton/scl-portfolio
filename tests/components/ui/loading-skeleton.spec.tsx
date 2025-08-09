import React from 'react'
import { render, screen } from '@testing-library/react'
import {
    Skeleton,
    ProjectCardSkeleton,
    ProjectGridSkeleton,
    HeroSliderSkeleton,
    NavigationSkeleton,
    PageSkeleton,
    FormSkeleton,
} from '@/components/ui/loading-skeleton'

describe('loading-skeleton components', () => {
    it('renders basic Skeleton', () => {
        render(<Skeleton className="h-4 w-4" />)
        // No text; just ensure a div exists in document
        expect(document.querySelector('div')).toBeTruthy()
    })

    it('renders ProjectCardSkeleton', () => {
        render(<ProjectCardSkeleton />)
        expect(document.querySelector('.aspect-video')).toBeTruthy()
    })

    it('renders ProjectGridSkeleton with count', () => {
        render(<ProjectGridSkeleton count={3} />)
        expect(
            document.querySelectorAll('.aspect-video').length
        ).toBeGreaterThan(0)
    })

    it('renders HeroSliderSkeleton', () => {
        render(<HeroSliderSkeleton />)
        expect(document.querySelector('.aspect-video')).toBeTruthy()
    })

    it('renders NavigationSkeleton', () => {
        render(<NavigationSkeleton />)
        expect(document.querySelector('nav')).toBeTruthy()
    })

    it('renders PageSkeleton', () => {
        render(<PageSkeleton />)
        expect(document.querySelector('main')).toBeTruthy()
    })

    it('renders FormSkeleton', () => {
        render(<FormSkeleton />)
        expect(document.querySelectorAll('div').length).toBeGreaterThan(0)
    })
})
