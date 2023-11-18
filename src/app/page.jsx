import Map from './ui/map/YMap.jsx';
import EventList from './ui/interface/event-list/EventList.jsx';
import Header from './ui/interface/header/Header.jsx';

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-[100dvh]">
      <div className="flex flex-col lg:w-[30rem] lg:border-r border-black/20 dark:border-white/20">
        <Header />
        <EventList />
      </div>
      <Map />
    </div>
  );
}
