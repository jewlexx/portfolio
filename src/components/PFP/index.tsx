import type { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from './index.module.scss';

const PFP: FunctionComponent = () => (
  <Image
    src="https://avatars.githubusercontent.com/u/61040004"
    width="200px"
    height="200px"
    alt="My Github profile picture"
    className={styles.pfp}
  />
);

export default PFP;
