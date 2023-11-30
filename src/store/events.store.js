import { makeAutoObservable } from 'mobx';

const eventsStore = makeAutoObservable({
  events: null,
  setEvents(events) {
    this.events = events;
  },
});

export default eventsStore;
