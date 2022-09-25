import React from 'react'
import { data } from '../data/mockCarouselData'
// import Carousel from 'react-elastic-carousel'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]

export default function CustomCarousel() {
    return (
        <div>
            {/* <Carousel breakPoints={breakPoints} className="mb-5">
                {data.map((item) => (
                    <img
                        className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                        src={item.img}
                        alt="/"
                    />
                ))}
            </Carousel> */}
        </div>
    )
}
