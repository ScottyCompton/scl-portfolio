import React from 'react'
import { renderWithProviders, screen } from '@/../tests/utils/test-utils'
import SkillsBarChart from '@/components/SkillsBarChart'

describe('SkillsBarChart', () => {
    it('renders skills and timeline', () => {
        const techSpecs = [
            { _id: '1', title: 'React', from: '2015', to: undefined },
            { _id: '2', title: 'TypeScript', from: '2018', to: undefined },
        ] as any
        renderWithProviders(<SkillsBarChart techSpecs={techSpecs} />)
        expect(screen.getByText('React')).toBeInTheDocument()
        expect(screen.getByText('TypeScript')).toBeInTheDocument()
    })
})
