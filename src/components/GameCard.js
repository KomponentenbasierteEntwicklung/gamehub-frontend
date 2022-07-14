import React from 'react'

const GameCard = ({ gameName, price, imgSrc }) => {
    return (
        <>
            <div class="space-y-2">
                <div class="overflow-hidden rounded-2xl hover:scale-105 hover:opacity-95 transform duration-300 bg-gray-800">
                    <img
                        class="shadow-md w-full h-52 object-fill"
                        src={imgSrc}
                        alt=""
                    />
                </div>
                <div className="flex">
                    <h1 class="text-md font-semibold text-white mr-3 font-body">
                        {gameName}
                    </h1>
                    <h1 class="text-xl font-normal text-xl text-white ml-auto float-right">
                        {price}€
                    </h1>
                </div>
            </div>
        </>
    )
}

export default GameCard
