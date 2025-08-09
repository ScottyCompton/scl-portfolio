import React from 'react'
import {
    renderWithProviders,
    screen,
    fireEvent,
} from '@/../tests/utils/test-utils'
import NotFound from '@/app/not-found'

describe('NotFound page', () => {
    it('renders 404 content and home link', () => {
        renderWithProviders(<NotFound />)
        expect(
            screen.getByRole('heading', { name: /404/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /page not found/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('link', { name: /go home/i })
        ).toBeInTheDocument()
        const backButton = screen.getByRole('button', { name: /go back/i })
        fireEvent.click(backButton)
    })
})
