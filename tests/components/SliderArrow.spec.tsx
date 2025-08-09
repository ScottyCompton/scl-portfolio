import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SliderArrow from '@/components/SliderArrow'

describe('SliderArrow', () => {
    it('renders next icon and handles click', () => {
        const onClick = vi.fn()
        render((<SliderArrow type="next" onClick={onClick} />) as any)
        const button = screen.getByRole('img', { hidden: true })
        fireEvent.click(button)
        expect(onClick).toHaveBeenCalled()
    })

    it('renders prev icon', () => {
        render((<SliderArrow type="prev" />) as any)
        const icons = screen.getAllByRole('img', { hidden: true })
        expect(icons.length).toBeGreaterThan(0)
    })
})
