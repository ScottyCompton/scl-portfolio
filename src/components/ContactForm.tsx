'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Send } from 'lucide-react'

interface ContactFormData {
    name: string
    email: string
    comments: string
}

const ContactForm = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
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
            setFormData({ name: '', email: '', comments: '' })
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle className="text-lg">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
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
                        <Label htmlFor="comments">Message</Label>
                        <Textarea
                            id="comments"
                            value={formData.comments}
                            onChange={(e) =>
                                handleInputChange('comments', e.target.value)
                            }
                            required
                            placeholder="Your message..."
                            rows={4}
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
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
                                <span>Send Message</span>
                            </div>
                        )}
                    </Button>

                    {submitStatus === 'success' && (
                        <div className="text-green-600 text-sm text-center">
                            Message sent successfully!
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="text-red-600 text-sm text-center">
                            Failed to send message. Please try again.
                        </div>
                    )}
                </form>
            </CardContent>
        </Card>
    )
}

export default ContactForm
