import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CatalogNav from '../components/CatalogNav'
import Footer from '../components/Footer'
import nothingLogo from '../assets/nothing.png'
import { FaChevronDown } from 'react-icons/fa'
import { AiOutlineClose } from "react-icons/ai";

const Nothing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [display, setdisplay] = useState(true);
    const [display1, setdisplay1] = useState(true);
    const models = [
        { id: 4, name: 'Nothing Phone 3a Pro ' },
        { id: 3, name: 'Nothing Phone 3a ' },
        { id: 2, name: 'Nothing Phone 2a' },
        { id: 1, name: 'Nothing Phone 2' },
        { id: 0, name: 'Nothing Phone 1' }
    ]
    const cmfmodels = [
        { id: 1, name: 'CMF Phone 2 Pro' },
        { id: 0, name: 'CMF Phone 1' },
    ]
    return (
        <div className='flex flex-col min-h-screen'>
            <CatalogNav />
            <div className="items-center mt-9 mb-4 flex flex-col justify-center grow" >
                <img src={nothingLogo} alt="I-Phone" className='w-50 self-center' />
                <p className='text-gray-500 text-2xl my-3'>Choose Your Mobile Model</p>
            </div>
            <div className="space-y-4">
                <div className='flex items-center justify-between w-full'>
                    <div className='w-full text-center py-6 rounded-2xl bg-white shadow-md text-[19px] font-semibold text-gray-900 hover:border-b-2 hover:border-b-[#146ef5] '>Nothing Models
                        <button className='cursor-pointer mx-2 pt-1' onClick={() => setdisplay(!display)}>
                            {
                                display ?
                                    <FaChevronDown className=' h-5 w-5 text-[#146ef5]' onClick={() => setIsOpen(!isOpen)} /> :
                                    <AiOutlineClose className=' h-5 w-5 text-[#146ef5]' onClick={() => setIsOpen(!isOpen)} />
                            }
                        </button>
                    </div>
                </div>
                {
                    isOpen && (
                        models.map(model => (
                            <Link key={model.id}>
                                <button className='w-full text-center  py-6 rounded-2xl bg-white shadow-md text-[19px] font-semibold text-gray-900 hover:bg-[#146ef5] hover:text-white '>{model.name}</button>
                            </Link>
                        ))
                    )
                }


                <div className='flex items-center justify-between w-full'>
                    <div className='w-full text-center py-6 rounded-2xl bg-white shadow-md text-[19px] font-semibold text-gray-900 hover:border-b-2 hover:border-b-[#146ef5] '>CMF Models
                        <button className='cursor-pointer mx-2 pt-1' onClick={() => setdisplay1(!display1)}>
                            {
                                display1 ?
                                    <FaChevronDown className=' h-5 w-5 text-[#146ef5]' onClick={() => setIsOpen1(!isOpen1)} /> :
                                    <AiOutlineClose className=' h-5 w-5 text-[#146ef5]' onClick={() => setIsOpen1(!isOpen1)} />
                            }
                        </button>
                    </div>
                </div>
                {
                    isOpen1 && (
                        cmfmodels.map(model => (
                            <Link key={model.id}>
                                <button className='w-full text-center py-6 rounded-2xl bg-white shadow-md text-[19px] font-semibold text-gray-900 hover:bg-[#146ef5] hover:text-white '>{model.name}</button>
                            </Link>
                        ))
                    )
                }


            </div>
            <Footer />
        </div>
    )
}

export default Nothing
