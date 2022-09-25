import React, { useState, useEffect } from 'react'

import '../App.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Cart from '../components/Cart'
import UserContext from '../components/user/User'
import Banner from '../components/Banner'
import GameSection from '../components/GameSection'
import axios from 'axios'

export default function Homepage() {
    const [showCart, setShowCart] = useState(false)
    const [gamesToLoad, setGamesToLoad] = useState([])

    const user = {
        name: 'Kwame',
        favorites: [],
        showCart: false,
    }

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/games').then(response => {
            setGamesToLoad(response.data)
            console.log(response.data)
        })
    }, [])

    return (
        <UserContext.Provider value={user}>
            <Cart showCart={showCart} setShowCart={setShowCart} />
            <NavBar showCart={showCart} setShowCart={setShowCart} />
            <Banner />
            <div className="md:mx-28">
                <GameSection
                    sectionTitle={'Action'}
                    gridCol={3}
                    limit={6}
                    gameData={gamesToLoad}
                />
            </div>
            <Carousel />
            <Footer />
        </UserContext.Provider>
    )
}
