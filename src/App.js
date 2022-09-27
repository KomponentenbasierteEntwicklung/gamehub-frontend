import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Games from './pages/Games'
import GameDetail from './pages/GameDetail'
import DlcDetail from './pages/DlcDetail'

import PageNotFound from './pages/PageNotFound'

import { Currency } from './helper/Currency'
import KeycloakPage from './pages/KeycloakPage'

export const CurrencyContext = React.createContext({
    multiplier: 1,
    currency: Currency.EURO,
})

function App() {
    const [currency, setCurrency] = useState({
        multiplier: 1,
        currency: Currency.EURO,
    })

    return (
        <div>
            <CurrencyContext.Provider value={{ currency, setCurrency }}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Login />}></Route>
                        <Route path="/home" element={<Homepage />}></Route>
                        <Route path="/games" element={<Games />}></Route>
                        <Route
                            path="/games/:id"
                            element={<GameDetail />}
                        ></Route>
                        <Route path="/dlcs/:id" element={<DlcDetail />}></Route>
                        <Route
                            path="/keycloak"
                            element={<KeycloakPage />}
                        ></Route>
                        <Route path="*" element={<PageNotFound />}></Route>
                    </Routes>
                </Router>
            </CurrencyContext.Provider>
        </div>
    )
}

export default App
