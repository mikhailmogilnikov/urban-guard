import testEvents from '@/testEvents/testEvents.js';
import ThemeSwitcher from '../menu/ThemeSwitcher.jsx';
import EventItem from './EventItem.jsx';

function EventList() {
  return (
    <aside className="w-full h-min flex flex-col gap-4 p-5 overflow-y-scroll">
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
}

export default EventList;
