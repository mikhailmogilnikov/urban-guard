'use client';

import { ScrollShadow } from '@nextui-org/scroll-shadow';
import _ from 'lodash';
import testEvents from '@/testEvents/testEvents.js';
import ThemeSwitcher from '../menu/ThemeSwitcher.jsx';
import EventItem from './EventItem.jsx';
import Text from '../../primitives/Text.jsx';

// const todayDate = new Date(Date.now());
const todayDate = new Date('2023-11-20T21:10:12');

function EventList() {
  const groupedEvents = _.groupBy(testEvents, (currEvent) => {
    const dateStr = currEvent.date.split('-');
    const [day, month, year] = dateStr;
    const timeStr = currEvent.time.split(':');
    const [hour, minute, second] = timeStr;
    const date = new Date(year, month - 1, day, hour, minute, second);

    if (
      todayDate.getFullYear() !== date.getFullYear()
      || todayDate.getMonth() !== date.getMonth()
    ) {
      return 'other';
    }
    if (todayDate.getDate() === date.getDate()) {
      return 'today';
    }
    if (todayDate.getDate() - date.getDate() === 1) {
      return 'yesterday';
    }
    if (todayDate.getDate() - date.getDate() < 7) {
      return 'week';
    }
    return 'month';
  });

  function getCategoryText(category) {
    switch (category) {
      case 'today':
        return 'Сегодня';
      case 'yesterday':
        return 'Вчера';
      case 'week':
        return 'На этой неделе';
      case 'month':
        return 'В этом месяце';
      case 'other':
        return 'Ранее';
      default:
        return '';
    }
  }

  Object.keys(groupedEvents).forEach((category) => {
    groupedEvents[category].sort((eventA, eventB) => {
      const timeA = new Date(`${eventA.date.split('-').reverse().join('-')} ${eventA.time}`);
      const timeB = new Date(`${eventB.date.split('-').reverse().join('-')} ${eventB.time}`);
      return timeB - timeA;
    });
  });

  function getFormattedDateTime(date, time, category) {
    if (category === 'today' || category === 'yesterday') {
      return time;
    }

    const [day, month, year] = date.split('-');
    const [hour, minute, second] = time.split(':');

    const formattedDate = `${day}.${month}.${year}`;
    const formattedTime = `${hour}:${minute}:${second}`;

    return `${formattedDate}, ${formattedTime}`;
  }

  return (
    <ScrollShadow className="w-full h-full hidden lg:flex flex-col gap-10 overflow-y-scroll p-5 md:pr-4">
      {Object.keys(groupedEvents).map(
        (category) => groupedEvents[category].length > 0 && (
        <div className="w-full flex flex-col gap-4">
          <Text tag="h4" text={getCategoryText(category)} />
          {groupedEvents[category].map((event) => (
            <EventItem
              key={event.id}
              state={event.state}
              type={event.type}
              address={event.address}
              date={event.date}
              time={event.time}
              formattedDateTime={getFormattedDateTime(
                event.date,
                event.time,
                category,
              )}
            />
          ))}
        </div>
        ),
      )}
      <ThemeSwitcher />
    </ScrollShadow>
  );
}

export default EventList;
