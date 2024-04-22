import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Service App</title>

      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;