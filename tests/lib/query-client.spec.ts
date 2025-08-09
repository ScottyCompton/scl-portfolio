import { QueryClient } from '@tanstack/react-query'
import { queryClient } from '@/lib/query-client'

describe('queryClient', () => {
    it('is an instance of QueryClient', () => {
        expect(queryClient).toBeInstanceOf(QueryClient)
    })

    it('has expected default options for queries', () => {
        const defaults = queryClient.getDefaultOptions()
        expect(defaults.queries?.staleTime).toBe(60 * 1000)
        expect(defaults.queries?.gcTime).toBe(10 * 60 * 1000)
        expect(defaults.queries?.retry).toBe(1)
        expect(defaults.queries?.refetchOnWindowFocus).toBe(false)
    })

    it('has expected default options for mutations', () => {
        const defaults = queryClient.getDefaultOptions()
        expect(defaults.mutations?.retry).toBe(1)
    })
})
