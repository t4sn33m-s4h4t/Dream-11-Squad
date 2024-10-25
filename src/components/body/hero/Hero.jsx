import React from 'react';
import BG_Shadow from '../../../assets/bg-shadow.png';
import Cricket_img from '../../../assets/banner-main.png';
import { toast } from 'react-toastify';

const Hero = ({balance, setBalance}) => {
    function handleFreeCoin() {
        setBalance(balance+5000)
        toast.success("Credit Added to Your Account")
    }
  return (
    <div className="hero bg-cover bg-black bg-center bg-no-repeat rounded-3xl mt-28" style={{ backgroundImage: `url(${BG_Shadow})` }}>
        
      <div className="hero-content text-neutral-content text-center py-16">
        <div >
            <img src={Cricket_img} className='mx-auto my-12'/>
          <h1 className="mb-5 md:text-5xl text-3xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className="mb-5 md:text-2xl text-xl text-gray-400 font-semibold">Beyond Boundaries Beyond Limits</p>
          
         <div className="rounded-xl border-yellow-400 border-2 w-fit mx-auto ">
         <button className="btn md:m-2 m-1 md:text-xl text-md border-0 bg-yellow-400" onClick={handleFreeCoin}>Claim Free Credit</button>
         </div>
      
        </div>
      </div>
    </div>
  );
};

export default Hero;