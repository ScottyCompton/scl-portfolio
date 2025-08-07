'use client'

import { GET_PORTFOLIO_ITEM_QUERY } from '@/app/graphql/queries'
import { PortfolioItem } from '@/types'

import * as Dialog from '@radix-ui/react-dialog'
import { Badge, Button } from '@radix-ui/themes'
import Image from 'next/image'
// import { useState, useEffect } from 'react'
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
    })
    const { theme } = useTheme()

    if (error) {
        return null
    }
    if (!isOpen || !project) {
        return null
    }

    // Set background color based on current theme
    const modalBgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-white'

    if (loading) {
        return (
            <Dialog.Root open={isOpen} onOpenChange={onClose}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                    <Dialog.Content
                        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${modalBgClass} p-6 rounded-lg shadow-lg w-full max-w-7xl h-10/12 overflow-y-auto data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]`}
                    >
                        <Dialog.Title className="text-2xs font-light mb-4">
                            &nbsp;
                        </Dialog.Title>
                        <div className="flex items-center justify-center h-full">
                            <div className="flex flex-col items-center space-y-4">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400"></div>
                                <p className="text-gray-600 dark:text-gray-400 text-lg">
                                    Loading{' '}
                                    <span className="font-bold">
                                        {project.projectTitle}
                                    </span>{' '}
                                    project details...
                                </p>
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
                <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content
                    className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${modalBgClass} p-6 rounded-lg shadow-lg w-full max-w-7xl h-10/12 overflow-y-auto data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]`}
                >
                    <Dialog.Title className="text-2xl font-bold mb-4">
                        {data?.portfolioItem.projectTitle}
                    </Dialog.Title>

                    <div className="mb-4">
                        <Image
                            src={data?.portfolioItem.previewImgUrl}
                            alt={data?.portfolioItem.projectTitle}
                            width={400}
                            height={300}
                            className="mb-4 rounded-lg"
                        />

                        <div className="mb-4">
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {data?.portfolioItem.shortDesc}
                            </p>
                            {data?.portfolioItem.longDesc && (
                                <p className="text-gray-600 dark:text-gray-400">
                                    {data.portfolioItem.longDesc}
                                </p>
                            )}
                        </div>

                        {data?.portfolioItem.techSpecs &&
                            data.portfolioItem.techSpecs.length > 0 && (
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                                        Technologies Used:
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {data.portfolioItem.techSpecs.map(
                                            (techSpec: string) => (
                                                <Badge
                                                    key={techSpec}
                                                    size="1"
                                                    color="indigo"
                                                >
                                                    {techSpec}
                                                </Badge>
                                            )
                                        )}
                                    </div>
                                </div>
                            )}
                    </div>

                    <div className="flex justify-end">
                        <Dialog.Close asChild>
                            <Button variant="outline">Close</Button>
                        </Dialog.Close>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default ProjectModal
