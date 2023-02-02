import React from 'react';

import { useStateContext } from '../../context/StateContext';

import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

const Pretrazi = () => {
    const { setTrazi } = useStateContext();

  return (
    <div className="z-[101] w-full h-screen flex justify-center items-center">
        <div className="w-full h-screen absolute bg-gray-900 opacity-70" />
        <div onClick={() => setTrazi(false)} className="absolute top-12 right-12 z-[102] hover:cursor-pointer bg-[#212121] px-4 py-4">
            <AiOutlineClose className="text-white text-2xl" />
        </div>

        <div className="border-b-2 flex items-center border-white z-[102]">
            <input className="w-[30rem] py-2 bg-transparent focus:outline-none text-white placeholder:text-white text-2xl" placeholder="Pretraži"/>
            <AiOutlineSearch className="text-white text-3xl" />
        </div>
    </div>
  )
}

export default Pretrazi