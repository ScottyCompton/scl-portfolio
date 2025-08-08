'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="pt-16">
                <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* 404 Icon */}
                        <div className="mb-8">
                            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <Search className="h-12 w-12 text-white" />
                            </div>
                        </div>

                        {/* Error Message */}
                        <div className="mb-8">
                            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-4">
                                404
                            </h1>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 mb-4">
                                Page Not Found
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                                Sorry, the page you&apos;re looking for
                                doesn&apos;t exist. It might have been moved,
                                deleted, or you entered the wrong URL.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/">
                                <Button size="mobile" className="min-h-touch">
                                    <Home className="h-4 w-4 mr-2" />
                                    Go Home
                                </Button>
                            </Link>

                            <Button
                                variant="outline"
                                size="mobile"
                                className="min-h-touch"
                                onClick={() => window.history.back()}
                            >
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Go Back
                            </Button>
                        </div>

                        {/* Helpful Links */}
                        <div className="mt-12">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                You might be looking for:
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
                                <Link href="/">
                                    <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 min-h-touch">
                                        <h4 className="font-medium text-gray-900 mb-1">
                                            Home
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            View my portfolio homepage
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/about">
                                    <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 min-h-touch">
                                        <h4 className="font-medium text-gray-900 mb-1">
                                            About
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Learn more about me
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/projects">
                                    <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 min-h-touch">
                                        <h4 className="font-medium text-gray-900 mb-1">
                                            Projects
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Browse my work
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
