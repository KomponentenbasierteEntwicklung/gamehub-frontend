import { useParams } from 'react-router-dom'

import '../App.css'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Cart from '../components/Cart'
import { useState, useEffect } from 'react'
import { gameData } from '../data/gameData'
import DetailInformationBox from '../components/DetailInformationBox'
import { dlcData } from '../data/dlcData'
import GameCard from '../components/GameCard'

export default function Games() {
    const { id } = useParams()
    const [showCart, setShowCart] = useState(false)
    const [loading, setLoading] = useState(false)
    const [game, setGame] = useState({ name: 'loading...' })
    const [dlcs, setDlcs] = useState([])

    useEffect(() => {
        setLoading(true)
        const game = gameData.find((game) => game.appid == id)
        const toDisplayDLCs = dlcData.filter(
            (dlc) => dlc.OriginalGame == game.name
        )
        setDlcs(toDisplayDLCs)
        setGame(game)
        setLoading(false)
    }, [loading])

    return (
        <div>
            <Cart showCart={showCart} setShowCart={setShowCart} />
            <NavBar showCart={showCart} setShowCart={setShowCart} />
            <body className="my-24 mx-24">
                <div id="divider" className="custom-divider space-y-6">
                    <section id="heading">
                        <a href="/games">&lt; &nbsp;&nbsp; All games</a>
                        <h1 className="text-4xl">{game.name} </h1>
                        <div className="flex space-x-6 my-6 ">
                            <div className="basis-6/12">
                                <img
                                    src={game.header_image}
                                    className="w-full"
                                ></img>
                            </div>
                            <div className="basis-6/12">
                                <DetailInformationBox
                                    heading={'Release date'}
                                    value={game.release_date || ''}
                                />
                                <DetailInformationBox
                                    heading={'English'}
                                    value={game.english ? 'true' : 'false'}
                                />
                                <DetailInformationBox
                                    heading={'Publisher'}
                                    value={game.publisher}
                                />
                                <DetailInformationBox
                                    heading={'Required Age'}
                                    value={game.required_age}
                                />

                                {game.genres && (
                                    <div className="box w-full  rounded-sm mt-1 flex justify-start align-middle">
                                        <h4 className="text-gray-400 text-lg mr-2">
                                            Genres:&nbsp;
                                        </h4>
                                        <div className="box bg-indigo-600 px-2 py-1 rounded-lg">
                                            <button>{game.genres}</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                    <section id="description">
                        <h1 className="text-section-header">About the game</h1>
                        <p className="text-md text-gray-300">
                            {game.about_the_game}
                        </p>
                    </section>
                    <section id="DLCs">
                        <h1 className="text-section-header">DLCs </h1>
                        <div className="flex space-x-8 overflow-x-scroll py-6">
                            {dlcs &&
                                dlcs.map((dlc) => (
                                    <GameCard
                                        gameName={dlc.name}
                                        price={dlc.Price}
                                        imgSrc={dlc.header_image}
                                    />
                                ))}
                        </div>
                    </section>
                </div>
            </body>
            <Footer />
        </div>
    )
}
