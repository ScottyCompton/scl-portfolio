import React from 'react'
import {
    renderWithProviders,
    screen,
    fireEvent,
} from '@/../tests/utils/test-utils'
import { Navigation } from '@/components/layout/Navigation'

describe('Navigation', () => {
    it('renders links and opens contact modal', () => {
        renderWithProviders(<Navigation />)
        expect(
            screen.getByRole('link', { name: /go to homepage/i })
        ).toBeInTheDocument()
        const contactLink = screen.getAllByRole('link', {
            name: /contact me/i,
        })[0]
        fireEvent.click(contactLink)
        expect(
            document.getElementById('contact-modal-container')
        ).toBeInTheDocument()
    })
})
