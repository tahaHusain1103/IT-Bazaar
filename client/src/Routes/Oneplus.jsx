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
        <div div className='flex flex-col min-h-screen'>
            <CatalogNav />
            <div className="items-center mt-9 mb-4 flex flex-col justify-center grow">
                <img src={OnePlusLogo} alt="I-Phone" className='w-25 self-center' />
                <p className='text-gray-500 text-2xl my-3'>Choose Your Mobile Model</p>
            </div>
            <div className="space-y-4">
                <div className='flex items-center justify-between w-full'>
                    <div className='w-full text-center py-6 rounded-2xl bg-white shadow-md text-[19px] font-semibold text-gray-900 hover:border-b-2 hover:border-b-[#146ef5] '>Oneplus Series
                        <button className='cursor-pointer mx-2 pt-1' onClick={() => setisDisplay(!isDisplay)}>
                            {
                                isDisplay ?
                                    <FaChevronDown className=' h-5 w-5 text-[#146ef5]' onClick={() => setisOpen(!isOpen)} /> :
                                    <AiOutlineClose className=' h-5 w-5 text-[#146ef5]' onClick={() => setisOpen(!isOpen)} />
                            }
                        </button>
                    </div>
                </div>
                {
                    isOpen && (
                        reversedMainseries.map(model => (
                            <Link key={model.id}>
                                <button className='w-full text-center  py-6 rounded-2xl bg-white shadow-md text-[19px] font-semibold text-gray-900 hover:bg-[#146ef5] hover:text-white '>{model.name}</button>
                            </Link>
                        ))
                    )
                }


                <div className='flex items-center justify-between w-full'>
                    <div className='w-full text-center py-6 rounded-2xl bg-white shadow-md text-[19px] font-semibold text-gray-900 hover:border-b-2 hover:border-b-[#146ef5] '>Oneplus Nord Series
                        <button className='cursor-pointer mx-2 pt-1' onClick={() => setisnordDisplay(!isnordDisplay)}>
                            {
                                isnordDisplay ?
                                    <FaChevronDown className=' h-5 w-5 text-[#146ef5]' onClick={() => setisnordOpen(!isnordOpen)} /> :
                                    <AiOutlineClose className=' h-5 w-5 text-[#146ef5]' onClick={() => setisnordOpen(!isnordOpen)} />
                            }
                        </button>
                    </div>
                </div>
                {
                    isnordOpen && (
                        reversedNordserries.map(model => (
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

export default Oneplus