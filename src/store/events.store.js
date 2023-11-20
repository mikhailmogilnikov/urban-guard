import { makeAutoObservable } from 'mobx';

const eventsStore = makeAutoObservable({
  events: [],
  setEvents(events) {
    this.events = events;
  },
});

export default eventsStore;
