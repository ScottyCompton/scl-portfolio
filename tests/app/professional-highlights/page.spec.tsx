import React from 'react'
import { renderWithProviders, screen } from '@/../tests/utils/test-utils'
import ProfessionalHighlights from '@/app/professional-highlights/page'
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
                        responsibilities: ['X'],
                        technologies: ['React'],
                        avatar: '',
                        detaileDesc: 'Desc',
                    },
                ],
            },
        },
    },
]

describe('Professional Highlights page', () => {
    it('renders list', async () => {
        renderWithProviders(<ProfessionalHighlights />, { apolloMocks: mocks })
        expect(
            await screen.findByRole('heading', {
                name: /professional highlights/i,
            })
        ).toBeInTheDocument()
    })
})
