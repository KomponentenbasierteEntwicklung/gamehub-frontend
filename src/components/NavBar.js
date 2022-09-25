import React, { useContext } from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useKeycloak } from 'react-keycloak'
import {
    CurrencyEuroIcon,
    CurrencyRupeeIcon,
    CurrencyDollarIcon,
    CurrencyPoundIcon,
    CurrencyYenIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline'
import companyLogo from '../video-games.png'
import { Link, useLocation } from 'react-router-dom'
import { CurrencyContext } from '../App'
import { Currency } from '../helper/Currency'

const navigation = [
    { name: 'Home', href: '/home' },
    { name: 'Games', href: '/games' },
    { name: 'About us', href: '#' },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = ({ setShowCart, showCart }) => {
    const location = useLocation()
    const { currency, setCurrency } = useContext(CurrencyContext)
    const [keycloak] = useKeycloak()

    return (
        <>
            <Disclosure
                as="nav"
                className="bg-navbar fixed top-0 left-0 right-0 z-10"
            >
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <img
                                            className="block lg:hidden h-8 w-auto"
                                            src={companyLogo}
                                            alt="Company logo"
                                        />
                                        <img
                                            className="hidden lg:block h-8 w-auto"
                                            src={companyLogo}
                                            alt="Company logo"
                                        />
                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div
                                            id="nav-item"
                                            className="mx-5 flex space-x-4"
                                        >
                                            {navigation.map((item) => (
                                                <Link
                                                    to={item.href}
                                                    key={item.name}
                                                    className={classNames(
                                                        location.pathname.includes(
                                                            item.href
                                                        )
                                                            ? 'bg-gray-900 text-white'
                                                            : 'text-gray-300 hover:bg-gray-500 hover:bg-opacity-75 hover:text-white transition-all',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}
                                                    aria-current={
                                                        item.current
                                                            ? 'page'
                                                            : undefined
                                                    }
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <h1>
                                    currency: {currency.symbol}-{currency.name}
                                </h1>
                                <div className="space-x-3 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <form id="search">
                                        <div className="flex">
                                            <div className="relative w-80">
                                                <input
                                                    type="search"
                                                    id="search-dropdown"
                                                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                                    placeholder="Search"
                                                    required
                                                />
                                                <button
                                                    type="submit"
                                                    className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-gray-800 rounded-r-lg border border-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                >
                                                    <svg
                                                        aria-hidden="true"
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                        ></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    {/* Currency */}
                                    <button
                                        type="button"
                                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                        onClick={() => {
                                            setCurrency(Currency[1])
                                        }}
                                    >
                                        <CurrencyEuroIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                    {/* Cart */}
                                    <button
                                        type="button"
                                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                        onClick={() => {
                                            setShowCart(!showCart)
                                        }}
                                    >
                                        <span className="sr-only">
                                            View cart
                                        </span>
                                        <ShoppingCartIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                    {/* Profile dropdown */}
                                    {!keycloak.authenticated && (
                                        <button
                                            type="button"
                                            className="text-blue-800"
                                            onClick={() => keycloak.login()}
                                        >
                                            Login
                                        </button>
                                    )}
                                    {!!keycloak.authenticated && (
                                        <Menu
                                            as="div"
                                            className="ml-3 relative"
                                        >
                                            <div>
                                                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                    <span className="sr-only">
                                                        Open user menu
                                                    </span>
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                                                        alt=""
                                                    />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active
                                                                        ? 'bg-gray-100'
                                                                        : '',
                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                )}
                                                            >
                                                                Your Profile{' '}
                                                            </a>
                                                        )}
                                                    </Menu.Item>

                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                className={classNames(
                                                                    active
                                                                        ? 'bg-gray-100'
                                                                        : '',
                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                )}
                                                                onClick={() =>
                                                                    keycloak.logout(
                                                                        {
                                                                            redirectUri:
                                                                                'http://localhost:3000',
                                                                        }
                                                                    )
                                                                }
                                                            >
                                                                Sign out
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Disclosure>
        </>
    )
}

export default NavBar
