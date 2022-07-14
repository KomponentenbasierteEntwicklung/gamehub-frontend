import React from 'react'
import GameCard from './GameCard'
import gameList from '../data/data.json'

const GameSection = ({ sectionTitle }) => {
    return (
        <div className="lg:my-12 sm:my-8 ">
            <div className="2xl:container 2xl:mx-auto">
                <div className="lg:px-20 md:px-6 px-4 md:py-8">
                    <h1 className="text-3xl lg:text-4xl font-semibold text-white text-center">
                        {sectionTitle}
                    </h1>
                </div>
            </div>
            <div class="overflow-x-hidden md:mx-28">
                <div
                    class="h-full w-full place-items-center gap-x-8 gap-y-6 sm:p-4 p-8 grid  md:grid-cols-2 lg:grid-cols-3"
                    id="grid-container"
                >
                    {gameList.map((game) => (
                        <GameCard
                            gameName={game.name}
                            price={game.price}
                            imgSrc={game.header_image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GameSection
