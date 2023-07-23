import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.scss';

// TODO: Reactive grid effect from https://www.youtube.com/watch?v=bAwEj_mSzOs and when clicked it turns to light and dark mode respectively

export default function Home() {
  return (
    <>
      <Head>
        <title>Juliette Cordor</title>
        <meta
          name="description"
          content="Juliette Cordor, developer and other things also"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <header>
          <div className="flex flex-col pl-8 justify-center items-center w-full h-full absolute overlay">
            <Image
              className={styles.icon}
              width={256}
              height={256}
              alt="Black and white image of Juliette's face"
              src="/images/Traced Icon.png"
            />
            <h1 className="title text-4xl sm:text-7xl break-words">
              Juliette
              <small className="pronouns text-2xl text-cambridge-blue">
                (Jules)
              </small>{' '}
              Cordor
            </h1>
            <small className="pronouns text-4xl text-cambridge-blue">
              {' '}
              (She/Her){' '}
            </small>
          </div>
        </header>
      </Layout>
    </>
  );
}
