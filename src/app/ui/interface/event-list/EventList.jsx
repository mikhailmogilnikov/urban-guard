import { ScrollShadow } from '@nextui-org/scroll-shadow';
import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import EventItem from './EventItem.jsx';
import Text from '../../primitives/Text.jsx';
import { useStore } from '@/store/store.js';

const todayDate = new Date(Date.now());

const EventList = observer(() => {
  const { eventsStore } = useStore();
  const eventsData = JSON.parse(JSON.stringify(eventsStore.events));

  const groupedEvents = _.groupBy(eventsData, (currEvent) => {
    const date = new Date(currEvent.date);

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
      const timeA = new Date(eventA.date);
      const timeB = new Date(eventB.date);
      return timeB - timeA;
    });
  });

  function getFormattedDateTime(date, category) {
    const formattedTime = `${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`;

    if (category === 'today' || category === 'yesterday') {
      return formattedTime;
    }

    const formattedDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;

    return `${formattedDate}, ${formattedTime}`;
  }

  return (
    <ScrollShadow className="w-full h-full flex flex-col overflow-y-scroll overflow-x-hidden gap-10 p-5 md:pr-4">
      {Object.keys(groupedEvents).map(
        (category) => groupedEvents[category].length > 0 && (
        <div key={category} className="w-full flex flex-col gap-4">
          <Text tag="h4" text={getCategoryText(category)} />
          {groupedEvents[category].map((event) => (
            <EventItem
              key={event.id}
              state={event.state}
              type={event.type}
              address={event.address}
              date={event.date}
              formattedDateTime={getFormattedDateTime(
                new Date(event.date),
                category,
              )}
            />
          ))}
        </div>
        ),
      )}
    </ScrollShadow>
  );
});

export default EventList;
