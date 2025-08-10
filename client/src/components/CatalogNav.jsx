import React from 'react'
import logo from '../assets/logo-modified.jpg'
import cart from '../assets/cart-shopping-solid.svg'
import { Link } from 'react-router-dom'
const CatalogNav = () => {
    return (
        <nav className="nav-bar sticky top-0 w-full h-[10vh] min-h-[60px] bg-white border-b-2 border-b-[#146ef5] flex justify-between items-center px-4 z-50">


            <div className='nav-links flex items-center justify-between w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
                <ul className='flex items-center justify-between w-full'>

                    <li className='list-none'>
                        <Link
                            to='/'
                            className='no-underline text-2xl sm:text-3xl md:text-4xl font-extrabold border-b-2 border-transparent hover:border-b-[#d09683] transition-colors p-2 block'
                            aria-label="Go back"
                        >
                            &larr;
                        </Link>
                    </li>


                    <li className='logo'>
                        <img
                            src={logo}
                            alt="Logo"
                            className='h-8 w-20 sm:h-10 sm:w-24 md:h-12 md:w-28 lg:h-14 lg:w-32 object-contain'
                        />
                    </li>
                </ul>
            </div>


            <div className="flex items-center">
                <button
                    className="cart-btn p-2 sm:py-[6px] sm:px-[12px] text-sm sm:text-base font-semibold border border-black rounded-lg bg-[#146ef5] cursor-pointer text-black hover:bg-[#d09683] transition-colors focus:outline-none focus:ring-2 focus:ring-[#146ef5] focus:ring-offset-2"
                    aria-label="Shopping cart"
                >
                    <img
                        className="cart-logo h-4 w-4 sm:h-5 sm:w-5"
                        src={cart}
                        alt="Cart"
                    />
                </button>
            </div>

        </nav>

    )
}

export default CatalogNav
