import { useEffect } from 'react';
import { StoreContext, useStore } from '@/store/store';
import testEvents from '@/testEvents/testEvents';

export default function StoreProvider({ children }) {
  const store = useStore();

  useEffect(() => {
    store.eventsStore.setEvents(testEvents);
  }, []);

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
}
