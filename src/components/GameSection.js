import { React } from 'react'
import GameCard from './GameCard'
const GameSection = ({ sectionTitle, limit, gridCol, gameData }) => {
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
            <div className="overflow-x-hidden">
                <div
                    className={`h-full w-full place-items-center gap-x-8 gap-y-8 sm:p-4 p-8 grid md:grid-cols-${gridCol} lg:grid-cols-${gridCol}`}
                    id="grid-container"
                >
                    {gameData &&
                        gameData
                            .slice(0, limit || 6)
                            .map((game) => (
                                <GameCard
                                    gameName={game.name}
                                    price={game.price}
                                    imgSrc={game.imageUrl}
                                    gameId={game.id}
                                />
                            ))}
                </div>
            </div>
        </div>
    )
}

export default GameSection
