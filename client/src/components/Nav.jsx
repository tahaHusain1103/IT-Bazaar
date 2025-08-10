import React from 'react'
import './nav.css'
import logo from '../assets/logo-modified.jpg'
import cart from '../assets/cart-shopping-solid.svg'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="nav-bar fixed top-0  w-[100vw] h-[10vh] bg-white border-b-2 border-b-[#146ef5] flex justify-around items-center">
            <div className="nav-links m-[30px] ">
                <ul className="flex">
                    <li className='list-none mx-[15px]'><Link to="#" className='no-underline text-xl font border-b-2 border-transparent hover:border-b-[#d09683]'>Customized Back Skin</Link></li>
                    <li className='list-none mx-[15px]'><Link to="#" className='no-underline text-xl font border-b-2 border-transparent hover:border-b-[#d09683]'>Screen Guard</Link></li>
                </ul>
            </div>
            <div className="logo mr-[120px]">
                <img src={logo} alt="" className='mt-[3px] h-[100%] w-[125px]' />
            </div>
            <div className="nav-links-2 flex items-center">
                <button className="cart-btn py-[6px] px-[12px] text-[16px] font-semibold border-[1px] border-solid border-black rounded-[9px] bg-[#146ef5] cursor-pointer text-black hover:bg-[#d09683]"><img className="cart-logo pt-1 h-5 w-5" src={cart} alt="" /></button>
                <button className="login-btn ml-2.5 px-3 py-1.5 text-[16px] font-semibold border border-solid border-black rounded-[9px] bg-[#146ef5] text-black cursor-pointer hover:bg-[#d09683]"><Link to="/login">Login</Link></button>
            </div>
        </nav>
    )
}

export default Nav
