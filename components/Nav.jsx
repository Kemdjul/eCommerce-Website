import React from 'react';

import Image from 'next/image';
import Logo from '../assets/logo.png';

import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const Nav = () => {
  return (
    <nav className="w-full h-16 z-10 flex justify-around items-center bg-transparent text-white fixed font-Poppins">
      <Image src={Logo} alt="logo" />

      <ul className="flex">
        <p className="p-4">POČETNA</p>
        <p className="p-4">TRGOVINA</p>
        <p className="p-4">EMISIJE</p>
        <p className="p-4">ČLANCI</p>
        <p className="p-4">KONTAKT</p>
      </ul>

      <div className="flex items-center">
        <input 
          className="w-80 p-2 bg-transparent text-black border-b-2 border-black placeholder:text-gray-800"
          placeholder="Search product ..." 
        />
        <AiOutlineSearch className="m-2" />
        <AiOutlineHeart className="m-2" />
        <AiOutlineShoppingCart className="m-2" />
        <div className="w-4 h-4 justify-center items-center flex rounded-full bg-red-600">
          <p className="text-xs">0</p>
        </div>
      </div>
    </nav>
  )
}

export default Nav