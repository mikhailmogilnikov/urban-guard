/* eslint-disable no-undef */

'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import Map from './ui/map/YMap.jsx';
import EventList from './ui/interface/event-list/EventList.jsx';
import Header from './ui/interface/header/Header.jsx';

export default function Home() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute('content', '#000000');
    } else {
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute('content', '#ffffff');
    }
  }, [resolvedTheme]);

  return (
    <div className="flex flex-col lg:flex-row h-[100dvh]">
      <div className="h-full max-h-16 lg:max-h-full flex flex-col flex-shrink-0 w-full lg:w-96 lg:border-r border-black/20 dark:border-white/20 z-10">
        <Header />
        <div className="w-full h-full hidden lg:flex overflow-y-hidden">
          <EventList />
        </div>
      </div>
      <Map />
    </div>
  );
}
