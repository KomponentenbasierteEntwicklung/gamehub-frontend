import React, { useContext } from 'react'
import { CurrencyContext } from '../App'

const GameCard = ({ gameName, price, imgSrc }) => {
    const { currency } = useContext(CurrencyContext)
    return (
        <>
            <div class="space-y-2 min-w-[23rem]">
                <div class="overflow-hidden rounded-2xl hover:scale-105 hover:opacity-95 transform duration-300 bg-gray-800">
                    <a href={'/games/10'}>
                        <img
                            class="shadow-md w-full h-48 object-fill hover:cursor-pointer"
                            src={imgSrc}
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex">
                    <h1 class="text-md font-semibold text-white mr-3 font-body">
                        {gameName}
                    </h1>
                    <h1 class="text-xl font-normal text-xl text-white ml-auto float-right">
                        {price}
                        {currency.symbol}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default GameCard
