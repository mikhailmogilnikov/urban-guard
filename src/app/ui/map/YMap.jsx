'use client';

import { useTheme } from 'next-themes';
import { useRef, useState } from 'react';
import MapPreloader from './MapPreloader.jsx';
import { useMap } from '@/providers/map.provider.jsx';
import Markers from './Markers.jsx';

function Map() {
  const mapRef = useRef(null);
  const { theme } = useTheme();

  const [location] = useState({
    center: [37.64, 55.76],
    zoom: 12,
  });

  const { reactifyApi } = useMap();
  if (!reactifyApi) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <MapPreloader />
      </div>
    );
  }

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapControls,
    YMapMarker,
  } = reactifyApi.base;
  const { YMapGeolocationControl } = reactifyApi;

  return (
    <div className="w-full h-full flex cursor-grab justify-center items-center">
      <YMap location={location} ref={mapRef}>
        <YMapDefaultSchemeLayer theme={theme} />
        <YMapDefaultFeaturesLayer />

        <Markers YMapMarker={YMapMarker} />

        <YMapControls position="bottom right">
          <YMapGeolocationControl />
        </YMapControls>
      </YMap>
    </div>
  );
}

export default Map;
