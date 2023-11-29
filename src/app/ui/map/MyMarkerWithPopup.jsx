import { Chip } from '@nextui-org/chip';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { PiClockBold, PiMapPinBold, PiQuestionBold } from 'react-icons/pi';
import Text from '../primitives/Text.jsx';

function MyMarkerWithPopup({
  YMapMarker, isActive, onClick, item,
}) {
  let markerColor;
  let popupBorder;
  let chipType;
  let chipContent;
  const spring = {
    type: 'spring',
    stiffness: 260,
    damping: 20,
  };
  const state = Number(item.state);
  switch (state) {
    case 1:
      markerColor = 'bg-red-600';
      popupBorder = 'dark:animate-borderPulseRed';
      chipType = 'danger';
      chipContent = 'Подтверждённая угроза';
      break;
    case 0:
      markerColor = 'bg-yellow-500 dark:bg-yellow-400';
      popupBorder = 'dark:animate-borderPulseYellow';
      chipType = 'warning';
      chipContent = 'Потенциальная опасность';
      break;
    default:
      markerColor = '';
  }

  const [, setPopupVisible] = useState(false);

  const [selectedId, setSelectedId] = useState(null);

  const handleMarkerClick = () => {
    onClick();
    setPopupVisible(!isActive);
  };

  const normalizeDate = (date) => {
    const normalizeValue = (value) => value.toString().padStart(2, '0');

    const formattedTime = `${normalizeValue(date.getHours())}:${normalizeValue(
      date.getMinutes(),
    )}:${normalizeValue(date.getSeconds())}`;

    const formattedDate = `${normalizeValue(date.getDate())}.${normalizeValue(
      date.getMonth(),
    )}.${date.getFullYear()}`;

    return `${formattedDate}, ${formattedTime}`;
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
            <div className="my-marker__animation absolute top-0 left-0 w-[3em] h-[3em] rounded-full scale-[0.3]  my-marker__animation-delay" />
          </div>
        )}
      </div>
      <AnimatePresence>
        {selectedId && isActive && (
          <motion.div
            initial={{ scale: 0.54, translate: '-50% 0.5rem' }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            exit={{ scale: 0.54, opacity: 0 }}
            transition={spring}
            className="fixed w-[96vw] lg:w-[60vw] xl2:w-[60rem] rounded-3xl origin-top aspect-video bg-default-50 dark:bg-default-50 z-20 border-1 border-black/20 dark:border-white/20 shadow-2xl shadow-black/60 cursor-pointer"
            onClick={() => setSelectedId(null)}
          >
            {/* <Image
              src={item.image}
              fill
              alt={item.type}
              loading={isActive ? 'eager' : 'lazy'}
              style={{ borderRadius: 'inherit' }}
            /> */}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ scale: 0.5, translate: '-50% 0.5rem' }}
            whileHover={{ scale: 1.02 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0 }}
            transition={spring}
            className={`w-[20rem] lg:w-[26rem] absolute rounded-[2rem] bg-white dark:bg-black shadow-2xl shadow-black/60 first-line:dark:shadow-black/80  lg:-translate-x-52 origin-top z-10 border-1 cursor-pointer border-black/20 dark:border-white/20 overflow-hidden ${popupBorder}`}
          >
            <div className="w-full h-min flex flex-col">
              <button
                type="button"
                aria-label="Open Image"
                onClick={() => setSelectedId(item.id)}
                className="w-full aspect-video bg-default-50 dark:bg-default-50"
              >
                {/* <Image
                  src={item.image}
                  width={414}
                  height={233}
                  loading={isActive ? 'eager' : 'lazy'}
                  alt={item.type}
                /> */}
              </button>
              <div className="w-full h-min flex flex-col gap-3 p-5 cursor-auto">
                <Text tag="h2" classNames="select-all" text={item.type} />
                <Chip
                  color={chipType}
                  radius="md"
                  variant="flat"
                  classNames={{ content: 'text-[13px] cursor-default' }}
                >
                  {chipContent}
                </Chip>
                <div className="py-2 w-full h-min flex flex-col gap-3">
                  <div className="w-full h-min flex flex-row gap-2 opacity-70 items-center">
                    <PiClockBold size={16} className="flex-shrink-0" />
                    <Text
                      tag="h5"
                      classNames="select-all"
                      text={normalizeDate(new Date(item.date))}
                    />
                  </div>
                  <div className="w-full h-min flex flex-row gap-2 opacity-70 items-center">
                    <PiMapPinBold size={16} className="flex-shrink-0" />
                    <Text
                      tag="h5"
                      classNames="select-all"
                      text={item.address}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="close"
                  onClick={handleMarkerClick}
                  className="w-full h-min flex flex-row bg-black/10 dark:bg-white/10 p-4 rounded-[20px] gap-4 opacity-50 items-center"
                >
                  <PiQuestionBold size={16} className="flex-shrink-0" />
                  <Text
                    classNames="font-medium"
                    text="Нажмите на изображение, чтобы его увеличить."
                  />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </YMapMarker>
  );
}

export default MyMarkerWithPopup;
