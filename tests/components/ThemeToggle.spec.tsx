import React from 'react'
import {
    renderWithProviders,
    screen,
    fireEvent,
} from '@/../tests/utils/test-utils'
import ThemeToggle from '@/components/ThemeToggle'

describe('ThemeToggle', () => {
    it('toggles theme label', () => {
        localStorage.clear()
        renderWithProviders(<ThemeToggle />)
        const button = screen.getByRole('button', {
            name: /switch to light mode/i,
        })
        fireEvent.click(button)
        expect(
            screen.getByRole('button', { name: /switch to dark mode/i })
        ).toBeInTheDocument()
    })
})
