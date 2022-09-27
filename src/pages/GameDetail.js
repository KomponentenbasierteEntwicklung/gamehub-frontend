import { useParams } from 'react-router-dom'

import '../App.css'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Cart from '../components/Cart'
import { useState, useEffect } from 'react'
import DetailInformationBox from '../components/DetailInformationBox'
import GameCard from '../components/GameCard'
import axios from 'axios'
import { formatArrayDateToString } from '../util/util'
import AddToCart from '../components/AddToCart'

export default function GameDetail() {
    const { id } = useParams()
    const [showCart, setShowCart] = useState(false)
    const [game, setGame] = useState({ name: 'loading...' })
    const [dlcs, setDlcs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/games').then((response) => {
            const numberId = Number(id)
            const game = response.data.find((game) => game.id === numberId)
            axios.get('http://localhost:8080/api/v1/dlcs').then((response) => {
                const toDisplayDLCs = response.data.filter(
                    (dlc) => dlc.originalGame === game.name
                )
                setDlcs(toDisplayDLCs)
            })
            setGame(game)
        })
    }, [])

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
                                    src={game.imageUrl}
                                    className="w-full"
                                    alt="header"
                                ></img>
                            </div>
                            <div className="basis-6/12">
                                {game.releaseDate && (
                                    <DetailInformationBox
                                        heading={'Release date'}
                                        value={
                                            formatArrayDateToString(
                                                game.releaseDate
                                            ) || 'unknown'
                                        }
                                    />
                                )}
                                <DetailInformationBox
                                    heading={'English'}
                                    value={'true'}
                                />
                                <DetailInformationBox
                                    heading={'Publisher'}
                                    value={game.publisher}
                                />
                                <DetailInformationBox
                                    heading={'Required Age'}
                                    value={game.requiredAge?.toString()}
                                />
                                {game.genres && (
                                    <div className="box w-full  rounded-sm mt-1 flex justify-start align-middle">
                                        <h4 className="text-gray-400 text-lg mr-2">
                                            Genres:&nbsp;
                                        </h4>
                                        {game.genres.split(';').map((genre) => {
                                            return (
                                                <div
                                                    className="box bg-indigo-600 px-2 py-1 rounded-lg mr-2"
                                                    key={genre}
                                                >
                                                    <button>{genre}</button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                                <div className="mt-10">
                                    <AddToCart
                                        price={game.price}
                                        name={game.name}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="description">
                        <h1 className="text-section-header">About the game</h1>
                        <p className="text-md text-gray-300">
                            {game.aboutTheGame}
                        </p>
                    </section>
                    <section id="DLCs">
                        <h1 className="text-section-header">DLCs </h1>
                        <div className="flex space-x-8 overflow-x-scroll py-6">
                            {dlcs &&
                                dlcs.map((dlc) => (
                                    <GameCard
                                        key={dlc.name}
                                        isDlc={true}
                                        gameId={dlc.id}
                                        gameName={dlc.name}
                                        price={dlc.price}
                                        imgSrc={dlc.headerImage}
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
