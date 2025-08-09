import React from 'react'
import { renderWithProviders, screen } from '@/../tests/utils/test-utils'
import SkillsPage from '@/app/skills/page'
import { GET_TECH_SPECS_QUERY } from '@/app/graphql/queries'

const techSpecsMock = {
    request: { query: GET_TECH_SPECS_QUERY },
    result: {
        data: {
            techSpecs: [
                { _id: '1', title: 'React', from: '2015', to: null },
                { _id: '2', title: 'TypeScript', from: '2018', to: null },
            ],
        },
    },
}

describe('Skills page', () => {
    it('renders header and chart', async () => {
        renderWithProviders(<SkillsPage />, { apolloMocks: [techSpecsMock] })
        expect(
            await screen.findByRole('heading', { name: /skills & experience/i })
        ).toBeInTheDocument()
        expect(await screen.findByText('React')).toBeInTheDocument()
    })
})
