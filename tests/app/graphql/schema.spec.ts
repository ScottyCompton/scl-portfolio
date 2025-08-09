import { typeDefs } from '@/app/graphql/schema'
import { buildASTSchema, printSchema } from 'graphql'

describe('GraphQL schema', () => {
    it('builds a valid schema from typeDefs', () => {
        const schema = buildASTSchema(typeDefs as any)
        const printed = printSchema(schema)
        expect(printed).toContain('type Query')
        expect(printed).toContain('type PortfolioItem')
        expect(printed).toContain('type ProfessionalHighlight')
    })
})
