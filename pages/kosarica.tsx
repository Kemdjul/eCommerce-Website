import React from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Produkt from '../components/kosarica/Produkt.jsx';

import { client } from '../lib/client';

const kosarica = ({ trendy }) => {
  return (
    <div>
        <Nav />
        <Banner text="TRGOVINA" smallText="POČETNA / TRGOVINA" />
        <div className="w-full h-12 bg-red-400 flex justify-between px-80">
          <h5 className="text-[#22262A] text-xl">PROIZVODI</h5>
          <div className="flex gap-8">
            <h5 className="text-[#22262A] text-xl">CIJENA</h5>
            <h5 className="text-[#22262A] text-xl">KOLIČINA</h5>
            <h5 className="text-[#22262A] text-xl">UKUPNO</h5>
          </div>
        </div>
        <Produkt produkt={trendy} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const trendyQuery = `*[_type == "trendy"]`;
  const trendy = await client.fetch(trendyQuery);

  return {
    props: {
      trendy,
    },
  };
}

export default kosarica