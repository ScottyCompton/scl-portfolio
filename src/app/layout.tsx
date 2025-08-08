import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@radix-ui/themes/styles.css'
import './globals.css'
import { QueryProvider } from '@/components/providers/query-provider'
import { ApolloProviderWrapper } from '@/components/providers/apollo-provider'
import { ThemeProvider } from '@/contexts/ThemeContext'
import ThemeWrapper from '@/components/ThemeWrapper'
import { ErrorBoundary } from '@/components/ui/error-boundary'
import { Navigation } from '@/components/layout/Navigation'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Portfolio of Scott C. Lonis',
    description:
        'Full-stack developer, web and graphic designer with over 25 years of industry experience',
    keywords: [
        'web developer',
        'portfolio',
        'React',
        'Next.js',
        'TypeScript',
        'mobile-first',
    ],
    authors: [{ name: 'Scott Lonis' }],
    creator: 'Scott Lonis',
    publisher: 'Scott Lonis',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://scottlonis.com',
        title: 'Portfolio of Scott C. Lonis',
        description:
            'Full-stack developer, web and graphic designer with over 25 years of industry experience',
        siteName: 'SCL Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Portfolio of Scott C. Lonis',
        description:
            'Personal portfolio showcasing modern web development projects with mobile-first responsive design',
    },
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-500 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen`}
            >
                <ErrorBoundary>
                    <ThemeProvider>
                        <ThemeWrapper>
                            <ApolloProviderWrapper>
                                <QueryProvider>
                                    <Navigation />
                                    {children}
                                </QueryProvider>
                            </ApolloProviderWrapper>
                        </ThemeWrapper>
                    </ThemeProvider>
                </ErrorBoundary>
            </body>
        </html>
    )
}
