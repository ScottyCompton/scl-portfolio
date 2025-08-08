import { render, screen, fireEvent } from '@testing-library/react'
import ProfessionalHighlightCard from '../ProfessionalHighlightCard'
import { ProfessionalHighlight } from '@/types'

const mockHighlight: ProfessionalHighlight = {
    jobTitle: 'Full-Stack Applications Developer',
    orgName: 'Optum Financial, Inc.',
    location: 'Dallas, TX (remote)',
    startDate: 'Dec 2023',
    endDate: 'Dec 24',
    responsibilities: [
        'Maintained and updated front-end applications',
        'Performed routine Github code reviews',
        'Worked routinely with product owners',
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'Node.js'],
    avatar: '',
    detaileDesc:
        'Ah, the digital frontier of healthcare finance! My time at Optum Financial was like being a digital architect in a world where every line of code could mean the difference between a smooth provider experience and a frustrated healthcare professional.',
}

describe('ProfessionalHighlightCard', () => {
    it('renders job title and company name', () => {
        render(
            <ProfessionalHighlightCard highlight={mockHighlight} index={0} />
        )

        expect(
            screen.getByText('Full-Stack Applications Developer')
        ).toBeInTheDocument()
        expect(screen.getByText('Optum Financial, Inc.')).toBeInTheDocument()
    })

    it('renders location and dates', () => {
        render(
            <ProfessionalHighlightCard highlight={mockHighlight} index={0} />
        )

        expect(screen.getByText('Dallas, TX (remote)')).toBeInTheDocument()
        expect(screen.getByText('Dec 2023 - Dec 24')).toBeInTheDocument()
    })

    it('renders technologies as tags', () => {
        render(
            <ProfessionalHighlightCard highlight={mockHighlight} index={0} />
        )

        expect(screen.getByText('React')).toBeInTheDocument()
        expect(screen.getByText('TypeScript')).toBeInTheDocument()
        expect(screen.getByText('GraphQL')).toBeInTheDocument()
        expect(screen.getByText('Node.js')).toBeInTheDocument()
    })

    it('renders responsibilities', () => {
        render(
            <ProfessionalHighlightCard highlight={mockHighlight} index={0} />
        )

        expect(
            screen.getByText('Maintained and updated front-end applications')
        ).toBeInTheDocument()
        expect(
            screen.getByText('Performed routine Github code reviews')
        ).toBeInTheDocument()
    })

    it('shows expand/collapse functionality', () => {
        render(
            <ProfessionalHighlightCard highlight={mockHighlight} index={0} />
        )

        const expandButton = screen.getByText('Read More')
        expect(expandButton).toBeInTheDocument()

        fireEvent.click(expandButton)
        expect(screen.getByText('Show Less')).toBeInTheDocument()
    })

    it('renders avatar placeholder with company initials', () => {
        render(
            <ProfessionalHighlightCard highlight={mockHighlight} index={0} />
        )

        // The avatar should show "OF" for "Optum Financial"
        expect(screen.getByText('OF')).toBeInTheDocument()
    })
})
