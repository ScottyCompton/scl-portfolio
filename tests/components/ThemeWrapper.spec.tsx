import React from 'react'
import { render, screen } from '@testing-library/react'
import ThemeWrapper from '@/components/ThemeWrapper'
import { ThemeProvider } from '@/contexts/ThemeContext'

function Probe() {
    return <div>wrapped</div>
}

describe('ThemeWrapper', () => {
    it('applies dark class when theme is dark', () => {
        render(
            <ThemeProvider>
                <ThemeWrapper>
                    <Probe />
                </ThemeWrapper>
            </ThemeProvider>
        )
        // initial theme is light
        expect(document.documentElement.classList.contains('dark')).toBe(false)
    })
})
