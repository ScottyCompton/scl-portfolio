'use client'

import { ApolloProvider } from '@apollo/client'
import { graphqlClient } from '@/lib/graphql-client'

interface ApolloProviderWrapperProps {
    children: React.ReactNode
}

export function ApolloProviderWrapper({
    children,
}: ApolloProviderWrapperProps) {
    return <ApolloProvider client={graphqlClient}>{children}</ApolloProvider>
}
