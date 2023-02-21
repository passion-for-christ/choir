import Head from 'next/head';
import Registration from './registration';

export default function Home() {
  return (
    <>
      <Head>
        <title>Choir Registration</title>
        <meta name='description' content='Register for the conference choir.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <div className='page'>
          <Registration />
        </div>
      </main>
    </>
  );
}
