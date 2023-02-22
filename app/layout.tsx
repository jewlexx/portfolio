import { Roboto } from '@next/font/google';
import Header from './Header';
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
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
