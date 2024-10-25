import React from 'react';
import NewsLetter from './NewsLetter';
import FooterLogo from '../../assets/logo-footer.png'
const Footer = () => {
  return (
      < >
      <NewsLetter></NewsLetter>
    <footer className=" justify-between pt-64 bg-[#06091A] text-white">
      <div className=' md:px-12 lg:px-32 px-2'>
      <div>
      <img className='mx-auto' src={FooterLogo} alt="" />
      </div>

      <div className='grid gap-8 p-6 mt-8 rounded-lg shadow-lg lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
      <div className="flex flex-col space-y-2 max-w-60 ">
        <h3 className="font-bold text-xl">About Us</h3>
        <p className='text-gray-500 font-semibold'>We are a passionate team dedicated to providing the best services to our customers.</p>
      </div>

      <div className="flex flex-col space-y-2">
        <h3 className="font-bold text-xl">Quick Links</h3>
        <ul className='list-disc ml-5 text-gray-500 font-semibold space-y-3'>
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      <div className="flex flex-col space-y-5">
        <h3 className="font-bold text-xl">Subscribe</h3>
        <p className='text-gray-500 font-semibold max-w-56'>Subscribe to our newsletter for the latest updates.</p>
        <div className="flex justify-center items-center ">
                <input type="text" placeholder='Enter your email' className="outline-none py-3 px-5 w-3/4 text-gray-600 font-semibold rounded-md bg-white rounded-r-none " />
                <button className="rounded-md py-3 px-7 rounded-l-none text-black bg-yellow-400 font-bold hover:bg-gray-900 hover:text-white transition">
                    Subscribe
                </button>
            </div>
      </div>
      </div>
      </div>
      <hr className='border-t-1 border-gray-600 my-10' />
      <div className="pb-10 text-center text-gray-500 font-semibold">
        @{new Date().getFullYear()} Your Company All Rights Reserved.
      </div>
    </footer>
      </>
  );
};

export default Footer;