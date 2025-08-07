import { gql } from '@apollo/client'

const GET_PORTFOLIO_ITEMS_QUERY = gql`
    query GetPortfolioItems($categoryId: ID) {
        portfolioItems(categoryId: $categoryId) {
            _id
            projectTitle
            shortDesc
            previewImgUrl
        }
    }
`

const GET_PORTFOLIO_ITEM_QUERY = gql`
    query GetPortfolioItem($id: String!) {
        portfolioItem(id: $id) {
            _id
            title
            description
        }
    }
`

const GET_CATEGORIES_QUERY = gql`
    query GetCategories {
        categories {
            _id
            category
            displayOrder
            active
        }
    }
`

const GET_TECH_SPECS_QUERY = gql`
    query GetTechSpecs {
        techSpecs {
            id
            name
        }
    }
`

const GET_CONTENT_SETTINGS_QUERY = gql`
    query GetContentSettings {
        contentSettings {
            aboutTitle
            aboutBlurb
            contactEmail
            contactPhone
            aboutImgUrl
            resumeUrl
            siteTitle
            linkedinUsername
        }
    }
`

export {
    GET_PORTFOLIO_ITEMS_QUERY,
    GET_PORTFOLIO_ITEM_QUERY,
    GET_CATEGORIES_QUERY,
    GET_TECH_SPECS_QUERY,
    GET_CONTENT_SETTINGS_QUERY,
}
