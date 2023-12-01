'use client';

import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store/store.js';
import Marker from './Marker.jsx';

const Markers = observer(({ YMapMarker }) => {
  const [activeMarkerIndex, setActiveMarkerIndex] = useState(null);
  const { eventsStore } = useStore();

  const events = JSON.parse(JSON.stringify(eventsStore.events ? eventsStore.events : []));

  const handleMarkerClick = (index) => {
    setActiveMarkerIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {events.map((item, index) => (
        <Marker
          key={`m${item.id}`}
          isActive={activeMarkerIndex === index}
          onClick={() => handleMarkerClick(index)}
          item={item}
          YMapMarker={YMapMarker}
        />
      ))}
    </>
  );
});

export default Markers;
