import React from 'react';

import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

const Social = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center py-36">
      <h3>Shop Social</h3>
      <p>Donec nec justa eget felis facilisis fermentum,</p>
      <p>Allquam porttitor mauris sit amet arci.</p>
      <div className="flex text-3xl text-white m-8">
        <FaFacebookF className="bg-red-600 rounded-full w-16 h-16 p-4 mx-4" />
        <AiOutlineInstagram className="bg-red-600 rounded-full w-16 h-16 p-4 mx-4" />
        <AiOutlineTwitter className="bg-red-600 rounded-full w-16 h-16 p-4 mx-4" />
        <AiOutlineYoutube className="bg-red-600 rounded-full w-16 h-16 p-4 mx-4" />
        <BsPinterest className="bg-red-600 rounded-full w-16 h-16 p-4 mx-4" />
      </div>
    </div>
  )
}

export default Social