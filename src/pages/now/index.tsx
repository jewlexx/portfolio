import { useEffect, useState } from 'react';
import styles from '../../styles/now.module.scss';

export default function Home() {
  const [time, setTime] = useState(0);

  const updateTime = () => {
    setTime(Math.floor(Date.now() / 1000));
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(() => updateTime(), 1000);

    () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.main}>
      <h1>{time} </h1>
      <p>seconds since 01/01/1970 (UTC)</p>
    </main>
  );
}
