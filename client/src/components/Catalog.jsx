import React from 'react'
import './catalog.css'
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
            <div className="brand-catalog h-[400px] w-[98vw] mt-[15px] grid grid-cols-7">
                <Link to='/iphone-models'>
                    <div className="brand-name ml-[22px] h-[185px] w-[150px] bg-white flex items-center justify-center flex-col relative border-solid border-b-[3px] border-b-[#ccc] border-r-[2px] border-r-[#ccc] rounded-[50px] cursor-pointer">
                        <img className="h-[60px] w-[60px]" src={apple} alt="" />
                        <h4 className='uppercase absolute bottom-5'>IPhone</h4>
                    </div>
                </Link>
                <Link to={'/samsung-models'} >
                    <div className="brand-name ml-[22px] h-[185px] w-[150px] bg-white flex items-center justify-center flex-col relative border-solid border-b-[3px] border-b-[#ccc] border-r-[2px] border-r-[#ccc] rounded-[50px] cursor-pointer">
                        <img className="h-[70px] w-[120px] mix-blend-multiply" src={samsung} alt="" />
                        <h4 className='uppercase absolute bottom-5'>Samsung</h4>
                    </div>
                </Link>
                <Link>
                    <div className="brand-name ml-[22px] h-[185px] w-[150px] bg-white flex items-center justify-center flex-col relative border-solid border-b-[3px] border-b-[#ccc] border-r-[2px] border-r-[#ccc] rounded-[50px] cursor-pointer">
                        <img className="w-[125px] h-[65px] mix-blend-multiply" src={vivo} alt="" />
                        <h4 className='uppercase absolute bottom-5'>Vivo</h4>
                    </div>
                </Link>

                <Link to={'/oneplus-models'}>
                    <div className="brand-name ml-[22px] h-[185px] w-[150px] bg-white flex items-center justify-center flex-col relative border-solid border-b-[3px] border-b-[#ccc] border-r-[2px] border-r-[#ccc] rounded-[50px] cursor-pointer">
                        <img className="h-[75px] w-[80px] mix-blend-multiply" src={onePlus} alt="" />
                        <h4 className='uppercase absolute bottom-5'>Oneplus</h4>
                    </div>
                </Link>

                <Link>
                    <div className="brand-name ml-[22px] h-[185px] w-[150px] bg-white flex items-center justify-center flex-col relative border-solid border-b-[3px] border-b-[#ccc] border-r-[2px] border-r-[#ccc] rounded-[50px] cursor-pointer">
                        <img className="h-[80px] w-[100px] mix-blend-multiply" src={oppo} alt="" />
                        <h4 className='uppercase absolute bottom-5'>Oppo</h4>
                    </div>
                </Link>
                <Link>
                    <div className="brand-name ml-[22px] h-[185px] w-[150px] bg-white flex items-center justify-center flex-col relative border-solid border-b-[3px] border-b-[#ccc] border-r-[2px] border-r-[#ccc] rounded-[50px] cursor-pointer">
                        <img className="h-[70px] w-[70px] mix-blend-multiply" src={Mi} alt="" />
                        <h4 className='uppercase absolute bottom-5'>Xiaomi</h4>
                    </div>
                </Link>
                <Link to={'/nothing-models'}>
                    <div className="brand-name ml-[22px] h-[185px] w-[150px] bg-white flex items-center justify-center flex-col relative border-solid border-b-[3px] border-b-[#ccc] border-r-[2px] border-r-[#ccc] rounded-[50px] cursor-pointer">
                        <img className="h-[80px] w-[110px] mix-blend-multiply" src={nothing} alt="" />
                        <h4 className='uppercase absolute bottom-5'>Nothing</h4>
                    </div>

                </Link>
                <Link>
                    <div className="brand-name ml-[22px] h-[185px] w-[150px] bg-white flex items-center justify-center flex-col relative border-solid border-b-[3px] border-b-[#ccc] border-r-[2px] border-r-[#ccc] rounded-[50px] cursor-pointer">
                        <img className="h-[80px] w-[100px] mix-blend-multiply" src={realme} alt="" />
                        <h4 className='uppercase absolute bottom-5'>Realme</h4>
                    </div>
                </Link>
                <Link>
                    <div className="brand-name ml-[22px] h-[185px] w-[150px] bg-white flex items-center justify-center flex-col relative border-solid border-b-[3px] border-b-[#ccc] border-r-[2px] border-r-[#ccc] rounded-[50px] cursor-pointer">
                        <img className="h-[53px] w-[90px] mix-blend-multiply" src={motorola} alt="" />
                        <h4 className='uppercase absolute bottom-5'>Motorola</h4>
                    </div>
                </Link>
                <Link>
                    <div className="brand-name ml-[22px] h-[185px] w-[150px] bg-white flex items-center justify-center flex-col relative border-solid border-b-[3px] border-b-[#ccc] border-r-[2px] border-r-[#ccc] rounded-[50px] cursor-pointer">
                        <img className="h-[65px] w-[100px] mix-blend-multiply" src={iqoo} alt="" />
                        <h4 className='uppercase absolute bottom-5'>Iqoo</h4>
                    </div>
                </Link>
                <Link>
                    <div className="brand-name ml-[22px] h-[185px] w-[150px] bg-white flex items-center justify-center flex-col relative border-solid border-b-[3px] border-b-[#ccc] border-r-[2px] border-r-[#ccc] rounded-[50px] cursor-pointer">
                        <img className="h-[70px] w-[95px] mix-blend-multiply" src={infinix} alt="" />
                        <h4 className='uppercase absolute bottom-5'>Infinix</h4>
                    </div>
                </Link>
                <Link>
                    <div className="brand-name ml-[22px] h-[185px] w-[150px] bg-white flex items-center justify-center flex-col relative border-solid border-b-[3px] border-b-[#ccc] border-r-[2px] border-r-[#ccc] rounded-[50px] cursor-pointer">
                        <img className="h-[65px] w-[100px] mix-blend-multiply" src={poco} alt="" />
                        <h4 className='uppercase absolute bottom-5'>Poco</h4>
                    </div>
                </Link>
                <Link>
                    <div className="brand-name ml-[22px] h-[185px] w-[150px] bg-white flex items-center justify-center flex-col relative border-solid border-b-[3px] border-b-[#ccc] border-r-[2px] border-r-[#ccc] rounded-[50px] cursor-pointer">
                        <img className="h-[75px] w-[100px] mix-blend-multiply" src={techno} alt="" />
                        <h4 className='uppercase absolute bottom-5'>Techno</h4>
                    </div>
                </Link>
            </div >
        </>
    )
}

export default Catalog