'use client';

import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import MyMarkerWithPopup from './MyMarkerWithPopup.jsx';
import { useStore } from '@/store/store.js';

const Markers = observer(({ YMapMarker }) => {
  const [activeMarkerIndex, setActiveMarkerIndex] = useState(null);
  const { eventsStore } = useStore();

  const e = JSON.parse(JSON.stringify(eventsStore.events));

  const handleMarkerClick = (index) => {
    setActiveMarkerIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {e.map((item, index) => (
        <MyMarkerWithPopup
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
