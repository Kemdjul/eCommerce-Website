import React from 'react';
import Head from 'next/head';
import Banner from '../components/Banner';
import EmisijeFeed from '../components/emisije/EmisijeFeed';
import CallToAction from '../components/homepage/CallToAction';
import Footer from '../components/homepage/Footer';
import Nav from '../components/Nav';

import { Poppins } from '@next/font/google';

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
 });

const emisije = () => {
  return (
    <>
      <Head>
        <title>Emisije - Odaberi Zdravlje</title>
        <meta name="description" content="Lakše je boriti se s nečime kada znate u čemu je problem. Zato su vam na izlogu naše emisije u kojima prelazimo preko zdravstvenih problema današnjih generacija." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`w-full flex flex-col min-h-screen ${poppins.className}`}>
        <Nav />
        <Banner text="EMISIJE" smallText="POČETNA / EMISIJE" />
        <EmisijeFeed />
        <CallToAction />
        <Footer />
      </div>
    </>
    
  )
}

export default emisije