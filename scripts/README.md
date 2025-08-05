# Scripts Directory

This directory contains utility scripts for the scl-portfolio project.

## Image Download Script

### `download-images.js`

This script downloads all images from your Firebase Storage URLs and processes them for the new Next.js portfolio.

#### Features:

- **Downloads all images** from Firebase Storage URLs in `appData.js`
- **Organizes by project** - Each project gets its own directory
- **Creates multiple sizes** - Thumbnail, medium, large, and original
- **Optimizes images** - Compresses and resizes for web performance
- **Generates TypeScript data** - Creates a modern data structure
- **Maintains relationships** - Preserves project-image associations

#### Image Sizes Generated:

- **Thumbnail**: 300x200px (for previews and grids)
- **Medium**: 800x600px (for gallery views)
- **Large**: 1200x800px (for detailed views)
- **Original**: Full resolution (for high-quality displays)

#### Directory Structure Created:

```
public/images/portfolio/projects/
├── bar-nirvana/
│   ├── bar-nirvana-preview-original.jpg
│   ├── bar-nirvana-preview-thumbnail.jpg
│   ├── bar-nirvana-preview-medium.jpg
│   └── bar-nirvana-preview-large.jpg
├── the-last-outpost/
│   ├── the-last-outpost-preview-original.jpg
│   ├── the-last-outpost-preview-thumbnail.jpg
│   ├── the-last-outpost-preview-medium.jpg
│   └── the-last-outpost-preview-large.jpg
└── ...
```

#### Usage:

```bash
npm run download-images
```

#### Output:

1. **Images**: Downloaded to `public/images/portfolio/projects/`
2. **Data**: Generated TypeScript file at `src/lib/portfolio-data.ts`
3. **Logs**: Console output showing progress and results

#### Data Transformation:

The script transforms your old data structure into a modern TypeScript interface:

```typescript
interface PortfolioProject {
    id: string
    title: string
    description: string
    longDescription: string
    technologies: string
    githubUrl: string
    liveUrl: string
    published: boolean
    categories: string[]
    images: {
        preview: PortfolioImage | null
        gallery: PortfolioImage[]
    }
    createdAt: string
    updatedAt: string
}
```

#### Error Handling:

- **Network timeouts**: 30-second timeout for downloads
- **Rate limiting**: 100ms delay between requests
- **Duplicate URLs**: Automatically skips duplicate images
- **Failed downloads**: Logs errors but continues processing

#### Requirements:

- Node.js 18+
- Internet connection for downloading images
- Sufficient disk space for image storage
