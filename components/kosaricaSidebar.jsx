import React from 'react';
import { urlFor } from '../lib/client';
import { useStateContext } from '../context/StateContext';
import Link from 'next/link';

import { motion } from 'framer-motion';

import { AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai';

const KosaricaSidebar = () => {
  const { totalPrice, totalQuantities, cartItems, setShowCart, onRemove } = useStateContext();

  return (
    <div className="md:w-full max-md:w-screen h-screen flex z-[100] sticky">
        <div className="w-full absolute h-full bg-[#D9D9D9] opacity-50 max-md:hidden" onClick={() => setShowCart(false)}>
        </div>

        <motion.div initial={{ x: 516 }} animate={{ x: 0 }} className="md:w-[32.25rem] h-full flex flex-col absolute right-0 gap-4 text-[#22262A] items-center bg-white px-4 py-8">
            <h5 className="text-3xl">MOJA KOŠARICA</h5>

            <div className="w-full min-h-32 overflow-auto">
            {totalQuantities ? '' : (
              <div>
                <AiOutlineClose className="absolute right-4 top-4 text-2xl text-primary cursor-pointer" onClick={() => setShowCart(false)} />
                <p className="px-8 font-[700] text-2xl text-center py-24">Nema proizvoda u košarici.</p>
              </div>
            )}

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
                      <p>{item.izabranaBoja}</p>
                      <p>{item.izabranaVelicina}</p>
                    </div>
                  </div>
      
                  <button type="button" onClick={() => onRemove(item)}>
                    <AiOutlineCloseCircle className="text-3xl text-red-600 rounded-full" />
                  </button>
                </div>
              </div>
            ))}
            </div>

            {totalQuantities != '0' && (
              <div>
                <div className="w-full flex px-6 justify-between items-center">
                  <p className="text-2xl">Ukupno:</p>
                  <p className="font-[400] text-2xl">{totalPrice.toFixed(2)}€</p>
              </div>
              <Link onClick={() => setShowCart(false)} href="/kosarica">
                <div className="mt-8 flex items-center justify-center bg-primary rounded-lg text-white text-2xl w-64 h-[4.375rem]">Vidi košaricu</div>
              </Link>
              <button type="button" className="px-4 py-2 mt-8 bg-primary rounded-lg text-white text-2xl w-64 h-[4.375rem]">Plaćanje</button>
              </div>
            )}
        </motion.div>
    </div>
  )
}

export default KosaricaSidebar