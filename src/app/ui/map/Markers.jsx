'use client';

import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import MyMarkerWithPopup from './MyMarkerWithPopup.jsx';
import { useStore } from '@/store/store.js';

const Markers = observer(({ YMapMarker }) => {
  const [popup, setPopup] = useState(null);
  const { eventsStore } = useStore();

  const e = JSON.parse(JSON.stringify(eventsStore.events));

  return (
    <>
      {e.map((item, index) => (
        <MyMarkerWithPopup
          key={`m${item.id}`}
          openPopup={() => setPopup(index)}
          closePopup={() => setPopup(null)}
          state={popup === index}
          coordinates={item.coordinates}
          popupContent={item.type}
          markerState={item.state}
          YMapMarker={YMapMarker}
        />
      ))}
    </>
  );
});

export default Markers;
