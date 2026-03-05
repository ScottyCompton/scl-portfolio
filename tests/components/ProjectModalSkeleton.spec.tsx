import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ProjectModalSkeleton from '@/components/ProjectModalSkeleton'
import { vi } from 'vitest'

const mockOnClose = vi.fn()

describe('ProjectModalSkeleton', () => {
    it('renders skeleton when open', () => {
        render(<ProjectModalSkeleton isOpen={true} onClose={mockOnClose} />)
        expect(screen.getByText('Loading…')).toBeInTheDocument()
        // skeleton elements animate with pulse; ensure there are several present
        const skeletons = document.querySelectorAll('.animate-pulse')
        expect(skeletons.length).toBeGreaterThan(10)
    })

    it('does not render when closed', () => {
        render(<ProjectModalSkeleton isOpen={false} onClose={mockOnClose} />)
        expect(screen.queryByText('Loading…')).not.toBeInTheDocument()
    })

    it('calls onClose when close button is clicked', () => {
        render(<ProjectModalSkeleton isOpen={true} onClose={mockOnClose} />)
        const closeButton = screen.getByLabelText('Close')
        fireEvent.click(closeButton)
        expect(mockOnClose).toHaveBeenCalled()
    })

    it('uses custom title', () => {
        render(
            <ProjectModalSkeleton
                isOpen={true}
                onClose={mockOnClose}
                title="Custom Title"
            />
        )
        expect(screen.getByText('Custom Title')).toBeInTheDocument()
    })
})
