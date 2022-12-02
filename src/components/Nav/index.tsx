import { FunctionComponent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaTwitter } from 'react-icons/fa';

import styles from './index.module.scss';

const Nav: FunctionComponent = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.logolink} href="/" rel="prefetch">
        <Image
          alt="Personal Profile Picture"
          className={styles.monogram}
          src="/assets/pfp.jpg"
          width={32}
          height={32}
        />
      </Link>
      <Link className={styles.link} href="/projects">
        Portfolio
      </Link>
      <Link className={styles.link} href="/about">
        About
      </Link>
      <Link className={styles.social} href="https://twitter.com/jewelexx">
        <FaTwitter className={styles.socialicon} />
      </Link>
      <Link className={styles.social} href="https://github.com/jewlexx">
        <FaGithub className={styles.socialicon} />
      </Link>
    </nav>
  );
};

export default Nav;
