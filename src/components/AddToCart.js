import React, { useEffect } from 'react'
import { useContext } from 'react'
import { CurrencyContext } from '../App'

export default function AddToCart({ price, name }) {
    const { currency } = useContext(CurrencyContext)

    return (
        <div className="relative bg-gradient-to-r from-[#1b191b] via-[#322d30] to-[#3e3e3e] bg-opacity-70 rounded-lg w-full p-6 font-metrophobic shadow-xl">
            <div className="flex justify-between">
                <h2 className=" relative font-semibold text-xl -top-2">
                    Buy {name} now
                </h2>
                <div className="flex items-center space-x-2 px-2 py-1 absolute right-2 -bottom-8 rounded-lg w-[16rem] shadow-lg bg-[#262424] ">
                    <div className="p-3 text-lg font-semibold">
                        {Math.round(price * currency.multiplier * 10) / 10}
                        {currency.currency.symbol}
                    </div>
                    <button className="bg-gradient-to-r from-[#5f0a87] via-[#a4508b] to-[#a4508b] px-3 py-2 rounded-md text-lg w-[18rem] hover:scale-105 transition-all">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}
