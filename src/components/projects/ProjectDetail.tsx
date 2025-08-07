'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    ExternalLink,
    Github,
    Calendar,
    Tag,
    Code,
    Eye,
    ArrowLeft,
} from 'lucide-react'
import { PortfolioItem } from '@/types'
import Link from 'next/link'

interface ProjectDetailProps {
    project: PortfolioItem
}

export function ProjectDetail({ project }: ProjectDetailProps) {
    const [selectedImage, setSelectedImage] = useState(0)
    const [isImageModalOpen, setIsImageModalOpen] = useState(false)

    const images = project.images || [project.image]

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'bg-green-500 text-white'
            case 'in-progress':
                return 'bg-yellow-500 text-white'
            default:
                return 'bg-gray-500 text-white'
        }
    }

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'advanced':
                return 'bg-red-500 text-white'
            case 'intermediate':
                return 'bg-yellow-500 text-white'
            default:
                return 'bg-green-500 text-white'
        }
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <div className="mb-6">
                    <Link href="/">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="min-h-touch"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Projects
                        </Button>
                    </Link>
                </div>

                {/* Project Header */}
                <div className="mb-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                {project.title}
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-4xl">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            {project.githubUrl && (
                                <Button
                                    variant="outline"
                                    size="mobile"
                                    className="min-h-touch"
                                    onClick={() =>
                                        window.open(project.githubUrl, '_blank')
                                    }
                                >
                                    <Github className="h-4 w-4 mr-2" />
                                    View Code
                                </Button>
                            )}

                            {project.liveUrl && (
                                <Button
                                    size="mobile"
                                    className="min-h-touch"
                                    onClick={() =>
                                        window.open(project.liveUrl, '_blank')
                                    }
                                >
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Live Demo
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <Card className="text-center p-4">
                        <CardHeader className="pb-2">
                            <Calendar className="h-6 w-6 mx-auto text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text-sm font-medium text-gray-900">
                                Created
                            </CardTitle>
                            <CardDescription className="text-sm">
                                {formatDate(project.createdAt)}
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card className="text-center p-4">
                        <CardHeader className="pb-2">
                            <Tag className="h-6 w-6 mx-auto text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text-sm font-medium text-gray-900">
                                Category
                            </CardTitle>
                            <CardDescription className="text-sm capitalize">
                                {project.category}
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card className="text-center p-4">
                        <CardHeader className="pb-2">
                            <Code className="h-6 w-6 mx-auto text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text-sm font-medium text-gray-900">
                                Difficulty
                            </CardTitle>
                            <span
                                className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(project.difficulty)}`}
                            >
                                {project.difficulty}
                            </span>
                        </CardContent>
                    </Card>

                    <Card className="text-center p-4">
                        <CardHeader className="pb-2">
                            <Eye className="h-6 w-6 mx-auto text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text-sm font-medium text-gray-900">
                                Status
                            </CardTitle>
                            <span
                                className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(project.status)}`}
                            >
                                {project.status}
                            </span>
                        </CardContent>
                    </Card>
                </div>

                {/* Project Images */}
                {images.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Project Gallery
                        </h2>

                        {/* Main Image */}
                        <div className="mb-4">
                            <div
                                className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden cursor-pointer min-h-touch"
                                onClick={() => setIsImageModalOpen(true)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                    <div className="text-white text-center">
                                        <div className="text-2xl font-bold mb-2">
                                            {project.title}
                                        </div>
                                        <div className="text-sm opacity-90">
                                            Click to view
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Thumbnail Gallery */}
                        {images.length > 1 && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`aspect-video bg-gray-200 rounded-lg cursor-pointer min-h-touch transition-all duration-200 ${
                                            index === selectedImage
                                                ? 'ring-2 ring-blue-500'
                                                : 'hover:ring-2 hover:ring-gray-300'
                                        }`}
                                        onClick={() => setSelectedImage(index)}
                                    >
                                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                            <div className="text-white text-center">
                                                <div className="text-sm font-bold">
                                                    Image {index + 1}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Long Description */}
                {project.longDescription && (
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            About This Project
                        </h2>
                        <Card>
                            <CardContent className="p-6">
                                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                    {project.longDescription}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* Technologies */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium min-h-touch"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {isImageModalOpen && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsImageModalOpen(false)}
                >
                    <div className="relative max-w-4xl max-h-full">
                        <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <div className="text-2xl font-bold mb-2">
                                        {project.title}
                                    </div>
                                    <div className="text-sm opacity-90">
                                        Image {selectedImage + 1} of{' '}
                                        {images.length}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        {images.length > 1 && (
                            <>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white min-h-touch min-w-touch"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        prevImage()
                                    }}
                                >
                                    ←
                                </Button>

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white min-h-touch min-w-touch"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        nextImage()
                                    }}
                                >
                                    →
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
