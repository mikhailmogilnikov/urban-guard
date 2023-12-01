'use client';

import { useTheme } from 'next-themes';
import { useRef, useState } from 'react';
import { useMap } from '@/providers/map.provider.jsx';
import AwaitPreloader from './AwaitPreloader.jsx';
import MapPreloader from './MapPreloader.jsx';
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

  // const newLocation = {
  //   center: [37.64, 55.76],
  //   zoom: 12,
  // };

  // const changeCenter = () => {
  //   setLocation({
  //     ...newLocation,
  //     duration: 1000,
  //   });
  // };

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapMarker,
  } = reactifyApi.base;

  return (
    <div
      id="map-wrapper"
      className="w-full h-full flex cursor-grab justify-center items-center"
    >
      <YMap location={location} ref={mapRef}>
        <YMapDefaultSchemeLayer theme={theme} />
        <YMapDefaultFeaturesLayer />

        <Markers YMapMarker={YMapMarker} />
      </YMap>
      <AwaitPreloader />
    </div>
  );
}

export default Map;
