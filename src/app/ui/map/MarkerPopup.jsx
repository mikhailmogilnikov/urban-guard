import { Skeleton } from '@nextui-org/skeleton';
import { Chip } from '@nextui-org/chip';
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover';
import { Button } from '@nextui-org/button';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image.js';
import {
  PiX,
  PiClockBold,
  PiMapPinBold,
  PiQuestionBold,
  PiQuestion,
} from 'react-icons/pi';
import Text from '../primitives/Text.jsx';

function MarkerPopup({
  isActive,
  spring,
  file,
  item,
  state,
  openImageViewer,
  closePopup,
}) {
  let popupBorder;
  let chipType;
  let chipContent;
  let textPopoverHead;
  let textPopoverBody;

  switch (state) {
    case 1:
      popupBorder = 'dark:animate-borderPulseRed';
      chipType = 'danger';
      chipContent = 'Подтверждённая угроза';
      textPopoverHead = 'Существование угрозы подтверждено человеком';
      textPopoverBody = 'Рекомендуется избегать ближайшие окресности и выбирать альтернативные пути маршрута.';
      break;
    case 0:
      popupBorder = 'dark:animate-borderPulseYellow';
      chipType = 'warning';
      chipContent = 'Потенциальная опасность';
      textPopoverHead = 'Нейросеть обнаружила опасность на этом кадре';
      textPopoverBody = 'Рекомендуется оценить изображение самостоятельно и сделать выводы о целесообразности посещения.';
      break;
    default:
      throw new Error('Ошибка: неизвестное состояние');
  }

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
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ scale: 0.5, translate: '-50% 0.5rem' }}
          // whileHover={{ scale: 1.02 }}
          animate={{ scale: 1 }}
          exit={{ opacity: 0 }}
          transition={spring}
          className={`w-[20rem] lg:w-[26rem] absolute rounded-[2rem] bg-white dark:bg-black shadow-2xl shadow-black/60 first-line:dark:shadow-black/80  lg:-translate-x-52 origin-top z-10 border-1 cursor-pointer border-black/20 dark:border-white/20 overflow-hidden ${popupBorder}`}
        >
          <div className="w-full h-min flex flex-col">
            <button
              type="button"
              aria-label="Open Image"
              onClick={openImageViewer}
              className="w-full aspect-[16/10] bg-default-50 dark:bg-default-50"
            >
              <Button
                radius="full"
                variant="flat"
                isIconOnly
                onClick={closePopup}
                className="absolute w-9 min-w-9 h-9 top-4 bg-white/50 dark:bg-black/70 backdrop-blur-lg right-4 z-10"
              >
                <PiX size={20} className="flex-shrink-0 opacity-50" />
              </Button>
              {!file ? (
                <Skeleton className="w-full h-full rounded-[inherit]" />
              ) : (
                <Image
                  src={file.src}
                  width={414}
                  height={233}
                  loading={isActive ? 'eager' : 'lazy'}
                  alt={item.type}
                  style={{
                    objectFit: 'cover',
                    height: 'auto',
                    aspectRatio: '16/10',
                  }}
                />
              )}
            </button>
            <div className="w-full h-min flex flex-col gap-3 p-5 cursor-auto">
              <Text tag="h2" classNames="select-all" text={item.type} />

              <div className="w-full flex flex-row gap-4">
                <Chip
                  color={chipType}
                  radius="md"
                  variant="flat"
                  classNames={{ content: 'text-[13px] cursor-default' }}
                >
                  {chipContent}
                </Chip>

                <Popover placement="bottom" backdrop="blur">
                  <PopoverTrigger>
                    <Button
                      radius="full"
                      variant="flat"
                      isIconOnly
                      className="h-7 min-w-7 w-7"
                    >
                      <PiQuestion
                        size={20}
                        className="flex-shrink-0 opacity-50"
                      />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2 w-64">
                      <Text tag="h4" text={textPopoverHead} />
                      <Text
                        classNames="pt-2 text-xs opacity-80"
                        text={textPopoverBody}
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

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
                  <Text tag="h5" classNames="select-all" text={item.address} />
                </div>
              </div>
              <button
                type="button"
                aria-label="close"
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
  );
}

export default MarkerPopup;
