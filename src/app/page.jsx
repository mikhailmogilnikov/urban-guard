import Map from './ui/map/YMap.jsx';
import EventList from './ui/interface/event-list/EventList.jsx';
import Header from './ui/interface/header/Header.jsx';

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-[100dvh]">
      <div className="h-full max-h-16 lg:max-h-full flex flex-col flex-shrink-0 w-full lg:w-[24rem] lg:border-r border-black/20 dark:border-white/20">
        <Header />
        <div className="w-full h-full hidden lg:flex overflow-y-scroll">
          <EventList />
        </div>
      </div>
      <Map />
    </div>
  );
}
