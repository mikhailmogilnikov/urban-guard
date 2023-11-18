import Text from '../primitives/Text.jsx';

const EventItem = ({ state, type, date, time }) => {
  return (
    <button className="w-full h-20 px-6 flex flex-row gap-5 items-center rounded-[30px] border border-black/20 dark:border-white/20 hover:button-hover dark:hover:button-hover-dark active:scale-95 transition-transform">
      <div
        className={`${
          state === 'confirmed'
            ? 'bg-red-500 shadow-red animate-pulse'
            : 'bg-yellow-500 shadow-yellow'
        } w-2 h-2 rounded-full `}
      ></div>
      <div className="flex flex-col gap-1 items-start">
        <Text tag={'h4'} text={type} />
        <Text classNames="opacity-50" text={time} />
      </div>
    </button>
  );
};

export default EventItem;
