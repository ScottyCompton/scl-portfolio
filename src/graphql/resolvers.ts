import { portfolioData, getPortfolioItemsWithCategories, getPortfolioItemsByCategory, getPortfolioItem } from '@/data/portfolio-data'

interface PortfolioItemParent {
  cso: Array<{
    _id: string
    category_id: string
    displayOrder: number
  }>
}

export const resolvers = {
  Query: {
    // Portfolio queries
    portfolioItems: (_: unknown, { categoryId }: { categoryId?: string }) => {
      if (categoryId) {
        return getPortfolioItemsByCategory(categoryId)
      }
      return getPortfolioItemsWithCategories()
    },
    
    portfolioItem: (_: unknown, { id }: { id: string }) => {
      return getPortfolioItem(id)
    },
    
    // Category queries
    categories: () => {
      return portfolioData.categories.filter(cat => cat.active)
    },
    
    category: (_: unknown, { id }: { id: string }) => {
      return portfolioData.categories.find(cat => cat._id === id && cat.active)
    },
    
    // Settings queries
    settings: () => {
      return portfolioData.settings
    },
    
    // Contact queries
    contactItems: () => {
      return portfolioData.contactItems
    }
  },
  
  // Resolvers for nested fields
  PortfolioItem: {
    categories: (parent: PortfolioItemParent) => {
      return parent.cso.map((cso) => 
        portfolioData.categories.find(cat => cat._id === cso.category_id)
      ).filter(Boolean)
    }
  }
} 