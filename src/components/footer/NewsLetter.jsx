import React from 'react'
import BG_Shadow from '../../assets/bg-shadow.png'
const NewsLetter = () => {
  return (
  
    <div className='translate-y-48 p-5 border-2 bg-white bg-opacity-20 border-gray-300 rounded-xl md:mx-12 lg:mx-32 mx-2' >
      <div className="rounded-2xl px-5 md:py-20 py-12 bg-gray-100  md:bg-white hero bg-cover  bg-center bg-no-repeat " style={{
     backgroundImage: `url(${BG_Shadow})`
      }}>
        <div className="rounded-2xl flex flex-col space-y-5 text-center">
            <h2 className='md:text-4xl text-3xl font-bold'>
            Subscribe to our Newsletter
            </h2>
            <p className='md:text-2xl text-lg font-semibold text-gray-600'>
            Get the latest updates and news right in your inbox!
            </p>
            <div className="md:flex justify-center items-center space-x-2 space-y-4 md:space-y-0">
                <input type="text" placeholder='Enter your email' className="outline-none py-3 px-5 md:w-3/4 w-full text-gray-600 font-semibold rounded-xl bg-white border border-gray-300" />
                <button className="rounded-xl py-3 px-7 bg-yellow-400 font-bold hover:bg-black hover:text-white transition">
                    Subscribe
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
