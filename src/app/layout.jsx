import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'Urban Guard',
  description: 'Система распознавания и оповещения о городских происшествиях.',
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="ru">
      <body
        className={`${inter.className} select-none overflow-hidden text-black dark:text-white bg-white dark:bg-black`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
