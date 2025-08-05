// Portfolio Item Types
export interface PortfolioItem {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  images?: string[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  documentationUrl?: string
  featured: boolean
  createdAt: string
  updatedAt?: string
  status: 'completed' | 'in-progress' | 'planned'
  category: 'web' | 'mobile' | 'desktop' | 'other'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

// Portfolio Category Types
export interface PortfolioCategory {
  id: string
  name: string
  displayOrder: number
  description?: string
}

// About Section Types
export interface About {
  id: string
  name: string
  title: string
  bio: string
  avatar?: string
  location: string
  email: string
  phone?: string
  website?: string
  socialLinks?: SocialLink[]
}

// Contact Types
export interface ContactItem {
  id: string
  type: 'email' | 'phone' | 'social' | 'website'
  value: string
  icon: string
  label: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

// Hero Slider Types
export interface SliderImage {
  id: string
  url: string
  alt: string
  title?: string
  description?: string
  isForeground: boolean
  orientation: 'landscape' | 'portrait'
  displayOrder: number
}

// UI State Types
export interface UIState {
  theme: 'light' | 'dark'
  sidebarOpen: boolean
  modalOpen: boolean
  isMobile: boolean
  currentProject?: string
}

// API Response Types
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

// Project Detail Types
export interface ProjectDetail extends PortfolioItem {
  gallery: string[]
  relatedProjects?: string[]
  testimonials?: Testimonial[]
  metrics?: ProjectMetrics
}

export interface Testimonial {
  id: string
  author: string
  role: string
  company: string
  content: string
  rating: number
}

export interface ProjectMetrics {
  users?: number
  downloads?: number
  stars?: number
  forks?: number
}

// Navigation Types
export interface NavigationItem {
  id: string
  label: string
  href: string
  icon?: string
  children?: NavigationItem[]
}

// Form Types
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

// Search and Filter Types
export interface ProjectFilters {
  category?: string
  status?: string
  difficulty?: string
  technologies?: string[]
  featured?: boolean
}

export interface SearchParams {
  q?: string
  category?: string
  sort?: 'newest' | 'oldest' | 'name' | 'featured'
} 