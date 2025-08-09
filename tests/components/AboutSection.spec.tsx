import React from 'react'
import { renderWithProviders, screen } from '@/../tests/utils/test-utils'
import AboutSection from '@/components/AboutSection'
import { GET_CONTENT_SETTINGS_QUERY } from '@/app/graphql/queries'

const mocks = [
    {
        request: { query: GET_CONTENT_SETTINGS_QUERY },
        result: {
            data: {
                contentSettings: {
                    aboutTitle: 'About Me',
                    aboutBlurb: '<p>Hello</p>',
                    contactEmail: 'me@example.com',
                    contactPhone: '123',
                    aboutImgUrl: '',
                    resumeUrl: 'http://example.com/resume.pdf',
                    siteTitle: 'Site',
                    linkedinUsername: 'me',
                    githubId: 'me',
                },
            },
        },
    },
]

describe('AboutSection', () => {
    it('renders content settings', async () => {
        renderWithProviders(<AboutSection />, { apolloMocks: mocks })
        expect(
            await screen.findByRole('heading', { name: /about me/i, level: 1 })
        ).toBeInTheDocument()
        expect(screen.getAllByText('Github Repos')[0]).toBeInTheDocument()
    })
})
