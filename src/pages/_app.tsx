import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Roboto } from '@next/font/google';
import Header from '../components/Header';
import '../styles/globals.scss';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Head>
        <title>Juliette Cordor</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="Juliette Cordor, developer and other things also"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
