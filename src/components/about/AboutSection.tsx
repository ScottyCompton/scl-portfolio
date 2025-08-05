import Image from 'next/image'
import { About } from '@/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, Globe, Github, Linkedin, Twitter } from 'lucide-react'

interface AboutSectionProps {
  about: About
}

export function AboutSection({ about }: AboutSectionProps) {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                {about.name}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-6">
                {about.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                {about.bio}
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-500" />
                <a 
                  href={`mailto:${about.email}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {about.email}
                </a>
              </div>
              
              {about.phone && (
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <a 
                    href={`tel:${about.phone}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {about.phone}
                  </a>
                </div>
              )}

              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">{about.location}</span>
              </div>
            </div>

            {/* Social Links */}
            {about.socialLinks && about.socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {about.socialLinks.map((social) => {
                  const Icon = socialIcons[social.icon as keyof typeof socialIcons]
                  return (
                    <Button
                      key={social.platform}
                      variant="outline"
                      size="sm"
                      className="min-h-touch"
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      {Icon && <Icon className="h-4 w-4 mr-2" />}
                      {social.platform}
                    </Button>
                  )
                })}
              </div>
            )}
          </div>

          {/* Avatar/Image */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-80 h-80 overflow-hidden">
              <CardContent className="p-0 h-full">
                {about.avatar ? (
                  <Image
                    src={about.avatar}
                    alt={about.name}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl font-bold mb-4">
                        {about.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="text-xl opacity-90">{about.name}</div>
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