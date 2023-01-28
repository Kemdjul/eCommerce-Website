import React from 'react';
import { urlFor } from '../../lib/client';
import { useStateContext } from '../../context/StateContext';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Produkt = ({ produkt }) => {
  const { qty, incQty, decQty } = useStateContext();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-24">
        <img src={urlFor(produkt.image[0].asset._ref)} alt="Product image" className="object-contain w-40 h-40" />
        <p>{produkt.naziv}</p>
      </div>

      <div className="flex items-center gap-8">
        <p className="mr-10">{produkt.cijena.toFixed(2)}</p>

        <div className="flex mr-8">
          <button type="button" onClick={() => decQty()} className="w-10 h-10 flex justify-center items-center bg-[#F6F7F8] rounded-l-lg">
            <AiOutlineMinus className="text-primary" />
          </button>

          <div className="w-10 h-10 flex justify-center items-center bg-[#F6F7F8]">
            {produkt.quantity}
          </div>

          <button type="button" onClick={() => incQty()} className="w-10 h-10 flex justify-center items-center bg-[#F6F7F8] rounded-r-lg">
            <AiOutlinePlus className="text-primary" />
          </button>
        </div>

        <p className="mr-8">{(produkt.quantity * produkt.cijena).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Produkt