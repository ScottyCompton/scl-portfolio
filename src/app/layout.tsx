import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/query-provider"
import { ApolloProviderWrapper } from "@/components/providers/apollo-provider"
import { ErrorBoundary } from "@/components/ui/error-boundary"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SCL Portfolio - Mobile-First Developer Portfolio",
  description: "Personal portfolio showcasing modern web development projects with mobile-first responsive design",
  keywords: ["web developer", "portfolio", "React", "Next.js", "TypeScript", "mobile-first"],
  authors: [{ name: "Scott Compton" }],
  creator: "Scott Compton",
  publisher: "Scott Compton",
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
    url: 'https://your-domain.com',
    title: 'SCL Portfolio - Mobile-First Developer Portfolio',
    description: 'Personal portfolio showcasing modern web development projects with mobile-first responsive design',
    siteName: 'SCL Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCL Portfolio - Mobile-First Developer Portfolio',
    description: 'Personal portfolio showcasing modern web development projects with mobile-first responsive design',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <ErrorBoundary>
          <ApolloProviderWrapper>
            <QueryProvider>
              {children}
            </QueryProvider>
          </ApolloProviderWrapper>
        </ErrorBoundary>
      </body>
    </html>
  );
}
