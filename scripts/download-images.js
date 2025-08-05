const fs = require('fs-extra')
const path = require('path')
const axios = require('axios')
const sharp = require('sharp')

// Import the app data
const appData = require('../src/lib/appData.js').default

// Configuration
const OUTPUT_DIR = path.join(__dirname, '../public/images')
const SIZES = {
    thumbnail: { width: 300, height: 200 },
    medium: { width: 800, height: 600 },
    large: { width: 1200, height: 800 },
    original: null, // Keep original size
}

// Utility function to create clean filename
function createCleanFilename(projectTitle, index = null, type = 'image') {
    return (
        projectTitle
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '') +
        (index !== null ? `-${String(index).padStart(2, '0')}` : '') +
        (type === 'preview' ? '-preview' : '') +
        '.jpg'
    )
}

// Utility function to create project directory
function createProjectDir(projectTitle) {
    const cleanName = projectTitle
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')

    return path.join(OUTPUT_DIR, 'portfolio', 'projects', cleanName)
}

// Download and process image
async function downloadAndProcessImage(url, outputPath, sizes = SIZES) {
    try {
        console.log(`Downloading: ${url}`)

        const response = await axios.get(url, {
            responseType: 'arraybuffer',
            timeout: 30000,
        })

        const buffer = Buffer.from(response.data)

        // Create directory if it doesn't exist
        await fs.ensureDir(path.dirname(outputPath))

        // Process image for different sizes
        for (const [sizeName, dimensions] of Object.entries(sizes)) {
            const sizePath = outputPath.replace('.jpg', `-${sizeName}.jpg`)

            if (dimensions) {
                await sharp(buffer)
                    .resize(dimensions.width, dimensions.height, {
                        fit: 'cover',
                        position: 'center',
                    })
                    .jpeg({ quality: 85 })
                    .toFile(sizePath)
            } else {
                // Keep original size
                await sharp(buffer).jpeg({ quality: 90 }).toFile(sizePath)
            }

            console.log(`Created: ${sizePath}`)
        }

        return true
    } catch (error) {
        console.error(`Error processing ${url}:`, error.message)
        return false
    }
}

// Extract all unique images from the data
function extractImages() {
    const images = []
    const processedUrls = new Set()

    appData.portfolio.forEach((project) => {
        // Add preview image
        if (
            project.previewImgUrl &&
            !processedUrls.has(project.previewImgUrl)
        ) {
            images.push({
                url: project.previewImgUrl,
                projectTitle: project.projectTitle,
                type: 'preview',
                index: null,
            })
            processedUrls.add(project.previewImgUrl)
        }

        // Add auxiliary images
        if (project.auxImgs && Array.isArray(project.auxImgs)) {
            project.auxImgs.forEach((auxImg, index) => {
                if (auxImg.auxImgUrl && !processedUrls.has(auxImg.auxImgUrl)) {
                    images.push({
                        url: auxImg.auxImgUrl,
                        projectTitle: project.projectTitle,
                        type: 'auxiliary',
                        index: index,
                    })
                    processedUrls.add(auxImg.auxImgUrl)
                }
            })
        }
    })

    return images
}

