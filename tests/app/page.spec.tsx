import React from 'react'
import {
    renderWithProviders,
    screen,
    fireEvent,
} from '@/../tests/utils/test-utils'
import Home from '@/app/page'
import {
    GET_CONTENT_SETTINGS_QUERY,
    GET_CATEGORIES_QUERY,
    GET_PORTFOLIO_ITEMS_QUERY,
} from '@/app/graphql/queries'

const contentSettingsMock = {
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
}

const categoriesMock = {
    request: { query: GET_CATEGORIES_QUERY },
    result: {
        data: {
            categories: [
                { _id: 'c1', category: 'Web', displayOrder: 1, active: true },
            ],
        },
    },
}

const itemsMock = {
    request: {
        query: GET_PORTFOLIO_ITEMS_QUERY,
        variables: { categoryId: 'c1' },
    },
    result: {
        data: {
            portfolioItems: [
                {
                    _id: 'p1',
                    projectTitle: 'Project 1',
                    shortDesc: 'Short',
                    previewImgUrl: '/img1.jpg',
                },
            ],
        },
    },
}

describe('Home page', () => {
    it('renders About section and portfolio categories', async () => {
        renderWithProviders(<Home />, {
            apolloMocks: [contentSettingsMock, categoriesMock, itemsMock],
        })
        expect(
            await screen.findByRole('heading', { name: /about me/i, level: 1 })
        ).toBeInTheDocument()
        expect(await screen.findByText('Web')).toBeInTheDocument()
        // open modal by clicking project title from mocked slider contents
        const title = await screen.findByText('Project 1')
        fireEvent.click(title)
        expect(
            document.getElementById('project-modal-container')
        ).toBeInTheDocument()
    })
})
