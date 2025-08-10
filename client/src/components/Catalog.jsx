import React from 'react'
import apple from '../assets/apple-brands.svg'
import samsung from '../assets/samsung.png'
import vivo from '../assets/vivo.png'
import onePlus from '../assets/oneplus.png'
import oppo from '../assets/oppo.png'
import Mi from '../assets/mi.png'
import nothing from '../assets/nothing.png'
import realme from '../assets/realme.png'
import motorola from '../assets/motorola.png'
import iqoo from '../assets/iqoo.png'
import infinix from '../assets/infinix.png'
import poco from '../assets/poco.png'
import techno from '../assets/techno.png'
import { Link } from 'react-router-dom'

function Catalog() {
    return (
        <>
            <div className="brand-catalog min-h-[400px] w-full mt-4 px-4 py-6">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 lg:gap-6 max-w-screen-2xl mx-auto">
        
        <Link to='/i-phone' className="group">
            <div className="brand-card h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 w-full bg-white flex items-center justify-center flex-col relative border-b-3 border-b-gray-300 border-r-2 border-r-gray-300 rounded-3xl lg:rounded-[50px] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <img className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 object-contain" src={apple} alt="iPhone" />
                <h4 className='uppercase absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 text-xs sm:text-sm md:text-base font-medium text-gray-800'>iPhone</h4>
            </div>
        </Link>

        <Link to={'/samsung'} className="group">
            <div className="brand-card h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 w-full bg-white flex items-center justify-center flex-col relative border-b-3 border-b-gray-300 border-r-2 border-r-gray-300 rounded-3xl lg:rounded-[50px] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <img className="h-10 w-16 sm:h-12 sm:w-20 md:h-14 md:w-24 lg:h-16 lg:w-28 xl:h-18 xl:w-32 mix-blend-multiply object-contain" src={samsung} alt="Samsung" />
                <h4 className='uppercase absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 text-xs sm:text-sm md:text-base font-medium text-gray-800'>Samsung</h4>
            </div>
        </Link>

        <Link to="#" className="group">
            <div className="brand-card h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 w-full bg-white flex items-center justify-center flex-col relative border-b-3 border-b-gray-300 border-r-2 border-r-gray-300 rounded-3xl lg:rounded-[50px] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <img className="w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 lg:w-28 lg:h-16 xl:w-32 xl:h-18 mix-blend-multiply object-contain" src={vivo} alt="Vivo" />
                <h4 className='uppercase absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 text-xs sm:text-sm md:text-base font-medium text-gray-800'>Vivo</h4>
            </div>
        </Link>

        <Link to={'/oneplus'} className="group">
            <div className="brand-card h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 w-full bg-white flex items-center justify-center flex-col relative border-b-3 border-b-gray-300 border-r-2 border-r-gray-300 rounded-3xl lg:rounded-[50px] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <img className="h-12 w-10 sm:h-14 sm:w-12 md:h-16 md:w-14 lg:h-18 lg:w-16 xl:h-20 xl:w-18 mix-blend-multiply object-contain" src={onePlus} alt="OnePlus" />
                <h4 className='uppercase absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 text-xs sm:text-sm md:text-base font-medium text-gray-800'>OnePlus</h4>
            </div>
        </Link>

        <Link to="#" className="group">
            <div className="brand-card h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 w-full bg-white flex items-center justify-center flex-col relative border-b-3 border-b-gray-300 border-r-2 border-r-gray-300 rounded-3xl lg:rounded-[50px] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <img className="h-12 w-14 sm:h-14 sm:w-16 md:h-16 md:w-18 lg:h-18 lg:w-20 xl:h-20 xl:w-22 mix-blend-multiply object-contain" src={oppo} alt="Oppo" />
                <h4 className='uppercase absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 text-xs sm:text-sm md:text-base font-medium text-gray-800'>Oppo</h4>
            </div>
        </Link>

        <Link to="#" className="group">
            <div className="brand-card h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 w-full bg-white flex items-center justify-center flex-col relative border-b-3 border-b-gray-300 border-r-2 border-r-gray-300 rounded-3xl lg:rounded-[50px] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <img className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-18 xl:w-18 mix-blend-multiply object-contain" src={Mi} alt="Xiaomi" />
                <h4 className='uppercase absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 text-xs sm:text-sm md:text-base font-medium text-gray-800'>Xiaomi</h4>
            </div>
        </Link>

        <Link to={'/nothing'} className="group">
            <div className="brand-card h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 w-full bg-white flex items-center justify-center flex-col relative border-b-3 border-b-gray-300 border-r-2 border-r-gray-300 rounded-3xl lg:rounded-[50px] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <img className="h-12 w-16 sm:h-14 sm:w-18 md:h-16 md:w-20 lg:h-18 lg:w-22 xl:h-20 xl:w-24 mix-blend-multiply object-contain" src={nothing} alt="Nothing" />
                <h4 className='uppercase absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 text-xs sm:text-sm md:text-base font-medium text-gray-800'>Nothing</h4>
            </div>
        </Link>

        <Link to="#" className="group">
            <div className="brand-card h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 w-full bg-white flex items-center justify-center flex-col relative border-b-3 border-b-gray-300 border-r-2 border-r-gray-300 rounded-3xl lg:rounded-[50px] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <img className="h-12 w-14 sm:h-14 sm:w-16 md:h-16 md:w-18 lg:h-18 lg:w-20 xl:h-20 xl:w-22 mix-blend-multiply object-contain" src={realme} alt="Realme" />
                <h4 className='uppercase absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 text-xs sm:text-sm md:text-base font-medium text-gray-800'>Realme</h4>
            </div>
        </Link>

        <Link to="#" className="group">
            <div className="brand-card h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 w-full bg-white flex items-center justify-center flex-col relative border-b-3 border-b-gray-300 border-r-2 border-r-gray-300 rounded-3xl lg:rounded-[50px] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <img className="h-8 w-12 sm:h-10 sm:w-14 md:h-12 md:w-16 lg:h-14 lg:w-18 xl:h-16 xl:w-20 mix-blend-multiply object-contain" src={motorola} alt="Motorola" />
                <h4 className='uppercase absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 text-xs sm:text-sm md:text-base font-medium text-gray-800'>Motorola</h4>
            </div>
        </Link>

        <Link to="#" className="group">
            <div className="brand-card h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 w-full bg-white flex items-center justify-center flex-col relative border-b-3 border-b-gray-300 border-r-2 border-r-gray-300 rounded-3xl lg:rounded-[50px] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <img className="h-10 w-14 sm:h-12 sm:w-16 md:h-14 md:w-18 lg:h-16 lg:w-20 xl:h-18 xl:w-22 mix-blend-multiply object-contain" src={iqoo} alt="iQOO" />
                <h4 className='uppercase absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 text-xs sm:text-sm md:text-base font-medium text-gray-800'>iQOO</h4>
            </div>
        </Link>

        <Link to="#" className="group">
            <div className="brand-card h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 w-full bg-white flex items-center justify-center flex-col relative border-b-3 border-b-gray-300 border-r-2 border-r-gray-300 rounded-3xl lg:rounded-[50px] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <img className="h-10 w-12 sm:h-12 sm:w-14 md:h-14 md:w-16 lg:h-16 lg:w-18 xl:h-18 xl:w-20 mix-blend-multiply object-contain" src={infinix} alt="Infinix" />
                <h4 className='uppercase absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 text-xs sm:text-sm md:text-base font-medium text-gray-800'>Infinix</h4>
            </div>
        </Link>

        <Link to="#" className="group">
            <div className="brand-card h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 w-full bg-white flex items-center justify-center flex-col relative border-b-3 border-b-gray-300 border-r-2 border-r-gray-300 rounded-3xl lg:rounded-[50px] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <img className="h-10 w-14 sm:h-12 sm:w-16 md:h-14 md:w-18 lg:h-16 lg:w-20 xl:h-18 xl:w-22 mix-blend-multiply object-contain" src={poco} alt="Poco" />
                <h4 className='uppercase absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 text-xs sm:text-sm md:text-base font-medium text-gray-800'>Poco</h4>
            </div>
        </Link>

        <Link to="#" className="group">
            <div className="brand-card h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 w-full bg-white flex items-center justify-center flex-col relative border-b-3 border-b-gray-300 border-r-2 border-r-gray-300 rounded-3xl lg:rounded-[50px] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <img className="h-12 w-14 sm:h-14 sm:w-16 md:h-16 md:w-18 lg:h-18 lg:w-20 xl:h-20 xl:w-22 mix-blend-multiply object-contain" src={techno} alt="Tecno" />
                <h4 className='uppercase absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 text-xs sm:text-sm md:text-base font-medium text-gray-800'>Tecno</h4>
            </div>
        </Link>

    </div>
</div>

        </>
    )
}

export default Catalog