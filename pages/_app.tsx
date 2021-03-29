import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  const { children, ...rest } = pageProps;

  return <Component {...rest}>{children}</Component>;
}

export default App;
