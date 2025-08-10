import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo-modified.jpg'
import cart from '../assets/cart-shopping-solid.svg'
import { Link } from 'react-router-dom'

function Nav() {
 const [MobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <nav className="w-full h-[10vh] min-h-[60px] bg-white border-b-2 border-b-[#146ef5] flex justify-between items-center px-4 relative">

    <div className="md:hidden">
        <button 
            className="text-2xl focus:outline-none"
            onClick={() => setMobileMenuOpen(!MobileMenuOpen)}
        >
            ☰
        </button>
    </div>

    <div className="hidden md:flex nav-links">
        <ul className="flex space-x-4 lg:space-x-6">
            <li className='list-none'>
                <Link 
                    to="#" 
                    className='no-underline text-sm lg:text-xl font border-b-2 border-transparent hover:border-b-[#d09683] transition-colors whitespace-nowrap'
                >
                    Customized Back Skin
                </Link>
            </li>
            <li className='list-none'>
                <Link 
                    to="#" 
                    className='no-underline text-sm lg:text-xl font border-b-2 border-transparent hover:border-b-[#d09683] transition-colors whitespace-nowrap'
                >
                    Screen Guard
                </Link>
            </li>
        </ul>
    </div>

    <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none logo">
        <img 
            src={logo} 
            alt="Logo" 
            className='h-8 w-20 sm:h-10 sm:w-24 md:h-12 md:w-28 lg:h-14 lg:w-32 object-contain' 
        />
    </div>

    
    <div className="flex items-center space-x-2">
        <button className="cart-btn p-2 text-sm border border-black rounded-lg bg-[#146ef5] cursor-pointer text-black hover:bg-[#d09683] transition-colors">
            <img className="h-4 w-4 sm:h-5 sm:w-5" src={cart} alt="Cart" />
        </button>
        <button className="login-btn px-2 py-1 sm:px-3 sm:py-1.5 text-sm sm:text-base font-semibold border border-black rounded-lg bg-[#146ef5] text-black cursor-pointer hover:bg-[#d09683] transition-colors">
            <Link to="/login" className="no-underline text-black">Login</Link>
        </button>
    </div>

    {MobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-2 border-[#146ef5] shadow-lg z-50">
            <ul className="flex flex-col py-4">
                <li className='list-none border-b border-gray-200'>
                    <Link 
                        to="#" 
                        className='block px-6 py-3 text-lg font border-b-2 border-transparent hover:border-b-[#d09683] transition-colors'
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Customized Back Skin
                    </Link>
                </li>
                <li className='list-none'>
                    <Link 
                        to="#" 
                        className='block px-6 py-3 text-lg font border-b-2 border-transparent hover:border-b-[#d09683] transition-colors'
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Screen Guard
                    </Link>
                </li>
            </ul>
        </div>
    )}
</nav>

    )
}

export default Nav
