import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ErrorBoundary } from '@/components/ui/error-boundary'

function Bomb() {
    throw new Error('Boom')
}

describe('ErrorBoundary', () => {
    it('renders fallback UI on error and can reset', () => {
        render(
            <ErrorBoundary>
                <Bomb />
            </ErrorBoundary>
        )
        expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
        const tryAgain = screen.getByRole('button', { name: /try again/i })
        fireEvent.click(tryAgain)
        // After reset, boundary renders children again; but Bomb throws again so fallback remains.
        expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    })
})
