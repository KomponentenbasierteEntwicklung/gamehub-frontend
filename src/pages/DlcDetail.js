import { useParams } from 'react-router-dom'

import '../App.css'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Cart from '../components/Cart'
import React, { useState, useEffect } from 'react'
import DetailInformationBox from '../components/DetailInformationBox'
import axios from 'axios'
import { formatArrayDateToString } from '../util/util'
import AddToCart from '../components/AddToCart'

export default function DlcDetail() {
    const { id } = useParams()
    const [showCart, setShowCart] = useState(false)
    const [dlc, setDlc] = useState({ name: 'loading...' })
    const [error, setError] = useState(false)
    const [responseData, setResponseData] = useState({ status: '500' })

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/v1/dlcs/${id}`)
            .then(response => {
                setDlc(response?.data)
            })
            .catch(error => {
                if (error.response.data?.status !== 200) {
                    setResponseData(error.response.data)
                    setError(true)
                }
            })
    }, [])

    return (
        <div>
            {!error && (
                <div>
                    <Cart showCart={showCart} setShowCart={setShowCart} />
                    <NavBar showCart={showCart} setShowCart={setShowCart} />
                    <body className="my-24 mx-24">
                        <div id="divider" className="custom-divider space-y-6">
                            <section id="heading">
                                <a href="/games">&lt; &nbsp;&nbsp; All games</a>
                                <h1 className="text-4xl">{dlc.name} </h1>
                                <div className="flex space-x-6 my-6 ">
                                    <div className="basis-6/12">
                                        <img
                                            src={dlc.headerImage}
                                            className="w-full"
                                            alt="header"
                                        ></img>
                                    </div>

                                    <div className="basis-6/12 container relative">
                                        {dlc?.releaseDate && (
                                            <DetailInformationBox
                                                heading={'Release date'}
                                                value={
                                                    formatArrayDateToString(
                                                        dlc.releaseDate
                                                    ) || 'unknown'
                                                }
                                            />
                                        )}
                                        <DetailInformationBox
                                            heading={'English'}
                                            value={'true'}
                                        />

                                        <DetailInformationBox
                                            heading={'Original Game'}
                                            value={dlc.originalGame}
                                        />

                                        <div className="mt-10">
                                            <AddToCart
                                                price={dlc.price}
                                                name={dlc.name}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="description">
                                <h1 className="text-section-header">
                                    About the dlc
                                </h1>
                                <p className="text-md text-gray-300">
                                    {dlc.description}
                                </p>
                            </section>
                        </div>
                    </body>
                    <Footer />
                </div>
            )}
            {error && (
                <div className="flex justify-center items-center">
                    <h1 className="text-8xl p-10 mt-20 align-center">
                        {responseData?.status}
                    </h1>
                    <h1 className="text-4xl p-10 mt-20 align-center">
                        {responseData?.message}
                    </h1>
                </div>
            )}
        </div>
    )
}
