import { useEffect } from 'react';

import { StoreContext, useStore } from '@/store/store';
import { axiosInstance } from '@/utility/http';
import { postDataTransformer } from '@/utility/httpConv';

export default function StoreProvider({ children }) {
  const store = useStore();

  useEffect(() => {
    axiosInstance
      .get('/api/events')
      .then((response) => {
        const eventsData = response.data.events ? response.data.events : [];
        const transformEventsData = postDataTransformer(eventsData);
        setTimeout(() => {
          store.eventsStore.setEvents(transformEventsData);
        }, 5000);
      })
      .catch((e) => {
        console.error('Error fetching posts:', e);
      });
  }, []);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
