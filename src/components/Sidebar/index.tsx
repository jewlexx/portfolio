import { type FunctionComponent, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import styles from './index.module.scss';

const SidebarContent = dynamic(() => import('components/Sidebar/Content'));

const Sidebar: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <FaBars
        onClick={() => setOpen(!open)}
        className={`${styles.hamburger} ${open ? styles.open : styles.closed}`}
      />
      {open && <SidebarContent />}
    </div>
  );
};

export default Sidebar;
