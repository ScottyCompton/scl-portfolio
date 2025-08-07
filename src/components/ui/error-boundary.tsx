'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

interface ErrorBoundaryState {
    hasError: boolean
    error?: Error
}

interface ErrorBoundaryProps {
    children: React.ReactNode
    fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
}

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo)
    }

    resetError = () => {
        this.setState({ hasError: false, error: undefined })
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                const FallbackComponent = this.props.fallback
                return (
                    <FallbackComponent
                        error={this.state.error}
                        resetError={this.resetError}
                    />
                )
            }

            return (
                <DefaultErrorFallback
                    error={this.state.error}
                    resetError={this.resetError}
                />
            )
        }

        return this.props.children
    }
}

interface DefaultErrorFallbackProps {
    error?: Error
    resetError: () => void
}

function DefaultErrorFallback({
    error,
    resetError,
}: DefaultErrorFallbackProps) {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                {/* Error Icon */}
                <div className="mb-6">
                    <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                        <AlertTriangle className="h-8 w-8 text-red-600" />
                    </div>
                </div>

                {/* Error Message */}
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    Something went wrong
                </h1>
                <p className="text-gray-600 mb-6">
                    An unexpected error occurred. Please try refreshing the page
                    or contact support if the problem persists.
                </p>

                {/* Error Details (Development Only) */}
                {process.env.NODE_ENV === 'development' && error && (
                    <details className="mb-6 text-left">
                        <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                            Error Details (Development)
                        </summary>
                        <div className="bg-gray-100 p-4 rounded-lg text-xs font-mono text-gray-800 overflow-auto">
                            <div className="mb-2">
                                <strong>Message:</strong> {error.message}
                            </div>
                            {error.stack && (
                                <div>
                                    <strong>Stack:</strong>
                                    <pre className="whitespace-pre-wrap mt-1">
                                        {error.stack}
                                    </pre>
                                </div>
                            )}
                        </div>
                    </details>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                        onClick={resetError}
                        size="mobile"
                        className="min-h-touch"
                    >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Try Again
                    </Button>

                    <Link href="/">
                        <Button
                            variant="outline"
                            size="mobile"
                            className="min-h-touch"
                        >
                            <Home className="h-4 w-4 mr-2" />
                            Go Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
