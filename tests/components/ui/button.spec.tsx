import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
    it('renders with default props', () => {
        render(<Button>Click me</Button>)
        const button = screen.getByRole('button', { name: /click me/i })
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('bg-primary')
    })

    it('renders with different variants', () => {
        const { rerender } = render(
            <Button variant="secondary">Secondary</Button>
        )
        expect(screen.getByRole('button')).toHaveClass('bg-secondary')

        rerender(<Button variant="outline">Outline</Button>)
        expect(screen.getByRole('button')).toHaveClass('border')

        rerender(<Button variant="ghost">Ghost</Button>)
        expect(screen.getByRole('button')).toHaveClass('hover:bg-accent')
    })

    it('renders with different sizes', () => {
        const { rerender } = render(<Button size="sm">Small</Button>)
        expect(screen.getByRole('button')).toHaveClass('h-9')

        rerender(<Button size="lg">Large</Button>)
        expect(screen.getByRole('button')).toHaveClass('h-11')

        rerender(<Button size="icon">Icon</Button>)
        expect(screen.getByRole('button')).toHaveClass('h-10', 'w-10')
    })

    it('forwards props correctly', () => {
        render(<Button disabled>Disabled</Button>)
        expect(screen.getByRole('button')).toBeDisabled()
    })

    it('supports asChild prop', () => {
        render(
            <Button asChild>
                <a href="/test">Link</a>
            </Button>
        )
        expect(screen.getByRole('link')).toBeInTheDocument()
    })
})
