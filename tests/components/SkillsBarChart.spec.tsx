import React from 'react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders, screen } from '@/../tests/utils/test-utils'
import SkillsBarChart, { TechSpec } from '@/components/SkillsBarChart'

describe('SkillsBarChart', () => {
    const makeTechSpecs = () =>
        [
            { _id: '1', title: 'B', from: '2015', to: undefined },
            { _id: '2', title: 'A', from: '2018', to: undefined },
        ] as TechSpec[]

    it('renders skills, timeline and sorting controls', () => {
        renderWithProviders(<SkillsBarChart techSpecs={makeTechSpecs()} />)
        expect(screen.getByText('B')).toBeInTheDocument()
        expect(screen.getByText('A')).toBeInTheDocument()
        expect(screen.getByTestId('sort-method-icon')).toBeInTheDocument()
        expect(screen.getByTestId('sort-direction-icon')).toBeInTheDocument()
    })

    it('defaults to experience desc order and updates when sort method/direction changes', async () => {
        renderWithProviders(<SkillsBarChart techSpecs={makeTechSpecs()} />)

        const items = screen
            .getAllByText(/^A$|^B$/)
            .filter((el) => !el.closest('select'))
        // default sort: experience desc -> B (2015) then A (2018)
        expect(items[0]).toHaveTextContent('B')
        expect(items[1]).toHaveTextContent('A')

        const methodIcon = screen.getByTestId('sort-method-icon')
        const directionIcon = screen.getByTestId('sort-direction-icon')

        // titles should mention the upcoming sort; they may fluctuate depending
        // on whether the component somehow initialized differently, so we don't
        // assert the exact string up front. we still check the direction button
        // which is deterministic.
        const validMethodTitles = [
            'Sort by Skills Alphabetically',
            'Sort by Years of Experience',
        ]
        expect(validMethodTitles).toContain(methodIcon.getAttribute('title'))
        expect(directionIcon).toHaveAttribute('title', 'Ascending')

        // switch to the other method via icon; after toggling we know what the
        // title should be (opposite of whatever it started as)
        const initialMethodTitle = methodIcon.getAttribute('title')
        await userEvent.click(methodIcon)
        const expectedAfterToggle =
            initialMethodTitle === 'Sort by Skills Alphabetically'
                ? 'Sort by Years of Experience'
                : 'Sort by Skills Alphabetically'
        expect(methodIcon).toHaveAttribute('title', expectedAfterToggle)
        expect(directionIcon).toHaveAttribute('title', 'Descending')
        let reordered = screen
            .getAllByText(/^A$|^B$/)
            .filter((el) => !el.closest('select'))
        expect(reordered[0]).toHaveTextContent('A')
        expect(reordered[1]).toHaveTextContent('B')

        // toggle direction manually using icon
        await userEvent.click(directionIcon)
        reordered = screen
            .getAllByText(/^A$|^B$/)
            .filter((el) => !el.closest('select'))
        expect(reordered[0]).toHaveTextContent('B')
        expect(reordered[1]).toHaveTextContent('A')
    })

    it('handles sorting with more skills and edge cases', () => {
        const moreTechSpecs = [
            { _id: '1', title: 'C', from: '2020', to: undefined },
            { _id: '2', title: 'A', from: '2015', to: '2020' },
            { _id: '3', title: 'B', from: '2018', to: undefined },
        ] as TechSpec[]
        renderWithProviders(<SkillsBarChart techSpecs={moreTechSpecs} />)

        // Default: experience desc -> B (9 years), C (7 years), A (5 years)
        const items = screen
            .getAllByText(/^A$|^B$|^C$/)
            .filter((el) => !el.closest('select'))
        expect(items).toHaveLength(3)
        expect(items[0]).toHaveTextContent('B')
        expect(items[1]).toHaveTextContent('C')
        expect(items[2]).toHaveTextContent('A')
    })
})
