import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useStateContext } from '../context/StateContext';

import KosaricaSidebar from './kosaricaSidebar';
import Pretrazi from './nav/Pretrazi';

import Image from 'next/image';
import Logo from '../assets/logo.png';

import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const Nav = () => {
  const router = useRouter();
  const { showCart, setShowCart, totalQuantities, trazi, setTrazi } = useStateContext();

  return (
    <nav 
    className="w-full z-50 flex flex-col fixed">
      {trazi && <Pretrazi />}
      <div className="w-full h-[8.5rem] z-50 flex flex-col bg-white transition-all fixed">
        <div className="w-full h-12 px-32 bg-primary flex items-center justify-between text-white">
          <p>Besplatan trošak dostave iznad 70 eura</p>

          <div className="flex gap-4 items-center">
            <p>0800 330 022</p>
            <div className="w-[1px] h-6 bg-gray-400" />
            <p>Prijava / Registracija</p>
          </div>
        </div>
        
        <div className="h-full flex px-32 items-center justify-between">
            <Image 
              src={Logo} 
              alt="logo" 
              className="h-8 w-32 object-cover"
            />

          <ul className="flex gap-12 items-center text-[18px] opacity-70">
            <p className={router.pathname === '/' 
              ? "border-b-2 border-primary text-primary" 
              : "hover:text-primary hover:border-b-2 border-primary duration-200 transition-all"}><Link href="/">POČETNA</Link></p>
            <p className={router.pathname === '/trgovina' 
              ? "border-b-2 border-primary text-primary" 
              : "hover:text-primary hover:border-b-2 border-primary duration-200 transition-all"}><Link href="/trgovina">TRGOVINA</Link></p>
            <p className={router.pathname === '/emisije' 
              ? "border-b-2 border-primary text-primary" 
              : "hover:text-primary hover:border-b-2 border-primary duration-200 transition-all"}><Link href="/emisije">EMISIJE</Link></p>
            <p className={router.pathname === '/blog' 
              ? "border-b-2 border-primary text-primary" 
              : "hover:text-primary hover:border-b-2 border-primary duration-200 transition-all"}><Link href="/blog">NOVOSTI</Link></p>
              <p className={router.pathname === '/kontakt' 
              ? "border-b-2 border-primary text-primary" 
              : "hover:text-primary hover:border-b-2 border-primary duration-200 transition-all"}><Link href="/kontakt">O NAMA</Link></p>
            <p className={router.pathname === '/kontakt' 
              ? "border-b-2 border-primary text-primary" 
              : "hover:text-primary hover:border-b-2 border-primary duration-200 transition-all"}><Link href="/kontakt">KONTAKT</Link></p>
          </ul>

          <div className="flex items-center">
            <AiOutlineSearch onClick={() => setTrazi(true)} className="m-2 text-3xl hover:text-primary transition-all cursor-pointer" />
            <AiOutlineHeart className="m-2 text-3xl hover:text-primary transition-all cursor-pointer" />
            <button type="button" onClick={() => setShowCart(true)}>
              <AiOutlineShoppingCart className="m-2 text-3xl hover:text-primary transition-all cursor-pointer"/>
            </button>
            <div className="w-4 h-4 absolute right-32 top-16 justify-center items-center flex rounded-full bg-primary">
              <p className="text-xs text-white">{totalQuantities}</p>
            </div>
          </div>
        </div>
      </div>
      {showCart && <KosaricaSidebar />}
    </nav>
  )
}



export default Nav