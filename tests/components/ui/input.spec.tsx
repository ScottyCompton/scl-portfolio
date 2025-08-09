import React from 'react'
import { render, screen } from '@/../tests/utils/test-utils'
import { Input } from '@/components/ui/input'

describe('Input', () => {
    it('renders with provided props', () => {
        render(<Input placeholder="Your name" aria-label="name" />)
        const input = screen.getByLabelText('name') as HTMLInputElement
        expect(input).toBeInTheDocument()
        expect(input.placeholder).toBe('Your name')
    })
})
