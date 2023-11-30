import { useEffect } from 'react';
import io from 'socket.io-client';

import { StoreContext, useStore } from '@/store/store';
import { axiosInstance } from '@/utility/http';
import { postDataTransformer } from '@/utility/httpConv';

export default function StoreProvider({ children }) {
  const store = useStore();

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_SERVER_API);

    socket.on('connect', () => {
      console.log('connect');
      socket.on('add_event', (socketEvent) => {
        const socketEventData = postDataTransformer([socketEvent])[0];
        store.eventsStore.setEvents([...store.eventsStore.events, socketEventData]);
      });

      socket.on('delete_event', (eventId) => {
        console.log('delete_event');
        const sup = [...store.eventsStore.events].filter((item) => item.id !== eventId);
        store.eventsStore.setEvents(sup);
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    axiosInstance
      .get('/api/events')
      .then((response) => {
        const eventsData = response.data.events ? response.data.events : [];
        const transformEventsData = postDataTransformer(eventsData);
        store.eventsStore.setEvents(transformEventsData);
      })
      .catch((e) => {
        console.error('Error fetching posts:', e);
      });
  }, []);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
