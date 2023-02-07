import React from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';

import { useStateContext } from '../../context/StateContext';

import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

const Pretrazi = () => {
    const { setTrazi, setTraziValue } = useStateContext();

    const handleChange = (e) => {
      setTraziValue(e.target.value);
    }

    const router = useRouter();

    const handleRoute = () => {
      setTrazi(false);
      if (router.pathname != '/trgovina') {
        router.push({
          pathname: '/trgovina',
        });
      }
    }

  return (
    <div className="z-[101] md:w-full max-md:w-screen h-screen flex justify-center items-center">
        <div className="w-full h-screen absolute bg-gray-900 opacity-70" />
        <div onClick={() => setTrazi(false)} className="absolute top-12 right-12 z-[102] cursor-pointer bg-[#212121] px-4 py-4">
            <AiOutlineClose className="text-white text-2xl" />
        </div>

        <div className="border-b-2 flex items-center border-white z-[102]">
            <input onChange={handleChange} id="search" name="search" type="text" className="md:w-[30rem] py-2 bg-transparent focus:outline-none text-white placeholder:text-white md:text-2xl" placeholder="Pretraži"/>
            <div onClick={handleRoute} href='/trgovina'>
              <AiOutlineSearch className="text-white text-3xl cursor-pointer" />
            </div>
        </div>
    </div>
  )
}

export default Pretrazi