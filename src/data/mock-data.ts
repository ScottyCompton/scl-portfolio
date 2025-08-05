import { PortfolioItem, About, ContactItem, SliderImage, PortfolioCategory } from '@/types'

// Mock Portfolio Items
export const mockProjects: PortfolioItem[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe',
    longDescription: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment processing. Built with Next.js, TypeScript, and Stripe for secure payments.',
    image: '/images/projects/ecommerce.jpg',
    images: ['/images/projects/ecommerce-1.jpg', '/images/projects/ecommerce-2.jpg'],
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'Prisma'],
    githubUrl: 'https://github.com/example/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
    createdAt: '2024-01-15',
    status: 'completed',
    category: 'web',
    difficulty: 'advanced'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    longDescription: 'A real-time task management application with drag-and-drop functionality, team collaboration, and progress tracking. Features include user roles, project boards, and automated notifications.',
    image: '/images/projects/task-manager.jpg',
    images: ['/images/projects/task-manager-1.jpg', '/images/projects/task-manager-2.jpg'],
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/example/task-manager',
    liveUrl: 'https://task-manager-demo.com',
    featured: true,
    createdAt: '2024-02-20',
    status: 'completed',
    category: 'web',
    difficulty: 'intermediate'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts',
    longDescription: 'A responsive weather dashboard that provides current conditions and forecasts for any location. Features include interactive maps, weather alerts, and customizable widgets.',
    image: '/images/projects/weather.jpg',
    images: ['/images/projects/weather-1.jpg', '/images/projects/weather-2.jpg'],
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'PWA'],
    githubUrl: 'https://github.com/example/weather-dashboard',
    liveUrl: 'https://weather-demo.com',
    featured: false,
    createdAt: '2024-03-10',
    status: 'completed',
    category: 'web',
    difficulty: 'beginner'
  }
]

// Mock Categories
export const mockCategories: PortfolioCategory[] = [
  {
    id: '1',
    name: 'Web Development',
    displayOrder: 1,
    description: 'Full-stack web applications and websites'
  },
  {
    id: '2',
    name: 'Mobile Apps',
    displayOrder: 2,
    description: 'iOS and Android mobile applications'
  },
  {
    id: '3',
    name: 'UI/UX Design',
    displayOrder: 3,
    description: 'User interface and experience design projects'
  }
]

// Mock About Data
export const mockAbout: About = {
  id: '1',
  name: 'Scott C. Lonis',
  title: 'Full-Stack Developer & UI/UX Designer',
  bio: 'Passionate developer with 5+ years of experience creating modern web applications. Specialized in React, Next.js, and TypeScript with a focus on mobile-first responsive design and exceptional user experiences.',
  avatar: '/images/avatar.jpg',
  location: 'San Francisco, CA',
  email: 'scott@example.com',
  phone: '+1 (555) 123-4567',
  website: 'https://scottlonis.com',
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/scottlonis',
      icon: 'github'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/scottlonis',
      icon: 'linkedin'
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/scottlonis',
      icon: 'twitter'
    }
  ]
}

// Mock Contact Items
export const mockContactItems: ContactItem[] = [
  {
    id: '1',
    type: 'email',
    value: 'scott@example.com',
    icon: 'mail',
    label: 'Email'
  },
  {
    id: '2',
    type: 'phone',
    value: '+1 (555) 123-4567',
    icon: 'phone',
    label: 'Phone'
  },
  {
    id: '3',
    type: 'social',
    value: 'https://github.com/scottlonis',
    icon: 'github',
    label: 'GitHub'
  },
  {
    id: '4',
    type: 'social',
    value: 'https://linkedin.com/in/scottlonis',
    icon: 'linkedin',
    label: 'LinkedIn'
  }
]

// Mock Slider Images
export const mockSliderImages: SliderImage[] = [
  {
    id: '1',
    url: '/images/slider/hero-1.jpg',
    alt: 'Modern web development',
    title: 'Modern Web Development',
    description: 'Building responsive, accessible web applications',
    isForeground: true,
    orientation: 'landscape',
    displayOrder: 1
  },
  {
    id: '2',
    url: '/images/slider/hero-2.jpg',
    alt: 'Mobile-first design',
    title: 'Mobile-First Design',
    description: 'Creating exceptional mobile experiences',
    isForeground: false,
    orientation: 'landscape',
    displayOrder: 2
  },
  {
    id: '3',
    url: '/images/slider/hero-3.jpg',
    alt: 'User experience design',
    title: 'UX/UI Design',
    description: 'Crafting intuitive user interfaces',
    isForeground: false,
    orientation: 'landscape',
    displayOrder: 3
  }
] 