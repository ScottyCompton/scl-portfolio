# Phase 1: Analysis & Preparation

## Current State Analysis

### webfolio2-app (Source Application)

#### **Technology Stack:**

- **Framework**: React 17 + Create React App
- **Styling**: Bootstrap + Custom CSS/SASS
- **State Management**: Redux Toolkit
- **Data Layer**: Static data (no GraphQL currently)
- **Components**: 29 TypeScript/React files
- **Responsive Design**: Mobile-first approach (Bootstrap)

#### **Key Components Identified:**

| Component                | Purpose                      | Migration Priority | Mobile Considerations                  |
| ------------------------ | ---------------------------- | ------------------ | -------------------------------------- |
| `Portfolio.tsx`          | Main portfolio display       | High               | Grid layout, touch navigation          |
| `HeroSlider.tsx`         | Hero carousel/slider         | High               | Touch gestures, swipe support          |
| `AboutSection.tsx`       | About information            | High               | Readable typography, touch targets     |
| `ContactMethodsList.tsx` | Contact information          | Medium             | Touch-friendly buttons, accessibility  |
| `PortfolioCatRail.tsx`   | Category-based project rails | High               | Horizontal scrolling, touch navigation |
| `PortRailItem.tsx`       | Individual project items     | High               | Card layout, touch interactions        |
| `LoadingOverlay.tsx`     | Loading states               | Medium             | Mobile-optimized loading indicators    |
| `AppImage.tsx`           | Image handling               | Medium             | Responsive images, lazy loading        |

#### **Data Structure:**

```typescript
interface AppDataState {
    portfolio: PortfolioItem[]
    categories: PortfolioCategory[]
    settings: AppSettings
    sliderImgs: SliderImg[]
    contactItems: ContactItem[]
    ui: AppUIState
}
```

#### **Key Features:**

1. **Portfolio Categories**: Projects organized by categories
2. **Hero Slider**: Responsive image carousel
3. **Project Details**: Individual project pages
4. **Contact Information**: Social media and contact details
5. **Responsive Design**: Mobile-first approach
6. **Loading States**: Progressive loading

### scl-portfolio (Target Application)

#### **Technology Stack:**

- **Framework**: Next.js 15.4.5 + React 19.1.0
- **Styling**: Tailwind CSS v4 + Radix UI Themes
- **State Management**: Next.js Native (Server Components + Client Components)
- **Data Layer**: Server-side data fetching + React Query (client)
- **Components**: 6 files (minimal)
- **Responsive Design**: Mobile-first (Tailwind CSS)

#### **Current State:**

- ✅ Next.js App Router configured
- ✅ Tailwind CSS v4 installed
- ✅ Radix UI Themes installed
- ✅ TypeScript configured
- ✅ Testing framework (Vitest) setup
- ❌ No data layer
- ❌ No state management
- ❌ No components migrated

## Migration Requirements

### **Phase 1 Tasks:**

#### **1.1 Foundation Setup**

- [ ] Install React Query for client-side data management
- [ ] Install Zustand for UI state management
- [ ] Install additional Radix UI components
- [ ] Configure Tailwind for Radix UI integration
- [ ] Create base UI component library
- [ ] Setup Server Components for data fetching
- [ ] **Configure mobile-first responsive design system**

#### **1.2 Data Layer Planning**

- [ ] Design data fetching strategy (Server vs Client)
- [ ] Setup mock data for development
- [ ] Create TypeScript interfaces
- [ ] Plan Server Actions for mutations
- [ ] **Plan mobile-optimized data loading**

#### **1.3 Component Architecture**

- [ ] Design Server/Client component split
- [ ] Plan routing structure
- [ ] Setup folder organization
- [ ] Create component templates
- [ ] **Design mobile-first component hierarchy**

#### **1.4 Testing Strategy**

- [ ] Setup component testing
- [ ] Create test utilities
- [ ] Plan integration tests
- [ ] Setup E2E testing
- [ ] **Setup mobile device testing**

## Dependencies Analysis

### **Required Dependencies:**

```json
{
    "@tanstack/react-query": "^5.0.0",
    "zustand": "^4.4.0",
    "@radix-ui/react-card": "^1.0.0",
    "@radix-ui/react-avatar": "^1.0.0",
    "@radix-ui/react-separator": "^1.0.0",
    "@radix-ui/react-dialog": "^1.0.0",
    "@radix-ui/react-dropdown-menu": "^2.0.0",
    "@radix-ui/react-tabs": "^1.0.0",
    "@radix-ui/react-progress": "^1.0.0",
    "@radix-ui/react-navigation-menu": "^1.0.0",
    "@radix-ui/react-aspect-ratio": "^1.0.0",
    "@radix-ui/react-scroll-area": "^1.0.0",
    "@radix-ui/react-tooltip": "^1.0.0",
    "@radix-ui/react-hover-card": "^1.0.0",
    "@radix-ui/react-popover": "^1.0.0",
    "@radix-ui/react-slot": "^1.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
}
```

