import { AnimatePresence, motion } from 'framer-motion';
import EventList from './EventList.jsx';

function MobileEventList({ isMobileEventListOpen }) {
  return (
    <AnimatePresence>
      {isMobileEventListOpen && (
        <motion.div
          initial={{ transform: 'translateY(-100%)' }}
          animate={{ transform: 'translateY(4rem)' }}
          exit={{ transform: 'translateY(-100%)' }}
          transition={{ ease: 'easeIn', duration: 0.3 }}
          className="absolute lg:hidden w-screen h-[calc(100dvh-4rem)] top-0 left-0 bg-white dark:bg-black -z-10"
        >
          <EventList />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileEventList;
