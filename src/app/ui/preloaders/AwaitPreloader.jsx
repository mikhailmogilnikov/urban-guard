import { AnimatePresence, motion } from 'framer-motion';
import { Spinner } from '@nextui-org/spinner';
import { observer } from 'mobx-react-lite';
import Text from '../primitives/Text.jsx';
import { useStore } from '@/store/store.js';

const AwaitPreloader = observer(() => {
  const { eventsStore } = useStore();

  const isLoaded = eventsStore.events === null;

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          initial={{ translateY: '200px' }}
          animate={{ translateY: '-60px' }}
          exit={{ translateY: '200px' }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 16,
          }}
          className="absolute bottom-1 w-48 h-10 rounded-2xl bg-[#ff4015] bg-opacity-80 backdrop-blur-md shadow-lg shadow-orange-500/30"
        >
          <div className="w-full h-full flex flex-row gap-2 items-center text-center justify-center">
            <Spinner color="white" size="sm" />
            <Text
              tag="h5"
              classNames="text-white"
              text="Получение событий"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default AwaitPreloader;
