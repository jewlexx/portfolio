import { FunctionComponent, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import {
  IconBrandGithub,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandLinktree,
  IconBrandMastodon,
} from '@tabler/icons-react';
import ProfilePhoto from '../../images/Traced Icon.png'
import styles from './index.module.scss';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export interface Link {
  name: string;
  href: string;
  emoji: any;
  rel?: string;
}

export const links: Link[] = [
  {
    emoji: IconBrandGithub,
    name: 'Github',
    href: 'https://github.com/jewlexx',
  },
  {
    emoji: IconBrandTwitch,
    name: 'Twitch',
    href: 'https://twitch.tv/sapphicjewl',
  },
  {
    emoji: IconBrandTwitter,
    name: 'Twitter',
    href: 'https://twitter.com/jewelexx',
  },
  {
    emoji: IconBrandMastodon,
    name: 'Mastodon',
    href: 'https://tech.lgbt/@jewelexx',
    rel: 'me',
  },
  {
    emoji: IconBrandLinktree,
    name: 'Linktree',
    href: 'https://linktr.ee/jewelexx',
  },
];


const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <main style={roboto.style}>
      <header>
        <nav className={styles.nav}>
          <Link className={styles.logolink} href="/">
            <Image
              alt="Profile"
              className={styles.monogram}
              src={ProfilePhoto}
              width={64}
              height={64}
            />
          </Link>

          {/* <a className={styles.link} href="/projects">
            Portfolio
          </a>
          <a className={styles.link} href="/about">
            About
          </a> */}

          {links.map(({ href, name, rel, emoji: Emoji }) => {
            return (
              <a
                className={styles.social}
                title={`${name} Link`}
                key={name}
                href={href}
                rel={rel}
              >
                <Emoji />
              </a>
            );
          })}

          {/* <a className={styles.social} title="The time in seconds" href="/now">
            <IconClock />
          </a> */}
        </nav>
      </header>
      {children}
    </main>
  );
};

export default Layout;
