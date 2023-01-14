'use client';

import {
  IconHeadphones,
  IconHeadphonesOff,
} from '@tabler/icons';
import Image from 'next/image';
import { Roboto } from '@next/font/google';
import useSound from 'use-sound';
import createPersistedState from 'use-persisted-state';
import links from './links.ts'
import pfp from './assets/pfp.avif';
import styles from './layout.module.scss';
import './globals.css';

const useAudioEnabled = createPersistedState<boolean>('sound-enabled');

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [soundEnabled, setSoundEnabled] = useAudioEnabled(true);

  const [clickIn] = useSound('/audio/click-in.mp3', { soundEnabled });
  const [clickOut] = useSound('/audio/click-out.mp3', { soundEnabled });

  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <nav className={styles.nav}>
            <>
              <a className={styles.logolink} href="/" rel="prefetch">
                <Image
                  alt="Profile"
                  className={styles.monogram}
                  priority
                  src={pfp}
                  width={32}
                  height={32}
                />
              </a>
              {/* <a class="link" href="/projects">Portfolio</a>
		<a class="link" href="/about">About</a> */}
              {links.map((link) => (
                <a
                  className={styles.social}
                  href={link.url}
                  key={link.name}
                  onMouseEnter={() => clickIn()}
                  onMouseDown={() => clickOut()}
                >
                  <link.emoji className={styles.socialicon} />
                </a>
              ))}
              <a
                className={styles.social}
                onMouseEnter={() => clickIn()}
                onMouseDown={() => clickOut()}
                onClick={() => setSoundEnabled((enabled) => !enabled)}
              >
                {soundEnabled ? <IconHeadphones /> : <IconHeadphonesOff />}
              </a>
            </>
          </nav>
        </header>
        <div className={styles.app}>{children}</div>
      </body>
    </html>
  );
}
