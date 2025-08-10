import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CatalogNav from '../components/CatalogNav'
import Footer from '../components/Footer'
import OnePlusLogo from '../assets/oneplus.png'
import { FaChevronDown } from 'react-icons/fa'
import { AiOutlineClose } from "react-icons/ai";

function Oneplus() {
    const [isOpen, setisOpen] = useState(false)
    const [isnordOpen, setisnordOpen] = useState(false)
    const [isDisplay, setisDisplay] = useState(true)
    const [isnordDisplay, setisnordDisplay] = useState(true)

    const mainSeries = [
        { id: 5, name: 'One Plus 6' },
        { id: 6, name: 'One Plus 6T' },
        { id: 7, name: 'One Plus 7' },
        { id: 8, name: 'One Plus 7 Pro' },
        { id: 9, name: 'One Plus 7T' },
        { id: 10, name: 'One Plus 7T Pro' },
        { id: 11, name: 'OnePlus 8' },
        { id: 12, name: 'OnePlus 8 Pro' },
        { id: 13, name: 'One Plus 8T' },
        { id: 14, name: 'One Plus 9' },
        { id: 15, name: 'One Plus 9 Pro' },
        { id: 16, name: 'One Plus 9R' },
        { id: 17, name: 'One Plus 10' },
        { id: 18, name: 'One Plus 10 Pro' },
        { id: 19, name: 'One Plus 10T' },
        { id: 20, name: 'One Plus 10R' },
        { id: 21, name: 'One Plus 11' },
        { id: 22, name: 'One Plus 11R' },
        { id: 23, name: 'One Plus 12' },
        { id: 24, name: 'One Plus 12R' },
        { id: 25, name: 'One Plus 13' },
        { id: 26, name: 'One Plus 13R' },
    ]
    const reversedMainseries = mainSeries.reverse()

    const nordSeries = [
        { id: 0, name: 'One Plus Nord' },
        { id: 1, name: 'One Plus Nord 2' },
        { id: 3, name: 'One Plus Nord 2T' },
        { id: 4, name: 'One Plus Nord 2 CE' },
        { id: 5, name: 'One Plus Nord 2 CE Lite' },
        { id: 6, name: 'One Plus Nord CE 3' },
        { id: 7, name: 'One Plus Nord CE 3 Lite' },
        { id: 8, name: 'One Plus Nord 4' },
        { id: 9, name: 'One Plus Nord CE 4' },
        { id: 10, name: 'One Plus Nord CE 4 Lite' },
    ]
    const reversedNordserries = nordSeries.reverse()
    return (
        <div className='flex flex-col min-h-screen bg-gray-50'>
    <CatalogNav />
    
    
    <div className="items-center mt-6 sm:mt-8 md:mt-9 mb-4 flex flex-col justify-center grow px-4">
        <img 
            src={OnePlusLogo} 
            alt="OnePlus" 
            className='w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 self-center object-contain' 
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
                        OnePlus Series
                    </span>
                    <button 
                        className='cursor-pointer ml-2 sm:ml-3 p-1 hover:bg-gray-100 rounded-full transition-colors' 
                        onClick={() => setisDisplay(!isDisplay)}
                        aria-label={isDisplay ? "Collapse OnePlus Series" : "Expand OnePlus Series"}
                    >
                        {isDisplay ? (
                            <FaChevronDown 
                                className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]' 
                                onClick={() => setisOpen(!isOpen)} 
                            />
                        ) : (
                            <AiOutlineClose 
                                className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]' 
                                onClick={() => setisOpen(!isOpen)} 
                            />
                        )}
                    </button>
                </div>
            </div>
        </div>

        {isOpen && (
            <div className="space-y-2 sm:space-y-3 animate-fadeIn">
                {reversedMainseries.map(model => (
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
                        OnePlus Nord Series
                    </span>
                    <button 
                        className='cursor-pointer ml-2 sm:ml-3 p-1 hover:bg-gray-100 rounded-full transition-colors' 
                        onClick={() => setisnordDisplay(!isnordDisplay)}
                        aria-label={isnordDisplay ? "Collapse OnePlus Nord Series" : "Expand OnePlus Nord Series"}
                    >
                        {isnordDisplay ? (
                            <FaChevronDown 
                                className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]' 
                                onClick={() => setisnordOpen(!isnordOpen)} 
                            />
                        ) : (
                            <AiOutlineClose 
                                className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]' 
                                onClick={() => setisnordOpen(!isnordOpen)} 
                            />
                        )}
                    </button>
                </div>
            </div>
        </div>

        {isnordOpen && (
            <div className="space-y-2 sm:space-y-3 animate-fadeIn">
                {reversedNordserries.map(model => (
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

export default Oneplus