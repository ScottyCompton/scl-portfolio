'use client'

import { Theme } from '@radix-ui/themes'
import { useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'

interface ThemeWrapperProps {
    children: React.ReactNode
}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
    const { theme } = useTheme()

    useEffect(() => {
        // Apply dark mode class to document for Tailwind CSS
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return (
        <Theme appearance={theme} accentColor="blue" grayColor="slate">
            {children}
        </Theme>
    )
}

export default ThemeWrapper
