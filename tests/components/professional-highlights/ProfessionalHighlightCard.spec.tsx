import React from 'react'
import {
    renderWithProviders,
    screen,
    fireEvent,
} from '@/../tests/utils/test-utils'
import ProfessionalHighlightCard from '@/components/professional-highlights/ProfessionalHighlightCard'

const sampleHighlight = {
    jobTitle: 'Senior Engineer',
    orgName: 'Tech Co',
    location: 'Remote',
    startDate: '2022',
    endDate: '2024',
    responsibilities: ['A', 'B', 'C', 'D'],
    technologies: ['React', 'TypeScript'],
    avatar: '',
    detaileDesc: 'Detailed description here',
}

describe('ProfessionalHighlightCard', () => {
    it('renders highlight and toggles details', () => {
        renderWithProviders(
            <ProfessionalHighlightCard
                highlight={sampleHighlight as any}
                index={0}
            />
        )
        expect(screen.getByText(/senior engineer/i)).toBeInTheDocument()
        expect(screen.getByText(/tech co/i)).toBeInTheDocument()
        fireEvent.click(screen.getByRole('button', { name: /read more/i }))
        expect(
            screen.getByRole('button', { name: /show less/i })
        ).toBeInTheDocument()
    })
})
