import Header from './ui/Header.jsx'
import EventList from './ui/event-list/EventList.jsx'

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-[100dvh]">
      <div className="flex flex-col lg:w-[30rem] lg:border-r border-black/10 dark:border-white/10">
        <Header />
        <EventList />
      </div>
      <div className="w-full h-full"></div>
    </div>
  );
}
