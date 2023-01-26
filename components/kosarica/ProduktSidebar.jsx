import React from 'react';
import Image from 'next/image';
import { urlFor } from '../../lib/client';

import { useStateContext } from '../../context/StateContext';

import { AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai';

const ProduktSidebar = ({ item }) => {
    const { setShowCart } = useStateContext();

  return (
    <div className="flex flex-col gap-2">
        <div className="w-full flex justify-between items-center gap-2">
            <AiOutlineClose className="absolute right-4 top-4 text-2xl text-primary cursor-pointer" onClick={() => setShowCart(false)} />
            <Image src={urlFor(item.image[0].asset._ref)} alt="product alt" className="w-28 h-28" />

            <div className="flex flex-col gap-2 justify-center">
                <h6 className="font-[400]">{item.naziv}</h6>

                <div className="flex gap-4 font-[400]">
                    <p>2x</p>
                    <p>{item.cijena}</p>
                </div>
            </div>

            <AiOutlineCloseCircle className="text-3xl text-red-600 rounded-full" />
        </div>
    </div>
  )
}

export default ProduktSidebar