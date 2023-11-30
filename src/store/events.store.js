import { makeAutoObservable } from 'mobx';

const eventsStore = makeAutoObservable({
  events: null,
  files: [],
  setEvents(events) {
    this.events = events;
  },
  setFiles(files) {
    this.files = files;
  },
});

export default eventsStore;
