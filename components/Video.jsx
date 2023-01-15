import React from 'react';
import Image from 'next/image';

import Placeholder from '../assets/video-bg.jpg';

const Video = () => {
  return (
    <div className="bg-gray-600 w-full h-[35rem]">
        <Image src={Placeholder} className="w-full h-full" />
        Tu će biti video
    </div>
  )
}

export default Video