import { type FunctionComponent, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styles from './index.module.scss';

const Sidebar: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <FaBars
        className={`${styles.hamburger} ${open ? styles.open : styles.closed}`}
      />
    </div>
  );
};

export default Sidebar;
