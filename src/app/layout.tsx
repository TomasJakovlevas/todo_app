import './globals.css';
import type { Metadata } from 'next';
import { Catamaran } from 'next/font/google';
import { ThemeProvider } from './theme-provider';

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
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
