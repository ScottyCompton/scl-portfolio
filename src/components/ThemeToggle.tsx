'use client'

import { Button } from '@radix-ui/themes'
import { BsMoon, BsSun } from 'react-icons/bs'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <Button
            variant="ghost"
            size="2"
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                <BsMoon size={16} className="cursor-pointer" />
            ) : (
                <BsSun size={16} className="cursor-pointer" />
            )}
        </Button>
    )
}

export default ThemeToggle
