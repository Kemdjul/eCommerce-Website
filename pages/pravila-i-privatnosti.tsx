import React from 'react';
import Head from 'next/head';
import { Poppins } from '@next/font/google';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import OpciUvjeti from '../components/opci-uvjeti/OpciUvjeti';
import CallToAction from '../components/homepage/CallToAction';
import Footer from '../components/homepage/Footer';

const poppins = Poppins({ 
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
});

const pravilaIPrivatnosti = () => {
  return (
    <>
      <Head>
        <title>Pravila i privatnosti - Odaberi Zdravlje</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`w-full min-h-screen flex flex-col ${poppins.className}`}>
        <Nav />
        <Banner text="OPĆI UVJETI I PRAVILA PRIVATNOSTI" smallText="POČETNA / OPĆI UVJETI I PRAVILA PRIVATNOSTI" />
        <OpciUvjeti />
        <CallToAction />
        <Footer />
      </div>
    </>

    
  )
}

export default pravilaIPrivatnosti