/* eslint-disable implicit-arrow-linebreak */
import { ScrollShadow } from '@nextui-org/scroll-shadow';
import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store/store.js';
import Text from '../../primitives/Text.jsx';
import EventItem from './EventItem.jsx';
import ListPreloader from '../../preloaders/ListPreloader.jsx';

const todayDate = new Date();

const EventList = observer(({ moveCamera }) => {
  const { eventsStore } = useStore();

  function isSameDay(date1, date2) {
    return (
      date1.getFullYear() === date2.getFullYear()
      && date1.getMonth() === date2.getMonth()
      && date1.getDate() === date2.getDate()
    );
  }

  function isYesterday(date1, date2) {
    const yesterday = new Date(todayDate);
    yesterday.setDate(todayDate.getDate() - 1);
    return isSameDay(yesterday, date2);
  }

  function isSameWeek(date1, date2) {
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const diffInMilliseconds = date1 - date2;
    return Math.floor(diffInMilliseconds / millisecondsInDay) < 7;
  }

  function isSameMonth(date1, date2) {
    return (
      date1.getFullYear() === date2.getFullYear()
      && date1.getMonth() === date2.getMonth()
    );
  }

  const groupedEvents = _.groupBy(eventsStore.events || [], (currEvent) => {
    const eventDate = new Date(currEvent.date);

    if (isSameDay(todayDate, eventDate)) {
      return 'today';
    }

    if (isYesterday(todayDate, eventDate)) {
      return 'yesterday';
    }

    if (isSameWeek(todayDate, eventDate)) {
      return 'week';
    }

    if (isSameMonth(todayDate, eventDate)) {
      return 'month';
    }

    return 'other';
  });

  function getCategoryText(category) {
    switch (category) {
      case 'today':
        return 'Сегодня';
      case 'yesterday':
        return 'Вчера';
      case 'week':
        return 'За последние 7 дней';
      case 'month':
        return 'В этом месяце';
      case 'other':
        return 'Ранее';
      default:
        throw new Error('Undefined timestamp');
    }
  }

  function getFormattedDateTime(date, category) {
    const normalizeValue = (value) => value.toString().padStart(2, '0');

    const formattedTime = `${normalizeValue(date.getHours())}:${normalizeValue(
      date.getMinutes(),
    )}:${normalizeValue(date.getSeconds())}`;

    if (category === 'today' || category === 'yesterday') {
      return formattedTime;
    }

    const formattedDate = `${normalizeValue(date.getDate())}.${normalizeValue(
      date.getMonth() + 1,
    )}.${date.getFullYear()}`;

    return `${formattedDate}, ${formattedTime}`;
  }

  const categoryOrder = ['today', 'yesterday', 'week', 'month', 'other'];

  const sortCategories = (categoryA, categoryB) =>
    categoryOrder.indexOf(categoryA) - categoryOrder.indexOf(categoryB);

  const categories = Object.keys(groupedEvents).sort(sortCategories);

  // sort events by time in each category
  categories.forEach((category) => {
    groupedEvents[category].sort((eventA, eventB) => {
      const timeA = new Date(eventA.date);
      const timeB = new Date(eventB.date);
      return timeB - timeA;
    });
  });

  return (
    <ScrollShadow className="w-full h-full flex flex-col overflow-y-scroll overflow-x-hidden gap-10 p-5">
      <ListPreloader />
      {categories.map(
        (category) =>
          groupedEvents[category].length > 0 && (
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
                  click={() => moveCamera(event.coordinates, event.id)}
                />
              ))}
            </div>
          ),
      )}
    </ScrollShadow>
  );
});

export default EventList;
