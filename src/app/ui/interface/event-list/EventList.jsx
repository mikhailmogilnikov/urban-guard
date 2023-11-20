import { ScrollShadow } from '@nextui-org/scroll-shadow';
import testEvents from '@/testEvents/testEvents.js';
import ThemeSwitcher from '../menu/ThemeSwitcher.jsx';
import EventItem from './EventItem.jsx';

function EventList() {
  return (
    <ScrollShadow className="w-full h-full hidden lg:flex flex-col gap-4 overflow-y-scroll p-5 md:pr-4">
      {testEvents.map((event) => (
        <EventItem
          key={event.id}
          state={event.state}
          type={event.type}
          address={event.address}
          date={event.date}
          time={event.time}
        />
      ))}
      <ThemeSwitcher />
    </ScrollShadow>
  );
}

export default EventList;
