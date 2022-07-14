import { useState } from 'react'

import '../App.css'
import NavBar from './NavBar'
import Footer from './Footer'
import Carousel from './Carousel'
import Cart from './Cart'
import Banner from './Banner'
import GameSection from './GameSection'

export default function Games() {
    const [showCart, setShowCart] = useState(false)

    return (
        <>
            <Cart showCart={showCart} setShowCart={setShowCart} />
            <NavBar showCart={showCart} setShowCart={setShowCart} />
            <body className="mt-16 mx-28 p-8 ">
                <div
                    id="divider"
                    className="divide-y divide-gray-400 divide-opacity-50"
                >
                    <header id="games-header" className="text-lg text-white ">
                        <div className="flex justify-between py-4">
                            <div>
                                <div className="text-4xl">Games</div>
                                <p className="text-xs text-slate-400">
                                    9999 Products
                                </p>
                            </div>
                            <div>Sort by</div>
                        </div>
                    </header>
                    <div>
                        <div id="left-filter"></div>
                        <div id="games list"></div>
                    </div>
                </div>
                <Footer />
            </body>
        </>
    )
}
