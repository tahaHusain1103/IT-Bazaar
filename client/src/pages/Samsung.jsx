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
    <div className='flex flex-col min-h-screen bg-gray-50'>
      <CatalogNav />

      <div className="items-center mt-6 sm:mt-8 md:mt-9 mb-4 flex flex-col justify-center grow px-4">
        <img
          src={samsunglogo}
          alt="Samsung"
          className='w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 self-center object-contain'
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
                Samsung S-Series
              </span>
              <button
                className='cursor-pointer ml-2 sm:ml-3 p-1 hover:bg-gray-100 rounded-full transition-colors'
                onClick={() => ssetdisplay(!sDisplay)}
                aria-label={sDisplay ? "Collapse Samsung S-Series" : "Expand Samsung S-Series"}
              >
                {sDisplay ? (
                  <FaChevronDown
                    className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]'
                    onClick={() => ssetIsOpen(!sisOpen)}
                  />
                ) : (
                  <AiOutlineClose
                    className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]'
                    onClick={() => ssetIsOpen(!sisOpen)}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {sisOpen && (
          <div className="space-y-2 sm:space-y-3 animate-fadeIn">
            {reversedSseries.map(model => (
              <Link key={model.id} className="block">
                <button className='w-full text-center py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl sm:rounded-2xl bg-[#fff7f7] shadow-md hover:shadow-lg text-sm sm:text-base md:text-[19px] lg:text-xl font-semibold text-gray-900 border-b border-b-[#544e4e8c] hover:bg-[#146ef5] hover:text-white transition-all duration-300 transform hover:scale-[1.02]'>
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
                Samsung A-Series
              </span>
              <button
                className='cursor-pointer ml-2 sm:ml-3 p-1 hover:bg-gray-100 rounded-full transition-colors'
                onClick={() => asetdisplay(!aDisplay)}
                aria-label={aDisplay ? "Collapse Samsung A-Series" : "Expand Samsung A-Series"}
              >
                {aDisplay ? (
                  <FaChevronDown
                    className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]'
                    onClick={() => asetIsOpen(!aisOpen)}
                  />
                ) : (
                  <AiOutlineClose
                    className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]'
                    onClick={() => asetIsOpen(!aisOpen)}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {aisOpen && (
          <div className="space-y-2 sm:space-y-3 animate-fadeIn">
            {reversedAseries.map(model => (
              <Link key={model.id} className="block">
                <button className='w-full text-center py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl sm:rounded-2xl bg-[#fff7f7] shadow-md hover:shadow-lg text-sm sm:text-base md:text-[19px] lg:text-xl font-semibold text-gray-900 border-b border-b-[#544e4e8c] hover:bg-[#146ef5] hover:text-white transition-all duration-300 transform hover:scale-[1.02]'>
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
                Samsung M-Series
              </span>
              <button
                className='cursor-pointer ml-2 sm:ml-3 p-1 hover:bg-gray-100 rounded-full transition-colors'
                onClick={() => msetdisplay(!mDisplay)}
                aria-label={mDisplay ? "Collapse Samsung M-Series" : "Expand Samsung M-Series"}
              >
                {mDisplay ? (
                  <FaChevronDown
                    className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]'
                    onClick={() => msetIsOpen(!misOpen)}
                  />
                ) : (
                  <AiOutlineClose
                    className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]'
                    onClick={() => msetIsOpen(!misOpen)}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {misOpen && (
          <div className="space-y-2 sm:space-y-3 animate-fadeIn">
            {reversedMseries.map(model => (
              <Link key={model.id} className="block">
                <button className='w-full text-center py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl sm:rounded-2xl bg-[#fff7f7] shadow-md hover:shadow-lg text-sm sm:text-base md:text-[19px] lg:text-xl font-semibold text-gray-900 border-b border-b-[#544e4e8c] hover:bg-[#146ef5] hover:text-white transition-all duration-300 transform hover:scale-[1.02]'>
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
                Samsung Fold-Series
              </span>
              <button
                className='cursor-pointer ml-2 sm:ml-3 p-1 hover:bg-gray-100 rounded-full transition-colors'
                onClick={() => foldsetdisplay(!foldDisplay)}
                aria-label={foldDisplay ? "Collapse Samsung Fold-Series" : "Expand Samsung Fold-Series"}
              >
                {foldDisplay ? (
                  <FaChevronDown
                    className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]'
                    onClick={() => foldsetIsOpen(!foldisOpen)}
                  />
                ) : (
                  <AiOutlineClose
                    className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]'
                    onClick={() => foldsetIsOpen(!foldisOpen)}
                  />
                )}
              </button>
            </div>
          </div>
        </div>


        {foldisOpen && (
          <div className="space-y-2 sm:space-y-3 animate-fadeIn">
            {reversedFoldseries.map(model => (
              <Link key={model.id} className="block">
                <button className='w-full text-center py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl sm:rounded-2xl bg-[#fff7f7] shadow-md hover:shadow-lg text-sm sm:text-base md:text-[19px] lg:text-xl font-semibold text-gray-900 border-b border-b-[#544e4e8c] hover:bg-[#146ef5] hover:text-white transition-all duration-300 transform hover:scale-[1.02]'>
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
                Samsung Flip-Series
              </span>
              <button
                className='cursor-pointer ml-2 sm:ml-3 p-1 hover:bg-gray-100 rounded-full transition-colors'
                onClick={() => flipsetdisplay(!flipDisplay)}
                aria-label={flipDisplay ? "Collapse Samsung Flip-Series" : "Expand Samsung Flip-Series"}
              >
                {flipDisplay ? (
                  <FaChevronDown
                    className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]'
                    onClick={() => flipsetIsOpen(!flipisOpen)}
                  />
                ) : (
                  <AiOutlineClose
                    className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]'
                    onClick={() => flipsetIsOpen(!flipisOpen)}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {flipisOpen && (
          <div className="space-y-2 sm:space-y-3 animate-fadeIn">
            {reversedFlipseries.map(model => (
              <Link key={model.id} className="block">
                <button className='w-full text-center py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl sm:rounded-2xl bg-[#fff7f7] shadow-md hover:shadow-lg text-sm sm:text-base md:text-[19px] lg:text-xl font-semibold text-gray-900 border-b border-b-[#544e4e8c] hover:bg-[#146ef5] hover:text-white transition-all duration-300 transform hover:scale-[1.02]'>
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
                Samsung Note-Series
              </span>
              <button
                className='cursor-pointer ml-2 sm:ml-3 p-1 hover:bg-gray-100 rounded-full transition-colors'
                onClick={() => notesetdisplay(!noteDisplay)}
                aria-label={noteDisplay ? "Collapse Samsung Note-Series" : "Expand Samsung Note-Series"}
              >
                {noteDisplay ? (
                  <FaChevronDown
                    className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]'
                    onClick={() => notesetIsOpen(!noteisOpen)}
                  />
                ) : (
                  <AiOutlineClose
                    className='h-4 w-4 sm:h-5 sm:w-5 text-[#146ef5]'
                    onClick={() => notesetIsOpen(!noteisOpen)}
                  />
                )}
              </button>
            </div>
          </div>
        </div>


        {noteisOpen && (
          <div className="space-y-2 sm:space-y-3 animate-fadeIn">
            {reversedNoteseries.map(model => (
              <Link key={model.id} className="block">
                <button className='w-full text-center py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl sm:rounded-2xl bg-[#fff7f7] shadow-md hover:shadow-lg text-sm sm:text-base md:text-[19px] lg:text-xl font-semibold text-gray-900 border-b border-b-[#544e4e8c] hover:bg-[#146ef5] hover:text-white transition-all duration-300 transform hover:scale-[1.02]'>
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

export default Samsung