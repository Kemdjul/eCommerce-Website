import React from 'react';
import Image from 'next/image'

import BigDiscount from './BigDiscount';
import SmallDiscount from './SmallDiscount';

import Small_1 from '../assets/small-discount-1.png';
import Small_2 from '../assets/small-discount-2.png';
import Trendy_1 from '../assets/trendy-1.jpg';

const Trendy = () => {
  return (
    <div>
        <div className="w-full h-screen px-44 py-12 mt-8 flex">
          <BigDiscount />
          <div>
            <SmallDiscount image={Small_1} />
            <SmallDiscount image={Small_2} />
          </div>
      </div>

      <div className="w-full h-screen mt-16">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-3xl font-bold">Trendy Products</h3>
          <ul className="flex mt-4">
            <li className="mx-6 pb-1 px-2 text-red-800 border-b-2 border-red-800">ALL</li>
            <li className="mx-6 pb-1 px-2 text-gray-600">WOMEN</li>
            <li className="mx-6 pb-1 px-2 text-gray-600">MEN</li>
            <li className="mx-6 pb-1 px-2 text-gray-600">ACCESSORIES</li>
          </ul>
        </div>

        <div className="w-full h-[34rem] px-40 my-8 flex">
          <div className="w-80 h-[100%] mx-4">
            <div className="w-full h-96 bg-green-800">
              <Image src={Trendy_1} alt="Product image" className="w-full h-full object-cover" />
            </div>

            <div className="py-3">
              <p className="text-sm text-gray-600">Women, Clothing</p>
              <p className="font-bold">Silk-blend Kaftan</p>
              <p className="mt-3 text-gray-600">$60.00</p>
            </div>
          </div>

          <div className="w-80 h-[100%] mx-4">
            <div className="w-full h-96 bg-green-800">
              <Image src={Trendy_1} alt="Product image" className="w-full h-full object-cover" />
            </div>

            <div className="py-3">
              <p className="text-sm text-gray-600">Women, Clothing</p>
              <p className="font-bold">Silk-blend Kaftan</p>
              <p className="mt-3 text-gray-600">$60.00</p>
            </div>
          </div>

          <div className="w-80 h-[100%] mx-4">
            <div className="w-full h-96 bg-green-800">
              <Image src={Trendy_1} alt="Product image" className="w-full h-full object-cover" />
            </div>

            <div className="py-3">
              <p className="text-sm text-gray-600">Women, Clothing</p>
              <p className="font-bold">Silk-blend Kaftan</p>
              <p className="mt-3 text-gray-600">$60.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trendy