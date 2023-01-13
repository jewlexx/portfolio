'use client';

import {
  type TablerIcon,
  IconBrandGithub,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandLinktree,
} from '@tabler/icons';
import Image from 'next/image';
import useSound from 'use-sound';
import createPersistedState from 'use-persisted-state';
import pfp from './assets/pfp.avif';
import styles from './layout.module.scss';
import './globals.css';

const useAudioEnabled = createPersistedState<boolean>('sound-enabled');

interface Link {
  name: string;
  url: string;
  emoji: TablerIcon;
}

const links: Link[] = [
  {
    emoji: IconBrandGithub,
    name: 'Github',
    url: 'https://github.com/jewlexx',
  },
  {
    emoji: IconBrandTwitch,
    name: 'Twitch',
    url: 'https://twitch.tv/sapphicjewl',
  },
  {
    emoji: IconBrandTwitter,
    name: 'Twitter',
    url: 'https://twitter.com/jewelexx',
  },
  {
    emoji: IconBrandLinktree,
    name: 'Linktree',
    url: 'https://linktr.ee/jewelexx',
  },
];

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
            </>
          </nav>
        </header>
        <div className={styles.app}>{children}</div>
      </body>
    </html>
  );
}
