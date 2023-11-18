import testEvents from '@/testEvents/testEvents.js';
import EventItem from './EventItem.jsx';
import { ThemeSwitcher } from '../primitives/ThemeSwitcher.jsx'

const currDay = new Date('29.11.2023');

const EventList = () => {
  return (
    <aside className="w-full h-min hidden lg:flex flex-col gap-4 p-5 overflow-y-scroll">
      {testEvents.reverse().map((event) => (
        <EventItem
          key={event.id}
          state={event.state}
          type={event.type}
          date={event.date}
          time={event.time}
        />
      ))}
      <ThemeSwitcher />
    </aside>
  );
};

export default EventList;
