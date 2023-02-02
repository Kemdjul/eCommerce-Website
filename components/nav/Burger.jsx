import React from 'react';
import Link from 'next/link';
import { useStateContext } from '../../context/StateContext';

const Burger = () => {
    const { setShowBurger } = useStateContext();

  return (
    <div className="w-full h-screen z-[51] text-white flex justify-center items-center">
        <div className="w-full h-screen absolute bg-gray-800 opacity-40" onClick={() => setShowBurger(false)} />
        <ul className="z-[52] flex flex-col text-4xl gap-8">
            <Link onClick={() => setShowBurger(false)} href="/">
                <li>Početna</li>
            </Link>
            <Link onClick={() => setShowBurger(false)} href="/trgovina">
                <li>Trgovina</li>
            </Link>
            <Link onClick={() => setShowBurger(false)} href="/emisije">
                <li>Emisije</li>
            </Link>
            <Link onClick={() => setShowBurger(false)} href="/novosti">
                <li>Novosti</li>
            </Link>
            <Link onClick={() => setShowBurger(false)} href="/o-nama">
                <li>O nama</li>
            </Link>
            <Link onClick={() => setShowBurger(false)} href="/kontakt">
                <li>Kontakt</li>
            </Link>
        </ul>
    </div>
  )
}

export default Burger