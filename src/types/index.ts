export interface PortfolioItem {
    _id: string
    projectTitle: string
    shortDesc: string
    longDesc: string
    techSpecs?: string[]
    previewImgUrl?: string
    repoUrl?: string
    projectUrl?: string
    deadProject?: boolean
    auxImgAspectRatio?: number
    categories?: string[]
    auxImgs?: Array<{
        _id: string
        auxImgUrl: string
    }>
}

export interface Category {
    _id: string
    category: string
    displayOrder: number
    active: boolean
}

export interface ContactItem {
    _id: string
    name: string
    displayValue: string
    linkUrl?: string
    fontAwesomeIcon: string
    faPrefix: 'fas' | 'fab'
}

export interface ContentSettings {
    aboutBlurb?: string
    aboutTitle?: string
    contactEmail?: string
    contactPhone?: string
    facebookId?: string
    githubId?: string
    instagramId?: string
    linkedinUsername?: string
    resumeUrl?: string
    siteTitle?: string
    twitterHandle?: string
    youTubeId?: string
    aboutImgUrl?: string
}

export interface TechSpec {
    _id: string
    title: string
}

export interface ProfessionalHighlight {
    jobTitle: string
    orgName: string
    location: string
    startDate: string
    endDate: string
    responsibilities: string[]
    technologies: string[]
    avatar: string
    detaileDesc: string
}

export interface SliderArrowProps {
    onClick?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): () => void
    type?: string
    className?: string
}
