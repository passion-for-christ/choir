import '../styles/globals.scss';
import '../styles/buttons.scss';
import '../styles/spinner.scss';
import '../styles/input.scss';
import '../styles/modal.scss';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <div className='app'>
        <Component {...pageProps} />
      </div>
    </>
  );
}
