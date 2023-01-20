import React from 'react';
import Image from 'next/image';

import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="h-16 mx-20 px-4 flex items-center justify-between border-t-2 border-gray-400">
      <div className="flex gap-4 text-[#828181]">
        <FaFacebookF />
        <AiOutlineInstagram />
        <AiOutlineYoutube />
      </div>

      <p className="font-[400]">© 2023, <span className="text-primary">ODABERI-ZDRAVLJE</span>. Sva prava zadržana.</p>
    
      <div className="flex gap-4">

      </div>
    </div>
  )
}

export default Footer