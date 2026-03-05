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

const categoriesErrorMock = {
    request: { query: GET_CATEGORIES_QUERY },
    error: new Error('Network error'),
}

const noActiveCategoriesMock = {
    request: { query: GET_CATEGORIES_QUERY },
    result: {
        data: {
            categories: [
                { _id: 'c1', category: 'Web', displayOrder: 1, active: false },
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

    it('shows error message on query error', async () => {
        renderWithProviders(<PortfolioCategories />, {
            apolloMocks: [categoriesErrorMock],
        })
        expect(
            await screen.findByText(/Error loading categories/)
        ).toBeInTheDocument()
    })

    it('shows no active categories message when none are active', async () => {
        renderWithProviders(<PortfolioCategories />, {
            apolloMocks: [noActiveCategoriesMock],
        })
        expect(
            await screen.findByText('No active categories found.')
        ).toBeInTheDocument()
    })

    it('sorts categories by displayOrder', async () => {
        const sortedCategoriesMock = {
            request: { query: GET_CATEGORIES_QUERY },
            result: {
                data: {
                    categories: [
                        {
                            _id: 'c1',
                            category: 'Zebra',
                            displayOrder: 2,
                            active: true,
                        },
                        {
                            _id: 'c2',
                            category: 'Apple',
                            displayOrder: 1,
                            active: true,
                        },
                    ],
                },
            },
        }
        const itemsMockC1 = {
            request: {
                query: GET_PORTFOLIO_ITEMS_QUERY,
                variables: { categoryId: 'c1' },
            },
            result: {
                data: {
                    portfolioItems: [],
                },
            },
        }
        const itemsMockC2 = {
            request: {
                query: GET_PORTFOLIO_ITEMS_QUERY,
                variables: { categoryId: 'c2' },
            },
            result: {
                data: {
                    portfolioItems: [],
                },
            },
        }
        renderWithProviders(<PortfolioCategories />, {
            apolloMocks: [sortedCategoriesMock, itemsMockC1, itemsMockC2],
        })
        const categories = await screen.findAllByRole('heading', { level: 3 })
        expect(categories[0]).toHaveTextContent('Apple')
        expect(categories[1]).toHaveTextContent('Zebra')
    })
})
