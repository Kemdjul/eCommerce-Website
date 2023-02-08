import React from 'react';
import { urlFor } from '../../lib/client';
import { useStateContext } from '../../context/StateContext';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Produkt = ({ produkt }) => {
  const { qty, incQty, decQty } = useStateContext();

  return (
    <div className="flex max-md:flex-col justify-between items-center">
      <div className="flex max-md:flex-col items-center md:gap-24">
        <img src={urlFor(produkt.image[0].asset._ref)} alt="Product image" className="object-contain md:w-40 md:h-40 max-md:w-96 max-md:h-96" />
        <p className="max-md:text-xl">{produkt.naziv}</p>
      </div>

      <div className="flex items-center gap-8">
        <p className="md:mr-10 max-md:hidden">{produkt.cijena.toFixed(2)}€</p>

        <div className="flex md:mr-8">
          <button type="button" onClick={() => decQty()} className="w-10 h-10 flex justify-center items-center bg-[#F6F7F8] rounded-l-lg max-md:hidden">
            <AiOutlineMinus className="text-primary" />
          </button>

          <div className="w-10 h-10 flex justify-center items-center bg-[#F6F7F8]">
            {produkt.quantity}x
          </div>

          <button type="button" onClick={() => incQty()} className="w-10 h-10 flex justify-center items-center bg-[#F6F7F8] rounded-r-lg max-md:hidden">
            <AiOutlinePlus className="text-primary" />
          </button>
        </div>

        <p className="md:mr-8">{(produkt.quantity * produkt.cijena).toFixed(2)}€</p>
      </div>
    </div>
  )
}

export default Produkt