import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import { useStore } from '@/store/store.js';

const ListPreloader = observer(() => {
  const { eventsStore } = useStore();

  const isLoaded = eventsStore.events === null;

  return (
    isLoaded && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-full flex flex-col gap-10"
      >
        <div className="w-full flex flex-col gap-4 ">
          <div className="w-24 h-6 rounded-xl bg-black dark:bg-white animate-preloaderPulse" />
          <div
            className="w-full h-24 rounded-[34px] bg-black dark:bg-white animate-preloaderPulse"
          />
          <div
            className="w-full h-24 rounded-[34px] bg-black dark:bg-white animate-preloaderPulse"
            style={{ animationDelay: '200ms' }}
          />
          <div
            className="w-full h-24 rounded-[34px] bg-black dark:bg-white animate-preloaderPulse"
            style={{ animationDelay: '400ms' }}
          />
          <div
            className="w-full h-24 rounded-[34px] bg-black dark:bg-white animate-preloaderPulse"
            style={{ animationDelay: '600ms' }}
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <div
            className="w-24 h-6 rounded-xl bg-black dark:bg-white animate-preloaderPulse"
            style={{ animationDelay: '800ms' }}
          />
          <div
            className="w-full h-24 rounded-[34px] bg-black dark:bg-white animate-preloaderPulse delay-200"
            style={{ animationDelay: '800ms' }}
          />
          <div
            className="w-full h-24 rounded-[34px] bg-black dark:bg-white animate-preloaderPulse delay-200"
            style={{ animationDelay: '1000ms' }}
          />
          <div
            className="w-full h-24 rounded-[34px] bg-black dark:bg-white animate-preloaderPulse delay-200"
            style={{ animationDelay: '1200ms' }}
          />
          <div
            className="w-full h-24 rounded-[34px] bg-black dark:bg-white animate-preloaderPulse delay-200"
            style={{ animationDelay: '1400ms' }}
          />
          <div
            className="w-full h-24 rounded-[34px] bg-black dark:bg-white animate-preloaderPulse delay-200"
            style={{ animationDelay: '1600ms' }}
          />
        </div>
      </motion.div>
    )
  );
});

export default ListPreloader;
