import Head from 'next/head';

import '../public/css/globals.css';

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
      <div className='bg-aurelion-sol bg-cover bg-center bg-no-repeat h-screen w-screen'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
