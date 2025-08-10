import React from 'react'
import CatalogNav from '../components/CatalogNav'
import Iphonelogo from '../assets/apple-brands.svg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { FaChevronDown } from 'react-icons/fa'
import { AiOutlineClose } from "react-icons/ai";

const Iphone = () => {
     const [Display, setdisplay] = useState(true);
      const [isOpen, setIsOpen] = useState(false);
    const models = [
        { id: 38, name: 'iPhone 16e' },
        { id: 37, name: 'iPhone 16 Pro Max' },
        { id: 36, name: 'iPhone 16 Pro ' },
        { id: 35, name: 'iPhone 16' },
        { id: 34, name: 'iPhone 16' },
        { id: 33, name: 'iPhone 15 Pro Max' },
        { id: 32, name: 'iPhone 15 Pro ' },
        { id: 31, name: 'iPhone 15 plus ' },
        { id: 30, name: 'iPhone 15' },
        { id: 29, name: 'iPhone 14 Pro Max' },
        { id: 28, name: 'iPhone 14 Pro ' },
        { id: 27, name: 'iPhone 14 plus ' },
        { id: 26, name: 'iPhone 14' },
        { id: 25, name: 'iPhone 13 mini' },
        { id: 24, name: 'iPhone 13 Pro Max' },
        { id: 23, name: 'iPhone 13 Pro ' },
        { id: 22, name: 'iPhone 13 ' },
        { id: 21, name: 'iPhone 12 Pro Max ' },
        { id: 20, name: 'iPhone 12 Mini ' },
        { id: 19, name: 'iPhone 12 Pro' },
        { id: 18, name: 'iPhone 12' },
        { id: 17, name: 'iPhone 11 Pro Max ' },
        { id: 16, name: 'iPhone 11 Pro ' },
        { id: 15, name: 'iPhone 11' },
        { id: 14, name: 'iPhone XS Max ' },
        { id: 13, name: 'iPhone XR ' },
        { id: 12, name: 'iPhone Xs ' },
        { id: 11, name: 'iPhone X ' },
        { id: 10, name: 'iPhone 8 Plus ' },
        { id: 9, name: 'iPhone 8' },
        { id: 8, name: 'iPhone 7 Plus' },
        { id: 7, name: 'iPhone 7 ' },
        { id: 6, name: 'iPhone 6s Plus ' },
        { id: 5, name: 'iPhone 6 Plus ' },
        { id: 4, name: 'iPhone 6s' },
        { id: 3, name: 'iPhone 6 ' },
        { id: 2, name: 'iPhone 5s ' },
        { id: 1, name: 'iPhone 5' },
        { id: 0, name: 'iPhone 4' }
    ]

    const [SEdisplay, setSEdisplay] = useState(true)
    const [SEisOpen, setSEisOpen] = useState(false)
    const seModels=[
{id:0,name:'iPhone SE 1st'},
{id:1,name:'iPhone SE 2st'},
{id:2,name:'iPhone SE 3st'},
    ]
    return (
        <div className='flex flex-col min-h-screen'>
            <CatalogNav />
            <div className="items-center mt-9 mb-4 flex flex-col justify-center grow">
                <img src={Iphonelogo} alt="I-Phone" className='w-25 self-center' />
                <p className='text-gray-500 text-2xl my-3'>Choose Your Mobile Model</p>
            </div>
            <div className="space-y-4">
             
                <div className='flex items-center justify-between w-full'>
                    <div className='w-full text-center py-6 rounded-2xl bg-white shadow-md text-[19px] font-semibold text-gray-900 hover:border-b-2 hover:border-b-[#146ef5] '>Main Series
                        <button className='cursor-pointer mx-2 pt-1' onClick={() => setDisplay(!Display)}>
                            {
                                Display ?
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
                    <div className='w-full text-center py-6 rounded-2xl bg-white shadow-md text-[19px] font-semibold text-gray-900 hover:border-b-2 hover:border-b-[#146ef5] '>SE Series
                        <button className='cursor-pointer mx-2 pt-1' onClick={() => setSEdisplay(!SEdisplay)}>
                            {
                                SEdisplay ?
                                    <FaChevronDown className=' h-5 w-5 text-[#146ef5]' onClick={() => setSEisOpen(!setIsOpen)} /> :
                                    <AiOutlineClose className=' h-5 w-5 text-[#146ef5]' onClick={() => setSEisOpen(!setIsOpen)} />
                            }
                        </button>
                    </div>
                </div>
                {
                    SEisOpen && (
                        seModels.map(model => (
                            <Link key={model.id}>
                                <button className='w-full text-center  py-6 rounded-2xl bg-white shadow-md text-[19px] font-semibold text-gray-900 hover:bg-[#146ef5] hover:text-white '>{model.name}</button>
                            </Link>
                        ))
                    )
                }
 
            </div>
            <Footer />
        </div>
    )
}

export default Iphone
