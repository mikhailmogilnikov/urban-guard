import { Chip } from '@nextui-org/chip';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { PiClockBold, PiMapPinBold } from 'react-icons/pi';
import Text from '../primitives/Text.jsx';

function MyMarkerWithPopup({
  YMapMarker, isActive, onClick, item,
}) {
  let markerColor;
  let popupBorder;
  let chipType;
  let chipContent;
  switch (item.state) {
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

  const [, setPopupVisible] = useState(false);

  const handleMarkerClick = () => {
    onClick();
    setPopupVisible(!isActive);
  };

  return (
    <YMapMarker
      coordinates={item.coordinates}
      zIndex={isActive === true ? 1 : 0}
    >
      <div className="my-marker">
        <button
          type="button"
          aria-label="openPopup"
          className={`my-marker__pin absolute top-1/2 left-1/2 w-10 h-10 -mt-[2em] -ml-[1.2em] -rotate-45 cursor-pointer shadow-xl shadow-orange-500/20 ${markerColor}`}
          onClick={handleMarkerClick}
        />
        {!isActive && item.state === 'confirmed' && (
          <div className="absolute -z-[1] w-[3em] -translate-x-1/2">
            <div className="my-marker__animation absolute top-0 left-0 w-[3em] h-[3em] rounded-full scale-[0.3]" />
            <div className="my-marker__animation absolute top-0 left-0 w-[3em] h-[3em] rounded-full scale-[0.3]  my-marker__animation-delay" />
          </div>
        )}
      </div>
      <AnimatePresence>
        {isActive && (
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
                onClick={handleMarkerClick}
                className="w-full h-min flex flex-col gap-3 p-5"
              >
                <Text tag="h2" classNames="text-white" text={item.type} />
                <Chip
                  color={chipType}
                  radius="md"
                  variant="flat"
                  classNames={{ content: 'text-[13px]' }}
                >
                  {chipContent}
                </Chip>
                <div className="pt-2 w-full h-min flex flex-col gap-3 text-start">
                  <div className="w-full h-min flex flex-row gap-2 opacity-70 items-center text-white">
                    <PiClockBold size={16} className="flex-shrink-0" />
                    <Text tag="h5" text={`${item.date}, ${item.time}`} />
                  </div>
                  <div className="w-full h-min flex flex-row gap-2 opacity-70 items-center text-white">
                    <PiMapPinBold size={16} className="flex-shrink-0" />
                    <Text tag="h5" text={item.address} />
                  </div>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </YMapMarker>
  );
}

export default MyMarkerWithPopup;
