import {
  type TablerIcon,
  IconBrandGithub,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandLinktree,
} from '@tabler/icons';
import Image from 'next/image';
import pfp from '../public/pfp.avif';
import styles from './layout.module.scss';
import './globals.css';

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
                  src={pfp}
                  width={32}
                  height={32}
                />
              </a>
              {/* <a class="link" href="/projects">Portfolio</a>
		<a class="link" href="/about">About</a> */}
              {links.map((link) => (
                <a className={styles.social} href={link.url} key={link.name}>
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
