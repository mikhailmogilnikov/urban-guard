import { Skeleton } from '@nextui-org/skeleton';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image.js';
import { Button } from '@nextui-org/button';
import { PiX } from 'react-icons/pi';

function ImageViewer({
  selectedId,
  isActive,
  spring,
  file,
  itemType,
  closeImageViewer,
}) {
  return (
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
          onClick={closeImageViewer}
        >
          <Button
            radius="full"
            variant="flat"
            isIconOnly
            onClick={closeImageViewer}
            className="absolute w-9 min-w-9 h-9 top-4 bg-white/50 dark:bg-black/70 backdrop-blur-lg right-4 z-10"
          >
            <PiX size={20} className="flex-shrink-0 opacity-50" />
          </Button>
          {!file ? (
            <Skeleton className="w-full aspect-video rounded-[inherit]" />
          ) : (
            <Image
              src={file.src}
              fill
              alt={itemType}
              loading={isActive ? 'eager' : 'lazy'}
              style={{
                borderRadius: 'inherit',
                objectFit: 'cover',
                aspectRatio: '16/9',
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ImageViewer;
