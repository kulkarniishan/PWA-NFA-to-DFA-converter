import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HomeNavbar() {
    return (
        <div className="transition duration-500 dark:bg-gray-800 h-screen shadow-lg pt-2">
            <div className="items-center">
                <div className="transition duration-500 font-semibold text-sm mx-2 py-2 my-4  font-sans uppercase text-center">
                    <NavLink to='/' className='text-gray-100 hover:bg-gray-700 hover:text-white no-underline px-3 py-2 rounded-md text-sm font-medium' exact activeClassName='text-gray-100 bg-red-600 hover:text-gray-100 hover:bg-red-600'>NFA to DFA Converter</NavLink>
                </div>
            </div>
            <div className="items-center">
                <div className="transition duration-500 font-semibold text-sm mx-2 py-2 my-4 font-sans uppercase text-center">
                <NavLink to='/CNF-to-CNF' className='text-gray-100 hover:bg-gray-700 hover:text-white no-underline px-3 py-2 rounded-md text-sm font-medium' activeClassName='text-gray-100 bg-red-600 hover:text-gray-100 hover:bg-red-600'>CFG to CNF Converter</NavLink>
                </div>
            </div>
        </div>
    )
}
