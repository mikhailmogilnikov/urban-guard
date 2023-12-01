'use client';

import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store/store.js';
import Marker from './Marker.jsx';

const Markers = observer(({ YMapMarker, state }) => {
  const [activeMarkerIndex, setActiveMarkerIndex] = useState(null);

  const { eventsStore } = useStore();
  const events = JSON.parse(JSON.stringify(eventsStore.events ? eventsStore.events : []));
  // const [files, setFiles] = useState(new Array(events.lenght));

  const handleMarkerClick = (index) => {
    setActiveMarkerIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    if (state.currentMarker !== null) {
      const id = events.findIndex((item) => item.id === state.currentMarker);
      setTimeout(() => {
        handleMarkerClick(id);
      }, 1000);
    }
  }, [state]);

  return (
    <>
      {events.map((item, index) => (
        <Marker
          key={`m${item.id}`}
          isActive={activeMarkerIndex === index}
          isPreload={item.id === state.currentMarker}
          onClick={() => handleMarkerClick(index)}
          item={item}
          YMapMarker={YMapMarker}
        />
      ))}
    </>
  );
});

export default Markers;
