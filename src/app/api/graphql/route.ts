import { NextResponse } from 'next/server'
import { portfolioData, getPortfolioItemsWithCategories, getPortfolioItemsByCategory, getPortfolioItem } from '@/data/portfolio-data'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')
  
  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 })
  }

  try {
    let result: unknown = null

    switch (query) {
      case 'portfolioItems':
        const categoryId = searchParams.get('categoryId')
        if (categoryId) {
          result = getPortfolioItemsByCategory(categoryId)
        } else {
          result = getPortfolioItemsWithCategories()
        }
        break

      case 'portfolioItem':
        const id = searchParams.get('id')
        if (!id) {
          return NextResponse.json({ error: 'ID parameter is required for portfolioItem query' }, { status: 400 })
        }
        result = getPortfolioItem(id)
        break

      case 'categories':
        result = portfolioData.categories.filter(cat => cat.active)
        break

      case 'settings':
        result = portfolioData.settings
        break

      case 'contactItems':
        result = portfolioData.contactItems
        break

      default:
        return NextResponse.json({ error: 'Invalid query' }, { status: 400 })
    }

    return NextResponse.json({ data: result })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 