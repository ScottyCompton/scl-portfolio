import React from 'react'
import { render, screen } from '@testing-library/react'
import { ApolloProviderWrapper } from '@/components/providers/apollo-provider'
import { ApolloClient, useApolloClient } from '@apollo/client'

function Probe() {
    const client = useApolloClient()
    return (
        <div>
            {client instanceof ApolloClient ? 'apollo-client-ok' : 'no-client'}
        </div>
    )
}

describe('ApolloProviderWrapper', () => {
    it('provides an Apollo Client instance via context', () => {
        render(
            <ApolloProviderWrapper>
                <Probe />
            </ApolloProviderWrapper>
        )
        expect(screen.getByText('apollo-client-ok')).toBeInTheDocument()
    })
})
