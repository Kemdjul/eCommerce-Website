import React from 'react';
import Image from 'next/image';

import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="md:h-16 md:mx-20 px-4 flex max-md:flex-col max-md:gap-8 max-md:pt-8 items-center justify-between border-t-2 border-gray-400">
      <div className="flex gap-4 text-[#828181]">
        <FaFacebookF className="max-md:text-3xl" />
        <AiOutlineInstagram className="max-md:text-3xl" />
        <AiOutlineYoutube className="max-md:text-3xl" />
      </div>

      <p className="font-[400] text-center">© 2023, <span className="text-primary">ODABERI-ZDRAVLJE</span>. Sva prava zadržana.</p>
    
      <div className="flex gap-4">

      </div>
    </div>
  )
}

export default Footer