import React from 'react'
import { render, screen } from '@testing-library/react'
import { Label } from '@/components/ui/label'

describe('Label', () => {
    it('renders label with default classes', () => {
        render(<Label htmlFor="input">Label text</Label>)
        const label = screen.getByText('Label text')
        expect(label).toBeInTheDocument()
        expect(label).toHaveAttribute('for', 'input')
        expect(label).toHaveClass('text-sm', 'font-medium')
    })

    it('forwards props correctly', () => {
        render(<Label className="custom-class">Custom</Label>)
        expect(screen.getByText('Custom')).toHaveClass('custom-class')
    })
})
