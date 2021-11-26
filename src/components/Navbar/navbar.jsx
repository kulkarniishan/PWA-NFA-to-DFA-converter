import { useEffect, useState, Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../utils/Images/logo.png'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'



const converters = [
    { name: 'NFA TO DFA CONVERTER', href: "/dashboard" },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark')
            setDarkMode(false);
        }
    }, [])

    const Location = useLocation();


    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light';
        }
    }, [darkMode])

    return (
        <Disclosure as="nav" className="dark:bg-gray-800 transition duration-500 shadow-lg">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}

                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link to='/dashboard'>
                                        <img
                                            className="block h-8 w-auto"
                                            src={logo}
                                            alt="NFA to DFA converter"
                                        /></Link>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <Menu.Button className={`inline-flex justify-center w-full px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-gray-300 hover:bg-gray-700 hover:text-white no-underline px-3 py-2 rounded-md text-sm font-medium  ${Location.pathname.startsWith('/dashboard') ? 'bg-gray-900 text-white hover:bg-gray-900 hover:text-white' : ''}`}>
                                                    Home
                                                    <ChevronDownIcon
                                                        className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                                                        aria-hidden="true"
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
                                                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="px-1 py-1 ">
                                                        {
                                                            converters.map((value, key) =>
                                                                <Menu.Item key={key}>
                                                                    <NavLink
                                                                        className={'my-2 group flex rounded-md items-center w-full px-2 py-2 text-sm no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-900 bg-gray-300 shadow-inner hover:text-gray-700 hover:bg-gray-500 dark:text-gray-500 dark:bg-gray-900 dark:hover:text-gray-300 dark:hover:bg-gray-700'}
                                                                        to={value.href}
                                                                        exact
                                                                        key={key}
                                                                        activeClassName='text-white bg-red-600 hover:text-gray-100 hover:bg-red-600 dark:text-white dark:bg-red-600 dark:hover:text-gray-100 dark:hover:bg-red-600'
                                                                    >
                                                                        {value.name}
                                                                    </NavLink>
                                                                </Menu.Item>)
                                                        }

                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                        <NavLink
                                            to={'/about-us'}
                                            className={classNames(
                                                'text-gray-300 hover:bg-gray-700 hover:text-white no-underline px-3 py-2 rounded-md text-sm font-medium'
                                            )}
                                            activeClassName='bg-gray-900 text-white hover:bg-gray-900 hover:text-white'
                                        >
                                            About Us
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button onClick={() => setDarkMode(!darkMode)}>
                                    {darkMode ? (
                                        <svg className="w-8 h-8 md:w-10 md:h-10 fill-current text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                            />
                                        </svg>
                                    ) : (
                                        <svg className="w-8 h-8 md:w-10 md:h-10 fill-current text-" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Disclosure >
                                {({ open }) => (
                                    <>

                                        <Disclosure.Button className={`flex justify-between w-100 text-left text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline block px-3 py-2 rounded-md text-base font-medium ${Location.pathname.startsWith('/dashboard') ? 'bg-gray-900 text-white hover:bg-gray-900 hover:text-white' : ''}`}>
                                            <span>Home</span><ChevronUpIcon
                                                className={`${open ? 'transform rotate-180' : ''
                                                    } w-5 h-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="text-gray-500">
                                            {converters.map((value, key) =>
                                                <Disclosure.Button
                                                    key={key}
                                                    as={NavLink}
                                                    className={'my-2 group flex rounded-md items-center w-full px-2 py-2 text-sm no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-900 bg-gray-300 shadow-inner hover:text-gray-700 hover:bg-gray-500 dark:text-gray-500 dark:bg-gray-900 dark:hover:text-gray-300 dark:hover:bg-gray-700'}
                                                    to={value.href}
                                                    exact
                                                    activeClassName='text-white bg-red-600 hover:text-gray-100 hover:bg-red-600 dark:text-white dark:bg-red-600 dark:hover:text-gray-100 dark:hover:bg-red-600'
                                                >
                                                    {value.name}
                                                </Disclosure.Button>
                                            )
                                            }
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure.Button
                                as={NavLink}
                                exact
                                to={'/about-us'}
                                className={classNames(
                                    'text-gray-300 hover:bg-gray-700 hover:text-white no-underline block px-3 py-2 rounded-md text-base font-medium'
                                )}
                                activeClassName='bg-gray-900 text-white hover:bg-gray-900 hover:text-white'
                            >
                                {'About Us'}
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}