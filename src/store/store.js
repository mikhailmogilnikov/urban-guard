import { createContext, useContext } from 'react';
import eventsStore from '@/store/events.store';

const store = {
  eventsStore,
};

export const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);

export default store;
