import './globals.css';
import type { Metadata } from 'next';
import { Catamaran } from 'next/font/google';

const inter = Catamaran({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Todo App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-gradient-to-l from-primary to-primary_2 text-white `}
      >
        {children}
      </body>
    </html>
  );
}
