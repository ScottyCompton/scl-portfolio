import React from 'react'
import { renderWithProviders, screen } from '@/../tests/utils/test-utils'
import ProjectModal from '@/components/ProjectModal'
import { GET_PORTFOLIO_ITEM_QUERY } from '@/app/graphql/queries'

const project = { _id: '1', projectTitle: 'Proj', shortDesc: 'Short' } as any

const mocks = [
    {
        request: { query: GET_PORTFOLIO_ITEM_QUERY, variables: { id: '1' } },
        result: {
            data: {
                portfolioItem: {
                    _id: '1',
                    projectTitle: 'Proj',
                    shortDesc: 'Short',
                    longDesc: 'Long',
                    techSpecs: ['React', 'TS'],
                    previewImgUrl: '',
                    auxImgs: [],
                    repoUrl: '',
                    projectUrl: '',
                    auxImgAspectRatio: 1.5,
                    deadProject: false,
                },
            },
        },
    },
]

describe('ProjectModal', () => {
    it('renders title when open and data loads', async () => {
        const utils = renderWithProviders(
            <ProjectModal project={project} isOpen={true} onClose={() => {}} />,
            { apolloMocks: mocks }
        )
        // Debug DOM to diagnose portal rendering if fails
        // eslint-disable-next-line no-console
        // console.log(document.body.innerHTML)
        expect(await screen.findByText('Proj')).toBeInTheDocument()
    })
})
