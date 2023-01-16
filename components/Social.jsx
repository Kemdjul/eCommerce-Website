import React from 'react';

import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

const Social = () => {
  return (
    <div className="w-full h-96 flex justify-around px-24">
      <div className="flex flex-col justify-center items-center py-36">
        <h3 className="text-3xl font-semibold my-2">Shop Social</h3>
        <p className="text-gray-600 opacity-60">Donec nec justa eget felis facilisis fermentum,</p>
        <p className="text-gray-600 opacity-60">Allquam porttitor mauris sit amet arci.</p>
      <div className="flex text-3xl text-white mx-40 my-6">
        <FaFacebookF className="bg-blue-600 rounded-full w-12 h-12 p-3 mx-1" />
        <AiOutlineInstagram className="bg-pink-700 rounded-full w-12 h-12 p-3 mx-1" />
        <AiOutlineTwitter className="bg-cyan-600 rounded-full w-12 h-12 p-3 mx-1" />
        <AiOutlineYoutube className="bg-red-500 rounded-full w-12 h-12 p-3 mx-1" />
        <BsPinterest className="bg-red-600 rounded-full w-12 h-12 p-3 mx-1" />
      </div>
    </div>

    <div className="w-0.5 h-64 bg-gray-600 opacity-10 rounded-full my-16"></div>

    <div className="flex flex-col justify-center items-center py-36">
      <h3 className="text-3xl font-semibold">Get the Latest Deals</h3>
      <p className="text-gray-600 opacity-60">and</p>
      <p className="text-gray-600 opacity-60">receive <span className="text-orange-700">$20 coupon</span> for first shopping.</p>
      <div className="flex text-3xl text-white mx-28 my-6">
        <input placeholder="Enter your Email Address" className="text-[1rem] border-[1px] border-gray-600 rounded-full pr-32 pl-4 py-1 text-black" />
      </div>
    </div>
    </div>
  )
}

export default Social