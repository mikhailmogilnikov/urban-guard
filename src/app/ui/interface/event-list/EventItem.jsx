'use client';

import { motion } from 'framer-motion';
import Text from '../../primitives/Text.jsx';

function EventItem({
  state, type, address, formattedDateTime, click,
}) {
  let markerColor;

  const area = address.split(',')[0].trim();

  switch (state) {
    case 0:
      markerColor = 'bg-yellow-400 dark:bg-yellow-300 shadow-yellow';
      break;
    case 1:
      markerColor = 'bg-red-600 dark:bg-red-500 shadow-red dark:shadow-red-dark animate-pulse';
      break;
    default:
      markerColor = 'bg-default-300';
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      onClick={click}
      className="w-full h-24 px-6 flex flex-row flex-shrink-0 gap-5 items-center rounded-[34px] border border-black/20 dark:border-white/20"
    >
      <div
        className={`${markerColor} w-2 h-2 rounded-full`}
      />
      <div className="flex flex-col gap-1 items-start text-left">
        <Text tag="h4" text={type} />
        <Text classNames="opacity-50" text={area} />
        <Text classNames="opacity-50" text={formattedDateTime} />
      </div>
    </motion.button>
  );
}

export default EventItem;
