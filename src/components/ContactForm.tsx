'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Send } from 'lucide-react'

interface ContactFormData {
    name: string
    email: string
    phone: string
    comments: string
}

const ContactForm = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        comments: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<
        'idle' | 'success' | 'error'
    >('idle')

    const handleInputChange = (field: keyof ContactFormData, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            // Here you would typically send the form data to your backend
            // For now, we'll simulate a successful submission
            await new Promise((resolve) => setTimeout(resolve, 1000))

            setSubmitStatus('success')
            setFormData({ name: '', email: '', phone: '', comments: '' })
        } catch (error) {
            console.error(error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="w-full transition-none hover:shadow-sm active:scale-100 focus:ring-0 focus:ring-offset-0 bg-blue-100 dark:bg-gray-800 border-blue-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
            <CardContent>
                {submitStatus === 'idle' && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={(e) =>
                                    handleInputChange('name', e.target.value)
                                }
                                required
                                placeholder="Your name"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                    handleInputChange('email', e.target.value)
                                }
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) =>
                                    handleInputChange('phone', e.target.value)
                                }
                                placeholder="(555) 555-5555"
                                inputMode="tel"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="comments">Message</Label>
                            <Textarea
                                id="comments"
                                value={formData.comments}
                                onChange={(e) =>
                                    handleInputChange(
                                        'comments',
                                        e.target.value
                                    )
                                }
                                required
                                placeholder="Your message..."
                                rows={4}
                            />
                        </div>

                        <Button
                            type="submit"
                            size="mobile"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg focus-visible:ring-blue-500"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center space-x-2">
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                    <span>Sending...</span>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-2">
                                    <Send className="h-4 w-4" />
                                    <span className="text-white cursor-pointer">
                                        Send Message
                                    </span>
                                </div>
                            )}
                        </Button>
                    </form>
                )}

                {submitStatus === 'success' && (
                    <div className="text-green-600 text-sm text-center py-30">
                        Message sent successfully!
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="text-red-600 text-sm text-center">
                        Failed to send message. Please try again.
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

export default ContactForm
