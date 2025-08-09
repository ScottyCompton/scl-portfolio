import { resolvers } from '@/app/graphql/resolvers'
import {
    portfolioData,
    categoryData,
    techSpecData,
    contentSettingsData,
    contactItemsData,
    professionalHighlightsData,
} from '@/app/api/data'

describe('GraphQL resolvers', () => {
    describe('Query resolvers', () => {
        it('portfolioItems returns all items when no categoryId', () => {
            const result = resolvers.Query.portfolioItems(
                {},
                { categoryId: undefined as any }
            )
            expect(result).toEqual(portfolioData.portfolio)
        })

        it('portfolioItems filters by categoryId', () => {
            const someCategory = categoryData.categories[0]?._id
            const expected = portfolioData.portfolio.filter((item) =>
                someCategory ? item.categories.includes(someCategory) : false
            )
            const result = resolvers.Query.portfolioItems(
                {},
                { categoryId: someCategory }
            )
            expect(result).toEqual(expected)
        })

        it('portfolioItem returns item by id', () => {
            const item = portfolioData.portfolio[0]
            const result = resolvers.Query.portfolioItem({}, { id: item._id })
            expect(result).toEqual(item as any)
        })

        it('categories returns only active categories', () => {
            const result = resolvers.Query.categories()
            expect(result).toEqual(
                categoryData.categories.filter((c) => c.active)
            )
        })

        it('category returns active category by id or undefined', () => {
            const active = categoryData.categories.find((c) => c.active)
            const inactive = categoryData.categories.find((c) => !c.active)
            if (active) {
                expect(
                    resolvers.Query.category({}, { id: active._id })
                ).toEqual(active)
            }
            if (inactive) {
                expect(
                    resolvers.Query.category({}, { id: inactive._id })
                ).toBeUndefined()
            }
        })

        it('contentSettings returns settings', () => {
            const result = resolvers.Query.contentSettings()
            expect(result).toEqual(contentSettingsData.contentSettings)
        })

        it('contactItems returns list', () => {
            const result = resolvers.Query.contactItems()
            expect(result).toEqual(contactItemsData.contactItems)
        })

        it('techSpecs returns list', () => {
            const result = resolvers.Query.techSpecs()
            expect(result).toEqual(techSpecData.techSpecs)
        })

        it('techSpec returns by id', () => {
            const tech = techSpecData.techSpecs[0]
            const result = resolvers.Query.techSpec({}, { id: tech._id })
            expect(result).toEqual(tech)
        })

        it('professionalHighlights returns list', () => {
            const result = resolvers.Query.professionalHighlights()
            expect(result).toEqual(professionalHighlightsData.highlights)
        })

        it('professionalHighlight returns by jobTitle', () => {
            const h = professionalHighlightsData.highlights[0]
            const result = resolvers.Query.professionalHighlight(
                {},
                { jobTitle: h.jobTitle }
            )
            expect(result).toEqual(h)
        })
    })

    describe('PortfolioItem type resolvers', () => {
        it('categories maps category ids to category objects and filters falsy', () => {
            const item = portfolioData.portfolio.find(
                (i) => Array.isArray(i.categories) && i.categories.length > 0
            )
            if (!item) return
            const result = resolvers.PortfolioItem.categories(item as any)
            expect(Array.isArray(result)).toBe(true)
            // every result should be a category object with matching _id
            for (const cat of result as any[]) {
                expect(cat && typeof cat === 'object' && '_id' in cat).toBe(
                    true
                )
            }
            // result length should be less or equal to input ids length
            expect(result.length).toBeLessThanOrEqual(
                (item.categories as any).length
            )
        })

        it('auxImgs returns empty array when undefined', () => {
            const result = resolvers.PortfolioItem.auxImgs({})
            expect(result).toEqual([])
        })

        it('techSpecs returns empty array when undefined, or passthrough when present', () => {
            expect(resolvers.PortfolioItem.techSpecs({} as any)).toEqual([])
            const arr = ['React', 'TypeScript']
            expect(
                resolvers.PortfolioItem.techSpecs({ techSpecs: arr } as any)
            ).toEqual(arr)
        })
    })
})
