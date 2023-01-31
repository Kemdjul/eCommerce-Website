import React, { useRef, useEffect } from 'react';
import { urlFor } from '../lib/client';
import { useStateContext } from '../context/StateContext';
import Link from 'next/link';

import { AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai';

const kosaricaSidebar = () => {
  const cartRef = useRef();
  const { totalPrice, cartItems, setShowCart, onRemove } = useStateContext();

  return (
    <div className="w-full h-screen flex z-[100] sticky" ref={cartRef}>
        <div className="w-full h-full bg-[#D9D9D9] opacity-50" onClick={() => setShowCart(false)}>
        </div>

        <div className="w-[32.25rem] h-full flex flex-col gap-4 text-[#22262A] items-center bg-white px-4 py-8">
            <h5 className="text-3xl">MOJA KOŠARICA</h5>

            {cartItems.length >= 1 && cartItems.map((item) => (
              <div className="flex flex-col gap-2" key={item._id}>
                <div className="w-full flex justify-between items-center gap-8">
                  <AiOutlineClose className="absolute right-4 top-4 text-2xl text-primary cursor-pointer" onClick={() => setShowCart(false)} />
                  <img src={urlFor(item?.image[0].asset._ref)} alt="product alt" className="w-28 h-28 object-contain" />
      
                  <div className="flex flex-col gap-2 justify-center">
                    <h6 className="font-[400]">{item.naziv}</h6>
      
                    <div className="flex gap-4 font-[400]">
                      <p>{item.quantity}x</p>
                      <p>{item.cijena.toFixed(2)}€</p>
                    </div>
                  </div>
      
                  <button type="button" onClick={() => onRemove(item)}>
                    <AiOutlineCloseCircle className="text-3xl text-red-600 rounded-full" />
                  </button>
                </div>
              </div>
            ))}
            <div className="w-full flex px-6 justify-between items-center">
                <p className="text-2xl">Ukupno:</p>
                <p className="font-[400] text-2xl">{totalPrice.toFixed(2)}€</p>
            </div>
            <Link href="/kosarica">
              <div className="mt-8 flex items-center justify-center bg-primary rounded-lg text-white text-2xl w-64 h-[4.375rem]">Vidi košaricu</div>
            </Link>
            <button type="button" className="px-4 py-2 mt-8 bg-primary rounded-lg text-white text-2xl w-64 h-[4.375rem]">Plaćanje</button>
        </div>
    </div>
  )
}

export default kosaricaSidebar