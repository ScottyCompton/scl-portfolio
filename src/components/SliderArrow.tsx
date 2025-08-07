import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronRight,
    faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { SliderArrowProps } from '@/types'

const SliderArrow: React.FC<SliderArrowProps> = (props) => {
    const { onClick, type } = props

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (onClick) {
            onClick(e)
        }
    }

    return (
        <div
            onClick={handleClick}
            // className={`
            //     w-12 h-12 bg-white/90 dark:bg-gray-800/90
            //     border border-gray-200 dark:border-gray-600
            //     rounded-full shadow-lg
            //     flex items-center justify-center
            //     cursor-pointer transition-all duration-300
            //     hover:bg-white dark:hover:bg-gray-700
            //     hover:shadow-xl hover:scale-110
            //     ${className || ''}
            // `}
            style={{
                position: 'absolute',
                zIndex: 9999,
                top: '50%',
                cursor: 'pointer',
                transform: 'translateY(-50%)',
                [type === 'prev' ? 'left' : 'right']: '0px',
            }}
        >
            {type === 'next' && (
                <FontAwesomeIcon
                    icon={faChevronRight}
                    size="3x"
                    className="text-gray-700 dark:text-gray-300 font-bold text-lg"
                />
            )}
            {type === 'prev' && (
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    size="3x"
                    className="text-gray-700 dark:text-gray-300 font-bold text-lg"
                />
            )}
        </div>
    )
}

export default SliderArrow
