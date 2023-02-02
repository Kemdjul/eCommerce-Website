import React from 'react';
import { useStateContext } from '../../context/StateContext';

import { AiOutlineClose } from 'react-icons/ai';

const Napustanje = () => {
    const { setShowNapustanje, setPostupak, setShowPlacanje } = useStateContext();

  return (
    <div className="w-full h-screen absolute flex justify-center items-center z-[104]">
        <div className="w-full h-screen bg-gray-800 opacity-60" />
        <div className="w-[30rem] h-80 bg-white flex flex-col justify-center items-center gap-10 text-center px-8 absolute rounded-lg">
            <AiOutlineClose onClick={() => setShowNapustanje(false)} className="relative translate-x-48 text-2xl z-[104] text-primary opacity-60" />
            <p className="text-2xl 828181 opacity-80 font-[600] text-gray-700">Jeste li sigurni da želite napustiti plaćanje?</p>
            <div className="flex flex-col gap-2">
                <button onClick={() => setShowNapustanje(false)} type="button" className="px-16 py-2 bg-primary rounded-md text-white">Prekid</button>
                <button onClick={() => {
                    setPostupak(1);
                    setShowNapustanje(false);
                    setShowPlacanje(false);
                }} type="button" className="px-16 py-2 bg-[#A31912] rounded-md text-white">Potvrdi</button>
            </div>
        </div>        
    </div>
  )
}

export default Napustanje