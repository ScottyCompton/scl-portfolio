import React from 'react'
import { render, screen } from '@/../tests/utils/test-utils'
import { Textarea } from '@/components/ui/textarea'

describe('Textarea', () => {
    it('renders with provided props', () => {
        render(<Textarea placeholder="Your message" aria-label="message" />)
        const textarea = screen.getByLabelText('message') as HTMLTextAreaElement
        expect(textarea).toBeInTheDocument()
        expect(textarea.placeholder).toBe('Your message')
    })
})
