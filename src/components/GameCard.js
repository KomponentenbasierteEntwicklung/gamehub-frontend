import React, { useContext } from 'react'
import { CurrencyContext } from '../App'

const GameCard = ({ gameName, price, imgSrc, gameId, isDlc }) => {
    const { currency } = useContext(CurrencyContext)
    return (
        <div className="space-y-2 min-w-[23rem]" data-cy="game_card">
            <div className="overflow-hidden rounded-2xl hover:scale-105 hover:opacity-95 transform duration-300 bg-gray-800">
                <a href={isDlc ? `/dlcs/${gameId}` : `/games/${gameId}`}>
                    <img
                        className="shadow-md w-full h-48 object-fill hover:cursor-pointer"
                        src={imgSrc}
                        alt="header"
                    />
                </a>
            </div>
            <div className="flex items-center">
                <h1 className="text-md font-semibold text-white mr-3 font-body">
                    {gameName}
                </h1>
                <h1 className="font-normal text-lg text-white ml-auto float-right">
                    {price === 0
                        ? 'Free to play'
                        : `${
                              Math.round(price * currency.multiplier * 10) / 10
                          }${currency.currency.symbol}`}
                </h1>
            </div>
        </div>
    )
}

export default GameCard
