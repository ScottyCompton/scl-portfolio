'use client'

import { Skeleton } from '@/components/ui/loading-skeleton'

const AboutSectionSkeleton = () => {
    return (
        <section className="px-4 pt-20 pb-0 sm:px-6 lg:px-8 py-12 sm:pt-16 sm:pb-0 lg:py-20">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <Skeleton className="h-10 sm:h-12 lg:h-14 w-3/4 sm:w-1/2 mb-8" />

                {/* Mobile Layout */}
                <div className="lg:hidden">
                    {/* Avatar/Image */}
                    <div className="flex justify-center mb-6">
                        <div className="w-64 h-64 rounded-lg overflow-hidden">
                            <Skeleton className="w-full h-full" />
                        </div>
                    </div>

                    {/* Blurb */}
                    <div className="mb-6 space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-11/12" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-4 w-2/3" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>

                    {/* Toggle */}
                    <Skeleton className="h-5 w-24" />

                    {/* Contact */}
                    <div className="space-y-4 mt-6">
                        <Skeleton className="h-5 w-2/3" />
                        <Skeleton className="h-5 w-1/2" />
                        <Skeleton className="h-5 w-40" />
                        <Skeleton className="h-5 w-36" />
                        <Skeleton className="h-5 w-44" />
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                    <div className="relative">
                        <div className="flex gap-4">
                            {/* Left: Image */}
                            <div className="float-left mr-8 mb-2">
                                <div className="w-80 h-80 rounded-lg overflow-hidden">
                                    <Skeleton className="w-full h-full" />
                                </div>
                            </div>

                            {/* Blurb */}
                            <div className="flex-1 space-y-3 pr-4">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-11/12" />
                                <Skeleton className="h-4 w-5/6" />
                                <Skeleton className="h-4 w-3/4" />
                                <Skeleton className="h-4 w-2/3" />
                                <Skeleton className="h-4 w-1/2" />
                            </div>

                            {/* Right: Contact */}
                            <div className="space-y-4 pl-4 w-72">
                                <Skeleton className="h-5 w-56" />
                                <Skeleton className="h-5 w-48" />
                                <Skeleton className="h-5 w-60" />
                                <Skeleton className="h-5 w-44" />
                                <Skeleton className="h-5 w-52" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSectionSkeleton
