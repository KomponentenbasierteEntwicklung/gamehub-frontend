import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Games from './pages/Games'
import GameDetail from './pages/GameDetail'
import PageNotFound from './pages/PageNotFound'

import { Currency } from './helper/Currency'

export const CurrencyContext = React.createContext({})

function App() {
    const [currency, setCurrency] = useState(Currency[0])

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
                        <Route path="*" element={<PageNotFound />}></Route>
                    </Routes>
                </Router>
            </CurrencyContext.Provider>
        </div>
    )
}

export default App
