export const typeDefs = `#graphql
  type PortfolioItem {
    _id: ID!
    projectTitle: String!
    shortDesc: String!
    longDesc: String
    techSpecs: String
    previewImgUrl: String!
    auxImgs: [AuxImage!]!
    projectUrl: String
    githubUrl: String
    published: Boolean!
    categories: [Category!]!
    createdAt: String!
    updatedAt: String!
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
    createdAt: String!
    updatedAt: String!
  }

  type Settings {
    _id: ID!
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
    skypeId: String
  }

  type ContactItem {
    _id: ID!
    name: String!
    displayValue: String!
    linkUrl: String
    fontAwesomeIcon: String!
    faPrefix: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    # Portfolio queries
    portfolioItems(categoryId: ID): [PortfolioItem!]!
    portfolioItem(id: ID!): PortfolioItem
    
    # Category queries
    categories: [Category!]!
    category(id: ID!): Category
    
    # Settings queries
    settings: Settings!
    
    # Contact queries
    contactItems: [ContactItem!]!
  }
` 