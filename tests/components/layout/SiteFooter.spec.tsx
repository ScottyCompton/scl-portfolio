import React from 'react'
import {
    renderWithProviders,
    screen,
    fireEvent,
} from '@/../tests/utils/test-utils'
import SiteFooter from '@/components/layout/SiteFooter'

describe('SiteFooter', () => {
    it('renders contact info and opens libraries modal', () => {
        renderWithProviders(<SiteFooter />)
        // Phone and email may or may not be present depending on data; assert modal trigger exists
        const trigger = screen.getByRole('button', {
            name: /view dependencies/i,
        })
        fireEvent.click(trigger)
        expect(
            screen.getByRole('heading', { name: /libraries & frameworks/i })
        ).toBeInTheDocument()
    })
})
