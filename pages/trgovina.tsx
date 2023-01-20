import React from 'react';

import Nav from '../components/Nav';
import TrgovinaHeader from '../components/trgovina/TrgovinaHeader';
import Navigacija from '../components/trgovina/Navigacija';
import ListaProdukata from '../components/trgovina/ListaProdukata';

const Trgovina = () => {
  return (
    <div>
        <Nav />
        <TrgovinaHeader />
        <Navigacija />
        <ListaProdukata />
    </div>
  )
}

export default Trgovina