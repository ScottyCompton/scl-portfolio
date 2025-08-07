import {
    portfolioData,
    categoryData,
    techSpecData,
    contentSettingsData,
    contactItemsData,
} from '@/app/api/data'

export const resolvers = {
    Query: {
        // Portfolio queries
        portfolioItems: (
            _: unknown,
            { categoryId }: { categoryId?: string }
        ) => {
            if (categoryId) {
                return portfolioData.portfolio.filter((item) =>
                    item.categories.includes(categoryId)
                )
            }
            return portfolioData.portfolio
        },

        portfolioItem: (_: unknown, { id }: { id: string }) => {
            return portfolioData.portfolio.find((item) => item._id === id)
        },

        // Category queries
        categories: () => {
            return categoryData.categories.filter((cat) => cat.active)
        },

        category: (_: unknown, { id }: { id: string }) => {
            return categoryData.categories.find(
                (cat) => cat._id === id && cat.active
            )
        },

        // Settings queries
        contentSettings: () => {
            return contentSettingsData.contentSettings
        },

        // Contact queries
        contactItems: () => {
            return contactItemsData.contactItems
        },

        // Tech spec queries
        techSpecs: () => {
            return techSpecData.techSpecs
        },
    },

    // PortfolioItem type resolvers
    PortfolioItem: {
        categories: (parent: { categories?: string[] }) => {
            if (!parent.categories || !Array.isArray(parent.categories)) {
                return []
            }
            return parent.categories
                .map((categoryId: string) =>
                    categoryData.categories.find(
                        (cat) => cat._id === categoryId
                    )
                )
                .filter(Boolean)
        },

        auxImgs: (parent: {
            auxImgs?: Array<{ _id: string; auxImgUrl: string }>
        }) => {
            return parent.auxImgs || []
        },

        techSpecs: (parent: { techSpecs?: string[] }) => {
            if (!parent.techSpecs || !Array.isArray(parent.techSpecs)) {
                return []
            }
            return parent.techSpecs
                .map((techSpecId: string) => {
                    const techSpec = techSpecData.techSpecs.find(
                        (tech) => tech.id === techSpecId
                    )
                    return techSpec ? techSpec.techSpec : null
                })
                .filter(Boolean)
        },
    },
}
