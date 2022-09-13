import { React } from 'react'
import GameCard from './GameCard'
import { gameData } from '../data/gameData'

const GameSection = ({ sectionTitle, limit, gridCol }) => {
    const gridColumn = gridCol || 3
    return (
        <div className="lg:my-12 sm:my-8 ">
            {sectionTitle && (
                <div className="2xl:container 2xl:mx-auto">
                    <div className="lg:px-20 md:px-6 px-4 md:py-8">
                        <h1 className="text-3xl lg:text-4xl font-semibold text-white text-center">
                            {sectionTitle}
                        </h1>
                    </div>
                </div>
            )}
            <div class="overflow-x-hidden">
                <div
                    className={`h-full w-full place-items-center gap-x-8 gap-y-8 sm:p-4 p-8 grid  md:grid-cols-2 lg:grid-cols-${gridColumn}`}
                    id="grid-container"
                >
                    {gameData.slice(0, limit || 3).map((game) => (
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
