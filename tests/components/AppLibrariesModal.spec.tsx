import React from 'react'
import { renderWithProviders, screen } from '@/../tests/utils/test-utils'
import AppLibrariesModal from '@/components/AppLibrariesModal'

describe('AppLibrariesModal', () => {
    it('lists dependencies', () => {
        renderWithProviders(
            <AppLibrariesModal
                open={true}
                onOpenChange={() => {}}
                dependencies={[
                    ['react', '19.1.0'],
                    ['next', '15.4.5'],
                ]}
            />
        )
        expect(screen.getByText(/libraries & frameworks/i)).toBeInTheDocument()
        expect(screen.getByText('react')).toBeInTheDocument()
        expect(screen.getByText('next')).toBeInTheDocument()
    })
})
