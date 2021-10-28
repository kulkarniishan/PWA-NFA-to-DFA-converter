import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HomeNavbar() {
    return (
        <div className="transition duration-500 dark:bg-gray-800 h-screen shadow-lg pt-2">
            <div className="items-center">
                <div className="transition duration-500 font-semibold text-sm py-2 my-4  font-sans uppercase text-center">
                    <NavLink to='/dashboard' className='no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-900 bg-gray-300 shadow-inner hover:text-gray-700 hover:bg-gray-500 dark:text-gray-500 dark:bg-gray-900 dark:hover:text-gray-300 dark:hover:bg-gray-700' exact activeClassName='text-white bg-red-600 hover:text-gray-100 hover:bg-red-600 dark:text-white dark:bg-red-600 dark:hover:text-gray-100 dark:hover:bg-red-600'>NFA to DFA Converter</NavLink>
                </div>
            </div>
            <div className="items-center">
                <div className="transition duration-500 font-semibold text-sm py-2 my-4 font-sans uppercase text-center">
                <NavLink to='/dashboard/CNF-to-CNF' className='no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-900 bg-gray-300 shadow-inner hover:text-gray-700 hover:bg-gray-500 dark:text-gray-500 dark:bg-gray-900 dark:hover:text-gray-300 dark:hover:bg-gray-700' exact activeClassName='text-white bg-red-600 hover:text-gray-100 hover:bg-red-600 dark:text-white dark:bg-red-600 dark:hover:text-gray-100 dark:hover:bg-red-600'>CFG to CNF Converter</NavLink>
                </div>
            </div>
        </div>
    )
}
