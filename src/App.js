import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import { AuthProvider } from "../contexts/AuthContext"

// import Chats from "./Chats"
import Login from './components/Login'

function App() {
    return (
        <div>
            <Router>
                {/* <AuthProvider> */}
                <Routes>
                    {/* <Route path="/chats" component={Chats} /> */}
                    {/* <Route path="/" component={<Login />} > */}
                    <Route path="/" element={<Login />}></Route>
                </Routes>
                {/* </AuthProvider> */}
            </Router>
        </div>
    )
}

export default App
