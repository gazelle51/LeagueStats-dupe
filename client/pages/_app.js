import Head from 'next/head';
import { Navbar } from '../components/Navbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>LeagueStats</title>
        <meta
          name='description'
          content='LeagueStats.gg is an Open source website for League of Legends Summoners statistics.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
