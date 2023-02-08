import React from 'react';
import { urlFor } from '../../lib/client';
import Link from 'next/link';

const ListaBlogova = ({ blogovi }) => {
  return (
    <div className="w-full min-h-screen md:px-32 max-md:px-6 py-12 grid md:grid-cols-3 max-md:grid-cols-1 gap-4">
      {blogovi?.map((blog) => (
        <div className="flex flex-col gap-2 items-center text-center">
          <img src={urlFor(blog.image.asset._ref)} />
          <h5 className="text-xl">Dijabetičke komplikacije</h5>
          <p className="text-sm max-md:hidden">{blog.text[0].children[0].text.substring(0,150)}...</p>
          <Link href={`clanci/${blog.slug.current}`} className="text-white bg-primary px-8 py-2">Pročitaj sve...</Link>
        </div>
      ))}
    </div>
  )
}



export default ListaBlogova