### **Development Dependencies:**

```json
{
    "@testing-library/react": "^16.3.0",
    "@testing-library/jest-dom": "^6.6.4",
    "@testing-library/user-event": "^14.6.1",
    "vitest": "^3.2.4",
    "@testing-library/react-hooks": "^8.0.1"
}
```

## File Structure Plan

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (home - Server Component)
│   ├── about/page.tsx (Server Component)
│   ├── projects/
│   │   ├── page.tsx (Server Component - project grid)
│   │   └── [id]/page.tsx (Server Component - project detail)
│   ├── contact/page.tsx (Server Component)
│   └── globals.css
├── components/
│   ├── ui/ (Radix UI components - Client Components)
│   │   ├── button.tsx (Mobile-optimized)
│   │   ├── card.tsx (Mobile-optimized)
│   │   ├── dialog.tsx (Mobile-optimized)
│   │   └── navigation-menu.tsx (Mobile-optimized)
│   ├── layout/
│   │   ├── Header.tsx (Client Component - Mobile navigation)
│   │   ├── Footer.tsx (Server Component - Mobile layout)
│   │   └── Navigation.tsx (Client Component - Mobile menu)
│   ├── home/
│   │   ├── HeroSlider.tsx (Client Component - Touch gestures)
│   │   └── FeaturedProjects.tsx (Server Component - Mobile grid)
│   ├── projects/
│   │   ├── ProjectGrid.tsx (Server Component - Mobile layout)
│   │   ├── ProjectCard.tsx (Client Component - Touch interactions)
│   │   ├── ProjectDetail.tsx (Server Component - Mobile layout)
│   │   └── ProjectGallery.tsx (Client Component - Touch gallery)
│   ├── about/
│   │   └── AboutSection.tsx (Server Component - Mobile typography)
│   └── contact/
│       └── ContactForm.tsx (Client Component - Mobile form)
├── lib/
│   ├── query-client.ts (React Query setup)
│   ├── stores/ (Zustand stores)
│   │   ├── ui-store.ts (Mobile UI state)
│   │   └── theme-store.ts (Mobile theme)
│   ├── utils.ts
│   ├── responsive.ts (Mobile utilities)
│   └── data/
│       ├── projects.ts (Server data functions)
│       ├── about.ts
│       └── contact.ts
├── types/
│   └── index.ts
└── data/
    └── mock-data.ts
```

## Mobile-First Responsive Design Strategy

### **Tailwind CSS Mobile-First Configuration:**

```typescript
// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            // Mobile-first breakpoints
            screens: {
                xs: '475px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
            // Mobile-optimized spacing
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },
            // Mobile-friendly typography
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1rem' }],
                sm: ['0.875rem', { lineHeight: '1.25rem' }],
                base: ['1rem', { lineHeight: '1.5rem' }],
                lg: ['1.125rem', { lineHeight: '1.75rem' }],
                xl: ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
            },
            // Mobile touch targets
            minHeight: {
                touch: '44px', // iOS minimum touch target
            },
            // Mobile-optimized animations
            animation: {
                'slide-up': 'slideUp 0.3s ease-out',
                'fade-in': 'fadeIn 0.2s ease-in',
                'scale-in': 'scaleIn 0.2s ease-out',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('./src/lib/tailwind/mobile-plugin'),
    ],
}
```

### **Mobile-First Component Examples:**

#### **Mobile-Optimized Card Component:**

```typescript
// src/components/ui/card.tsx
import * as React from 'react'
import * as CardPrimitive from '@radix-ui/react-card'
import { cn } from '@/lib/utils'

const Card = React.forwardRef<
  React.ElementRef<typeof CardPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CardPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CardPrimitive.Root
    ref={ref}
    className={cn(
      // Mobile-first responsive design
      'rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm',
      'p-4 sm:p-6', // Smaller padding on mobile
      'min-h-touch', // Minimum touch target
      'transition-all duration-200 ease-in-out',
      'hover:shadow-md active:scale-95', // Touch feedback
      'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
      className
    )}
    {...props}
  />
))
```

#### **Mobile Navigation Component:**

```typescript
// src/components/layout/Navigation.tsx
'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">SCL Portfolio</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/about" className="px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="/projects" className="px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              <a href="/contact" className="px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="min-h-touch">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="/" className="px-3 py-2 rounded-md text-base font-medium">Home</a>
                  <a href="/about" className="px-3 py-2 rounded-md text-base font-medium">About</a>
                  <a href="/projects" className="px-3 py-2 rounded-md text-base font-medium">Projects</a>
                  <a href="/contact" className="px-3 py-2 rounded-md text-base font-medium">Contact</a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
