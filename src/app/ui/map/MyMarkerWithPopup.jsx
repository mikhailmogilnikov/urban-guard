import { Chip } from '@nextui-org/chip';
import { AnimatePresence, motion } from 'framer-motion';
import Text from '../primitives/Text.jsx';
import { useState } from 'react';

function MyMarkerWithPopup({
  coordinates,
  popupContent,
  YMapMarker,
  state,
  openPopup,
  closePopup,
  markerState,
}) {
  let markerColor;
  let popupBorder;
  let chipType;
  let chipContent;
  switch (markerState) {
    case 'confirmed':
      markerColor = 'bg-red-600';
      popupBorder = 'animate-borderPulseRed';
      chipType = 'danger';
      chipContent = 'Подтверждённая угроза';
      break;
    case 'potential':
      markerColor = 'bg-yellow-500 dark:bg-yellow-400';
      popupBorder = 'animate-borderPulseYellow';
      chipType = 'warning';
      chipContent = 'Потенциальная опасность';
      break;
    default:
      markerColor = '';
  }

  const [popupVisible, setPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    openPopup();
    setPopupVisible(true);
  };

  const handlePopupClose = () => {
    closePopup();
    setPopupVisible(false);
  };

  return (
    <YMapMarker coordinates={coordinates} zIndex={state === true ? 1 : 0}>
      <div className="my-marker">
        <button
          type="button"
          aria-label="openPopup"
          className={`my-marker__pin absolute top-1/2 left-1/2 w-10 h-10 -mt-[2em] -ml-[1.2em] -rotate-45 cursor-pointer shadow-xl shadow-orange-500/20 ${markerColor}`}
          onClick={handleOpenPopup}
        />
        {!state && markerState === 'confirmed' && (
          <div className="absolute -z-[1] w-[3em] -translate-x-1/2">
            <div className="my-marker__animation absolute top-0 left-0 w-[3em] h-[3em] rounded-full scale-[0.3]" />
            <div className="my-marker__animation absolute top-0 left-0 w-[3em] h-[3em] rounded-full scale-[0.3]  my-marker__animation-delay" />
          </div>
        )}
      </div>
      <AnimatePresence>
        {popupVisible && (
          <motion.div
            initial={{ scale: 0.5, translate: '-50% 0.5rem' }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            className={`w-[20rem] lg:w-[26rem] absolute rounded-[2rem] bg-black shadow-2xl shadow-black/80  lg:-translate-x-52 origin-top z-10 border-1 cursor-pointer border-white/20 overflow-hidden ${popupBorder}`}
          >
            <div className="w-full h-min flex flex-col">
              <div className="w-full aspect-video bg-white/10" />
              <button
                type="button"
                onClick={handlePopupClose}
                className="w-full h-min flex flex-col gap-3 p-5"
              >
                <Text tag="h2" classNames="text-white" text={popupContent} />
                <Chip
                  color={chipType}
                  radius="md"
                  variant="flat"
                  classNames={{ content: 'text-[13px]' }}
                >
                  {chipContent}
                </Chip>
                {/* <div className="w-full h-min flex flex-col gap-1 text-start">
                  <Text text="Test" />
                  <Text text="Test" />
                </div> */}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </YMapMarker>
  );
}

export default MyMarkerWithPopup;
