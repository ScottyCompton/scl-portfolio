'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, Globe, Github, Linkedin, Twitter } from 'lucide-react'

import { useQuery } from '@apollo/client'
import { GET_CONTENT_SETTINGS_QUERY } from '@/app/graphql/queries'

const AboutSection = () => {
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
        siteTitle,
        linkedinUsername,
        githubId,
        twitterHandle,
        facebookId,
        instagramId,
        youTubeId,
    } = data.contentSettings

    const socialIcons = {
        github: Github,
        linkedin: Linkedin,
        twitter: Twitter,
    }

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                                {aboutTitle}
                            </h1>
                            <div
                                className="text-sm sm:text-sm leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: aboutBlurb }}
                            />
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
                        </div>
                    </div>

                    {/* Avatar/Image */}
                    <div className="flex justify-center lg:justify-end">
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
                </div>
            </div>
        </section>
    )
}

export default AboutSection
