/* eslint-disable no-undef */

'use client';

import React, {
  createContext, useContext, useMemo, useState,
} from 'react';
import ReactDOM from 'react-dom';
import Script from 'next/script';

export const MountedMapsContext = createContext({
  reactifyApi: null,
});

export function MapProvider({ apiUrl, children }) {
  const [reactifyApi, setReactifyApi] = useState(null);
  const contextValue = useMemo(() => ({ reactifyApi }), [reactifyApi]);

  return (
    <MountedMapsContext.Provider value={contextValue}>
      <Script
        src={apiUrl}
        onLoad={async () => {
          const [ymaps3React] = await Promise.all([
            ymaps3.import('@yandex/ymaps3-reactify'),
            ymaps3.ready,
          ]);
          const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);

          const { YMapZoomControl, YMapGeolocationControl } = reactify.module(
            await ymaps3.import('@yandex/ymaps3-controls@0.0.1'),
          );
          const { YMapDefaultMarker } = reactify.module(
            await ymaps3.import('@yandex/ymaps3-markers@0.0.1'),
          );
          setReactifyApi({
            base: reactify.module(ymaps3),
            YMapZoomControl,
            YMapDefaultMarker,
            YMapGeolocationControl,
          });
        }}
      />
      {children}
    </MountedMapsContext.Provider>
  );
}

export const useMap = () => useContext(MountedMapsContext);
