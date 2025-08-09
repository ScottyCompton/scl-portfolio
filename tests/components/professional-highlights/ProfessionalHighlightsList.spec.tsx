import React from 'react'
import {
    renderWithProviders,
    screen,
    fireEvent,
} from '@/../tests/utils/test-utils'
import ProfessionalHighlightsList from '@/components/professional-highlights/ProfessionalHighlightsList'
import { GET_PROFESSIONAL_HIGHLIGHTS_QUERY } from '@/app/graphql/queries'

const mocks = [
    {
        request: { query: GET_PROFESSIONAL_HIGHLIGHTS_QUERY },
        result: {
            data: {
                professionalHighlights: [
                    {
                        jobTitle: 'Engineer',
                        orgName: 'Org A',
                        location: 'City',
                        startDate: '2021',
                        endDate: '2022',
                        responsibilities: ['Did X', 'Did Y', 'Did Z', 'Did Q'],
                        technologies: ['React'],
                        avatar: '',
                        detaileDesc: 'Desc',
                    },
                    {
                        jobTitle: 'Lead',
                        orgName: 'Org B',
                        location: 'City',
                        startDate: '2023',
                        endDate: '2024',
                        responsibilities: ['A', 'B', 'C'],
                        technologies: ['TS'],
                        avatar: '',
                        detaileDesc: 'Long',
                    },
                ],
            },
        },
    },
]

describe('ProfessionalHighlightsList', () => {
    it('renders list and supports single view navigation', async () => {
        renderWithProviders(<ProfessionalHighlightsList />, {
            apolloMocks: mocks,
        })
        expect(
            await screen.findByRole('heading', {
                name: /professional highlights/i,
            })
        ).toBeInTheDocument()
        // switch to single view via title tooltip
        const toggleBtn = screen.getByTitle(/switch to single view/i)
        fireEvent.click(toggleBtn)
        // pagination label like "1 of 2"
        expect(await screen.findByText(/1 of 2/i)).toBeInTheDocument()
    })
})
