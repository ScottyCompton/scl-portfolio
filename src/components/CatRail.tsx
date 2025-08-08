import Slider from 'react-slick'
import Image from 'next/image'
import { PortfolioItem } from '@/types'
import SliderArrow from '@/components/SliderArrow'

// CatRail.tsx
// takes a category id, retrieves the portfolio items for that category
// displays a list of portfolio items in a horizontal scrollable area
// each portfolio item has a title, image and link to the portfolio item (project page)
// the portfolio items are displayed in a grid layout
// the grid layout is responsive and adapts to the screen size
// the grid layout is responsive and adapts to the screen size
// component uses react-slick for the carousel

import { GET_PORTFOLIO_ITEMS_QUERY } from '@/app/graphql/queries'
import { useQuery } from '@apollo/client'

interface CatRailProps {
    categoryId: string
    openModal: (project: PortfolioItem) => void
}

const CatRail = ({ categoryId, openModal }: CatRailProps) => {
    // const [selectedProject, setSelectedProject] =
    //     useState<PortfolioItem | null>(null)
    // const [isModalOpen, setIsModalOpen] = useState(false)

    const { data, loading, error } = useQuery(GET_PORTFOLIO_ITEMS_QUERY, {
        variables: {
            categoryId: categoryId,
        },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    const { portfolioItems } = data

    const handleProjectClick = (project: PortfolioItem) => {
        // setSelectedProject(project)
        // setIsModalOpen(true)
        openModal(project)
    }

    // const closeModal = () => {
    //     setIsModalOpen(false)
    //     setSelectedProject(null)
    // }

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToScroll: 5,
        centerMode: false,
        initialSlide: 0,
        ladyLoad: true,
        slidesToShow: 5,
        arrows: true,
        // afterChange: (current:number) => setCurrentSlideIndex(current),
        nextArrow: <SliderArrow type="next" />,
        prevArrow: <SliderArrow type="prev" />,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    arrows: true,
                    swipeToSlide: true,
                    centerMode: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    speed: 1000,
                    arrows: true,
                    swipeToSlide: true,
                    centerMode: false,
                },
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    speed: 1500,
                    arrows: true,
                    centerMode: false,
                },
            },
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    speed: 2000,
                    arrows: true,
                    swipeToSlide: false,
                    centerMode: false,
                },
            },
        ],
    }

    return (
        <>
            <div className="slider-container w-full relative mt-3">
                <Slider {...settings}>
                    {portfolioItems &&
                        portfolioItems.map((item: PortfolioItem) => (
                            <div
                                className="text-center w-full flex flex-col items-center"
                                key={item._id}
                            >
                                <div
                                    className="relative group cursor-pointer"
                                    onClick={() => handleProjectClick(item)}
                                >
                                    <Image
                                        src={item.previewImgUrl!}
                                        alt={item.projectTitle}
                                        width={400}
                                        height={300}
                                        className="mx-auto rounded-full object-cover w-48 h-48 border-2 border-gray-200 dark:border-transparent transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-75 pointer-events-none"
                                    />
                                </div>
                                <div className="text-center text-sm sm:text-sm  leading-relaxed mt-2 text-primary">
                                    {item.projectTitle}
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </>
    )
}

export default CatRail
