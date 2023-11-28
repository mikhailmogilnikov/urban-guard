'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import StoreProvider from '@/providers/store.provider.jsx';
import { MapProvider } from '../providers/map.provider.jsx';

export default function Providers({ children }) {
  const apiUrl = `https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAP_KEY}&lang=ru_RU`;

  return (
    <MapProvider apiUrl={apiUrl}>
      <StoreProvider>
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </NextUIProvider>
      </StoreProvider>
    </MapProvider>
  );
}
