'use client'

import { GET_PORTFOLIO_ITEM_QUERY } from '@/app/graphql/queries'
import { PortfolioItem } from '@/types'

import * as Dialog from '@radix-ui/react-dialog'
import { Badge, Button } from '@radix-ui/themes'
import { X, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { useQuery } from '@apollo/client'
import { useTheme } from '@/contexts/ThemeContext'

interface ProjectModalProps {
    project: PortfolioItem | null
    isOpen: boolean
    onClose: () => void
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    const { data, loading, error } = useQuery(GET_PORTFOLIO_ITEM_QUERY, {
        variables: { id: project?._id },
        skip: !project?._id,
        fetchPolicy: 'network-only',
    })
    const { theme } = useTheme()
    // Set background color based on current theme
    const modalBgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    // Build gallery images: include preview first, then auxImgs
    const galleryImages = useMemo(() => {
        const preview = data?.portfolioItem?.previewImgUrl
            ? [{ _id: 'preview', url: data.portfolioItem.previewImgUrl }]
            : []
        const aux = Array.isArray(data?.portfolioItem?.auxImgs)
            ? (
                  data!.portfolioItem!.auxImgs as Array<{
                      _id: string
                      auxImgUrl: string
                  }>
              ).map((img) => ({
                  _id: img._id,
                  url: img.auxImgUrl,
              }))
            : []
        return [...preview, ...aux]
    }, [data])
    const [selectedIndex, setSelectedIndex] = useState(0)
    useEffect(() => {
        setSelectedIndex(0)
    }, [data?.portfolioItem?._id])
    // Normalize tech spec labels regardless of backend shape
    const techSpecLabels = Array.isArray(data?.portfolioItem?.techSpecs)
        ? (
              data!.portfolioItem!.techSpecs as Array<
                  string | { title?: string; label?: string }
              >
          )
              .map((t) =>
                  typeof t === 'string' ? t : t?.title || t?.label || ''
              )
              .map((s) => s.trim())
              .filter(Boolean)
        : []

    if (error) {
        return null
    }
    if (!isOpen || !project) {
        return null
    }

    if (loading) {
        return (
            <Dialog.Root open={isOpen} onOpenChange={onClose}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                    <Dialog.Content
                        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${modalBgClass} w-[92vw] max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl ring-1 ring-black/5 dark:ring-white/5 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95`}
                    >
                        <div className="flex h-full flex-col">
                            {/* Header */}
                            <div className="flex items-start justify-between border-b border-gray-200 dark:border-gray-800 px-5 py-4">
                                <Dialog.Title className="text-xl md:text-2xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                    {project.projectTitle}
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
                                <div className="flex items-center justify-center">
                                    <div className="flex flex-col items-center space-y-4 text-center">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400"></div>
                                        <p className="text-gray-600 dark:text-gray-400 text-base">
                                            Loading project details...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        )
    }

    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content
                    className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${modalBgClass} w-[92vw] max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl ring-1 ring-black/5 dark:ring-white/5 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95`}
                >
                    <div className="flex h-full flex-col">
                        {/* Header */}
                        <div className="flex items-start justify-between border-b border-gray-200 dark:border-gray-800 px-5 py-4">
                            <Dialog.Title className="text-xl md:text-2xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                {data?.portfolioItem.projectTitle}
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
                                {/* Preview Image */}
                                <div className="w-full md:w-[300px] mx-auto md:mx-0">
                                    <div className="relative aspect-[2/3] overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                                        {galleryImages.length > 0 && (
                                            <a
                                                href={
                                                    galleryImages[selectedIndex]
                                                        ?.url || '#'
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label="Open image in new tab"
                                                className="block h-full w-full cursor-zoom-in"
                                            >
                                                <Image
                                                    src={
                                                        galleryImages[
                                                            selectedIndex
                                                        ]?.url || ''
                                                    }
                                                    alt={
                                                        data?.portfolioItem
                                                            .projectTitle ||
                                                        'Project image'
                                                    }
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 300px"
                                                    className="object-cover"
                                                />
                                            </a>
                                        )}
                                    </div>
                                    {galleryImages.length > 1 && (
                                        <div className="mt-3 grid grid-cols-6 gap-2">
                                            {galleryImages.map((img, idx) => (
                                                <button
                                                    key={img._id}
                                                    type="button"
                                                    onClick={() =>
                                                        setSelectedIndex(idx)
                                                    }
                                                    className={`relative h-12 w-full overflow-hidden rounded-md border cursor-pointer ${
                                                        idx === selectedIndex
                                                            ? 'border-blue-500 ring-2 ring-blue-500'
                                                            : 'border-gray-200 dark:border-gray-800'
                                                    }`}
                                                    aria-label={`View image ${idx + 1}`}
                                                >
                                                    <Image
                                                        src={img.url}
                                                        alt="thumbnail"
                                                        fill
                                                        sizes="64px"
                                                        className="object-cover"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {/* Details */}
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            {data?.portfolioItem.shortDesc}
                                        </p>
                                    </div>

                                    {techSpecLabels.length > 0 && (
                                        <div>
                                            <h3 className="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                Technologies Used
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {techSpecLabels.map((label) => (
                                                    <Badge
                                                        key={label}
                                                        size="1"
                                                        color="indigo"
                                                    >
                                                        {label}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {data?.portfolioItem.longDesc && (
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {data.portfolioItem.longDesc}
                                        </p>
                                    )}

                                    {(data?.portfolioItem.projectUrl ||
                                        data?.portfolioItem.repoUrl) && (
                                        <div className="mt-2 flex flex-wrap gap-3">
                                            {data?.portfolioItem.projectUrl && (
                                                <Button
                                                    asChild
                                                    variant="soft"
                                                    color="blue"
                                                >
                                                    <a
                                                        href={
                                                            data.portfolioItem
                                                                .projectUrl
                                                        }
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-2 cursor-pointer"
                                                    >
                                                        <ExternalLink className="h-4 w-4r" />
                                                        <span className=" cursor-pointer">
                                                            Visit Site
                                                        </span>
                                                    </a>
                                                </Button>
                                            )}
                                            {data?.portfolioItem.repoUrl && (
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    color="indigo"
                                                >
                                                    <a
                                                        href={
                                                            data.portfolioItem
                                                                .repoUrl
                                                        }
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-2"
                                                    >
                                                        <Github className="h-4 w-4" />
                                                        View Code
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Footer */}
                        <div className="flex items-center justify-end gap-3 border-t border-gray-200 dark:border-gray-800 px-5 py-4">
                            <Dialog.Close asChild>
                                <Button
                                    variant="outline"
                                    className="cursor-pointer"
                                >
                                    <span className="cursor-pointer">
                                        Close
                                    </span>
                                </Button>
                            </Dialog.Close>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default ProjectModal
