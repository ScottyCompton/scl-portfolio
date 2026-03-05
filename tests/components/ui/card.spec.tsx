import React from 'react'
import { render, screen } from '@testing-library/react'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from '@/components/ui/card'

describe('Card', () => {
    it('renders Card with default classes', () => {
        render(<Card>Card content</Card>)
        const card = screen.getByText('Card content')
        expect(card).toBeInTheDocument()
        expect(card).toHaveClass('rounded-lg', 'border', 'bg-white')
    })

    it('renders CardHeader', () => {
        render(<CardHeader>Header</CardHeader>)
        expect(screen.getByText('Header')).toHaveClass('flex', 'flex-col')
    })

    it('renders CardTitle', () => {
        render(<CardTitle>Title</CardTitle>)
        const title = screen.getByRole('heading', { level: 3 })
        expect(title).toHaveTextContent('Title')
        expect(title).toHaveClass('text-2xl', 'font-semibold')
    })

    it('renders CardDescription', () => {
        render(<CardDescription>Description</CardDescription>)
        expect(screen.getByText('Description')).toHaveClass(
            'text-sm',
            'text-gray-500'
        )
    })

    it('renders CardContent', () => {
        render(<CardContent>Content</CardContent>)
        expect(screen.getByText('Content')).toHaveClass('p-6', 'pt-0')
    })

    it('renders CardFooter', () => {
        render(<CardFooter>Footer</CardFooter>)
        expect(screen.getByText('Footer')).toHaveClass('flex', 'items-center')
    })
})
