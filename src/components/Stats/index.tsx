import type { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from './Stats.module.scss';

const Stats: FunctionComponent = () => (
  <Image
    src="https://raw.githubusercontent.com/jewlexx/jewlexx/main/github-metrics.svg"
    width="480px"
    height="419px"
    alt="My Github Statistics"
    className={styles.stats}
  />
);

export default Stats;
