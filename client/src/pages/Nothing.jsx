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
     
        <div className='flex flex-col min-h-screen bg-gray-50'>
    <CatalogNav />
    
    <div className="items-center mt-6 sm:mt-8 md:mt-9 mb-4 flex flex-col justify-center grow px-4">
        <img 
            src={nothingLogo} 
            alt="Nothing Phone" 
            className='w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 self-center object-contain' 
        />
        <p className='text-gray-500 text-lg sm:text-xl md:text-2xl lg:text-3xl my-2 sm:my-3 text-center font-medium'>
            Choose Your Mobile Model
        </p>
    </div>

    <div className="space-y-3 sm:space-y-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-4xl mx-auto w-full pb-6">
        
        <div className='flex items-center justify-between w-full'>
            <div className='w-full text-center py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#146ef5]/20'>
                <div className="flex items-center justify-center">
                    <span className='text-base sm:text-lg md:text-[19px] lg:text-xl font-semibold text-gray-900'>
                        Nothing Models
                    </span>
                    <button 
                        className='cursor-pointer ml-2 sm:ml-3 p-1 hover:bg-gray-100 rounded-full transition-colors' 
                        onClick={() => setdisplay(!display)}
                        aria-label={display ? "Collapse Nothing Models" : "Expand Nothing Models"}
                    >
                        {display ? (
                            <FaChevronDown 
                                className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]' 
                                onClick={() => setIsOpen(!isOpen)} 
                            />
                        ) : (
                            <AiOutlineClose 
                                className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]' 
                                onClick={() => setIsOpen(!isOpen)} 
                            />
                        )}
                    </button>
                </div>
            </div>
        </div>

        {isOpen && (
            <div className="space-y-2 sm:space-y-3 animate-fadeIn">
                {models.map(model => (
                    <Link key={model.id} className="block">
                        <button className='w-full text-center py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl sm:rounded-2xl bg-white shadow-md hover:shadow-lg text-sm sm:text-base md:text-[19px] lg:text-xl font-semibold text-gray-900 hover:bg-[#146ef5] hover:text-white transition-all duration-300 border border-gray-100 hover:border-[#146ef5] transform hover:scale-[1.02]'>
                            {model.name}
                        </button>
                    </Link>
                ))}
            </div>
        )}
        <div className='flex items-center justify-between w-full'>
            <div className='w-full text-center py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#146ef5]/20'>
                <div className="flex items-center justify-center">
                    <span className='text-base sm:text-lg md:text-[19px] lg:text-xl font-semibold text-gray-900'>
                        CMF Models
                    </span>
                    <button 
                        className='cursor-pointer ml-2 sm:ml-3 p-1 hover:bg-gray-100 rounded-full transition-colors' 
                        onClick={() => setdisplay1(!display1)}
                        aria-label={display1 ? "Collapse CMF Models" : "Expand CMF Models"}
                    >
                        {display1 ? (
                            <FaChevronDown 
                                className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]' 
                                onClick={() => setIsOpen1(!isOpen1)} 
                            />
                        ) : (
                            <AiOutlineClose 
                                className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]' 
                                onClick={() => setIsOpen1(!isOpen1)} 
                            />
                        )}
                    </button>
                </div>
            </div>
        </div>

    
        {isOpen1 && (
            <div className="space-y-2 sm:space-y-3 animate-fadeIn">
                {cmfmodels.map(model => (
                    <Link key={model.id} className="block">
                        <button className='w-full text-center py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl sm:rounded-2xl bg-white shadow-md hover:shadow-lg text-sm sm:text-base md:text-[19px] lg:text-xl font-semibold text-gray-900 hover:bg-[#146ef5] hover:text-white transition-all duration-300 border border-gray-100 hover:border-[#146ef5] transform hover:scale-[1.02]'>
                            {model.name}
                        </button>
                    </Link>
                ))}
            </div>
        )}
    </div>

    <Footer />
</div>

    )
}

export default Nothing
