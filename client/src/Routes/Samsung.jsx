import React, { useState } from 'react'
import samsunglogo from '../assets/samsung.png'
import { Link } from 'react-router-dom'
import CatalogNav from '../components/CatalogNav'
import Footer from '../components/Footer'
import { FaChevronDown } from 'react-icons/fa'
import { AiOutlineClose } from "react-icons/ai";
function Samsung() {
  //s series
  const [sDisplay, ssetdisplay] = useState(true);
  const [sisOpen, ssetIsOpen] = useState(false);
  const sSeries = [
    { id: 15, name: 'Samsung S20 ' },
    { id: 16, name: 'Samsung S20 Plus' },
    { id: 17, name: 'Samsung S20 Ultra' },
    { id: 18, name: 'Samsung S20 FE' },
    { id: 19, name: 'Samsung S21' },
    { id: 20, name: 'Samsung S21 FE' },
    { id: 21, name: 'Samsung S21 Plus' },
    { id: 22, name: 'Samsung S21 Ultra' },
    { id: 23, name: 'Samsung S22 ' },
    { id: 24, name: 'Samsung S22 Plus' },
    { id: 25, name: 'Samsung S22 Ultra' },
    { id: 26, name: 'Samsung S23' },
    { id: 27, name: 'Samsung S23 Plus' },
    { id: 28, name: 'Samsung S23 Ultra' },
    { id: 29, name: 'Samsung S23 FE' },
    { id: 30, name: 'Samsung S24' },
    { id: 31, name: 'Samsung S24 Plus' },
    { id: 32, name: 'Samsung S24 Ultra' },
    { id: 33, name: 'Samsung S24 FE' },
    { id: 34, name: 'Samsung S25' },
    { id: 35, name: 'Samsung S25 Plus' },
    { id: 36, name: 'Samsung S25 Ultra' },
    { id: 37, name: 'Samsung S25 Edge' },
  ]
  const reversedSseries = sSeries.reverse()
  //a series
  const [aDisplay, asetdisplay] = useState(true);
  const [aisOpen, asetIsOpen] = useState(false);
  const aSeries = [
    { id: 18, name: 'Samsung A10' },
    { id: 19, name: 'Samsung A10s' },
    { id: 20, name: 'Samsung A20' },
    { id: 21, name: 'Samsung A20s' },
    { id: 22, name: 'Samsung A21s' },
    { id: 23, name: 'Samsung A30' },
    { id: 24, name: 'Samsung A30s' },
    { id: 25, name: 'Samsung A12' },
    { id: 26, name: 'Samsung A31' },
    { id: 27, name: 'Samsung A32' },
    { id: 28, name: 'Samsung A40' },
    { id: 29, name: 'Samsung A50' },
    { id: 30, name: 'Samsung A50s' },
    { id: 31, name: 'Samsung A51' },
    { id: 32, name: 'Samsung A70' },
    { id: 33, name: 'Samsung A70s' },
    { id: 34, name: 'Samsung A71' },
    { id: 35, name: 'Samsung A80' },
    
  ]
  const reversedAseries = aSeries.reverse()
  //m series
  const [mDisplay, msetdisplay] = useState(true);
  const [misOpen, msetIsOpen] = useState(false);
  const mSeries = [
    { id: 0, name: 'Samsung M02' },
    { id: 1, name: 'Samsung M02S' },
    { id: 2, name: 'Samsung M10' },
    { id: 3, name: 'Samsung M10s' },
    { id: 4, name: 'Samsung M11' },
    { id: 5, name: 'Samsung M12' },
    { id: 6, name: 'Samsung M20' },
    { id: 7, name: 'Samsung M21' },
    { id: 8, name: 'Samsung M30' },
    { id: 9, name: 'Samsung M30s' },
    { id: 10, name: 'Samsung M31' },
    { id: 11, name: 'Samsung M31s' },
    { id: 12, name: 'Samsung M40' },
    { id: 13, name: 'Samsung M51' },
  ]
  const reversedMseries = mSeries.reverse()
  // fold series 

  const [foldDisplay, foldsetdisplay] = useState(true);
  const [foldisOpen, foldsetIsOpen] = useState(false);
  const foldSeries = [
    { id: 0, name: 'Samsung Fold 1' },
    { id: 1, name: 'Samsung Fold 2' },
    { id: 2, name: 'Samsung Fold 3' },
    { id: 3, name: 'Samsung Fold 4' },
    { id: 4, name: 'Samsung Fold 5' },
    { id: 5, name: 'Samsung Fold 6' },
  ]
  const reversedFoldseries = foldSeries.reverse()
  //flip series
  const [flipDisplay, flipsetdisplay] = useState(true);
  const [flipisOpen, flipsetIsOpen] = useState(false);
  const flipSeries = [
    { id: 0, name: 'Samsung Flip 1' },
    { id: 1, name: 'Samsung Flip 2' },
    { id: 2, name: 'Samsung Flip 3' },
    { id: 3, name: 'Samsung Flip 4' },
    { id: 4, name: 'Samsung Flip 5' },
    { id: 5, name: 'Samsung Flip 6' },
  ]
  const reversedFlipseries = flipSeries.reverse()
  //note series  
  const [noteDisplay, notesetdisplay] = useState(true);
  const [noteisOpen, notesetIsOpen] = useState(false);
  const noteSeries = [
    { id: 0, name: 'Samsung Note 8' },
    { id: 1, name: 'Samsung Note 9' },
    { id: 2, name: 'Samsung Note 10' },
    { id: 3, name: 'Samsung Note 10 Lite' },
    { id: 4, name: 'Samsung Note 10 Pro' },
    { id: 5, name: 'Samsung Note 20' },
  ]
  const reversedNoteseries = noteSeries.reverse()
  //j series  
  
  // grand series 
  const [grandDisplay, grandsetdisplay] = useState(true);
  const [grandisOpen, grandsetIsOpen] = useState(false);
  const grandSeries = [
    { id: 0, name: 'Samsung Grand 2' },
    { id: 1, name: 'Samsung Grand Max' },
    { id: 2, name: 'Samsung Grand Prime' },
  ]
  return (
    <div className='flex flex-col min-h-screen'>
      <CatalogNav />
      <div className="items-center mt-9 mb-4 flex flex-col justify-center grow">
        <img src={samsunglogo} alt="Samsung" className='w-40 self-center' />
        <p className='text-gray-500 text-2xl'>Choose Your Mobile Model</p>
      </div>
      <div className="space-y-4">

        <div className='flex items-center justify-between w-full'>
          <div className='w-full text-center py-6 rounded-2xl bg-white shadow-md text-[19px] font-semibold text-gray-900 hover:border-b-2 hover:border-b-[#146ef5] '>Samsung S-Series
            <button className='cursor-pointer mx-2 pt-1' onClick={() => ssetdisplay(!sDisplay)}>
              {
                sDisplay ?
                  <FaChevronDown className=' h-5 w-5 text-[#146ef5]' onClick={() => ssetIsOpen(!sisOpen)} /> :
                  <AiOutlineClose className=' h-5 w-5 text-[#146ef5]' onClick={() => ssetIsOpen(!sisOpen)} />
              }
            </button>
          </div>
        </div>
        {
          sisOpen && (
            reversedSseries.map(model => (
              <Link key={model.id}>
                <button className='w-full text-center  py-6 rounded-2xl bg-[#fff7f7] shadow-md text-[19px] font-semibold text-gray-900 border-b-1 border-b-[#544e4e8c] hover:bg-[#146ef5] hover:text-white '>{model.name}</button>
              </Link>
            ))
          )
        }


        <div className='flex items-center justify-between w-full'>
          <div className='w-full text-center py-6 rounded-2xl bg-white shadow-md text-[19px] font-semibold text-gray-900 hover:border-b-2 hover:border-b-[#146ef5] '>Samsung A-Series
            <button className='cursor-pointer mx-2 pt-1' onClick={() => asetdisplay(!aDisplay)}>
              {
                aDisplay ?
                  <FaChevronDown className=' h-5 w-5 text-[#146ef5]' onClick={() => asetIsOpen(!aisOpen)} /> :
                  <AiOutlineClose className=' h-5 w-5 text-[#146ef5]' onClick={() => asetIsOpen(!aisOpen)} />
              }
            </button>
          </div>
        </div>
        {
          aisOpen && (
            reversedAseries.map(model => (
              <Link key={model.id}>
                <button className='w-full text-center  py-6 rounded-2xl bg-[#fff7f7] shadow-md text-[19px] font-semibold text-gray-900 border-b-1 border-b-[#544e4e8c] hover:bg-[#146ef5] hover:text-white '>{model.name}</button>
              </Link>
            ))
          )
        }


        <div className='flex items-center justify-between w-full'>
          <div className='w-full text-center py-6 rounded-2xl bg-white shadow-md text-[19px] font-semibold text-gray-900 hover:border-b-2 hover:border-b-[#146ef5] '>Samsung M-Series
            <button className='cursor-pointer mx-2 pt-1' onClick={() => msetdisplay(!mDisplay)}>
              {
                mDisplay ?
                  <FaChevronDown className=' h-5 w-5 text-[#146ef5]' onClick={() => msetIsOpen(!misOpen)} /> :
                  <AiOutlineClose className=' h-5 w-5 text-[#146ef5]' onClick={() => msetIsOpen(!misOpen)} />
              }
            </button>
          </div>
        </div>
        {
          misOpen && (
            reversedMseries.map(model => (
              <Link key={model.id}>
                <button className='w-full text-center  py-6 rounded-2xl bg-[#fff7f7] shadow-md text-[19px] font-semibold text-gray-900 border-b-1 border-b-[#544e4e8c] hover:bg-[#146ef5] hover:text-white '>{model.name}</button>
              </Link>
            ))
          )
        }


        <div className='flex items-center justify-between w-full'>
          <div className='w-full text-center py-6 rounded-2xl bg-white shadow-md text-[19px] font-semibold text-gray-900 hover:border-b-2 hover:border-b-[#146ef5] '>Samsung Fold-Series
            <button className='cursor-pointer mx-2 pt-1' onClick={() => foldsetdisplay(!foldDisplay)}>
              {
                foldDisplay ?
                  <FaChevronDown className=' h-5 w-5 text-[#146ef5]' onClick={() => foldsetIsOpen(!foldisOpen)} /> :
                  <AiOutlineClose className=' h-5 w-5 text-[#146ef5]' onClick={() => foldsetIsOpen(!foldisOpen)} />
              }
            </button>
          </div>
        </div>
 {
          foldisOpen && (
            reversedFoldseries.map(model => (
              <Link key={model.id}>
                <button className='w-full text-center  py-6 rounded-2xl bg-[#fff7f7] shadow-md text-[19px] font-semibold text-gray-900 border-b-1 border-b-[#544e4e8c] hover:bg-[#146ef5] hover:text-white '>{model.name}</button>
              </Link>
            ))
          )
        }


        <div className='flex items-center justify-between w-full'>
          <div className='w-full text-center py-6 rounded-2xl bg-white shadow-md text-[19px] font-semibold text-gray-900 hover:border-b-2 hover:border-b-[#146ef5] '>Samsung Flip-Series
            <button className='cursor-pointer mx-2 pt-1' onClick={() => flipsetdisplay(!flipDisplay)}>
              {
                flipDisplay ?
                  <FaChevronDown className=' h-5 w-5 text-[#146ef5]' onClick={() => flipsetIsOpen(!flipisOpen)} /> :
                  <AiOutlineClose className=' h-5 w-5 text-[#146ef5]' onClick={() => flipsetIsOpen(!flipisOpen)} />
              }
            </button>
          </div>
        </div>
         {
          flipisOpen && (
            reversedFlipseries.map(model => (
              <Link key={model.id}>
                <button className='w-full text-center  py-6 rounded-2xl bg-[#fff7f7] shadow-md text-[19px] font-semibold text-gray-900 border-b-1 border-b-[#544e4e8c] hover:bg-[#146ef5] hover:text-white '>{model.name}</button>
              </Link>
            ))
          )
        }
        <div className='flex items-center justify-between w-full'>
          <div className='w-full text-center py-6 rounded-2xl bg-white shadow-md text-[19px] font-semibold text-gray-900 hover:border-b-2 hover:border-b-[#146ef5] '>Samsung Note-Series
            <button className='cursor-pointer mx-2 pt-1' onClick={() => notesetdisplay(!noteDisplay)}>
              {
                noteDisplay ?
                  <FaChevronDown className=' h-5 w-5 text-[#146ef5]' onClick={() => notesetIsOpen(!noteisOpen)} /> :
                  <AiOutlineClose className=' h-5 w-5 text-[#146ef5]' onClick={() => notesetIsOpen(!noteisOpen)} />
              }
            </button>
          </div>
        </div> 
        {
          noteisOpen && (
            reversedNoteseries.map(model => (
              <Link key={model.id}>
                <button className='w-full text-center  py-6 rounded-2xl bg-[#fff7f7] shadow-md text-[19px] font-semibold text-gray-900 border-b-1 border-b-[#544e4e8c] hover:bg-[#146ef5] hover:text-white '>{model.name}</button>
              </Link>
            ))
          )
        }
      </div>
      <Footer />
    </div>
  )
}

export default Samsung