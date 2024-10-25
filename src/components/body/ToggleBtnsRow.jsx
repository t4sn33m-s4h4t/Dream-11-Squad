import React from 'react'

const ToggleBtnsRow = ({showSelected, handleSelectBtn, selectedPlayerslength}) => {
  return (
    <div className='mt-12'>
      <div className="flex justify-between items-center md:flex-row flex-col">
        <h1 className="md:text-3xl text-2xl font-bold md:my-12 ">
          {showSelected ? `Selected Player (${selectedPlayerslength ? selectedPlayerslength : 0}/6)` : 'Available Players'}
        </h1>
        <div className='lg:my-0 my-5'>
          <button className={`md:px-7 px-4 text-xl rounded-xl rounded-r-none py-3 text-gray-600 bg-white transition hover:bg-yellow-400 hover:text-black  border-r-0 font-semibold border border-gray-200 ${!showSelected && 'active-btn'}`} onClick={(e)=>handleSelectBtn(e)}>Available</button>
          <button className={`md:px-7 px-4 text-xl rounded-xl rounded-l-none py-3 text-gray-600 bg-white transition hover:bg-yellow-400 hover:text-black  border-l-0 font-semibold border border-gray-200 ${showSelected && 'active-btn'}`} onClick={(e)=>handleSelectBtn(e)}>Selected ({selectedPlayerslength? selectedPlayerslength : 0})</button>
        </div>
      </div>
    </div>
  )
}

export default ToggleBtnsRow
