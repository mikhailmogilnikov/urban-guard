const EventItem = ({ state, type, date, time }) => {
  return (
    <button className="w-full h-20 px-6 flex flex-row gap-5 items-center rounded-[30px] border border-black/10 dark:border-white/10 hover:button-hover dark:hover:button-hover-dark active:scale-95 transition-transform">
      <div
        className={`${
          state === 'confirmed'
            ? 'bg-red-500 shadow-red animate-pulse'
            : 'bg-yellow-500 shadow-yellow'
        } w-2 h-2 rounded-full `}
      ></div>
      <div className="flex flex-col gap-1 items-start">
        <h4 className='font-semibold'>{type}</h4>
				<p className='text-xs opacity-50'>{time}</p>
      </div>
    </button>
  );
};

export default EventItem;