// Generate new data structure
function generateNewDataStructure() {
    const newPortfolio = appData.portfolio.map((project) => {
        const cleanProjectName = project.projectTitle
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '')

        // Generate new image paths
        const previewImage = project.previewImgUrl
            ? {
                  original: `/images/portfolio/projects/${cleanProjectName}/${createCleanFilename(project.projectTitle, null, 'preview')}`,
                  thumbnail: `/images/portfolio/projects/${cleanProjectName}/${createCleanFilename(project.projectTitle, null, 'preview').replace('.jpg', '-thumbnail.jpg')}`,
                  medium: `/images/portfolio/projects/${cleanProjectName}/${createCleanFilename(project.projectTitle, null, 'preview').replace('.jpg', '-medium.jpg')}`,
                  large: `/images/portfolio/projects/${cleanProjectName}/${createCleanFilename(project.projectTitle, null, 'preview').replace('.jpg', '-large.jpg')}`,
              }
            : null

        const auxiliaryImages = project.auxImgs
            ? project.auxImgs.map((auxImg, index) => {
                  const filename = createCleanFilename(
                      project.projectTitle,
                      index + 1
                  )
                  return {
                      original: `/images/portfolio/projects/${cleanProjectName}/${filename}`,
                      thumbnail: `/images/portfolio/projects/${cleanProjectName}/${filename.replace('.jpg', '-thumbnail.jpg')}`,
                      medium: `/images/portfolio/projects/${cleanProjectName}/${filename.replace('.jpg', '-medium.jpg')}`,
                      large: `/images/portfolio/projects/${cleanProjectName}/${filename.replace('.jpg', '-large.jpg')}`,
                  }
              })
            : []

        // Extract categories from cso array
        const categories = project.cso
            ? project.cso.map((cso) => cso.category_id)
            : []

        return {
            id: project._id,
            title: project.projectTitle,
            description: project.shortDesc,
            longDescription: project.longDesc,
            technologies: project.techSpecs,
            githubUrl: project.githubUrl,
            liveUrl: project.projectUrl,
            published: project.published,
            categories: categories,
            images: {
                preview: previewImage,
                gallery: auxiliaryImages,
            },
            createdAt: project.createdAt,
            updatedAt: project.updatedAt,
        }
    })

    return {
        portfolio: newPortfolio,
        contact: appData.contactItems.map((item) => ({
            id: item._id,
            name: item.name,
            value: item.displayValue,
            url: item.linkUrl,
            icon: item.fontAwesomeIcon,
            prefix: item.faPrefix,
        })),
    }
}

// Main execution function
async function main() {
    try {
        console.log('🚀 Starting image download and processing...')

        // Clean output directory
        await fs.remove(OUTPUT_DIR)
        await fs.ensureDir(OUTPUT_DIR)
        await fs.ensureDir(path.join(OUTPUT_DIR, 'portfolio', 'projects'))

        // Extract all images
        const images = extractImages()
        console.log(`📸 Found ${images.length} unique images to process`)

        // Download and process images
        let successCount = 0
        let failCount = 0

        for (const image of images) {
            const projectDir = createProjectDir(image.projectTitle)
            const filename = createCleanFilename(
                image.projectTitle,
                image.index,
                image.type
            )
            const outputPath = path.join(projectDir, filename)

            const success = await downloadAndProcessImage(image.url, outputPath)

            if (success) {
                successCount++
            } else {
                failCount++
            }

            // Add a small delay to be respectful to the server
            await new Promise((resolve) => setTimeout(resolve, 100))
        }

        console.log(`✅ Successfully processed: ${successCount} images`)
        console.log(`❌ Failed to process: ${failCount} images`)

        // Generate new data structure
        const newData = generateNewDataStructure()

        // Write new data structure
        const newDataPath = path.join(__dirname, '../src/lib/portfolio-data.ts')
        const dataContent = `// Auto-generated from appData.js
// Generated on: ${new Date().toISOString()}

export interface PortfolioImage {
  original: string;
  thumbnail: string;
  medium: string;
  large: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string;
  githubUrl: string;
  liveUrl: string;
  published: boolean;
  categories: string[];
  images: {
    preview: PortfolioImage | null;
    gallery: PortfolioImage[];
  };
  createdAt: string;
  updatedAt: string;
}

export interface ContactItem {
  id: string;
  name: string;
  value: string;
  url: string;
  icon: string;
  prefix: string;
}

export interface PortfolioData {
  portfolio: PortfolioProject[];
  contact: ContactItem[];
}

const portfolioData: PortfolioData = ${JSON.stringify(newData, null, 2)};

export default portfolioData;
`

        await fs.writeFile(newDataPath, dataContent, 'utf8')
        console.log(`📝 Generated new data structure: ${newDataPath}`)

        console.log('🎉 Image processing complete!')
        console.log(`📁 Images saved to: ${OUTPUT_DIR}`)
        console.log(`📊 Total projects: ${newData.portfolio.length}`)
        console.log(`📞 Contact items: ${newData.contact.length}`)
    } catch (error) {
        console.error('❌ Error during processing:', error)
        process.exit(1)
    }
}

// Run the script
if (require.main === module) {
    main()
}

module.exports = { main, extractImages, generateNewDataStructure }
