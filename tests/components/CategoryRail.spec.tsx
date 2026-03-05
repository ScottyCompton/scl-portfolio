import React from 'react'
import { renderWithProviders, screen } from '@/../tests/utils/test-utils'
import userEvent from '@testing-library/user-event'
import CategoryRail from '@/components/CategoryRail'
import { GET_PORTFOLIO_ITEMS_QUERY } from '@/app/graphql/queries'
import { vi } from 'vitest'

const mockOpenModal = vi.fn()

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
                {
                    _id: 'p2',
                    projectTitle: 'Project 2',
                    shortDesc: 'Short 2',
                    previewImgUrl: '/img2.jpg',
                },
            ],
        },
    },
}

const errorMock = {
    request: {
        query: GET_PORTFOLIO_ITEMS_QUERY,
        variables: { categoryId: 'c1' },
    },
    error: new Error('Network error'),
}

describe('CategoryRail', () => {
    it('renders loading state', () => {
        renderWithProviders(
            <CategoryRail categoryId="c1" openModal={mockOpenModal} />,
            {
                apolloMocks: [itemsMock],
            }
        )
        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })

    it('renders error state', async () => {
        renderWithProviders(
            <CategoryRail categoryId="c1" openModal={mockOpenModal} />,
            {
                apolloMocks: [errorMock],
            }
        )
        expect(await screen.findByText(/Error:/)).toBeInTheDocument()
    })

    it('renders portfolio items and handles click', async () => {
        renderWithProviders(
            <CategoryRail categoryId="c1" openModal={mockOpenModal} />,
            {
                apolloMocks: [itemsMock],
            }
        )
        expect(await screen.findByText('Project 1')).toBeInTheDocument()
        expect(screen.getByText('Project 2')).toBeInTheDocument()

        // click the image (wrapped in a pointer-events-none element) so the
        // onClick on the parent div fires
        const projectImage = screen.getByAltText('Project 1')
        await userEvent.click(projectImage)
        expect(mockOpenModal).toHaveBeenCalledWith({
            _id: 'p1',
            projectTitle: 'Project 1',
            shortDesc: 'Short',
            previewImgUrl: '/img1.jpg',
        })
    })
})
