import React from 'react'
import { render, screen } from '@testing-library/react'
import { QueryProvider } from '@/components/providers/query-provider'
import { useQuery, QueryClient, useQueryClient } from '@tanstack/react-query'

function Probe() {
    const client = useQueryClient()
    const { data } = useQuery({
        queryKey: ['probe'],
        queryFn: async () => 'ok',
    })
    return (
        <>
            <div>
                {client instanceof QueryClient
                    ? 'query-client-ok'
                    : 'no-client'}
            </div>
            <div>{data}</div>
        </>
    )
}

describe('QueryProvider', () => {
    it('creates a QueryClient and allows queries to run', async () => {
        render(
            <QueryProvider>
                <Probe />
            </QueryProvider>
        )
        expect(await screen.findByText('query-client-ok')).toBeInTheDocument()
        expect(await screen.findByText('ok')).toBeInTheDocument()
    })
})
