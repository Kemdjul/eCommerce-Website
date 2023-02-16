import React from 'react';
import Head from 'next/head';
import { Poppins } from '@next/font/google';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import KontaktForma from '../components/kontakt/KontaktForma';
import CallToAction from '../components/homepage/CallToAction';
import Footer from '../components/homepage/Footer';

const poppins = Poppins({ 
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
   });

const kontakt = () => {
  return (
    <>
      <Head>
        <title>Kontakt - Odaberi Zdravlje</title>
        <meta name="description" content="Kontaktirajte nas preko forme i javljamo vam se u roku od 24 sata." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`w-full min-h-screen flex flex-col ${poppins.className}`}>
        <Nav />
        <Banner text="KONTAKT" smallText="POČETNA / KONTAKT" />
        <KontaktForma />
        <CallToAction />
        <Footer />
      </div>
    </>
  )
}

export default kontakt