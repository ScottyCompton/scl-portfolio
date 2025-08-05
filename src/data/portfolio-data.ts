// Portfolio data converted from webfolio2-app staticData.tsx
// Excluding slider images as per requirements

export interface PortfolioItem {
  _id: string
  projectTitle: string
  shortDesc: string
  longDesc: string
  techSpecs: string
  previewImgUrl: string
  auxImgs: Array<{
    _id: string
    auxImgUrl: string
  }>
  projectUrl?: string
  githubUrl?: string
  published: boolean
  cso: Array<{
    _id: string
    category_id: string
    displayOrder: number
  }>
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Category {
  _id: string
  category: string
  displayOrder: number
  active: boolean
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Settings {
  _id: string
  aboutBlurb: string
  aboutTitle: string
  contactEmail: string
  contactPhone: string
  facebookId: string
  githubId: string
  instagramId: string
  linkedinUsername: string
  resumeUrl: string
  siteTitle: string
  twitterHandle: string
  youTubeId: string
  aboutImgUrl: string
  skypeId: string
  __v: number
}

export interface ContactItem {
  _id: string
  name: string
  displayValue: string
  linkUrl?: string
  fontAwesomeIcon: string
  faPrefix: 'fas' | 'fab'
  createdAt: string
  updatedAt: string
  __v: number
}

export const portfolioData = {
  portfolio: [
    {
      published: true,
      _id: '60c4d9f78d9ea066f4a762d5',
      githubUrl: '',
      longDesc: '',
      projectTitle: 'Bar Nirvana',
      projectUrl: '',
      shortDesc: 'Logo design for a local jungle bar in Jaco, Costa Rica',
      auxImgAspectRatio: null,
      techSpecs: 'Adobe Photoshop, Adobe Illustrator',
      auxImgs: [],
      previewImgUrl: 'https://firebasestorage.googleapis.com/v0/b/webfolio-4c731.appspot.com/o/portfolio%2F26e4b73f-4526-4da0-b594-d60e317c2123.jpg?alt=media&token=252f5ec8-89e8-4bd5-b055-455e53ae1634',
      cso: [
        {
          _id: '60c4d9f88d9ea066f4a762d6',
          category_id: '60c4d9f78d9ea066f4a762d2',
          displayOrder: 7
        }
      ],
      createdAt: '2021-06-12T15:59:51.882Z',
      updatedAt: '2021-06-12T15:59:52.660Z',
      __v: 0
    },
    {
      published: true,
      _id: '60c4d9f88d9ea066f4a762d7',
      githubUrl: '',
      longDesc: '',
      projectTitle: 'The Last Outpost',
      projectUrl: '',
      shortDesc: 'Logo design for a ranch-based music and arts venue in Westlake Village, California',
      auxImgAspectRatio: null,
      techSpecs: 'Adobe Photoshop, Adobe Illustrator',
      auxImgs: [],
      previewImgUrl: 'https://firebasestorage.googleapis.com/v0/b/webfolio-4c731.appspot.com/o/portfolio%2F1963232e-375f-449e-8cd8-a55369145e10.jpg?alt=media&token=80101147-2972-4649-850e-cc09538af3f7',
      cso: [
        {
          _id: '60c4d9f98d9ea066f4a762d8',
          category_id: '60c4d9f78d9ea066f4a762d2',
          displayOrder: 8
        }
      ],
      createdAt: '2021-06-12T15:59:52.833Z',
      updatedAt: '2021-06-12T15:59:53.460Z',
      __v: 0
    },
    {
      published: true,
      _id: '60c4d9f98d9ea066f4a762d9',
      githubUrl: '',
      longDesc: '',
      projectTitle: 'Safehouse Studios',
      projectUrl: '',
      shortDesc: 'Logo design for a soon-to-be music studio in Jaco, Costa Rica',
      auxImgAspectRatio: null,
      techSpecs: 'Adobe Photoshop, Adobe Illustrator',
      auxImgs: [],
      previewImgUrl: 'https://firebasestorage.googleapis.com/v0/b/webfolio-4c731.appspot.com/o/portfolio%2Fc5c061ec-afc3-407c-a084-ca125b2d4675.jpg?alt=media&token=8a112b1a-4268-46da-afa7-1713cca62452',
      cso: [
        {
          _id: '60c4d9fa8d9ea066f4a762da',
          category_id: '60c4d9f78d9ea066f4a762d2',
          displayOrder: 17
        },
        {
          _id: '60c4d9fa8d9ea066f4a762db',
          category_id: '60c4d9f78d9ea066f4a762d1',
          displayOrder: 0
        }
      ],
      createdAt: '2021-06-12T15:59:53.663Z',
      updatedAt: '2021-06-12T15:59:54.108Z',
      __v: 0
    },
    {
      published: true,
      _id: '60c4d9fb8d9ea066f4a762dc',
      githubUrl: '',
      longDesc: 'As a designer and programmer, few things annoy me more than spending several weeks working on a website for a client only to come back some time later and found that they haven\'t kept up with it.  Such is the case with Paddy\'s.  When I was done with it, I really liked this site.  It looked great, had some great social sharing, blogging and image uploading features.  Plus, I thought I did a great job on the logo.  I even showed the owners how to operate the Wordpress admin so they could do everything themselves.  I think there\'s been a change of ownership, because now it looks like a blind monkey is maintaining it and everything looks jacked up (probably because of a failure to keep the plugins updated).  Really annoys me. But, not my call, and the owners never contact me back so nothing i can do.  But, let this be a cautionary tale of what not to do with your website.',
      projectTitle: 'Paddy\'s Bar & Lounge',
      projectUrl: 'http://paddysventura.com',
      shortDesc: 'Wordpress web design for a local bar & grill in Ventura, California',
      auxImgAspectRatio: 64.3,
      techSpecs: 'Wordpress, HTML5, CSS3, javaScript, jQuery, Adobe Photohop, Adobe Illustrator',
      auxImgs: [
        {
          _id: '60c4d9fb8d9ea066f4a762dd',
          auxImgUrl: 'https://firebasestorage.googleapis.com/v0/b/webfolio-4c731.appspot.com/o/portfolio%2F21fb9bd1-fe64-452a-88f6-7eec48203efb.jpg?alt=media&token=c1dc55d1-fc58-4d16-bec0-d0ca8e54a8ee'
        },
        {
          _id: '60c4d9fb8d9ea066f4a762de',
          auxImgUrl: 'https://firebasestorage.googleapis.com/v0/b/webfolio-4c731.appspot.com/o/portfolio%2F2bb16bd9-f066-453c-8af6-9a167d94a4f2.jpg?alt=media&token=59b4bbc0-576d-4113-b1a1-3ecae115c405'
        },
        {
          _id: '60c4d9fb8d9ea066f4a762df',
          auxImgUrl: 'https://firebasestorage.googleapis.com/v0/b/webfolio-4c731.appspot.com/o/portfolio%2Ff1b58879-7c47-465c-9fda-45470cff91b2.jpg?alt=media&token=49ecc500-f801-4529-a5a1-f2ee821600f8'
        },
        {
          _id: '60c4d9fb8d9ea066f4a762e0',
          auxImgUrl: 'https://firebasestorage.googleapis.com/v0/b/webfolio-4c731.appspot.com/o/portfolio%2F58a17a47-0efe-49c8-8d2f-b5706e7b1345.jpg?alt=media&token=221f1806-09e0-4faf-bc4e-69eb9b1737e6'
        },
        {
          _id: '60c4d9fb8d9ea066f4a762e1',
          auxImgUrl: 'https://firebasestorage.googleapis.com/v0/b/webfolio-4c731.appspot.com/o/portfolio%2F15c7d549-17cf-4d6b-a2ea-1b48dfadac53.jpg?alt=media&token=0bbd54bf-a705-4439-ba3d-ee919221c89d'
        }
      ],
      previewImgUrl: 'https://firebasestorage.googleapis.com/v0/b/webfolio-4c731.appspot.com/o/portfolio%2F9751c1ff-a28c-4eb7-8aae-c124aad811b6.jpg?alt=media&token=ea3cf396-fa24-4a27-90ee-6eb0c33ba672',
      cso: [
        {
          _id: '60c4d9fc8d9ea066f4a762e2',
          category_id: '60c4d9f78d9ea066f4a762cf',
          displayOrder: 6
        }
      ],
      createdAt: '2021-06-12T15:59:55.436Z',
      updatedAt: '2021-06-12T15:59:56.080Z',
      __v: 0
    }
  ],
  categories: [
    {
      displayOrder: 0,
      active: true,
      _id: '60c4d9f78d9ea066f4a762cf',
      category: 'Web Design',
      createdAt: '2021-06-12T15:59:51.879Z',
      updatedAt: '2021-06-12T15:59:51.879Z',
      __v: 0
    },
    {
      displayOrder: 3,
      active: true,
      _id: '60c4d9f78d9ea066f4a762d2',
      category: 'Logo Design',
      createdAt: '2021-06-12T15:59:51.881Z',
      updatedAt: '2021-06-12T15:59:51.881Z',
      __v: 0
    },
    {
      displayOrder: 2,
      active: true,
      _id: '60c4d9f78d9ea066f4a762d1',
      category: 'Graphic Design',
      createdAt: '2021-06-12T15:59:51.880Z',
      updatedAt: '2021-06-12T15:59:51.880Z',
      __v: 0
    },
    {
      displayOrder: 4,
      active: true,
      _id: '60c4d9f78d9ea066f4a762d3',
      category: 'Print Media',
      createdAt: '2021-06-12T15:59:51.881Z',
      updatedAt: '2021-06-12T15:59:51.881Z',
      __v: 0
    },
    {
      displayOrder: 5,
      active: true,
      _id: '60c4d9f78d9ea066f4a762d4',
      category: 'Special Projects',
      createdAt: '2021-06-12T15:59:51.881Z',
      updatedAt: '2021-06-12T15:59:51.881Z',
      __v: 0
    }
  ],
  settings: {
    _id: '60c4da218d9ea066f4a763b5',
    aboutBlurb: 'Hi, I\'m Scotty. Welcome to my personal portfolio site, and thanks for taking a moment to get to know me.<div><br></div><div>I\'m a career full-stack developer, web and graphic designer with over 25 years of industry experience. So yea, I\'m so old, I can still here the sound of a 14.4-baud modem buzzing when I close my eyes, and was a coder when most contemporary programmers were watching Teletubbies.&nbsp;</div><div><br></div><div>I\'ve worked on projects of all sizes and flavors from small single page brochure websites to full enterprise and e-commerce applications.&nbsp; While I have worked as both backend, frontend and full-stack developer, my primary focus these days is&nbsp;<span style="font-size: 1rem;">working with </span><b class="text-primary">React, Redux and Redux Toolkit </b><span style="font-size: 1rem;">primarily as a UI/UX developer.&nbsp;Still, I enjoy working with node.js and pure programming </span>exercises<span style="font-size: 1rem;">&nbsp;every bit as much as I do UI/UX development.</span><div><br></div>\n\n<div><span style="font-size: 1rem;">I actually don\'t consider myself a designer so much as a full-stack developer with decent Photoshop skills.  While I can do design(ish), I\'m really at my best in an iterative Agile workflow environment in collaboration with a designer whose focus is on great user experience, and who is not afraid to test the limits of what is possible.  This leaves me free to do what I\'m do best, which is to help bring a good designer\'s vision to life.\n\nI can honestly say that I very much enjoy what I do, and while it\'s been challenging at times to stay relevant in such a fast-moving industry, I\'ve managed to adapt and become even better as time has moved on.&nbsp;</span><div><div><br></div><div>My hobbies include learning new technologies, perfecting the omelette, riding motorcycles, fitness, surfing, yoga, anything on the beach, travel, playing guitar (badly), posting pictures of my food online and petting ferule kittens.</div></div></div></div></div></div>',
    aboutTitle: 'A Little About Me',
    contactEmail: 'scott.lonis@outlook.com',
    contactPhone: '011-506-6477-7138 (Costa Rica)',
    facebookId: '',
    githubId: '',
    instagramId: '',
    linkedinUsername: 'scott-lonis',
    resumeUrl: 'https://firebasestorage.googleapis.com/v0/b/webfolio-4c731.appspot.com/o/settings%2Fscl_resume_with_faq.pdf?alt=media&token=443677a6-8641-4c63-b7c8-8ffa1f2a3258',
    siteTitle: 'Scott C. Lonis - Programming and Graphic Design Portfolio',
    twitterHandle: '',
    youTubeId: '',
    aboutImgUrl: 'https://firebasestorage.googleapis.com/v0/b/webfolio-4c731.appspot.com/o/settings%2Fscotty_mowhawk.jpg?alt=media&token=9d014557-c2f2-47c1-b531-e822883e1c66',
    __v: 0,
    skypeId: 'live:scott.lonis'
  },
  contactItems: [
    {
      faPrefix: 'fab',
      _id: '60cb36b9c133990015cdf198',
      name: 'Visit my LinkedIn profile',
      displayValue: 'in/scott-lonis',
      linkUrl: 'https://www.linkedin.com/in/scott-lonis',
      fontAwesomeIcon: 'linkedin',
      createdAt: '2021-06-17T11:49:13.523Z',
      updatedAt: '2021-06-17T14:56:56.541Z',
      __v: 0
    },
    {
      faPrefix: 'fas',
      _id: '60cb378fc133990015cdf19c',
      name: 'Email me',
      displayValue: 'scott.lonis@outlook.com',
      fontAwesomeIcon: 'at',
      createdAt: '2021-06-17T11:52:47.772Z',
      updatedAt: '2021-06-17T14:57:29.442Z',
      __v: 0,
      linkUrl: 'mailto:scott.lonis@outlook.com?subject=I want to hire you'
    },
    {
      faPrefix: 'fas',
      _id: '60cb5f55a3ab5a0015a862c6',
      name: 'Let\'s setup a Zoom meeting',
      displayValue: 'Available For Zoom Meetings',
      fontAwesomeIcon: 'video',
      createdAt: '2021-06-17T14:42:29.111Z',
      updatedAt: '2021-06-17T20:04:42.269Z',
      __v: 0,
      linkUrl: ''
    },
    {
      faPrefix: 'fas',
      _id: '60d4c4e64cfeb4001577dc2a',
      name: 'Let\'s do a Microsoft Teams meeting',
      displayValue: 'Available for Teams meetings',
      fontAwesomeIcon: 'users',
      createdAt: '2021-06-24T17:46:14.139Z',
      updatedAt: '2021-06-24T17:46:44.071Z',
      __v: 0,
      linkUrl: null
    },
    {
      faPrefix: 'fas',
      _id: '60ccd7e7e835a9001551aca8',
      name: 'Call or text me on WhatsApp',
      displayValue: '214-923-3658',
      linkUrl: '',
      fontAwesomeIcon: 'phone',
      createdAt: '2021-06-18T17:29:11.042Z',
      updatedAt: '2021-08-25T14:03:34.928Z',
      __v: 0
    },
    {
      faPrefix: 'fab',
      _id: '60d4e592497ce60015cd0848',
      name: 'Contact me via Skype',
      displayValue: 'live:scott.lonis',
      fontAwesomeIcon: 'skype',
      createdAt: '2021-06-24T20:05:38.303Z',
      updatedAt: '2021-06-24T20:05:38.303Z',
      __v: 0
    }
  ]
}

// Helper function to get portfolio items with their categories
export const getPortfolioItemsWithCategories = () => {
  return portfolioData.portfolio.map(item => ({
    ...item,
    categories: item.cso.map(cso => 
      portfolioData.categories.find(cat => cat._id === cso.category_id)
    ).filter(Boolean)
  }))
}

// Helper function to get portfolio items by category
export const getPortfolioItemsByCategory = (categoryId: string) => {
  return portfolioData.portfolio.filter(item => 
    item.cso.some(cso => cso.category_id === categoryId)
  ).map(item => ({
    ...item,
    categories: item.cso.map(cso => 
      portfolioData.categories.find(cat => cat._id === cso.category_id)
    ).filter(Boolean)
  }))
}

// Helper function to get a single portfolio item
export const getPortfolioItem = (id: string) => {
  const item = portfolioData.portfolio.find(item => item._id === id)
  if (!item) return null
  
  return {
    ...item,
    categories: item.cso.map(cso => 
      portfolioData.categories.find(cat => cat._id === cso.category_id)
    ).filter(Boolean)
  }
} 