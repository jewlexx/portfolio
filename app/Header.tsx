'use client';

import { IconHeadphones, IconHeadphonesOff } from '@tabler/icons';
import Image from 'next/image';
import createPersistedState from 'use-persisted-state';
import useSound from 'use-sound';
import links from './links';
import pfp from '$static/pfp.jpg';
import styles from './Header.module.scss';

const useAudioEnabled = createPersistedState<boolean>('sound-enabled');

export default function Header() {
  const [soundEnabled, setSoundEnabled] = useAudioEnabled(true);

  const [clickIn] = useSound('/audio/click-in.mp3', { soundEnabled });
  const [clickOut] = useSound('/audio/click-out.mp3', { soundEnabled });

  return (
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
              title={`${link.name} link`}
              className={styles.social}
              href={link.url}
              key={link.name}
              onMouseEnter={() => clickIn()}
              onMouseDown={() => clickOut()}
            >
              <link.emoji className={styles.socialicon} />
            </a>
          ))}
          <button
            title="Toggle Sound"
            className={styles.audioToggle}
            onMouseEnter={() => clickIn()}
            onClick={() => setSoundEnabled((enabled) => !enabled)}
          >
            {soundEnabled ? <IconHeadphones /> : <IconHeadphonesOff />}
          </button>
        </>
      </nav>
    </header>
  );
}
