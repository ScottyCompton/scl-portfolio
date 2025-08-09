import { gql } from 'graphql-tag'

export const typeDefs = gql`
    type PortfolioItem {
        _id: ID!
        projectTitle: String!
        shortDesc: String!
        longDesc: String
        techSpecs: [String!]
        previewImgUrl: String
        auxImgs: [AuxImage!]!
        auxImgAspectRatio: Float
        projectUrl: String
        repoUrl: String
        deadProject: Boolean
        published: Boolean!
        categories: [Category!]!
    }

    type AuxImage {
        _id: ID!
        auxImgUrl: String!
    }

    type Category {
        _id: ID!
        category: String!
        displayOrder: Int!
        active: Boolean!
    }

    type ContentSettings {
        aboutTitle: String!
        aboutBlurb: String!
        contactEmail: String!
        contactPhone: String!
        aboutImgUrl: String!
        resumeUrl: String
        siteTitle: String!
        linkedinUsername: String
        githubId: String
        twitterHandle: String
        facebookId: String
        instagramId: String
        youTubeId: String
    }

    type ContactItem {
        _id: ID!
        name: String!
        displayValue: String!
        linkUrl: String
        fontAwesomeIcon: String!
        faPrefix: String!
    }

    type TechSpec {
        _id: ID!
        title: String!
        from: String!
        to: String
    }

    type ProfessionalHighlight {
        jobTitle: String!
        orgName: String!
        location: String!
        startDate: String!
        endDate: String!
        responsibilities: [String!]!
        technologies: [String!]!
        avatar: String!
        detaileDesc: String!
    }

    type Query {
        # Portfolio queries
        portfolioItems(categoryId: ID): [PortfolioItem!]!
        portfolioItem(id: ID!): PortfolioItem

        # Category queries
        categories: [Category!]!
        category(id: ID!): Category

        # Settings queries
        contentSettings: ContentSettings!

        # Contact queries
        contactItems: [ContactItem!]!

        # Tech spec queries
        techSpecs: [TechSpec!]!
        techSpec(id: ID!): TechSpec

        # Professional highlights queries
        professionalHighlights: [ProfessionalHighlight!]!
        professionalHighlight(jobTitle: String!): ProfessionalHighlight
    }
`
