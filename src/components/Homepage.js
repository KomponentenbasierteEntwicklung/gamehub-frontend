import { useState } from 'react'

import '../App.css'
import NavBar from './NavBar'
import Footer from './Footer'
import Carousel from './Carousel'
import Cart from './Cart'
import UserContext from './user/User'
import Banner from './Banner'
import GameSection from './GameSection'

export default function Homepage() {
    const [showCart, setShowCart] = useState(false)
    const user = {
        name: 'Kwame',
        favorites: [],
        showCart: false,
    }

    return (
        <UserContext.Provider value={user}>
            <Cart showCart={showCart} setShowCart={setShowCart} />
            <NavBar showCart={showCart} setShowCart={setShowCart} />
            <Banner />
            <GameSection sectionTitle="Trending Games" />

            <Carousel />
            <Footer />
        </UserContext.Provider>
    )
}
