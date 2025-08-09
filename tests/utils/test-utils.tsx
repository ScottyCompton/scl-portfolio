import React, { PropsWithChildren } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type ProvidersProps = PropsWithChildren<{
    apolloMocks?: ReadonlyArray<MockedResponse>
    addTypename?: boolean
}>

function Providers({
    children,
    apolloMocks = [],
    addTypename = false,
}: ProvidersProps) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: { retry: false, gcTime: 1_000 },
            mutations: { retry: false },
        },
    })

    return (
        <MockedProvider mocks={apolloMocks} addTypename={addTypename}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider>{children}</ThemeProvider>
            </QueryClientProvider>
        </MockedProvider>
    )
}

export interface RenderWithProvidersOptions
    extends Omit<RenderOptions, 'wrapper'> {
    apolloMocks?: ReadonlyArray<MockedResponse>
    addTypename?: boolean
}

export function renderWithProviders(
    ui: React.ReactElement,
    {
        apolloMocks = [],
        addTypename = false,
        ...renderOptions
    }: RenderWithProvidersOptions = {}
) {
    return render(ui, {
        wrapper: ({ children }) => (
            <Providers apolloMocks={apolloMocks} addTypename={addTypename}>
                {children}
            </Providers>
        ),
        ...renderOptions,
    })
}

export * from '@testing-library/react'
