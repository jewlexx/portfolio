import Image from 'next/image';
import Link from 'next/link';
import createPersistedState from 'use-persisted-state';
import useSound from 'use-sound';
import {
  type Icon,
  IconClock,
  IconBrandGithub,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandLinktree,
  IconHeadphones,
  IconHeadphonesOff,
} from '@tabler/icons-react';
import styles from './index.module.scss';

interface Link {
  name: string;
  url: string;
  emoji: Icon;
}

const useAudioEnabled = createPersistedState<boolean>('sound-enabled');

export default function Header() {
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

  const [soundEnabled, setSoundEnabled] = useAudioEnabled(true);

  const [clickIn] = useSound('/audio/click-in.mp3', { soundEnabled });
  const [clickOut] = useSound('/audio/click-out.mp3', { soundEnabled });

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <>
          <a className={styles.logolink} href="/" rel="prefetch">
            <Image
              alt="Profile"
              className={styles.monogram}
              priority
              quality={1}
              src="/pfp.jpg"
              width={32}
              height={32}
            />
          </a>
          {/* <a class="link" href="/projects">Portfolio</a>
		<a class="link" href="/about">About</a> */}
          <Link
            title="Clock link"
            className={styles.social}
            href="/now"
            onMouseEnter={() => clickIn()}
            onMouseDown={() => clickOut()}
          >
            <IconClock />
          </Link>
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
