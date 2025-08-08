'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useUIStore } from '@/lib/stores/ui-store'
import ThemeToggle from '@/components/ThemeToggle'

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const { setIsMobile } = useUIStore()
    const [isContactOpen, setIsContactOpen] = useState(false)

    // Mobile detection
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768
            setIsMobile(mobile)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [setIsMobile])

    const navItems = [
        { href: '/skills', label: 'Skills & Experience' },
        { href: '/professional-highlights', label: 'Professional Highlights' },
        {
            href: '#contact',
            label: 'Contact Me',
            onClick: () => setOpenContactModal(),
        },
    ]

    const setOpenContactModal = () => {
        alert('Contact Me')
        setIsContactOpen(true)
    }

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700"
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="px-3 py-2 rounded-md text-xl font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-touch">
                            <Link href="/" aria-label="Go to homepage">
                                Professional Portfolio
                            </Link>
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) =>
                                item.onClick ? (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-touch"
                                        onClick={item.onClick}
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-touch"
                                    >
                                        {item.label}
                                    </a>
                                )
                            )}
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile Navigation Toggle */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="sm"
                            className="min-h-touch p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation menu"
                        >
                            {isOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                            {navItems.map((item) =>
                                item.onClick ? (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-touch"
                                        onClick={item.onClick}
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-touch"
                                        onClick={item.onClick}
                                    >
                                        {item.label}
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
