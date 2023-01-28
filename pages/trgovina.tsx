import React from 'react';

import Nav from '../components/Nav';
import TrgovinaHeader from '../components/trgovina/TrgovinaHeader';
import Navigacija from '../components/trgovina/Navigacija';
import ListaProdukata from '../components/trgovina/ListaProdukata';
import CallToAction from '../components/homepage/CallToAction';
import Footer from '../components/homepage/Footer';
import { client } from '../lib/client';

const Trgovina = ({ produkti }) => {
  return (
    <div>
        <Nav />
        <TrgovinaHeader />
        <ListaProdukata produkti={produkti} />
        <CallToAction />
        <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const produktiQuery = `*[_type == "produkt"]`;
  const produkti = await client.fetch(produktiQuery);

  return {
    props: {
      produkti,
    },
  };
}

export default Trgovina