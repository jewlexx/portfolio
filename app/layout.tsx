import { Roboto } from '@next/font/google';
import Header from './Header';
import styles from './layout.module.scss';
import './globals.scss';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <div className={`${styles.app} ${roboto.className}`}>{children}</div>
      </body>
    </html>
  );
}
