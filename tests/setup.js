import '@testing-library/jest-dom'
import { vi } from 'vitest'
import React from 'react'

// Mock Next.js router
vi.mock('next/navigation', () => ({
    useRouter() {
        return {
            push: vi.fn(),
            replace: vi.fn(),
            prefetch: vi.fn(),
            back: vi.fn(),
            forward: vi.fn(),
            refresh: vi.fn(),
        }
    },
    useSearchParams() {
        return new URLSearchParams()
    },
    usePathname() {
        return '/'
    },
}))

// Mock Next.js image component
vi.mock('next/image', () => ({
    __esModule: true,
    default: (props) => {
        return React.createElement('img', props)
    },
}))

// Silence ResizeObserver not implemented errors in JSDOM
class ResizeObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
}
// @ts-ignore
global.ResizeObserver = ResizeObserverMock

// matchMedia mock for components/libraries that rely on it (e.g., slick)
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
    }),
})

// requestAnimationFrame fallback
if (!window.requestAnimationFrame) {
    // @ts-ignore
    window.requestAnimationFrame = (cb) => setTimeout(cb, 0)
}

// Mock react-slick to a simple passthrough that renders children
vi.mock('react-slick', () => ({
    __esModule: true,
    default: ({ children }) =>
        React.createElement('div', { 'data-testid': 'slick-mock' }, children),
}))

// Stub slick-carousel CSS imports to avoid PostCSS in Vitest context
vi.mock('slick-carousel/slick/slick.css', () => ({}), { virtual: true })
vi.mock('slick-carousel/slick/slick-theme.css', () => ({}), { virtual: true })
