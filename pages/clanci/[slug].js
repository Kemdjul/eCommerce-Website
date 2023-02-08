import React from 'react';
import Nav from '../../components/Nav';
import Banner from '../../components/Banner';
import { PortableText } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';

import CallToAction from '../../components/homepage/CallToAction';
import Footer from '../../components/homepage/Footer';

import { client, urlFor } from '../../lib/client';

const SampleImageComponent = ({value}) => {
  const {width, height} = getImageDimensions(value)
  return (
    <img
      src={urlFor(value.asset?._ref)}
      alt={value.alt || ' '}
      loading="lazy"
      className="max-w-lg max-h-lg object-contain"
    />
  )
}

const components = {
    types: {
      image: SampleImageComponent,
    },
    list: {
      bullet: ({children}) => <ul className="list-disc mt-4">{children}</ul>,
      number: ({children}) => <ol className="list-disc mt-4">{children}</ol>,
    },
    block: {
        // Ex. 1: customizing common block types
        h1: ({children}) => <h1 className="text-2xl">{children}</h1>,
        h2: ({children}) => <h1 className="text-2xl">{children}</h1>,
        h3: ({children}) => <h1 className="text-2xl">{children}</h1>,
        blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
      },
  }
  

const BlogDetails = ({ blog }) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
        <Nav />
        <Banner text={blog.name.toUpperCase()} smallText={`POČETNA / NOVOSTI / ${blog.name.toUpperCase()}`} />
        <div className="w-full min-h-screen flex flex-col justify-center md:px-36 max-md:px-6 py-12 gap-6">
            <div className="flex items-center justify-center w-full">
              <img src={urlFor(blog.image.asset._ref)} alt="Slika za blog" className="md:w-[50%] object-contain" />
            </div>
            <div className="flex gap-4 items-center">
                <p className="text-primary text-sm">Vijesti</p>
                <div className="w-[1.5px] h-4 bg-gray-400 opacity-60" />
                <div className="flex gap-2 text-[#636363] text-sm">
                    <p>{blog.datum.substr(8, 2)}.</p>
                    <p>{blog.datum.substr(5, 2)}.</p>
                    <p>{blog.datum.substr(0, 4)}.</p>
                </div>
            </div>
                
            <div className="text-[#565656] flex flex-col gap-1 leading-7">
                <PortableText value={blog.text} components={components} />
            </div>
        </div>
        <CallToAction />
        <Footer />
    </div>
  )
}

export const getServerSideProps = async ({ params: { slug } }) => {
    const blogQuery = `*[_type == "blogovi" && slug.current == '${slug}'][0]`;
    const blog = await client.fetch(blogQuery);
  
    return {
      props: {
        blog,
      },
    };
  }

export default BlogDetails