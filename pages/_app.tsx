import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { StateContext } from '../context/StateContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StateContext>
      <Component {...pageProps} />
    </StateContext>
  )
}

export default App;