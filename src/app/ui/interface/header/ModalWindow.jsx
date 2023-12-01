import { AnimatePresence, motion } from 'framer-motion';
import EventList from '../event-list/EventList.jsx';
import MenuList from '../menu/MenuList.jsx';

function ModalWindow({ isMobileEventListOpen, isMobileMenuListOpen, moveCamera }) {
  let listStyles = 'lg:w-[383px]';
  if (isMobileEventListOpen) {
    listStyles = 'lg:hidden';
  }
  return (
    <AnimatePresence>
      {(isMobileEventListOpen || isMobileMenuListOpen) && (
        <motion.div
          initial={{ transform: 'translateY(-100%)', opacity: 0 }}
          animate={{ transform: 'translateY(0rem)', opacity: 1 }}
          exit={{ transform: 'translateY(-100%)', opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 17,
          }}
          className={`absolute ${listStyles} overflow-hidden w-screen h-[100dvh] pt-16 top-0 left-0 bg-white dark:bg-black -z-10`}
        >
          {isMobileEventListOpen && <EventList moveCamera={moveCamera} />}
          {isMobileMenuListOpen && <MenuList />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ModalWindow;
