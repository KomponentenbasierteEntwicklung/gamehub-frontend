import { useState } from 'react'

import '../App.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Cart from '../components/Cart'
import UserContext from '../components/user/User'
import Banner from '../components/Banner'
import GameSection from '../components/GameSection'

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
            <div className="md:mx-28">
                <GameSection sectionTitle={'Action'} limit={6} />
            </div>
            <Carousel />
            <Footer />
        </UserContext.Provider>
    )
}
