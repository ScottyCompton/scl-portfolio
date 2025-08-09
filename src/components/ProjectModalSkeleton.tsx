'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { Skeleton } from '@/components/ui/loading-skeleton'

interface ProjectModalSkeletonProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    modalBgClass?: string
}

const ProjectModalSkeleton = ({
    isOpen,
    onClose,
    title = 'Loading…',
    modalBgClass = 'bg-white',
}: ProjectModalSkeletonProps) => {
    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content
                    className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${modalBgClass} w-[92vw] max-w-5xl max-h-[90vh] overflow-y-auto md:overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl ring-1 ring-black/5 dark:ring-white/5 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95`}
                >
                    <div className="flex h-full min-h-0 flex-col">
                        {/* Header */}
                        <div className="flex items-start justify-between border-b border-gray-200 dark:border-gray-800 px-5 py-4">
                            <Dialog.Title className="text-xl md:text-2xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                {title}
                            </Dialog.Title>
                            <Dialog.Close asChild>
                                <button
                                    aria-label="Close"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </Dialog.Close>
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto px-5 py-5">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr] items-start">
                                {/* Left: Main image + thumbnails */}
                                <div className="w-full md:w-[300px] mx-auto md:mx-0">
                                    <div className="relative aspect-[2/3] overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                                        <Skeleton className="absolute inset-0" />
                                    </div>

                                    <div className="mt-3 grid grid-cols-6 gap-2">
                                        {Array.from({ length: 6 }).map(
                                            (_, idx) => (
                                                <Skeleton
                                                    key={idx}
                                                    className="h-12 w-full rounded-md"
                                                />
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Right: Content */}
                                <div className="flex flex-col gap-4">
                                    {/* Short description lines */}
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-5/6" />
                                        <Skeleton className="h-4 w-2/3" />
                                        <Skeleton className="h-4 w-1/2" />
                                    </div>

                                    {/* Technologies header + chips */}
                                    <div>
                                        <Skeleton className="h-4 w-40 mb-2" />
                                        <div className="flex flex-wrap gap-2">
                                            {Array.from({ length: 6 }).map(
                                                (_, idx) => (
                                                    <Skeleton
                                                        key={idx}
                                                        className="h-6 w-20 rounded-full"
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Long description paragraph */}
                                    <div className="space-y-2">
                                        {Array.from({ length: 5 }).map(
                                            (_, idx) => (
                                                <Skeleton
                                                    key={idx}
                                                    className="h-4 w-full"
                                                />
                                            )
                                        )}
                                    </div>

                                    {/* Buttons row */}
                                    <div className="mt-2 flex flex-wrap gap-3">
                                        <Skeleton className="h-10 w-32 rounded-full" />
                                        <Skeleton className="h-10 w-32 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-end gap-3 border-t border-gray-200 dark:border-gray-800 px-5 py-4">
                            <Skeleton className="h-10 w-24" />
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default ProjectModalSkeleton
