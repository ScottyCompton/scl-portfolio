import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const httpLink = createHttpLink({
    uri: '/api/graphql',
})

export const graphqlClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})
