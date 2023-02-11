import React from 'react';
import Link from 'next/link';

import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="md:h-16 md:mx-20 px-4 flex max-md:flex-col max-md:gap-8 max-md:pt-8 items-center justify-between border-t-2 border-gray-400">
      <div className="flex gap-4 text-[#828181]">
        <Link href="https://www.facebook.com/odaberi.zdravlje">
          <FaFacebookF className="max-md:text-3xl" />
        </Link>
        <Link href="https://www.instagram.com/odaberizdravlje/">
          <AiOutlineInstagram className="max-md:text-3xl" />
        </Link>
        <Link href="https://www.youtube.com/channel/UCCUJSC0FpVuuuNLIZ76eoUQ">
          <AiOutlineYoutube className="max-md:text-3xl" />
        </Link>
      </div>

      <p className="font-[400] text-center">© 2023, <span className="text-primary">ODABERI-ZDRAVLJE</span>. Sva prava zadržana.</p>
    
      <div className="flex gap-4">

      </div>
    </div>
  )
}

export default Footer