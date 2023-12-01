import { useState } from 'react';
import { motion } from 'framer-motion';
import postFile from '@/utility/postFile.js';
import ImageViewer from './ImageViewer.jsx';
import MarkerPopup from './MarkerPopup.jsx';

function Marker({
  YMapMarker, isActive, onClick, item,
}) {
  let markerColor;

  const spring = {
    type: 'spring',
    stiffness: 260,
    damping: 20,
  };

  const state = Number(item.state);

  switch (state) {
    case 1:
      markerColor = 'bg-red-600';
      break;
    case 0:
      markerColor = 'bg-yellow-500 dark:bg-yellow-400';
      break;
    default:
      markerColor = '';
  }

  const [, setPopupVisible] = useState(false);

  const [selectedId, setSelectedId] = useState(null);
  const [file, setFile] = useState(null);

  const handleMarkerClick = () => {
    onClick();
    setPopupVisible(!isActive);
    if (!file) {
      postFile(item.id)
        .then((f) => {
          setFile(f);
        });
      // .catch((e) => {
      //   console.error(e);
      // });
    }
  };

  return (
    <YMapMarker
      coordinates={item.coordinates}
      zIndex={isActive === true ? 1 : 0}
    >
      <div className="my-marker">
        <motion.button
          type="button"
          aria-label="openPopup"
          initial={{ rotate: -45, translate: '48% 25%' }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={spring}
          className={`my-marker__pin absolute top-1/2 left-1/2 w-10 h-10 -mt-[2em] -ml-[1.2em] cursor-pointer shadow-xl shadow-orange-500/20 origin-bottom-left ${markerColor}`}
          onClick={handleMarkerClick}
        />
        {!isActive && state === 1 && (
          <div className="absolute -z-[1] w-[3em] -translate-x-1/2">
            <div className="my-marker__animation absolute top-0 left-0 w-[3em] h-[3em] rounded-full scale-[0.3]" />
            <div className="my-marker__animation absolute top-0 left-0 w-[3em] h-[3em] rounded-full scale-[0.3]  my-marker__animation-dezlay" />
          </div>
        )}
      </div>
      <ImageViewer
        selectedId={selectedId}
        isActive={isActive}
        spring={spring}
        file={file}
        itemType={item.type}
        closeImageViewer={() => setSelectedId(null)}
      />
      <MarkerPopup
        isActive={isActive}
        spring={spring}
        file={file}
        item={item}
        state={state}
        openImageViewer={() => setSelectedId(item.id)}
        closePopup={handleMarkerClick}
      />
    </YMapMarker>
  );
}

export default Marker;
