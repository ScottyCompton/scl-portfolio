'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Flex } from '@radix-ui/themes'
import {
    Mail,
    Phone,
    FileText,
    Linkedin,
    ChevronDown,
    ChevronUp,
} from 'lucide-react'
import { useState } from 'react'

import { useQuery } from '@apollo/client'
import { GET_CONTENT_SETTINGS_QUERY } from '@/app/graphql/queries'

const AboutSection = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const { data, loading, error } = useQuery(GET_CONTENT_SETTINGS_QUERY)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    const {
        aboutTitle,
        aboutBlurb,
        contactEmail,
        contactPhone,
        aboutImgUrl,
        resumeUrl,
        linkedinUsername,
        githubId,
    } = data.contentSettings

    return (
        <section className="px-4 pt-20 pb-0 sm:px-6 lg:px-8 py-12 sm:pt-16 sm:pb-0 lg:py-20">
            <div className="max-w-7xl mx-auto">
                {/* Title at the top */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                    {aboutTitle}
                </h1>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                    {/* Avatar/Image - Centered */}
                    <div className="flex justify-center mb-6">
                        <Card className="w-64 h-64 overflow-hidden">
                            <CardContent className="p-0 h-full">
                                {aboutImgUrl ? (
                                    <Image
                                        src={aboutImgUrl}
                                        alt={aboutTitle}
                                        width={320}
                                        height={320}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                        <div className="text-white text-center">
                                            <div className="text-6xl font-bold mb-4">
                                                {aboutTitle
                                                    .split(' ')
                                                    .map((n: string) => n[0])
                                                    .join('')}
                                            </div>
                                            <div className="text-xl opacity-90">
                                                {aboutTitle}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* About Blurb with toggle */}

                    <div className="mb-6">
                        <div
                            className={`text-sm leading-relaxed prose prose-sm max-w-none text-gray-600 dark:text-gray-400 ${
                                !isExpanded ? 'line-clamp-6' : ''
                            }`}
                            dangerouslySetInnerHTML={{
                                __html: aboutBlurb,
                            }}
                        />
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-2 text-blue-600 hover:text-blue-800 transition-colors flex items-center space-x-1"
                        >
                            <span>
                                {isExpanded ? 'View Less' : 'View More'}
                            </span>
                            {isExpanded ? (
                                <ChevronUp className="h-4 w-4" />
                            ) : (
                                <ChevronDown className="h-4 w-4" />
                            )}
                        </button>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <Mail className="h-5 w-5" />
                            <a
                                href={`mailto:${contactEmail}`}
                                className="hover:text-blue-600 transition-colors"
                            >
                                {contactEmail}
                            </a>
                        </div>

                        {contactPhone && (
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5" />
                                <a
                                    href={`tel:${contactPhone}`}
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    {contactPhone}
                                </a>
                            </div>
                        )}

                        {resumeUrl && (
                            <div className="flex items-center space-x-3">
                                <FileText className="h-5 w-5" />
                                <a
                                    href={resumeUrl}
                                    target="_blank"
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    Download My Resume
                                </a>
                            </div>
                        )}

                        {githubId && (
                            <div className="flex items-center space-x-3">
                                <FileText className="h-5 w-5" />
                                <a
                                    href={`https://github.com/${githubId}`}
                                    target="_blank"
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    Github Repos
                                </a>
                            </div>
                        )}

                        {linkedinUsername && (
                            <div className="flex items-center space-x-3">
                                <Linkedin className="h-5 w-5" />
                                <a
                                    href={`https://www.linkedin.com/in/${linkedinUsername}`}
                                    target="_blank"
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    LinkedIn Profile
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                    <div className="relative">
                        {/* Content that wraps around the image */}
                        <div>
                            <Flex direction="row" gap="4">
                                <div>
                                    <div className="float-left mr-8 mb-2">
                                        <Card className="w-80 h-80 overflow-hidden">
                                            <CardContent className="p-0 h-full">
                                                {aboutImgUrl ? (
                                                    <Image
                                                        src={aboutImgUrl}
                                                        alt={aboutTitle}
                                                        width={320}
                                                        height={320}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                                        <div className="text-white text-center">
                                                            <div className="text-6xl font-bold mb-4">
                                                                {aboutTitle
                                                                    .split(' ')
                                                                    .map(
                                                                        (
                                                                            n: string
                                                                        ) =>
                                                                            n[0]
                                                                    )
                                                                    .join('')}
                                                            </div>
                                                            <div className="text-xl opacity-90">
                                                                {aboutTitle}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <div
                                        className="text-base leading-relaxed prose prose-base lg:prose-lg max-w-none  text-gray-600 dark:text-gray-400"
                                        dangerouslySetInnerHTML={{
                                            __html: aboutBlurb,
                                        }}
                                    />
                                </div>
                                <div>
                                    {/* Contact Information */}
                                    <div className="space-y-4 pl-4">
                                        <div className="flex items-center space-x-3">
                                            <Mail className="h-5 w-5" />
                                            <a
                                                href={`mailto:${contactEmail}`}
                                                className="hover:text-blue-600 transition-colors"
                                            >
                                                {contactEmail}
                                            </a>
                                        </div>

                                        {contactPhone && (
                                            <div className="flex items-center space-x-3">
                                                <Phone className="h-5 w-5" />
                                                <a
                                                    href={`tel:${contactPhone}`}
                                                    className="hover:text-blue-600 transition-colors"
                                                >
                                                    {contactPhone}
                                                </a>
                                            </div>
                                        )}

                                        {resumeUrl && (
                                            <div className="flex items-center space-x-3">
                                                <FileText className="h-5 w-5" />
                                                <a
                                                    href={resumeUrl}
                                                    target="_blank"
                                                    className="hover:text-blue-600 transition-colors"
                                                >
                                                    Download My Resume
                                                </a>
                                            </div>
                                        )}

                                        {githubId && (
                                            <div className="flex items-center space-x-3">
                                                <FileText className="h-5 w-5" />
                                                <a
                                                    href={`https://github.com/${githubId}`}
                                                    target="_blank"
                                                    className="hover:text-blue-600 transition-colors"
                                                >
                                                    Github Repos
                                                </a>
                                            </div>
                                        )}

                                        {linkedinUsername && (
                                            <div className="flex items-center space-x-3">
                                                <Linkedin className="h-5 w-5" />
                                                <a
                                                    href={`https://www.linkedin.com/in/${linkedinUsername}`}
                                                    target="_blank"
                                                    className="hover:text-blue-600 transition-colors"
                                                >
                                                    LinkedIn Profile
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Flex>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
