import React, { useState } from 'react';
import Coin from '../../assets/coin.svg';
import Logo from '../../assets/logo.png';

const Navbar = ({balance}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = (
    <>
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
      <li className="border-2 rounded-xl">
        <a className="btn font-bold btn-ghost text-md flex justify-between items-center">
          {balance} Coin <img width="20px" src={Coin} alt="Coin" />
        </a>
      </li>
    </>
  );

  return ( 
    <div className="navbar bg-base-100 fixed z-50 bg-opacity-80 backdrop-blur-sm top-0 left-0 md:px-12 lg:px-32 px-5">
      <div className="flex-1">
        <a href="#"><img src={Logo} alt="Logo" className="w-12 md:w-16" /></a>
      </div>
 
      <div className="hidden md:flex font-semibold text-gray-700">
        <ul className="menu menu-horizontal px-1 items-center ">
          {menuItems}
        </ul>
      </div>
 
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>
 
      {
        <div className={`md:hidden transition-all duration-3000 absolute ${isMenuOpen ? 'top-16' : '-top-64'} left-0 w-full bg-white shadow-lg justify-center`}>
          <ul className="menu px-4 py-5 text-gray-500 font-semibold items-center">
            {menuItems}
          </ul>
        </div>
      }
    </div>
  );
};

export default Navbar;
