import React, { useState, useEffect, useCallback } from 'react';

import Image from 'next/image';
import Logo from '../assets/logo.png';

import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback(event => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    }
  }, []);

  return (
    <nav 
    className={scrollY > 160 
      ? "w-full h-16 z-10 flex justify-between px-8 items-center bg-gray-900 transition-all text-white fixed font-Poppins" 
    : "w-full h-16 z-10 flex justify-between px-8 items-center bg-transparent text-white absolute font-Poppins"}>
      <div className="flex items-center gap-8">
        <Image 
          src={Logo} 
          alt="logo" 
          className="h-8 w-32 object-cover"
        />

        <ul className="flex gap-8 items-center">
          <p>POČETNA</p>
          <p>TRGOVINA</p>
          <p>EMISIJE</p>
          <p>ČLANCI</p>
          <p>KONTAKT</p>
        </ul>
      </div>

      <div className="flex items-center">
        <input 
          className="w-80 p-2 bg-transparent text-white placeholder:text-white border-b-2 border-white"
          placeholder="Search product ..." 
        />
        <AiOutlineSearch className="m-2 text-3xl" />
        <AiOutlineHeart className="m-2 text-3xl" />
        <AiOutlineShoppingCart className="m-2 text-3xl" />
        <div className="w-4 h-4 justify-center items-center flex rounded-full bg-red-600">
          <p className="text-xs">0</p>
        </div>
      </div>
    </nav>
  )
}

export default Nav