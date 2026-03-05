import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactModal from '@/components/ContactModal'
import { vi } from 'vitest'

const mockOnClose = vi.fn()

describe('ContactModal', () => {
    it('renders modal when open', () => {
        render(<ContactModal open={true} onClose={mockOnClose} />)
        expect(screen.getByText('Contact Me')).toBeInTheDocument()
        expect(screen.getByText('Send Message')).toBeInTheDocument() // Assuming ContactForm has this
    })

    it('does not render when closed', () => {
        render(<ContactModal open={false} onClose={mockOnClose} />)
        expect(screen.queryByText('Contact Me')).not.toBeInTheDocument()
    })

    it('calls onClose when close button is clicked', () => {
        render(<ContactModal open={true} onClose={mockOnClose} />)
        const closeButton = screen.getByLabelText('Close')
        fireEvent.click(closeButton)
        expect(mockOnClose).toHaveBeenCalled()
    })
})
