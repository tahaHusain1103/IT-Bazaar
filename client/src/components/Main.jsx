import React from 'react'
import coverimg from '../assets/cover-img-landscape.png'
import search from '../assets/magnifying-glass-solid.svg'


const Main = () => {
    return (
        <div className="main-content flex items-center justify-center border-b-2 border-b-[#146ef5] bg-[#f8f8f8] flex-col px-4 py-2">
    
    <div className="cover-image flex items-center justify-center  mt-2 mb-2 sm:mt-2.5 sm:mb-1 h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[450px] 2xl:h-[550px] w-full max-w-7xl overflow-hidden border-b-2 border-b-[#ccc] rounded-3xl sm:rounded-[40px] lg:rounded-[50px]">
        <img 
            className='h-full w-full rounded-2xl sm:rounded-[30px] lg:rounded-[40px] object-contain px-2 sm:px-0' 
            src={coverimg} 
            alt="Cover" 
        />
    </div>

    <div className="offer mt-2 mb-2 sm:mt-2.5 sm:mb-1 min-h-[30px] w-full max-w-6xl text-center flex items-center justify-center border-b-2 border-b-[#ccc] py-2">
        <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl px-4 leading-relaxed'>
            Get Glass free With your Mobile Case
        </h1>
    </div>

    <div className="search-bar flex items-center justify-center mt-2 sm:mt-[5px] w-full max-w-2xl h-12 sm:h-[50px] bg-[#04a9f9] rounded-2xl sm:rounded-[20px] border-b-2 border-b-[#146ef5] px-2 sm:px-3">
        <div className="flex items-center w-full">
            <input 
                className='h-8 sm:h-10 flex-1 bg-white px-2 sm:px-2.5 border border-[#7b7878] rounded-lg sm:rounded-[12px] text-sm sm:text-base font-normal placeholder:text-sm sm:placeholder:text-base focus:outline-none focus:ring-2 focus:ring-[#146ef5] focus:border-transparent transition-all' 
                type="search" 
                name="search" 
                id="search-items" 
                placeholder="Search - Item" 
            />
            <button className="ml-2 p-1 hover:bg-white/10 rounded-full transition-colors">
                <img 
                    src={search} 
                    className="search-logo h-4 w-4 sm:h-5 sm:w-5 cursor-pointer" 
                    alt="Search" 
                />
            </button>
        </div>
    </div>

</div>

    )
}

export default Main
