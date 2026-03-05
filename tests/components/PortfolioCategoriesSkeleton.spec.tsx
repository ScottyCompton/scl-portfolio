import React from 'react'
import { render, screen } from '@testing-library/react'
import PortfolioCategoriesSkeleton from '@/components/PortfolioCategoriesSkeleton'

describe('PortfolioCategoriesSkeleton', () => {
    it('renders skeleton placeholders', () => {
        render(<PortfolioCategoriesSkeleton />)
        // Should have multiple skeleton elements (using animate-pulse class)
        const skeletons = document.querySelectorAll('.animate-pulse')
        expect(skeletons.length).toBeGreaterThan(10)
    })
})
