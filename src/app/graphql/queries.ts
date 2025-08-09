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
    query GetPortfolioItem($id: ID!) {
        portfolioItem(id: $id) {
            _id
            projectTitle
            shortDesc
            longDesc
            techSpecs
            previewImgUrl
            auxImgs {
                _id
                auxImgUrl
            }
            repoUrl
            projectUrl
            auxImgAspectRatio
            deadProject
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
            _id
            title
            from
            to
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
            githubId
        }
    }
`

const GET_PROFESSIONAL_HIGHLIGHTS_QUERY = gql`
    query GetProfessionalHighlights {
        professionalHighlights {
            jobTitle
            orgName
            location
            startDate
            endDate
            responsibilities
            technologies
            avatar
            detaileDesc
        }
    }
`

const GET_PROFESSIONAL_HIGHLIGHT_QUERY = gql`
    query GetProfessionalHighlight($jobTitle: String!) {
        professionalHighlight(jobTitle: $jobTitle) {
            jobTitle
            orgName
            location
            startDate
            endDate
            responsibilities
            technologies
            avatar
            detaileDesc
        }
    }
`

export {
    GET_PORTFOLIO_ITEMS_QUERY,
    GET_PORTFOLIO_ITEM_QUERY,
    GET_CATEGORIES_QUERY,
    GET_TECH_SPECS_QUERY,
    GET_CONTENT_SETTINGS_QUERY,
    GET_PROFESSIONAL_HIGHLIGHTS_QUERY,
    GET_PROFESSIONAL_HIGHLIGHT_QUERY,
}
