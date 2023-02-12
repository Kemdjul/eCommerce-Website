import React, { useState } from 'react';
import { urlFor } from '../../lib/client';

const Blogs = ({ blogovi }) => {
  let count = 0;

  return (
    <div className="w-full min-h-screen flex flex-col py-10 gap-8 justify-center items-center">
      <h3 className="text-4xl">NOVOSTI</h3>
      <div className="w-full md:px-32">
      <div className="flex max-md:flex-col gap-4">
        {blogovi.map((blog) => {
          ++count;
          if (count <= 3) return (
          <div className="max-md:w-full h-full flex flex-col gap-4 items-center justify-center text-center">
            <img src={urlFor(blog.image.asset._ref)} alt="Blog image" className="max-md:w-full" />
            <p className="text-xs text-primary">{blog.datum}</p>
            <h5 className="text-2xl">{blog.name.toUpperCase()}</h5>
            <p className="font-[400] text-[#828181] max-md:hidden">{blog.text[0].children[0].text.substring(0,80)}...</p>
            <button type="button" className="px-4 py-2 bg-primary text-white">READ MORE</button>
          </div>)
        })}
      </div>
      </div>
    </div>
  )
}

export default Blogs