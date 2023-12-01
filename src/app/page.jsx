/* eslint-disable no-undef */

'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
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

  const [state, setState] = useState({
    location: {
      center: [37.64, 55.76],
      zoom: 12,
    },
    currentMarker: null,
  });

  // const [location, setLocation] = useState({
  //   center: [37.64, 55.76],
  //   zoom: 12,
  // });

  const moveCamera = (coordinates, id) => {
    setState({
      location: {
        center: [Number(coordinates[0]), Number(coordinates[1]) - 0.002],
        zoom: 16,
        duration: 1000,
      },
      currentMarker: id,
    });
  };

  return (
    <div className="flex flex-col lg:flex-row h-[100dvh]">
      <div className="h-full max-h-16 lg:max-h-full flex flex-col flex-shrink-0 w-full lg:w-96 lg:border-r border-black/20 dark:border-white/20 z-10">
        <Header state={state} moveCamera={moveCamera} />
        <div className="w-full h-full hidden lg:flex overflow-y-hidden">
          <EventList moveCamera={moveCamera} />
        </div>
      </div>
      <Map state={state} />
    </div>
  );
}
