import React from 'react'
import Nav from './components/Nav'
import Catalog from './components/Catalog'
import Footer from './components/Footer'
import coverimg from './assets/cover-img-landscape.png'
import search from './assets/magnifying-glass-solid.svg'

function App() {
{/*
  
*/}
  return (
    <>
    <Nav />
      <main className="main-content flex items-center justify-center border-solid border-b-2 border-b-[#146ef5] bg-[#f8f8f8] flex-col">
        <div className="cover-image flex items-center justify-center bg-[#e3e3e3] mt-2.5 mb-1 h-[550px] w-full overflow-hidden border-solid border-b-2 border-b-[#ccc] rounded-[50px]" >
          <img className='h-full w-full rounded-[40px] object-contain' src={coverimg} alt="" />
        </div>
        <div className="offer mt-2.5 mb-1 h-[30px] w-[100vw] text-[18px] flex items-center justify-center border-solid border-b-2 border-b-[#ccc]">
          <h1 className='font-bold'>Get Glass free With your Mobile Case</h1>
        </div>
        <div className="search-bar flex items-center justify-center mt-[5px] w-[60vw] h-[50px] bg-[#04a9f9] rounded-[20px] border-b-2 border-b-[#146ef5]">
          <input className='h-10 w-[95%] bg-white px-2.5 border border-[#7b7878] rounded-[12px] text-[16px] font-normal' type="search" name="search" id="search-items" placeholder="Search - Item" />
          <img src={search} className="search-logo ml-2 h-5 w-5 cursor-pointer" alt="" />
        </div>
        <Catalog />
      </main>
     <Footer/>
    </>
  )
}

export default App

