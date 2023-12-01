'use client';

import { useTheme } from 'next-themes';
import { useRef } from 'react';
import { useMap } from '@/providers/map.provider.jsx';
import AwaitPreloader from '../preloaders/AwaitPreloader.jsx';
import MapPreloader from '../preloaders/MapPreloader.jsx';
import Markers from './Markers.jsx';

function Map({ state }) {
  const mapRef = useRef(null);
  const { theme } = useTheme();

  const { reactifyApi } = useMap();
  if (!reactifyApi) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <MapPreloader />
      </div>
    );
  }

  const {
    YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker,
  } = reactifyApi.base;

  return (
    <div
      id="map-wrapper"
      className="w-full h-full flex cursor-grab justify-center items-center"
    >
      <YMap location={state.location} ref={mapRef}>
        <YMapDefaultSchemeLayer theme={theme} />
        <YMapDefaultFeaturesLayer />

        <Markers YMapMarker={YMapMarker} state={state} />
      </YMap>
      <AwaitPreloader />
    </div>
  );
}

export default Map;
