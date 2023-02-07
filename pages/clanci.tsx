import React from 'react';
import Banner from '../components/Banner';
import ListaBlogova from '../components/clanci/ListaBlogova';
import CallToAction from '../components/homepage/CallToAction';
import Footer from '../components/homepage/Footer';
import Nav from '../components/Nav';

import { Poppins } from '@next/font/google';

import { client } from '../lib/client';

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
 });

const clanci = ({ blogovi }) => {
  return (
    <div className={poppins.className}>
        <Nav />
        <Banner text="NOVOSTI" smallText="POČETNA / NOVOSTI" />
        <ListaBlogova blogovi={blogovi} />
        <CallToAction />
        <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
    const blogoviQuery = `*[_type == "blogovi"]`;
    const blogovi = await client.fetch(blogoviQuery);
  
    return {
      props: {
        blogovi,
      },
    };
  }

export default clanci