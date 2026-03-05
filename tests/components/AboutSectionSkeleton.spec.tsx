import React from 'react'
import { render, screen } from '@testing-library/react'
import AboutSectionSkeleton from '@/components/AboutSectionSkeleton'

describe('AboutSectionSkeleton', () => {
    it('renders skeleton placeholders', () => {
        render(<AboutSectionSkeleton />)
        const skeletons = document.querySelectorAll('.animate-pulse')
        expect(skeletons.length).toBeGreaterThan(10)
    })
})
