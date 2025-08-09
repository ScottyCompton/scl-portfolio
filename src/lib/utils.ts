import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Mobile-first responsive utilities
export const mobileBreakpoints = {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
} as const

export const isMobile = () => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < 768
}

export const isTablet = () => {
    if (typeof window === 'undefined') return false
    return window.innerWidth >= 768 && window.innerWidth < 1024
}

export const isDesktop = () => {
    if (typeof window === 'undefined') return false
    return window.innerWidth >= 1024
}

// Mobile-first responsive classes
export const mobileClasses = {
    container: 'px-4 sm:px-6 lg:px-8',
    grid: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    text: 'text-sm sm:text-base lg:text-lg',
    spacing: 'space-y-4 sm:space-y-6 lg:space-y-8',
    touch: 'min-h-touch', // Minimum touch target
} as const
