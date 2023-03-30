import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { usePageSize } from '@/hooks/size';
import { useMemo } from 'react';
import { useMousePosition } from '@/hooks/pos';

const inter = Inter({ subsets: ['latin'] });

// TODO: Reactive grid effect from https://www.youtube.com/watch?v=bAwEj_mSzOs and when clicked it turns to light and dark mode respectively

export default function Home() {
  const pageSize = usePageSize();
  const mousePosition = useMousePosition();

  console.log(pageSize.width, pageSize.height);

  const mouseAngle = useMemo(() => {
    let angle =
      (Math.atan2(
        pageSize.height - mousePosition.y,
        pageSize.width - mousePosition.x,
      ) *
        180) /
      Math.PI;

    if (angle < 0) {
      angle += 360;
    }

    return angle;
  }, [pageSize, mousePosition]);

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
      <main style={inter.style}>
        <header>
          <div className="flex flex-col pl-8 justify-center items-center w-full h-full absolute overlay">
            <Image
              width={256}
              height={256}
              alt="Black and white image of Juliette's face"
              src="/images/Traced Icon Inverted.png"
              style={{
                // Ensure it shows on the black screen
                color: 'green',
              }}
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
      </main>
    </>
  );
}
