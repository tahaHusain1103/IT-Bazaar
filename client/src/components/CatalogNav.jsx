import React from 'react'
import logo from '../assets/logo-modified.jpg'
import cart from '../assets/cart-shopping-solid.svg'
import { Link } from 'react-router-dom'
const CatalogNav = () => {
    return (
        <nav className="nav-bar sticky top-0  w-[100vw] h-[10vh] bg-white border-b-2 border-b-[#146ef5] flex justify-between items-center">
            <div className='nav-links m-[30px] w-[50%]'>
                <ul className='w-full flex justify-between items-center'>
                    <li className='list-none mx-[15px]'><Link to='/' className='no-underline text-4xl font-extrabold border-b-2 border-transparent'>&larr;</Link></li>
                    <li className='logo '><img src={logo} alt="" className='mt-[3px] h-[100%] w-[125px]' /></li>
                </ul>
            </div>
            <button className="cart-btn mx-6 py-[6px] px-[12px] text-[16px] font-semibold border-[1px] border-solid border-black rounded-[9px] bg-[#146ef5] cursor-pointer text-black hover:bg-[#d09683]"><img className="cart-logo pt-1 h-5 w-5" src={cart} alt="" /></button>
        </nav>
    )
}

export default CatalogNav
