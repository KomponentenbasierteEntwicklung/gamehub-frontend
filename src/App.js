import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/Login'
import Homepage from './components/Homepage'
import Cart from './components/Cart'
import Games from './components/Games'

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/home" element={<Homepage />}></Route>
                    <Route path="/cart" element={<Cart show />}></Route>
                    <Route path="/games/" element={<Games />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App
