import React from 'react'
import {
    renderWithProviders,
    screen,
    fireEvent,
} from '@/../tests/utils/test-utils'
import PortfolioCategories from '@/components/PortfolioCategories'
import {
    GET_CATEGORIES_QUERY,
    GET_PORTFOLIO_ITEMS_QUERY,
} from '@/app/graphql/queries'

const categoriesMock = {
    request: { query: GET_CATEGORIES_QUERY },
    result: {
        data: {
            categories: [
                { _id: 'c1', category: 'Web', displayOrder: 1, active: true },
                {
                    _id: 'c2',
                    category: 'Mobile',
                    displayOrder: 2,
                    active: false,
                },
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

describe('PortfolioCategories', () => {
    it('renders active categories and opens modal on project click', async () => {
        renderWithProviders(<PortfolioCategories />, {
            apolloMocks: [categoriesMock, itemsMock],
        })
        expect(await screen.findByText('Web')).toBeInTheDocument()
        // click project card title (rendered under mocked slider)
        const title = await screen.findByText('Project 1')
        fireEvent.click(title)
        expect(
            document.getElementById('project-modal-container')
        ).toBeInTheDocument()
    })
})
