import { useState } from 'react'

import '../App.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import { FormControl, MenuItem } from '@mui/material'
import Select from '@mui/material/Select'
import GameSection from '../components/GameSection'
import Pagination from '../components/Pagination'

export default function Games() {
    const [showCart, setShowCart] = useState(false)
    const [sortBy, setSortBy] = useState('Best Match')

    const handleChange = (event) => {
        setSortBy(event.target.value)
    }

    const categories = [
        { name: 'Games', href: '#' },
        { name: 'DLCs', href: '#' },
        { name: 'Multiplayer', href: '#' },
        { name: 'Singleplayer', href: '#' },
    ]

    return (
        <>
            <Cart showCart={showCart} setShowCart={setShowCart} />
            <NavBar showCart={showCart} setShowCart={setShowCart} />
            <body className="mt-16 mx-28 p-8 ">
                <div id="divider" className="custom-divider">
                    <header id="games-header" className="text-lg text-white ">
                        <div className="flex justify-between py-4">
                            <div>
                                <div className="text-4xl font-bold">Games</div>
                                <p className="text-xs text-slate-400">
                                    9999 Products
                                </p>
                            </div>
                            <div className="flex space-x-4 items-center rounded">
                                <div>Sort by</div>
                                <FormControl>
                                    <Select
                                        className="bg-white w-48 m-2"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={sortBy}
                                        onChange={handleChange}
                                        size="small"
                                    >
                                        <MenuItem
                                            value={'Best Match'}
                                            className="text-sm"
                                        >
                                            Best Match
                                        </MenuItem>
                                        <MenuItem
                                            value={'Price - lowest first'}
                                        >
                                            Price - lowest first
                                        </MenuItem>
                                        <MenuItem
                                            value={'Price - highest first'}
                                        >
                                            Price - highest first
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </header>
                    <div>
                        <div className="my-8 flex">
                            <div className="container w-64">
                                <div id="left-filter" className="w-full">
                                    <div
                                        id="divider"
                                        className="custom-divider my-10 space-y-3"
                                    >
                                        <div id="category-filter">
                                            <div className="font-bold text-lg my-3">
                                                Categories
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                {categories.map((category) => (
                                                    <div className="flex justify-between">
                                                        <a
                                                            className="text-sm text-slate-300 hover:underline hover:cursor-pointer"
                                                            href={category.href}
                                                        >
                                                            {category.name}
                                                        </a>
                                                        <p className="text-xs text-gray-500">
                                                            2343
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div id="price-filter">
                                            <div className="font-bold text-lg mt-6">
                                                Price (euro)
                                            </div>
                                            <div className="flex justify-between mt-3 items-center">
                                                <input
                                                    type="number"
                                                    className="form-control block w-28 px-3 py-1.5 text-base text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="priceFilterFrom"
                                                    placeholder="From"
                                                />
                                                &nbsp;-&nbsp;
                                                <input
                                                    type="number"
                                                    className="form-control block w-28 px-3 py-1.5 text-base text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="priceFilterTo"
                                                    placeholder="To"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="games list" className="pl-10">
                                <GameSection limit={10} gridCol={2} />
                                <div id="pagination">
                                    <Pagination
                                        count={10}
                                        color="secondary"
                                        classes={{
                                            '& .MuiPaginationItem-root': {
                                                color: '#fff',
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </body>
        </>
    )
}