```

### **Mobile-First Responsive Utilities:**

```typescript
// src/lib/responsive.ts
export const mobileBreakpoints = {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
}

export const isMobile = () => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < 768
}

export const isTablet = () => {
    if (typeof window === 'undefined') return false
    return window.innerWidth >= 768 && window.innerWidth < 1024
}

export const isDesktop = () => {
    if (typeof window === 'undefined') return false
    return window.innerWidth >= 1024
}

// Mobile-first responsive classes
export const mobileClasses = {
    container: 'px-4 sm:px-6 lg:px-8',
    grid: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    text: 'text-sm sm:text-base lg:text-lg',
    spacing: 'space-y-4 sm:space-y-6 lg:space-y-8',
}
```

## State Management Strategy

### **Server Components (Data Fetching):**

```typescript
// Server Component - No client JavaScript
async function ProjectsPage() {
  const projects = await getProjects() // Server-side fetch
  return <ProjectGrid projects={projects} />
}

// Server Component - Static content
async function AboutPage() {
  const about = await getAbout()
  return <AboutSection about={about} />
}
```

### **Client Components (Interactivity):**

```typescript
'use client'
// Client Component - Interactive elements
function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { data: likes } = useQuery({
    queryKey: ['project-likes', project.id],
    queryFn: () => getProjectLikes(project.id)
  })

  return (
    <Card
      className="min-h-touch cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      onTouchStart={() => {/* Touch feedback */}}
    >
      {/* Mobile-optimized content */}
    </Card>
  )
}

// Client Component - UI state
function ThemeToggle() {
  const { theme, setTheme } = useUIStore()
  return (
    <Button
      className="min-h-touch"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    />
  )
}
```

### **Zustand Stores (UI State):**

```typescript
// src/lib/stores/ui-store.ts
import { create } from 'zustand'

interface UIState {
    theme: 'light' | 'dark'
    sidebarOpen: boolean
    modalOpen: boolean
    isMobile: boolean
    setTheme: (theme: 'light' | 'dark') => void
    toggleSidebar: () => void
    setModalOpen: (open: boolean) => void
    setIsMobile: (isMobile: boolean) => void
}

export const useUIStore = create<UIState>((set) => ({
    theme: 'light',
    sidebarOpen: false,
    modalOpen: false,
    isMobile: false,
    setTheme: (theme) => set({ theme }),
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
    setModalOpen: (open) => set({ modalOpen: open }),
    setIsMobile: (isMobile) => set({ isMobile }),
}))
```

## Success Criteria

### **Phase 1 Completion:**

- [ ] All dependencies installed and configured
- [ ] React Query setup and functional
- [ ] Zustand stores created
- [ ] Base UI components created
- [ ] TypeScript interfaces defined
- [ ] Testing framework configured
- [ ] Project builds without errors
- [ ] Basic routing structure in place
- [ ] Server/Client component split established
- [ ] **Mobile-first responsive design system implemented**
- [ ] **Touch interactions and gestures working**
- [ ] **Mobile navigation functional**

### **Quality Gates:**

- [ ] TypeScript compilation passes
- [ ] ESLint passes
- [ ] All tests pass
- [ ] No console errors
- [ ] Responsive design working
- [ ] Server Components rendering correctly
- [ ] Client Components interactive
- [ ] **Mobile breakpoints working correctly**
- [ ] **Touch targets meet accessibility standards (44px minimum)**
- [ ] **Mobile performance optimized**
- [ ] **Cross-device testing completed**

## Next Steps

1. **Install Dependencies**: Add React Query, Zustand, and Radix UI components
2. **Setup React Query**: Configure query client and providers
3. **Create Zustand Stores**: Setup UI state management
4. **Create UI Components**: Build mobile-first component library
5. **Setup Testing**: Configure test utilities
6. **Validate Foundation**: Ensure everything works together
7. **Mobile Testing**: Test on various mobile devices and screen sizes

## Timeline Estimate

**Phase 1 Duration**: 1 day

- Foundation setup: 4 hours
- Testing configuration: 2 hours
- Validation and cleanup: 2 hours
- **Mobile testing and optimization: 2 hours**

## Benefits of Mobile-First Next.js Approach

1. **Better Performance**: Server-side rendering and caching
2. **SEO Optimized**: Content rendered on server
3. **Simpler Architecture**: Less client-side complexity
4. **Next.js Native**: Leverages framework strengths
5. **Smaller Bundle**: Less JavaScript sent to client
6. **Type Safety**: Full TypeScript support
7. **Developer Experience**: Better tooling and hot reload
8. **Mobile-First**: Optimized for mobile devices from the start
9. **Touch-Friendly**: Proper touch targets and gestures
10. **Responsive**: Works seamlessly across all device sizes 